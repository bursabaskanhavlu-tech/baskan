'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config/site'

type FormState = {
  fullName: string
  company: string
  email: string
  phone: string
  productType: string
  quantity: string
  message: string
  honeypot: string
}

const initialForm: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  productType: '',
  quantity: '',
  message: '',
  honeypot: '',
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<FormState>(initialForm)

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'form_submit', {
            form_type: 'quote',
            source_page: window.location.pathname,
          })
        }
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl p-6 text-center" style={{ backgroundColor: '#f0fdf4' }}>
        <p className="text-lg font-semibold text-green-700">Mesajınız iletildi!</p>
        <p className="mt-2 text-sm text-green-600">En kısa sürede size geri döneceğiz.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm underline"
          style={{ color: '#e87722' }}
        >
          Yeni mesaj gönder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — spam koruması */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange('honeypot')}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
            Ad Soyad *
          </label>
          <input
            id="fullName"
            required
            value={form.fullName}
            onChange={handleChange('fullName')}
            className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
            style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
            Firma Adı
          </label>
          <input
            id="company"
            value={form.company}
            onChange={handleChange('company')}
            className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
            style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
            E-posta *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange('email')}
            className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
            style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange('phone')}
            className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
            style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="productType" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
          Ürün Türü
        </label>
        <select
          id="productType"
          value={form.productType}
          onChange={handleChange('productType')}
          className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
          style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
        >
          <option value="">Seçiniz</option>
          <option>El Havlusu</option>
          <option>Yüz Havlusu</option>
          <option>Banyo Havlusu</option>
          <option>Kafa / Saç Havlusu</option>
          <option>Promosyon Havlu</option>
          <option>Bornoz</option>
          <option>Diğer</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
          Mesaj
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange('message')}
          className="rounded-md border px-3 py-2 text-sm outline-none transition-colors focus:border-[#e87722]"
          style={{ borderColor: '#e0d4c0', color: '#1a1a1a', minHeight: '120px' }}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Bir hata oluştu. Lütfen{' '}
          <a
            href={`${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: '#25d366' }}
          >
            WhatsApp
          </a>{' '}
          ile bize yazın.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex h-12 items-center justify-center rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: '#e87722' }}
      >
        {status === 'loading' ? 'Gönderiliyor...' : 'Teklif Gönder'}
      </button>

      <p className="text-center text-xs" style={{ color: '#8a7050' }}>
        🔒 Bilgileriniz güvendedir. Spam göndermiyoruz.
      </p>
    </form>
  )
}
