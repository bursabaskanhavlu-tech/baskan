import Link from 'next/link'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { ThreadField } from '@/components/effects/ThreadField'
import { SplitText } from '@/components/effects/SplitText'
import { Magnetic } from '@/components/effects/Interactive'
import { contactHref, whatsappHref, type Locale } from '@/lib/i18n'
import type { HomeContent } from '@/content/home'

interface HeroSectionProps {
  locale: Locale
  content: HomeContent['hero']
  facts: HomeContent['facts']
}

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/**
 * Ana sayfa hero'su — koyu, tam ekran; arkada imlece tepki veren iplik alanı.
 * H1 metni SSR HTML'de tam olarak bulunur; harfler yalnızca `transform` ile
 * maskeden yükselir (opaklık kullanılmaz, LCP gecikmez).
 */
export function HeroSection({ locale, content, facts }: HeroSectionProps) {
  const en = locale === 'en'
  const badge = en
    ? 'Bursa · Havlucular Çarşısı · Since 1996 · '
    : 'Bursa · Havlucular Çarşısı · 1996’dan beri · '

  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink text-paper">
      <ThreadField className="absolute inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />

      <div className="container-x flex min-h-[calc(100svh-4.25rem)] flex-col pb-10 pt-10 sm:pt-14 lg:min-h-[calc(100svh-5.25rem)]">
        <div className="flex items-center justify-between gap-6">
          <p className="kicker rise-fade">{content.kicker}</p>
          <p className="rise-fade hidden text-caption uppercase tracking-[0.2em] text-charcoal-300 md:block">
            {en ? 'Wholesale · Retail · Export' : 'Toptan · Perakende · İhracat'}
          </p>
        </div>

        <h1 className="display-xl my-auto py-12 text-[clamp(3.6rem,15vw,9.5rem)] text-paper sm:py-16">
          <span className="block">
            <SplitText text={content.titleLine1} delay={0.05} />
          </span>
          <span className="block italic text-orange-500">
            <SplitText text={content.titleLine2} delay={0.35} />
          </span>
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <p className="lead rise-fade max-w-xl text-charcoal-300 lg:col-span-6" style={d(0.6)}>
            {content.intro}
          </p>
          <div
            className="rise-fade flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end"
            style={d(0.72)}
          >
            <Magnetic className="w-full sm:w-auto">
              <Link href={contactHref(locale)} className="btn btn-primary w-full">
                {content.primary}
                <ArrowIcon />
              </Link>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a
                href={whatsappHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                {content.whatsapp}
              </a>
            </Magnetic>
          </div>

          {/* Dönen rozet — koleksiyon bölümüne kaydırır */}
          <a
            href="#koleksiyon"
            data-cursor={en ? 'Explore' : 'Keşfet'}
            aria-label={en ? 'Explore the collection' : 'Koleksiyonu keşfet'}
            className="rise-fade group relative hidden h-32 w-32 place-items-center justify-self-end lg:col-span-2 lg:grid"
            style={d(0.85)}
          >
            <svg
              viewBox="0 0 120 120"
              className="spin-badge spin-slow absolute inset-0 h-full w-full text-charcoal-300"
              aria-hidden="true"
            >
              <defs>
                <path id="badge-circle" d="M60 60 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0" />
              </defs>
              <text fill="currentColor">
                <textPath href="#badge-circle" textLength="298" lengthAdjust="spacingAndGlyphs">
                  {badge}
                </textPath>
              </text>
            </svg>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-ink transition-transform duration-500 group-hover:scale-110">
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5 rotate-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path
                  d="M3 10h13M11.5 5.5 16 10l-4.5 4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Doğrulanabilir olgular — değerler SITE_CONFIG'den */}
        <dl
          className="rise-fade mt-12 grid grid-cols-2 gap-y-6 border-t border-line-dark pt-6 sm:grid-cols-4"
          style={d(0.95)}
        >
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse gap-1 pr-4">
              <dt className="text-caption text-charcoal-300">{f.label}</dt>
              <dd className="font-display text-[2.25rem] leading-none text-paper sm:text-5xl">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
