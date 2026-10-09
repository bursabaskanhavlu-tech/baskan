import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  breadcrumbs: { label: string; href?: string }[]
  kicker?: string
  title: React.ReactNode
  lead?: React.ReactNode
  /** Başlığın sağında / altında yer alan ek içerik (CTA, bilgi satırı vb.). */
  aside?: React.ReactNode
  size?: 'lg' | 'md'
  className?: string
}

/**
 * İç sayfaların ortak başlık şablonu: breadcrumb, büyük editoryal başlık,
 * açıklama ve isteğe bağlı yan içerik. Sayfanın tek <h1>'i burada üretilir.
 */
export function PageHero({
  breadcrumbs,
  kicker,
  title,
  lead,
  aside,
  size = 'lg',
  className,
}: PageHeroProps) {
  return (
    <section className={cn('pb-14 pt-10 sm:pb-20 sm:pt-14', className)}>
      <div className="container-x">
        <Breadcrumbs items={breadcrumbs} className="rise-fade" />
        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:items-end">
          <div className={aside ? 'lg:col-span-8' : 'lg:col-span-10'}>
            {kicker && (
              <p className="kicker rise-fade" style={{ '--d': '0.05s' } as React.CSSProperties}>
                {kicker}
              </p>
            )}
            <h1 className={cn(size === 'lg' ? 'display-lg' : 'display-md', 'rise mt-5')}>
              {title}
            </h1>
            {lead && (
              <div
                className="lead rise-fade mt-6 max-w-2xl"
                style={{ '--d': '0.12s' } as React.CSSProperties}
              >
                {lead}
              </div>
            )}
          </div>
          {aside && (
            <div
              className="rise-fade lg:col-span-4 lg:justify-self-end"
              style={{ '--d': '0.18s' } as React.CSSProperties}
            >
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
