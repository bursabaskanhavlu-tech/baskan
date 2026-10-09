import Image from 'next/image'
import Link from 'next/link'
import { MEDIA } from '@/content/media'
import { ArrowIcon } from '@/components/atoms/Icons'
import { contactHref, type Locale } from '@/lib/i18n'

const copy = {
  tr: {
    title: 'Özel Üretim ve Nakış',
    text: 'Markanıza özel ölçü, renk, gramaj, nakış ve ambalaj seçenekleriyle kurumsal kimliğinizi tekstile taşıyoruz.',
    link: 'Özel Üretim Talep Et',
    caption: 'Detaylarda kalite',
    list: [
      'Logo Nakışı',
      'Özel Ölçüler',
      'Renk Seçenekleri',
      'Farklı Gramajlar',
      'Özel Ambalajlama',
    ],
  },
  en: {
    title: 'Custom Production and Embroidery',
    text: 'Custom sizes, colors, GSM, embroidery and packaging that carry your corporate identity onto textiles.',
    link: 'Request Custom Production',
    caption: 'Quality in detail',
    list: ['Logo Embroidery', 'Custom Sizes', 'Color Options', 'Different GSM', 'Custom Packaging'],
  },
} as const

export function CustomProduction({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const detail = MEDIA.wholesale
  const emb = MEDIA.embroidered

  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="reveal relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-4 lg:aspect-[4/3]">
          {detail && (
            <Image
              src={detail.src}
              alt={detail.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          )}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
          />
          <p className="absolute bottom-5 left-5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-paper">
            {t.caption}
          </p>
        </div>

        <div className="reveal lg:col-span-3">
          <h2 className="display-sm">{t.title}</h2>
          <p className="mt-4 leading-relaxed text-charcoal-600">{t.text}</p>
          <Link
            href={contactHref(locale)}
            className="group mt-6 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-orange-600"
          >
            {t.link}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="reveal relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-3 lg:aspect-[4/3]">
          {emb && (
            <Image
              src={emb.src}
              alt={emb.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <ul className="reveal space-y-3 text-[0.9375rem] text-charcoal-700 lg:col-span-2">
          {t.list.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
