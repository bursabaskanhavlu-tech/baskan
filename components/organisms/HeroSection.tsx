import Link from 'next/link'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { ArrowIcon, ArrowUpRightIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { contactHref, whatsappHref, type Locale } from '@/lib/i18n'
import type { HomeContent } from '@/content/home'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  locale: Locale
  content: HomeContent['hero']
  facts: HomeContent['facts']
}

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/**
 * Ana sayfa hero'su. H1 ilk boyamada tam opaktır (yalnızca kayarak gelir) —
 * LCP, animasyona veya JS'e bağlı değildir.
 */
export function HeroSection({ locale, content, facts }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pt-16 lg:pb-24">
      <div className="container-x">
        <p className="kicker rise-fade">{content.kicker}</p>

        <h1 className="display-xl rise mt-7 sm:mt-9">
          <span className="block">{content.titleLine1}</span>
          <span className="block">
            <em>{content.titleLine2}</em>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <p className="lead rise-fade max-w-xl lg:col-span-6" style={d(0.12)}>
            {content.intro}
          </p>
          <div
            className="rise-fade flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end"
            style={d(0.2)}
          >
            <Link href={contactHref(locale)} className="btn btn-primary">
              {content.primary}
              <ArrowIcon />
            </Link>
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
              {content.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Görsel bandı — her panel ilgili kategoriye götürür */}
      <div className="container-x mt-12 lg:mt-16">
        <div
          className="rise-fade grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-12"
          style={d(0.28)}
        >
          {content.panels.map((panel, i) => (
            <Link
              key={panel.href}
              href={panel.href}
              className={cn(
                'group relative block overflow-hidden',
                i === 0
                  ? 'col-span-2 aspect-[4/3] sm:aspect-[16/9] lg:col-span-6 lg:aspect-auto lg:h-[min(62vh,40rem)]'
                  : 'aspect-[3/4] lg:aspect-auto lg:h-[min(62vh,40rem)]',
                i === 1 && 'lg:col-span-3',
                i === 2 && 'lg:col-span-3'
              )}
            >
              <MediaFrame
                slot={panel.slot}
                tone={panel.tone}
                className="h-full w-full transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
                sizes={
                  i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'
                }
                priority={i === 0}
                animate={false}
              />
              <span
                className={cn(
                  'absolute bottom-2.5 left-2.5 inline-flex max-w-[calc(100%-1.25rem)] items-center gap-1.5 rounded-2xl px-3 py-1.5 text-xs font-medium leading-snug backdrop-blur-sm transition-colors sm:bottom-4 sm:left-4 sm:max-w-none sm:gap-2 sm:rounded-full sm:px-3.5 sm:py-2 sm:text-[0.8125rem]',
                  panel.tone === 'charcoal' || panel.tone === 'clay'
                    ? 'bg-ink/35 text-paper group-hover:bg-ink/60'
                    : 'bg-paper/80 text-ink group-hover:bg-paper'
                )}
              >
                {panel.label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0" />
              </span>
            </Link>
          ))}
        </div>

        {/* Doğrulanabilir olgular — değerler SITE_CONFIG'den */}
        <dl className="mt-10 grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4 lg:mt-14">
          {facts.map((f) => (
            <div
              key={f.label}
              className="bg-paper py-6 pl-5 pr-2 max-sm:odd:pl-0 sm:pl-6 sm:first:pl-0"
            >
              <dt className="text-caption text-charcoal-600">{f.label}</dt>
              <dd className="mt-1 font-display text-[2.25rem] leading-none sm:text-5xl">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
