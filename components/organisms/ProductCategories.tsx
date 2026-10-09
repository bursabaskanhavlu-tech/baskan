import Link from 'next/link'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { ArrowIcon, ArrowUpRightIcon } from '@/components/atoms/Icons'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import type { HomeContent } from '@/content/home'
import { cn } from '@/lib/utils'

interface ProductCategoriesProps {
  content: HomeContent['categories']
}

/** Asimetrik editoryal kategori ızgarası; ilk kart iki satır boyunca büyür. */
export function ProductCategories({ content }: ProductCategoriesProps) {
  const last = content.items.length - 1
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          text={content.text}
          action={
            <Link href="/new-collection" className="btn btn-outline btn-sm">
              {content.all}
              <ArrowIcon />
            </Link>
          }
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-2.5 gap-y-8 sm:gap-x-3 sm:gap-y-10 lg:mt-20 lg:grid-cols-3">
          {content.items.map((cat, i) => (
            <li
              key={cat.title + cat.href}
              className={cn(
                'reveal',
                i === 0 && 'col-span-2 lg:col-span-1 lg:row-span-2',
                i === last && i !== 0 && 'col-span-2 lg:col-span-3'
              )}
            >
              <Link href={cat.href} className="group flex h-full flex-col">
                <MediaFrame
                  slot={cat.slot}
                  tone={cat.tone}
                  className={cn(
                    'w-full',
                    i === 0
                      ? 'aspect-4/3 sm:aspect-video lg:aspect-auto lg:min-h-[28rem] lg:flex-1'
                      : i === last
                        ? 'aspect-video sm:aspect-[21/8]'
                        : 'aspect-4/5 sm:aspect-4/3'
                  )}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                >
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/85 text-ink opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRightIcon />
                  </span>
                </MediaFrame>
                <div className="flex items-start justify-between gap-4 pt-4 sm:pt-5">
                  <div>
                    <h3 className="font-display text-[1.375rem] leading-tight transition-colors group-hover:text-orange-700 sm:text-[1.75rem]">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-charcoal-600 sm:text-[0.9375rem]">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
