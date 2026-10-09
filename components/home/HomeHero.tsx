import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { MEDIA } from '@/content/media'
import { ArrowIcon } from '@/components/atoms/Icons'
import { SplitText } from '@/components/effects/SplitText'
import { contactHref, type Locale } from '@/lib/i18n'

const copy = {
  tr: {
    kicker: `${SITE_CONFIG.founded}’dan bu yana`,
    line1: 'Havlu ve Bornoz',
    line2: 'İmalatçınız',
    intro:
      'Otel, SPA, perakende ve kurumsal ihtiyaçlar için Bursa’da kendi tesisimizde havlu, bornoz ve ev tekstili üretiyoruz.',
    primary: 'Kurumsal Teklif Al',
    secondary: 'Ürünleri Keşfet',
    badge: ['Kaliteli', 'tekstil', 'uzun süreli', 'iş ortaklığı'],
    scroll: 'Kategorilere in',
  },
  en: {
    kicker: `Since ${SITE_CONFIG.founded}`,
    line1: 'Towel and Bathrobe',
    line2: 'Manufacturer',
    intro:
      'Towels, bathrobes and home textiles for hotels, spas, retail and corporate buyers, made in our own facility in Bursa, Turkey.',
    primary: 'Get a Quote',
    secondary: 'Explore Products',
    badge: ['Quality', 'textiles', 'long-term', 'partnership'],
    scroll: 'Scroll to categories',
  },
} as const

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/**
 * Ana sayfa açılışı — solda başlık, sağda kenara taşan büyük fotoğraf.
 * H1 metni SSR HTML'de tam olarak bulunur (SEO).
 */
export function HomeHero({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const photo = MEDIA.hero

  return (
    <section className="relative">
      <div className="grid lg:min-h-[calc(100svh-5.25rem)] lg:grid-cols-2">
        <div className="pl-container flex flex-col justify-center pb-14 pr-5 pt-10 sm:pr-10 lg:py-20">
          <p className="kicker rise-fade">{t.kicker}</p>
          <h1 className="display-xl mt-6 max-w-[11ch]">
            <span className="block">
              <SplitText text={t.line1} delay={0.05} />
            </span>
            <span className="block text-orange-500">
              <SplitText text={t.line2} delay={0.3} />
            </span>
          </h1>
          <p className="lead rise-fade mt-7 max-w-md" style={d(0.45)}>
            {t.intro}
          </p>
          <div className="rise-fade mt-10 flex flex-col gap-3 sm:flex-row" style={d(0.55)}>
            <Link href={contactHref(locale)} className="btn btn-primary">
              {t.primary}
              <ArrowIcon />
            </Link>
            <Link href="/new-collection" className="btn btn-outline">
              {t.secondary}
            </Link>
          </div>
          <a
            href="#kategoriler"
            aria-label={t.scroll}
            className="rise-fade mt-14 hidden h-12 w-12 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition-colors hover:bg-orange-500 hover:text-ink lg:flex"
            style={d(0.7)}
          >
            <ArrowIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>

        <div
          className="rise-fade relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]"
          style={d(0.15)}
        >
          {photo && (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_center]"
            />
          )}
          <div className="absolute right-6 top-6 flex items-start gap-3 text-paper sm:right-10 sm:top-10">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/70">
              <ArrowIcon className="h-4 w-4" />
            </span>
            <p className="text-[0.6875rem] font-semibold uppercase leading-[1.5] tracking-[0.22em] [text-shadow:0_1px_8px_rgb(0_0_0/0.35)]">
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
