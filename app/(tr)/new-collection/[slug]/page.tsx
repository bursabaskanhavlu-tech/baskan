import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/content/products'
import { productMediaSlot } from '@/content/media'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { ProductSchema } from '@/components/schema/ProductSchema'
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { ProductCard, productTone } from '@/components/molecules/ProductCard'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { CTABand } from '@/components/organisms/CTABand'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { whatsappHref } from '@/lib/i18n'

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
    keywords: [product.name.tr, ...product.useCases, 'toptan havlu', 'Bursa havlu imalatçısı'],
  })
}

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()

  const sameCategory = PRODUCTS.filter((p) => p.slug !== slug && p.category === product.category)
  const related = (
    sameCategory.length > 0 ? sameCategory : PRODUCTS.filter((p) => p.slug !== slug)
  ).slice(0, 3)
  const waUrl = whatsappHref('tr', `Merhaba, "${product.name.tr}" hakkında bilgi almak istiyorum.`)

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
        image={`${SITE_CONFIG.url}/og?title=${encodeURIComponent(product.name.tr)}`}
        url={`${SITE_CONFIG.url}/new-collection/${product.slug}`}
        category={product.category}
      />

      <section className="pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="container-x">
          <Breadcrumbs
            className="rise-fade"
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Koleksiyon', href: '/new-collection' },
              { label: product.name.tr },
            ]}
          />
          <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-12 lg:gap-16">
            <div className="rise-fade lg:col-span-6" style={d(0.1)}>
              <MediaFrame
                slot={productMediaSlot(product.slug)}
                tone={productTone(product.slug)}
                className="aspect-4/5 w-full lg:sticky lg:top-28"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                animate={false}
              />
            </div>

            <div className="lg:col-span-6 lg:pt-4">
              <p className="kicker rise-fade">Koleksiyon</p>
              <h1 className="display-lg rise mt-6">{product.name.tr}</h1>
              <p className="lead rise-fade mt-6" style={d(0.12)}>
                {product.description.tr}
              </p>

              <div className="rise-fade mt-10 flex flex-col gap-3 sm:flex-row" style={d(0.18)}>
                <Link href="/contact" className="btn btn-primary">
                  Teklif İste
                  <ArrowIcon />
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                  WhatsApp ile Sor
                </a>
              </div>

              {/* Hızlı bilgi — GEO için yapılandırılmış fact block */}
              <dl className="reveal mt-14 border-t border-line">
                {[
                  { term: 'Minimum Sipariş', value: product.moq },
                  { term: 'Teslimat Süresi', value: product.leadTime },
                  { term: 'Satış', value: 'Toptan ve perakende' },
                  { term: 'Üretim Yeri', value: 'Bursa, Türkiye' },
                ].map((row) => (
                  <div
                    key={row.term}
                    className="grid grid-cols-[minmax(0,10rem)_1fr] gap-4 border-b border-line py-4 text-[0.9375rem]"
                  >
                    <dt className="text-charcoal-600">{row.term}</dt>
                    <dd className="font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="reveal mt-12">
                <h2 className="text-caption font-semibold">Kullanım Alanları</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.useCases.map((use) => (
                    <li key={use} className="rounded-full border border-line px-4 py-1.5 text-sm">
                      {use}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal mt-12">
                <h2 className="text-caption font-semibold">Özelleştirme Seçenekleri</h2>
                <ul className="mt-4 border-t border-line">
                  {product.customization.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-b border-line py-3.5">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line py-20 sm:py-24">
          <div className="container-x">
            <div className="reveal flex items-end justify-between gap-6">
              <h2 className="display-md">Benzer ürünler</h2>
              <Link href="/new-collection" className="btn btn-outline btn-sm">
                Koleksiyona dön
              </Link>
            </div>
            <ul className="mt-10 grid gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug} className="reveal">
                  <ProductCard product={r} compact />
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
