import Image from 'next/image'
import Link from 'next/link'
import { MEDIA, type MediaSlot } from '@/content/media'
import { ArrowIcon } from '@/components/atoms/Icons'
import type { Locale } from '@/lib/i18n'

const items: Record<Locale, { title: string[]; href: string; slot: MediaSlot }[]> = {
  tr: [
    { title: ['Otel ve SPA', 'Havluları'], href: '/otel-havlusu', slot: 'hotel' },
    { title: ['Banyo', 'Havluları'], href: '/new-collection/banyo-havlusu', slot: 'wholesale' },
    { title: ['Mutfak', 'Havluları'], href: '/new-collection', slot: 'salon' },
    { title: ['Bornozlar'], href: '/bornoz-ureticisi', slot: 'bathrobe' },
  ],
  en: [
    { title: ['Hotel and Spa', 'Towels'], href: '/en/hotel-towels', slot: 'hotel' },
    { title: ['Bath', 'Towels'], href: '/en/wholesale-towel-supplier', slot: 'wholesale' },
    { title: ['Kitchen', 'Towels'], href: '/new-collection', slot: 'salon' },
    { title: ['Bathrobes'], href: '/en/bathrobe-manufacturer', slot: 'bathrobe' },
  ],
}

/** Dört kategori kartı — içerik genişliğinde, yuvarlak köşeli. */
export function CategoryStrip({ locale }: { locale: Locale }) {
  const explore = locale === 'en' ? 'Explore' : 'Keşfet'
  return (
    <section
      id="kategoriler"
      aria-label={locale === 'en' ? 'Categories' : 'Kategoriler'}
      className="container-x scroll-mt-24"
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {items[locale].map((item) => {
          const photo = MEDIA[item.slot]
          return (
            <li key={item.href + item.title.join()} className="reveal">
              <Link
                href={item.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-beige-200 sm:aspect-[5/4] lg:aspect-[4/5]"
              >
                {photo && (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1320px) 310px, (min-width: 1024px) 24vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-105"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/35 to-transparent"
                />
                <span className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <span className="block text-[1.125rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-[1.375rem]">
                    {item.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-charcoal-700">
                    {explore}
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
