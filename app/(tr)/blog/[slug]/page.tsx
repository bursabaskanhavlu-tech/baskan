import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/content/blog'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { ArticleSchema } from '@/components/schema/ArticleSchema'
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'
import { CTABand } from '@/components/organisms/CTABand'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { markdownToHtml } from '@/lib/markdown'
import { formatDate } from '@/lib/utils/date'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    datePublished: post.date,
    keywords: [post.category, 'havlu', 'tekstil', 'Başkan Havlu Tekstil'],
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category)
  const more = (related.length > 0 ? related : BLOG_POSTS.filter((p) => p.slug !== slug)).slice(
    0,
    2
  )
  const language = post.language ?? 'tr'

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Blog', url: 'https://baskanhavlu.com/blog' },
          { name: post.title, url: `https://baskanhavlu.com/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
        category={post.category}
        inLanguage={language}
      />

      <article lang={language} className="pb-24 pt-10 sm:pb-32 sm:pt-14">
        <div className="container-x">
          <Breadcrumbs
            className="rise-fade"
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <header className="mx-auto mt-12 max-w-3xl sm:mt-16">
            <p className="kicker rise-fade">
              {post.category} · {post.readTime} dk okuma
            </p>
            <h1 className="display-lg rise mt-6">{post.title}</h1>
            <p className="lead rise-fade mt-6">{post.description}</p>
            <p className="mt-8 border-b border-line pb-8 text-caption text-charcoal-600">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · Başkan Havlu Tekstil
            </p>
          </header>

          <div
            className="prose-article mx-auto mt-12 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line py-20">
          <div className="container-x">
            <h2 className="display-sm">İlgili makaleler</h2>
            <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-12">
              {more.map((r) => (
                <li key={r.slug} className="border-b border-line">
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex items-start justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="block font-display text-[1.5rem] leading-tight transition-colors group-hover:text-orange-700">
                        {r.title}
                      </span>
                      <span className="mt-2 block text-caption text-charcoal-600">
                        {r.readTime} dk okuma
                      </span>
                    </span>
                    <ArrowUpRightIcon className="mt-2 h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
