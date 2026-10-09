'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/config/site'
import { WhatsAppIcon } from '@/components/atoms/Icons'
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/utils/analytics'
import type { Locale } from '@/lib/i18n'

type FormState = {
  fullName: string
  company: string
  email: string
  phone: string
  productType: string
  quantity: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  productType: '',
  quantity: '',
  message: '',
}

const productOptions: Record<Locale, string[]> = {
  tr: [
    'El Havlusu',
    'Yüz Havlusu',
    'Banyo Havlusu',
    'Baş Havlusu',
    'Promosyon Havlu',
    'Bornoz',
    'Nevresim / Yatak Tekstili',
    'Diğer',
  ],
  en: [
    'Hand Towel',
    'Face Towel',
    'Bath Towel',
    'Head Towel',
    'Promotional Towel',
    'Bathrobe',
    'Bed Linen',
    'Other',
  ],
}

const copy = {
  tr: {
    fullName: 'Ad Soyad',
    company: 'Firma Adı',
    email: 'E-posta',
    phone: 'Telefon',
    productType: 'Ürün Türü',
    quantity: 'Adet / Miktar',
    message: 'Mesajınız',
    select: 'Seçiniz',
    optional: 'opsiyonel',
    submit: "WhatsApp'tan Teklif Gönder",
    note: 'Gönder dediğinizde bilgileriniz hazır bir mesaj olarak WhatsApp’ta açılır; tek dokunuşla iletebilirsiniz. Bilgileriniz sitede saklanmaz, yalnızca WhatsApp mesajıyla bize ulaşır.',
    errName: 'Lütfen adınızı ve soyadınızı yazın.',
    errPhone: 'Lütfen geçerli bir telefon numarası yazın.',
    errEmail: 'E-posta adresi geçerli görünmüyor.',
    sentTitle: 'Mesajınız hazır',
    sentText:
      'Bilgileriniz WhatsApp’ta hazır mesaj olarak açıldı; göndermeyi unutmayın. WhatsApp açılmadıysa aşağıdaki düğmeye dokunun.',
    reopen: "WhatsApp'ı Aç",
    newMessage: 'Yeni form doldur',
    waIntro: 'Merhaba, web sitesi üzerinden teklif almak istiyorum.',
  },
  en: {
    fullName: 'Full Name',
    company: 'Company',
    email: 'Email',
    phone: 'Phone',
    productType: 'Product Type',
    quantity: 'Quantity',
    message: 'Your message',
    select: 'Select',
    optional: 'optional',
    submit: 'Send Quote Request via WhatsApp',
    note: 'When you press send, your details open as a ready message in WhatsApp, so you can send it with one tap. Nothing is stored on this site; your details reach us only through your WhatsApp message.',
    errName: 'Please enter your full name.',
    errPhone: 'Please enter a valid phone number.',
    errEmail: 'This email address does not look valid.',
    sentTitle: 'Your message is ready',
    sentText:
      'Your details opened as a ready message in WhatsApp; don’t forget to send it. If WhatsApp did not open, tap the button below.',
    reopen: 'Open WhatsApp',
    newMessage: 'Fill in a new form',
    waIntro: 'Hello, I would like to request a quote via your website.',
  },
} as const

function validate(form: FormState, t: (typeof copy)[Locale]): FieldErrors {
  const errors: FieldErrors = {}
  if (form.fullName.trim().length < 2) errors.fullName = t.errName
  if (!/^[+()\d\s.-]{7,25}$/.test(form.phone.trim())) errors.phone = t.errPhone
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = t.errEmail
  return errors
}

function buildWhatsappMessage(form: FormState, locale: Locale): string {
  const t = copy[locale]
  const lines: string[] = [t.waIntro, '']
  const add = (label: string, value: string) => {
    if (value.trim()) lines.push(`${label}: ${value.trim()}`)
  }
  add(t.fullName, form.fullName)
  add(t.company, form.company)
  add(t.phone, form.phone)
  add(t.email, form.email)
  add(t.productType, form.productType)
  add(t.quantity, form.quantity)
  if (form.message.trim()) lines.push('', form.message.trim())
  return lines.join('\n')
}

interface ContactFormProps {
  locale?: Locale
}

export function ContactForm({ locale = 'tr' }: ContactFormProps) {
  const t = copy[locale]
  const pathname = usePathname()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value
      setForm((f) => ({ ...f, [field]: value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(form, t)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      if (first) document.getElementById(`cf-${first}`)?.focus()
      return
    }

    const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
      buildWhatsappMessage(form, locale)
    )}`

    trackFormSubmit('quote_whatsapp', pathname)
    trackWhatsAppClick('contact_form', pathname)

    // Kullanıcı etkileşimi içinde senkron açılır; açılır pencere engellenirse
    // aşağıdaki onay ekranındaki "WhatsApp'ı Aç" düğmesi aynı mesajı açar.
    const win = window.open(waUrl, '_blank')
    if (win) win.opener = null

    setSentUrl(waUrl)
    setForm(initialForm)
  }

  if (sentUrl) {
    return (
      <div role="status" className="border-t-2 border-whatsapp pt-8">
        <p className="font-display text-[2rem] leading-tight">{t.sentTitle}</p>
        <p className="mt-3 max-w-md leading-relaxed text-charcoal-600">{t.sentText}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
            {t.reopen}
          </a>
          <button type="button" onClick={() => setSentUrl(null)} className="btn btn-outline">
            {t.newMessage}
          </button>
        </div>
      </div>
    )
  }

  const field = (
    name: keyof FormState,
    label: string,
    opts: {
      type?: string
      required?: boolean
      autoComplete?: string
      inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    } = {}
  ) => (
    <div>
      <label htmlFor={`cf-${name}`} className="field-label">
        {label}
        {opts.required ? (
          <span aria-hidden="true" className="text-orange-600">
            {' '}
            *
          </span>
        ) : (
          <span className="text-charcoal-300"> ({t.optional})</span>
        )}
      </label>
      <input
        id={`cf-${name}`}
        name={name}
        type={opts.type ?? 'text'}
        required={opts.required}
        autoComplete={opts.autoComplete}
        inputMode={opts.inputMode}
        value={form[name]}
        onChange={update(name)}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
        className="field"
      />
      {errors[name] && (
        <p id={`cf-${name}-error`} className="mt-2 text-sm text-[#dc2626]">
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {field('fullName', t.fullName, { required: true, autoComplete: 'name' })}
      {field('company', t.company, { autoComplete: 'organization' })}
      {field('phone', t.phone, {
        type: 'tel',
        required: true,
        autoComplete: 'tel',
        inputMode: 'tel',
      })}
      {field('email', t.email, { type: 'email', autoComplete: 'email', inputMode: 'email' })}

      <div>
        <label htmlFor="cf-productType" className="field-label">
          {t.productType} <span className="text-charcoal-300">({t.optional})</span>
        </label>
        <select
          id="cf-productType"
          name="productType"
          value={form.productType}
          onChange={update('productType')}
          className="field"
        >
          <option value="">{t.select}</option>
          {productOptions[locale].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {field('quantity', t.quantity, { inputMode: 'text' })}

      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="field-label">
          {t.message} <span className="text-charcoal-300">({t.optional})</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          maxLength={2000}
          value={form.message}
          onChange={update('message')}
          className="field"
        />
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto sm:self-start">
          <WhatsAppIcon className="h-4 w-4" />
          {t.submit}
        </button>
        <p className="max-w-xl text-caption leading-relaxed text-charcoal-600">{t.note}</p>
      </div>
    </form>
  )
}
