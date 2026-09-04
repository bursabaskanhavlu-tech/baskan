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
  title: 'Contact | Başkan Havlu Tekstil',
  description:
    'Get a quote for towels and bathrobes from Bursa Havlucular Çarşısı. +90 507 342 06 61 — tekstil@baskanhavlu.com',
  path: '/en/contact',
  alternatePath: '/contact',
  locale: 'en',
})

export default function EnglishContactPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageEn}`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Contact', url: 'https://baskanhavlu.com/en/contact' },
        ]}
      />
      <LocalBusinessSchema />

      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h1>
          <p className="mt-3 text-lg" style={{ color: '#b3b3b3' }}>
            We respond within 24 hours
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <div
                className="rounded-2xl bg-white p-8 shadow-sm"
                style={{ border: '1px solid #e0d4c0' }}
              >
                <h2 className="mb-6 text-xl font-bold" style={{ color: '#1a1a1a' }}>
                  Request a Quote
                </h2>
                <ContactForm locale="en" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#25d366' }}
                aria-label="Contact via WhatsApp"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">Message us on WhatsApp</p>
                  <p className="text-sm text-white/80">Instant contact and fast response</p>
                </div>
              </a>

              <div
                className="rounded-2xl bg-white p-6 shadow-sm"
                style={{ border: '1px solid #e0d4c0' }}
              >
                <h3 className="mb-4 font-semibold" style={{ color: '#1a1a1a' }}>
                  Contact Information
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
                      Mon–Fri 09:00–18:00
                      <br />
                      Sat 09:00–14:00
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
                  View on Map →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
