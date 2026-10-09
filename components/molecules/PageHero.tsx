import Image from 'next/image'
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { SplitText } from '@/components/effects/SplitText'
import { MEDIA, type MediaSlot } from '@/content/media'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  breadcrumbs: { label: string; href?: string }[]
  kicker?: string
  /** Metin verilirse harf harf açılır; JSX verilirse olduğu gibi gösterilir. */
  title: React.ReactNode
  lead?: React.ReactNode
  /** Başlığın altında yer alan ek içerik (CTA, filtre vb.). */
  aside?: React.ReactNode
  /** Sağda gösterilecek fotoğraf (content/media.ts yuvası). */
  photo?: MediaSlot
  size?: 'lg' | 'md'
  className?: string
}

/**
 * İç sayfaların ortak açılışı: aydınlık zemin, solda başlık, sağda fotoğraf.
 * Sayfanın tek <h1>'i burada üretilir; metin SSR HTML'de tam olarak bulunur.
 */
export function PageHero({
  breadcrumbs,
  kicker,
  title,
  lead,
  aside,
  photo,
  size = 'lg',
  className,
}: PageHeroProps) {
  const asset = photo ? MEDIA[photo] : null

  return (
    <section className={cn('relative', className)}>
      <div className={cn('grid', asset && 'lg:grid-cols-2')}>
        <div
          className={cn(
            'flex flex-col justify-center pb-14 pt-8 sm:pb-20',
            asset ? 'pl-container pr-5 sm:pr-10' : 'container-x'
          )}
        >
          <Breadcrumbs items={breadcrumbs} className="rise-fade" />
          <div className="mt-10 sm:mt-16">
            {kicker && (
              <p className="kicker rise-fade" style={{ '--d': '0.05s' } as React.CSSProperties}>
                {kicker}
              </p>
            )}
            <h1 className={cn(size === 'lg' ? 'display-lg' : 'display-md', 'mt-5 max-w-3xl')}>
              {typeof title === 'string' ? <SplitText text={title} delay={0.08} /> : title}
            </h1>
            {lead && (
              <div
                className="lead rise-fade mt-6 max-w-xl"
                style={{ '--d': '0.35s' } as React.CSSProperties}
              >
                {lead}
              </div>
            )}
            {aside && (
              <div className="rise-fade mt-8" style={{ '--d': '0.45s' } as React.CSSProperties}>
                {aside}
              </div>
            )}
          </div>
        </div>
        {asset && (
          <div
            className="rise-fade relative min-h-[16rem] overflow-hidden sm:min-h-[22rem]"
            style={{ '--d': '0.15s' } as React.CSSProperties}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
