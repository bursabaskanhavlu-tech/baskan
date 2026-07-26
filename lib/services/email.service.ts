interface SendLeadEmailParams {
  subject: string
  data: Record<string, unknown>
}

/**
 * Resend REST API'ye lead bildirimi gönderir.
 * RESEND_API_KEY tanımlı değilse sessizce false döner — form akışı kesilmez.
 */
export async function sendLeadEmail({ subject, data }: SendLeadEmailParams): Promise<boolean> {
  const resendKey = process.env['RESEND_API_KEY']
  if (!resendKey) return false

  const emailTo = process.env['EMAIL_TO_SALES'] ?? 'tekstil@baskanhavlu.com'
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env['EMAIL_FROM'] ?? 'no-reply@baskanhavlu.com',
        to: emailTo,
        subject,
        text: JSON.stringify(data, null, 2),
      }),
      signal: controller.signal,
    })
    return res.ok
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}
