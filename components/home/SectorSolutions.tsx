import Image from 'next/image'
import Link from 'next/link'
import { BedDouble, Flower2, Gift, Scissors, Stethoscope, Store } from 'lucide-react'
import { MEDIA } from '@/content/media'
import { ArrowIcon } from '@/components/atoms/Icons'
import type { Locale } from '@/lib/i18n'

const copy = {
  tr: {
    kicker: 'Kurumsal Çözümler',
    title: ['Sektörünüze özel', 'tekstil '],
    accent: 'çözümleri.',
    text: 'Farklı sektörlerin ihtiyaçlarına uygun havlu ve ev tekstili ürünleriyle işletmenize özel üretim ve tedarik sunuyoruz.',
    caption: ['Oteller ve', 'konaklama tesisleri'],
    items: [
      { label: 'Oteller ve Konaklama', href: '/otel-havlusu', icon: BedDouble },
      { label: 'SPA ve Wellness', href: '/otel-bornozu', icon: Flower2 },
      { label: 'Klinikler ve Sağlık Kuruluşları', href: '/toptan-havlu', icon: Stethoscope },
      {
        label: 'Kuaför ve Güzellik Merkezleri',
        href: '/new-collection/kafa-havlusu',
        icon: Scissors,
      },
      { label: 'Toptancı ve Perakendeciler', href: '/toptan-havlu', icon: Store },
      { label: 'Promosyon ve Kurumsal Hediye', href: '/promosyon-havlu', icon: Gift },
    ],
  },
  en: {
    kicker: 'Corporate Solutions',
    title: ['Textile solutions', 'for your '],
    accent: 'sector.',
    text: 'Towels and home textiles tailored to the needs of each sector, manufactured and supplied for your business.',
    caption: ['Hotels and', 'hospitality'],
    items: [
      { label: 'Hotels and Hospitality', href: '/en/hotel-towels', icon: BedDouble },
      { label: 'Spa and Wellness', href: '/en/hotel-bathrobes', icon: Flower2 },
      { label: 'Clinics and Healthcare', href: '/en/wholesale-towel-supplier', icon: Stethoscope },
      { label: 'Hair and Beauty Salons', href: '/new-collection/kafa-havlusu', icon: Scissors },
      { label: 'Wholesalers and Retailers', href: '/en/wholesale-towel-supplier', icon: Store },
      { label: 'Promotional and Corporate Gifts', href: '/en/promotional-towels', icon: Gift },
    ],
  },
} as const

export function SectorSolutions({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const photo = MEDIA.production

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="reveal relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-4 lg:aspect-[4/5]">
          {photo && (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          )}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
          />
          <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-paper/50" />
          <p className="absolute bottom-6 left-11 text-[0.6875rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-paper">
            {t.caption.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="reveal lg:col-span-4 lg:pl-6">
          <p className="kicker">{t.kicker}</p>
          <h2 className="display-md mt-5">
            {t.title[0]}
            <br />
            {t.title[1]}
            <em>{t.accent}</em>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-charcoal-600">{t.text}</p>
        </div>

        <ul className="reveal lg:col-span-4">
          {t.items.map(({ label, href, icon: Icon }) => (
            <li key={label} className="border-b border-line first:border-t">
              <Link
                href={href}
                className="group flex items-center gap-4 py-4 text-[0.9375rem] font-medium transition-colors hover:text-orange-600"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                {label}
                <ArrowIcon className="ml-auto h-4 w-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
