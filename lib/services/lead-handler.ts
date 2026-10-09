import { NextResponse, type NextRequest } from 'next/server'
import type { z } from 'zod'
import { isHoneypotFilled } from '@/lib/utils/honeypot'
import { checkRateLimit } from '@/lib/utils/rate-limit'
import { sendLeadEmail } from '@/lib/services/email.service'

interface LeadHandlerOptions<S extends z.ZodType<Record<string, unknown>>> {
  name: string
  formType: string
  schema: S
  rateLimit: 'lead' | 'contact'
  subject: (data: z.infer<S>) => string
}

/**
 * Dört lead API rotasının (quote, sample, export, contact) ortak akışı:
 * rate limit → JSON → honeypot → Zod → e-posta. Daha önce her rotada ayrı
 * ayrı tekrarlanıyordu (AGENTS.md §26'da işaretlenen 3+ tekrar).
 */
export function createLeadHandler<S extends z.ZodType<Record<string, unknown>>>({
  name,
  formType,
  schema,
  rateLimit,
  subject,
}: LeadHandlerOptions<S>) {
  return async function POST(request: NextRequest) {
    try {
      const allowed = await checkRateLimit(request, rateLimit)
      if (!allowed) {
        return NextResponse.json(
          { error: 'Çok fazla istek gönderildi. Lütfen bir dakika sonra tekrar deneyin.' },
          { status: 429 }
        )
      }

      let body: unknown
      try {
        body = await request.json()
      } catch {
        return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 })
      }

      if (isHoneypotFilled(body)) {
        return NextResponse.json({ success: true }) // sessiz reddet
      }

      const parsed = schema.safeParse(body)
      if (!parsed.success) {
        return NextResponse.json(
          {
            error: 'Lütfen form alanlarını kontrol edin.',
            fields: parsed.error.flatten().fieldErrors,
          },
          { status: 400 }
        )
      }

      const data = parsed.data
      const email = typeof data['email'] === 'string' ? data['email'] : undefined
      const sent = await sendLeadEmail({
        subject: subject(data),
        replyTo: email,
        data: {
          ...data,
          formType,
          sourcePage: request.headers.get('referer') ?? '/',
          timestamp: new Date().toISOString(),
        },
      })

      if (!sent) {
        // Lead kaybolmasın: istemci WhatsApp yedeğini gösterir.
        return NextResponse.json(
          { error: 'Mesajınız şu an iletilemedi. Lütfen WhatsApp üzerinden yazın.' },
          { status: 502 }
        )
      }

      return NextResponse.json({ success: true })
    } catch (error) {
      console.error(`[api/${name}] Lead işlenemedi:`, error)
      return NextResponse.json(
        { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
        { status: 500 }
      )
    }
  }
}
