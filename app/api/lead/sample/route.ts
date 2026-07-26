export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { sampleSchema } from '@/lib/validations/lead.schema'
import { isHoneypotFilled } from '@/lib/utils/honeypot'
import { checkRateLimit } from '@/lib/utils/rate-limit'
import { sendLeadEmail } from '@/lib/services/email.service'

export async function POST(request: NextRequest) {
  try {
    const allowed = await checkRateLimit(request)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderildi. Lütfen bir dakika sonra tekrar deneyin.' },
        { status: 429 }
      )
    }

    const body = (await request.json()) as unknown

    if (isHoneypotFilled(body)) {
      return NextResponse.json({ success: true }) // sessiz reddet
    }

    const parsed = sampleSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    await sendLeadEmail({
      subject: `Yeni Numune Talebi — ${parsed.data.fullName}`,
      data: {
        ...parsed.data,
        formType: 'sample',
        sourcePage: request.headers.get('referer') ?? '/',
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 })
  }
}
