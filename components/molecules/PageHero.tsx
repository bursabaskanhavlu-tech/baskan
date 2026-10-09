import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { ThreadField } from '@/components/effects/ThreadField'
import { SplitText } from '@/components/effects/SplitText'
import { TowelArt, type ArtTone, type TowelVariant } from '@/components/atoms/TowelArt'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  breadcrumbs: { label: string; href?: string }[]
  kicker?: string
  /** Metin verilirse harf harf açılır; JSX verilirse olduğu gibi gösterilir. */
  title: React.ReactNode
  lead?: React.ReactNode
  /** Başlığın sağında yer alan ek içerik (CTA, filtre vb.). */
  aside?: React.ReactNode
  /** Sağ üstte gösterilecek havlu illüstrasyonu. */
  art?: { variant: TowelVariant; tone: ArtTone; accent?: ArtTone }
  size?: 'lg' | 'md'
  className?: string
}

/**
 * İç sayfaların ortak açılışı: koyu zemin, imlece tepki veren iplik alanı,
 * harf harf açılan başlık. Sayfanın tek <h1>'i burada üretilir; metin SSR
 * HTML'de tam olarak bulunur.
 */
export function PageHero({
  breadcrumbs,
  kicker,
  title,
  lead,
  aside,
  art,
  size = 'lg',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'on-dark relative isolate overflow-hidden bg-ink pb-16 pt-10 text-paper sm:pb-24 sm:pt-14',
        className
      )}
    >
      <ThreadField className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      {art && (
        <TowelArt
          variant={art.variant}
          tone={art.tone}
          accent={art.accent}
          className="pointer-events-none absolute -right-10 top-8 -z-10 hidden h-80 w-80 opacity-90 md:block lg:right-6 lg:h-[26rem] lg:w-[26rem]"
        />
      )}
      <div className="container-x">
        <Breadcrumbs items={breadcrumbs} dark className="rise-fade" />
        <div className="mt-12 grid gap-10 sm:mt-20 lg:grid-cols-12 lg:items-end">
          <div className={aside ? 'lg:col-span-8' : 'lg:col-span-9'}>
            {kicker && (
              <p className="kicker rise-fade" style={{ '--d': '0.05s' } as React.CSSProperties}>
                {kicker}
              </p>
            )}
            <h1 className={cn(size === 'lg' ? 'display-lg' : 'display-md', 'mt-5 text-paper')}>
              {typeof title === 'string' ? <SplitText text={title} delay={0.08} /> : title}
            </h1>
            {lead && (
              <div
                className="lead rise-fade mt-6 max-w-2xl text-charcoal-300"
                style={{ '--d': '0.4s' } as React.CSSProperties}
              >
                {lead}
              </div>
            )}
          </div>
          {aside && (
            <div
              className="rise-fade lg:col-span-4 lg:justify-self-end"
              style={{ '--d': '0.5s' } as React.CSSProperties}
            >
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
