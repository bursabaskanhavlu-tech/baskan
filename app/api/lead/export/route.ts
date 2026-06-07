export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { exportSchema } from '@/lib/validations/lead.schema'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as unknown

    const parsed = exportSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

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
          subject: `İhracat Sorgulama — ${parsed.data.fullName} / ${parsed.data.country}`,
          text: JSON.stringify({ ...parsed.data, formType: 'export', timestamp: new Date().toISOString() }, null, 2),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bir hata oluştu.' }, { status: 500 })
  }
}
