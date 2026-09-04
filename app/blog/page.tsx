import Link from 'next/link'
import { BLOG_POSTS } from '@/content/blog'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import type { Metadata } from 'next'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog | Başkan Havlu Tekstil',
  description:
    'Havlu üretimi, otel tekstili, toptan havlu alım rehberleri ve Türk tekstil sektörü hakkında makaleler.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Blog', url: 'https://baskanhavlu.com/blog' },
        ]}
      />

      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Blog</h1>
          <p className="mt-3" style={{ color: '#b3b3b3' }}>
            Tekstil sektörü, otel havlusu ve toptan alım rehberleri
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ border: '1px solid #e0d4c0' }}
                >
                  <div className="h-48 overflow-hidden" style={{ backgroundColor: '#ede5d8' }}>
                    <BrandPatternPanel iconSize={48} />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{ backgroundColor: '#fff7f0', color: '#cc6419' }}
                      >
                        {post.category}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: '#8a7050' }}
                      >
                        <Clock className="h-3 w-3" aria-hidden="true" /> {post.readTime} dk
                      </span>
                    </div>
                    <h2
                      className="text-base font-semibold leading-snug transition-colors group-hover:text-orange-500"
                      style={{ color: '#1a1a1a' }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {post.description}
                    </p>
                    <div
                      className="mt-auto flex items-center gap-1 text-sm font-medium"
                      style={{ color: '#e87722' }}
                    >
                      Devam oku{' '}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
