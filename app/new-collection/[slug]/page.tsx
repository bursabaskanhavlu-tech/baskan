import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/content/products'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { ProductSchema } from '@/components/schema/ProductSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { CTABand } from '@/components/organisms/CTABand'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { ArrowLeft, Check } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return {}
  return generatePageMetadata({
    title: `${product.name.tr} | Başkan Havlu Tekstil`,
    description: product.description.tr,
    path: `/new-collection/${product.slug}`,
    keywords: [product.name.tr, ...product.useCases, 'toptan havlu', 'Bursa havlu tedarikçisi'],
  })
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = PRODUCTS.filter((p) => p.slug !== slug && p.category === product.category).slice(
    0,
    3
  )
  const waMsg = encodeURIComponent(`Merhaba, "${product.name.tr}" hakkında bilgi almak istiyorum.`)
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${waMsg}`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: SITE_CONFIG.url },
          { name: 'Koleksiyon', url: `${SITE_CONFIG.url}/new-collection` },
          { name: product.name.tr, url: `${SITE_CONFIG.url}/new-collection/${product.slug}` },
        ]}
      />
      <ProductSchema
        name={product.name.tr}
        description={product.description.tr}
        image={SITE_CONFIG.seo.ogImage}
        url={`${SITE_CONFIG.url}/new-collection/${product.slug}`}
        category={product.category}
      />

      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/new-collection" className="hover:text-white">
                  Koleksiyon
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{product.name.tr}</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{product.name.tr}</h1>
          <p className="mt-3 max-w-2xl text-lg" style={{ color: '#b3b3b3' }}>
            {product.description.tr}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/new-collection"
            className="mb-8 inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: '#e87722' }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Koleksiyona Dön
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn
              aria-hidden={true}
              className="h-72 overflow-hidden rounded-2xl sm:h-96"
              style={{ backgroundColor: '#ede5d8' }}
            >
              <BrandPatternPanel iconSize={80} />
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #e0d4c0' }}>
                <h2
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#8a7050' }}
                >
                  Hızlı Bilgi
                </h2>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs" style={{ color: '#a88c64' }}>
                      Minimum Sipariş
                    </dt>
                    <dd className="mt-1 text-sm font-medium" style={{ color: '#1a1a1a' }}>
                      {product.moq}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs" style={{ color: '#a88c64' }}>
                      Teslimat Süresi
                    </dt>
                    <dd className="mt-1 text-sm font-medium" style={{ color: '#1a1a1a' }}>
                      {product.leadTime}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#8a7050' }}
                >
                  Kullanım Alanları
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.useCases.map((use) => (
                    <span
                      key={use}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: '#fff7f0', color: '#cc6419' }}
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#8a7050' }}
                >
                  Özelleştirme Seçenekleri
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {product.customization.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#5c5c5c' }}
                    >
                      <Check
                        className="h-4 w-4 shrink-0"
                        style={{ color: '#e87722' }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex h-12 flex-1 items-center justify-center rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#e87722' }}
                >
                  Teklif İste
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 flex-1 items-center justify-center rounded-md border text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ borderColor: '#25d366', color: '#25d366' }}
                >
                  WhatsApp ile Sor
                </a>
              </div>
            </FadeIn>
          </div>

          {related.length > 0 && (
            <section className="mt-20 border-t pt-12" style={{ borderColor: '#e0d4c0' }}>
              <h2 className="mb-6 text-lg font-bold" style={{ color: '#1a1a1a' }}>
                Benzer Ürünler
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((r, i) => (
                  <FadeIn key={r.slug} delay={i * 0.06}>
                    <Link
                      href={`/new-collection/${r.slug}`}
                      className="block rounded-xl bg-white p-4 transition-shadow hover:shadow-sm"
                      style={{ border: '1px solid #e0d4c0' }}
                    >
                      <p className="font-medium text-sm" style={{ color: '#1a1a1a' }}>
                        {r.name.tr}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: '#8a7050' }}>
                        {r.description.tr}
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <CTABand />
    </>
  )
}
