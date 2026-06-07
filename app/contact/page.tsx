'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import Link from 'next/link'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
    honeypot: '',
  })

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
        setForm({ fullName: '', company: '', email: '', phone: '', productType: '', quantity: '', message: '', honeypot: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
        { name: 'İletişim', url: 'https://baskanhavlu.com/contact' },
      ]} />
      <LocalBusinessSchema />

      {/* Başlık */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">İletişim</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">İletişime Geçin</h1>
          <p className="mt-3 text-lg" style={{ color: '#b3b3b3' }}>En geç 24 saatte yanıt veriyoruz</p>
        </div>
      </section>

      {/* Ana içerik */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Form — sol */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm" style={{ border: '1px solid #e0d4c0' }}>
                <h2 className="mb-6 text-xl font-bold" style={{ color: '#1a1a1a' }}>
                  Teklif veya Bilgi Alın
                </h2>

                {status === 'success' ? (
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
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Honeypot */}
                    <input type="text" name="honeypot" value={form.honeypot} onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))} className="hidden" tabIndex={-1} aria-hidden="true" />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Ad Soyad *</label>
                        <input id="fullName" required value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                          className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
                          style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Firma Adı</label>
                        <input id="company" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                          className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
                          style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>E-posta *</label>
                        <input id="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
                          style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Telefon *</label>
                        <input id="phone" type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
                          style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="productType" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Ürün Türü</label>
                      <select id="productType" value={form.productType} onChange={e => setForm(f => ({ ...f, productType: e.target.value }))}
                        className="h-12 rounded-md border px-3 text-sm outline-none transition-colors focus:border-[#e87722]"
                        style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}>
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
                      <label htmlFor="message" className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Mesaj</label>
                      <textarea id="message" rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="rounded-md border px-3 py-2 text-sm outline-none transition-colors focus:border-[#e87722]"
                        style={{ borderColor: '#e0d4c0', color: '#1a1a1a', minHeight: '120px' }} />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600">Bir hata oluştu. Lütfen WhatsApp ile bize yazın.</p>
                    )}

                    <button type="submit" disabled={status === 'loading'}
                      className="flex h-12 items-center justify-center rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{ backgroundColor: '#e87722' }}>
                      {status === 'loading' ? 'Gönderiliyor...' : 'Teklif Gönder'}
                    </button>

                    <p className="text-center text-xs" style={{ color: '#8a7050' }}>
                      🔒 Bilgileriniz güvendedir. Spam göndermiyoruz.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* İletişim bilgileri — sağ */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* WhatsApp kart */}
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-6 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25d366' }}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp ile Yazın</p>
                  <p className="text-sm text-white/80">Ortalama yanıt: 5 dakika</p>
                </div>
              </a>

              {/* NAP bilgileri */}
              <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #e0d4c0' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#1a1a1a' }}>İletişim Bilgileri</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: '#5c5c5c' }}>{SITE_CONFIG.address.fullDisplay}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="text-sm hover:underline" style={{ color: '#5c5c5c' }}>
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm hover:underline" style={{ color: '#5c5c5c' }}>
                      {SITE_CONFIG.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: '#5c5c5c' }}>Pzt–Cum 09:00–18:00, Cmt 09:00–14:00</span>
                  </li>
                </ul>

                <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-5 block text-center text-sm underline underline-offset-4 transition-colors hover:opacity-70"
                  style={{ color: '#e87722' }}>
                  Haritada Görüntüle →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
