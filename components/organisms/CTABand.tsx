import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { MEDIA } from '@/content/media'
import { contactHref, whatsappHref, type Locale } from '@/lib/i18n'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'

interface CTABandProps {
  locale?: Locale
}

const copy = {
  tr: {
    title: ['İhtiyacınızı', 'birlikte planlayalım.'],
    text: 'Ürün, miktar ve özel talepleriniz için bizimle iletişime geçin. Ekibimiz en kısa sürede dönüş sağlayacaktır.',
    primary: 'Teklif Formu',
    whatsapp: 'WhatsApp ile Yaz',
    badge: ['İşiniz için', 'doğru partner'],
  },
  en: {
    title: ['Let’s plan your', 'order together.'],
    text: 'Contact us for products, quantities and special requests. Our team will get back to you as soon as possible.',
    primary: 'Quote Form',
    whatsapp: 'Message on WhatsApp',
    badge: ['The right partner', 'for your business'],
  },
} as const

/** Sayfa sonu teklif çağrısı — solda metin, sağda kenara taşan fotoğraf. */
export function CTABand({ locale = 'tr' }: CTABandProps) {
  const t = copy[locale]
  const photo = MEDIA.store

  return (
    <section className="relative overflow-hidden bg-beige-100">
      <div className="grid lg:grid-cols-2">
        <div className="pl-container reveal flex flex-col justify-center py-16 pr-5 sm:py-24 sm:pr-10">
          <h2 className="display-md">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-charcoal-600">{t.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={contactHref(locale)} className="btn btn-primary">
              {t.primary}
              <ArrowIcon />
            </Link>
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
              {t.whatsapp}
            </a>
          </div>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="mt-5 inline-flex min-h-11 items-center text-sm text-charcoal-600 transition-colors hover:text-ink"
          >
            {SITE_CONFIG.contact.phone}
          </a>
        </div>
        <div className="relative min-h-[18rem] sm:min-h-[22rem]">
          {photo && (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 text-paper sm:bottom-10 sm:right-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/80">
              <ArrowIcon className="h-4 w-4" />
            </span>
            <p className="text-[0.6875rem] font-semibold uppercase leading-relaxed tracking-[0.2em] [text-shadow:0_1px_8px_rgb(0_0_0/0.4)]">
              {t.badge.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
