import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { ContactForm } from '@/components/organisms/ContactForm'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'İletişim | Başkan Havlu Tekstil',
  description:
    "Bursa Havlucular Çarşısı'ndan havlu ve bornoz için teklif alın. +90 507 342 06 61 — tekstil@baskanhavlu.com",
  path: '/contact',
})

export default function ContactPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'İletişim', url: 'https://baskanhavlu.com/contact' },
        ]}
      />
      <LocalBusinessSchema />

      {/* Başlık */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">İletişim</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">İletişime Geçin</h1>
          <p className="mt-3 text-lg" style={{ color: '#b3b3b3' }}>
            En geç 24 saatte yanıt veriyoruz
          </p>
        </div>
      </section>

      {/* Ana içerik */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form — sol */}
            <FadeIn className="lg:col-span-3">
              <div
                className="rounded-2xl bg-white p-8 shadow-sm"
                style={{ border: '1px solid #e0d4c0' }}
              >
                <h2 className="mb-6 text-xl font-bold" style={{ color: '#1a1a1a' }}>
                  Teklif veya Bilgi Alın
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* İletişim bilgileri — sağ */}
            <FadeIn delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
              {/* WhatsApp kart */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-6 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25d366' }}
                aria-label="WhatsApp ile iletişime geçin"
              >
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
                <h3 className="mb-4 font-semibold" style={{ color: '#1a1a1a' }}>
                  İletişim Bilgileri
                </h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: '#e87722' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: '#5c5c5c' }}>
                      {SITE_CONFIG.address.fullDisplay}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="h-4 w-4 shrink-0"
                      style={{ color: '#e87722' }}
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="text-sm hover:underline"
                      style={{ color: '#5c5c5c' }}
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail
                      className="h-4 w-4 shrink-0"
                      style={{ color: '#e87722' }}
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm hover:underline"
                      style={{ color: '#5c5c5c' }}
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock
                      className="h-4 w-4 shrink-0"
                      style={{ color: '#e87722' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: '#5c5c5c' }}>
                      Pzt–Cum 09:00–18:00, Cmt 09:00–14:00
                    </span>
                  </li>
                </ul>

                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center text-sm underline underline-offset-4 transition-colors hover:opacity-70"
                  style={{ color: '#e87722' }}
                >
                  Haritada Görüntüle →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
