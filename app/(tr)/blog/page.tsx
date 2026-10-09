import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/content/blog'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { PageHero } from '@/components/molecules/PageHero'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import type { ArtTone, TowelVariant } from '@/components/atoms/TowelArt'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'
import { CTABand } from '@/components/organisms/CTABand'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { formatDate } from '@/lib/utils/date'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog | Başkan Havlu Tekstil',
  description:
    'Havlu üretimi, otel tekstili, toptan havlu alım rehberleri ve Türk tekstil sektörü hakkında makaleler.',
  path: '/blog',
})

const ARTS: { art: TowelVariant; tone: ArtTone; dark?: boolean }[] = [
  { art: 'roll', tone: 'cream', dark: true },
  { art: 'stack', tone: 'white' },
  { art: 'robe', tone: 'clay', dark: true },
  { art: 'hanging', tone: 'cream' },
  { art: 'monogram', tone: 'sand', dark: true },
  { art: 'stack', tone: 'stone' },
]

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = posts

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Blog', url: 'https://baskanhavlu.com/blog' },
        ]}
      />

      <PageHero
        photo="wholesale"
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]}
        kicker="Rehberler ve sektör notları"
        title="Blog"
        lead="Tekstil sektörü, otel havlusu ve toptan alım rehberleri."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="reveal group grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <MediaFrame
                tone="stone"
                art="stack"
                artTone="clay"
                artAccent="cream"
                dark
                className="aspect-16/10 w-full overflow-hidden rounded-[2rem] lg:col-span-7"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="flex flex-col lg:col-span-5 lg:py-4">
                <p className="text-caption text-charcoal-600">
                  {featured.category} · {formatDate(featured.date)} · {featured.readTime} dk okuma
                </p>
                <h2 className="display-md mt-5 transition-colors group-hover:text-orange-700">
                  {featured.title}
                </h2>
                <p className="lead mt-5">{featured.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-medium">
                  <span className="link-line-static">Yazıyı oku</span>
                  <ArrowUpRightIcon />
                </span>
              </div>
            </Link>
          )}

          <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <li key={post.slug} className="reveal">
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <MediaFrame
                    art={ARTS[i % ARTS.length]?.art ?? 'stack'}
                    artTone={ARTS[i % ARTS.length]?.tone ?? 'cream'}
                    dark={ARTS[i % ARTS.length]?.dark}
                    ratio="4 / 3"
                    plain
                    className="overflow-hidden rounded-[1.75rem]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <p className="mt-5 text-caption text-charcoal-600">
                    {post.category} · {post.readTime} dk
                  </p>
                  <h2 className="mt-3 font-display text-[1.75rem] leading-tight transition-colors group-hover:text-orange-700">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal-600">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  )
}
