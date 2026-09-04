import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/content/blog'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { ArticleSchema } from '@/components/schema/ArticleSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'
import { Clock, ArrowLeft } from 'lucide-react'
import { CTABand } from '@/components/organisms/CTABand'
import { FadeIn } from '@/components/motion-primitives/fade-in'

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

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(
    0,
    2
  )

  // Markdown'u basit HTML'e çevir (server side)
  const htmlContent = post.content
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3" style="color:#1a1a1a">$1</h2>')
    .replace(
      /^### (.+)$/gm,
      '<h3 class="text-base font-semibold mt-6 mb-2" style="color:#1a1a1a">$1</h3>'
    )
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="underline" style="color:#e87722">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^---$/gm, '<hr style="border-color:#e0d4c0;margin:2rem 0">')
    .replace(/\n\n/g, '</p><p class="mt-4" style="color:#5c5c5c">')

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
      />

      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Link
          href="/blog"
          className="mb-8 flex items-center gap-2 text-sm transition-colors hover:opacity-70"
          style={{ color: '#e87722' }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Bloga Dön
        </Link>

        <FadeIn>
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: '#fff7f0', color: '#cc6419' }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: '#8a7050' }}>
                <Clock className="h-3 w-3" aria-hidden="true" /> {post.readTime} dk okuma
              </span>
              <time className="text-xs" style={{ color: '#8a7050' }} dateTime={post.date}>
                {post.date}
              </time>
            </div>
            <h1
              className="text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: '#1a1a1a' }}
            >
              {post.title}
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#5c5c5c' }}>
              {post.description}
            </p>
          </header>
        </FadeIn>

        <div
          className="prose-content text-base leading-relaxed"
          style={{ color: '#404040' }}
          dangerouslySetInnerHTML={{ __html: `<p style="color:#5c5c5c">${htmlContent}</p>` }}
        />

        {related.length > 0 && (
          <section className="mt-16 border-t pt-12" style={{ borderColor: '#e0d4c0' }}>
            <h2 className="mb-6 text-lg font-bold" style={{ color: '#1a1a1a' }}>
              İlgili Makaleler
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-xl p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ border: '1px solid #e0d4c0', backgroundColor: '#faf8f5' }}
                >
                  <p className="font-medium text-sm" style={{ color: '#1a1a1a' }}>
                    {r.title}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: '#8a7050' }}>
                    {r.readTime} dk
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTABand />
    </>
  )
}
