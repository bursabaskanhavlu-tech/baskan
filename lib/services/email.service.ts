interface SendLeadEmailParams {
  subject: string
  data: Record<string, unknown>
  /** Müşterinin e-postası — satış ekibi "Yanıtla" ile doğrudan müşteriye yazabilsin. */
  replyTo?: string
}

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Ad Soyad',
  company: 'Firma',
  email: 'E-posta',
  phone: 'Telefon',
  productType: 'Ürün türü',
  quantity: 'Adet',
  message: 'Mesaj',
  product: 'Ürün',
  address: 'Adres',
  notes: 'Notlar',
  country: 'Ülke',
  capacity: 'Kapasite',
  paymentPreference: 'Ödeme tercihi',
  subject: 'Konu',
  formType: 'Form',
  sourcePage: 'Kaynak sayfa',
  timestamp: 'Zaman',
}

function formatLead(data: Record<string, unknown>): string {
  return Object.entries(data)
    .filter(([key, value]) => key !== 'honeypot' && value !== undefined && value !== '')
    .map(([key, value]) => `${FIELD_LABELS[key] ?? key}: ${String(value)}`)
    .join('\n')
}

/**
 * Resend REST API'ye lead bildirimi gönderir. Başarısızlık durumunda false
 * döner ve sunucu loguna yazar — çağıran taraf kullanıcıya bunu bildirir.
 */
export async function sendLeadEmail({
  subject,
  data,
  replyTo,
}: SendLeadEmailParams): Promise<boolean> {
  const resendKey = process.env['RESEND_API_KEY']
  if (!resendKey) {
    console.error('[email] RESEND_API_KEY tanımlı değil — lead e-postası gönderilemedi.')
    return false
  }

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
        text: formatLead(data),
        ...(replyTo && { reply_to: replyTo }),
      }),
      signal: controller.signal,
    })
    if (!res.ok) {
      console.error(`[email] Resend ${res.status} döndü — lead e-postası gönderilemedi.`)
    }
    return res.ok
  } catch (error) {
    console.error('[email] Resend isteği başarısız:', error)
    return false
  } finally {
    clearTimeout(timeout)
  }
}
