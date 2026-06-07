export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { quoteSchema } from '@/lib/validations/lead.schema'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as unknown

    // Honeypot kontrolü
    if (
      body !== null &&
      typeof body === 'object' &&
      'honeypot' in body &&
      typeof (body as { honeypot: unknown }).honeypot === 'string' &&
      (body as { honeypot: string }).honeypot.length > 0
    ) {
      return NextResponse.json({ success: true }) // sessiz reddet
    }

    const parsed = quoteSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const lead = {
      ...parsed.data,
      formType: 'quote',
      sourcePage: request.headers.get('referer') ?? '/',
      timestamp: new Date().toISOString(),
    }

    // E-posta gönderimi (Resend - env hazır olduğunda aktif)
    const resendKey = process.env['RESEND_API_KEY']
    const emailTo = process.env['EMAIL_TO_SALES'] ?? 'tekstil@baskanhavlu.com'

    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env['EMAIL_FROM'] ?? 'no-reply@baskanhavlu.com',
          to: emailTo,
          subject: `Yeni Teklif Talebi — ${parsed.data.fullName}`,
          text: JSON.stringify(lead, null, 2),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 })
  }
}
