import Link from 'next/link'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { ArrowIcon, ArrowUpRightIcon } from '@/components/atoms/Icons'
import { HorizontalGallery } from '@/components/effects/HorizontalGallery'
import { Tilt } from '@/components/effects/Interactive'
import type { HomeContent } from '@/content/home'

interface ProductCategoriesProps {
  content: HomeContent['categories']
  locale?: 'tr' | 'en'
}

/**
 * Koleksiyon galerisi — koyu zemin. Geniş ekranda kaydırma kartları yatay
 * akıtır; dokunmatik cihazlarda parmakla kaydırılan şerittir.
 */
export function ProductCategories({ content, locale = 'tr' }: ProductCategoriesProps) {
  const cursor = locale === 'en' ? 'View' : 'İncele'
  return (
    <section id="koleksiyon" className="on-dark bg-ink py-20 text-paper lg:py-0">
      <HorizontalGallery dark>
        {/* Başlık kartı */}
        <div className="flex w-[82vw] max-w-md flex-col justify-end pr-6 sm:w-[60vw] lg:w-[30rem] lg:pr-16">
          <p className="kicker">{content.kicker}</p>
          <h2 className="display-lg mt-6 text-paper">{content.title}</h2>
          <p className="lead mt-6 text-charcoal-300">{content.text}</p>
          <Link href="/new-collection" className="btn btn-outline mt-10 self-start">
            {content.all}
            <ArrowIcon />
          </Link>
        </div>

        {content.items.map((cat) => (
          <Tilt key={cat.title + cat.href} className="w-[78vw] sm:w-[46vw] lg:w-[27rem]">
            <Link
              href={cat.href}
              data-cursor={cursor}
              className="group relative flex h-[30rem] flex-col overflow-hidden rounded-[2rem] border border-line-dark bg-charcoal-800 sm:h-[34rem] lg:h-[min(72vh,38rem)]"
            >
              <MediaFrame
                slot={cat.slot}
                tone={cat.tone}
                art={cat.art}
                artTone={cat.artTone}
                artAccent={cat.artAccent}
                dark
                animate={false}
                className="flex-1"
                sizes="(min-width: 1024px) 28rem, 80vw"
              />
              <div className="relative flex items-end justify-between gap-4 p-7">
                <div>
                  <h3 className="font-display text-[2rem] leading-none text-paper">{cat.title}</h3>
                  <p className="mt-3 text-[0.9375rem] text-charcoal-300">{cat.desc}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-dark text-paper transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-ink">
                  <ArrowUpRightIcon />
                </span>
              </div>
              <span className="tilt-glare" aria-hidden="true" />
            </Link>
          </Tilt>
        ))}
      </HorizontalGallery>
    </section>
  )
}
