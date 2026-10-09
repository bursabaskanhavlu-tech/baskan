import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTS } from '@/content/products'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { CollectionPageSchema } from '@/components/schema/CollectionPageSchema'
import { PageHero } from '@/components/molecules/PageHero'
import { ProductCard } from '@/components/molecules/ProductCard'
import { CTABand } from '@/components/organisms/CTABand'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'

const CATEGORY_LABELS: Record<string, string> = {
  havlu: 'Havlu',
  otel: 'Otel Tekstili',
  bornoz: 'Bornoz',
  promosyon: 'Promosyon',
}
const CATEGORY_ORDER = ['havlu', 'otel', 'bornoz', 'promosyon']

export const metadata: Metadata = generatePageMetadata({
  title: 'Havlu Koleksiyonu | Başkan Havlu Tekstil',
  description:
    'El havlusu, yüz havlusu, banyo havlusu, promosyon havlu ve daha fazlası. Otel, kurum ve promosyon sektörüne özel havlu çözümleri.',
  path: '/new-collection',
  keywords: [
    'havlu koleksiyonu',
    'el havlusu',
    'banyo havlusu',
    'yüz havlusu',
    'kafa havlusu',
    'promosyon havlu',
    'otel havlusu',
  ],
})

export default function CollectionPage() {
  const categories = CATEGORY_ORDER.map((key) => ({
    key,
    label: CATEGORY_LABELS[key] ?? key,
    products: PRODUCTS.filter((p) => p.category === key),
  })).filter((c) => c.products.length > 0)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Koleksiyon', url: 'https://baskanhavlu.com/new-collection' },
        ]}
      />
      <CollectionPageSchema
        name="Havlu Koleksiyonu"
        description="El havlusu, yüz havlusu, banyo havlusu, promosyon havlu ve daha fazlası."
        url={`${SITE_CONFIG.url}/new-collection`}
        items={PRODUCTS.map((p) => ({
          name: p.name.tr,
          url: `${SITE_CONFIG.url}/new-collection/${p.slug}`,
        }))}
      />

      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Koleksiyon' }]}
        kicker="Toptan ve perakende"
        title="Havlu Koleksiyonumuz"
        lead="Otel, kurum ve promosyon sektörüne özel havlu çözümleri. Her ürün logo nakışı, özel renk ve ölçüyle üretilebilir; fiyat ve minimum sipariş teklif aşamasında netleşir."
        aside={
          <nav aria-label="Kategoriler" className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((c) => (
              <a key={c.key} href={`#${c.key}`} className="btn btn-outline btn-sm">
                {c.label}
              </a>
            ))}
          </nav>
        }
      />

      <div className="pb-24 sm:pb-32">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="container-x scroll-mt-28 pt-12 first:pt-0">
            <div className="reveal flex items-baseline justify-between gap-6 border-t border-line pt-6">
              <h2 className="display-sm">{cat.label}</h2>
              <span className="text-caption text-charcoal-600">{cat.products.length} ürün</span>
            </div>
            <ul className="mt-10 grid gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((product) => (
                <li key={product.id} className="reveal">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="container-x mt-24">
          <div className="reveal grid gap-8 border border-line bg-white p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="display-md">Aradığınızı bulamadınız mı?</h2>
              <p className="lead mt-4">
                Özel üretim ve toplu sipariş için bize ulaşın. Nevresim, pike ve otel yatak tekstili
                dahil tüm ürün gruplarımız için teklif verebiliriz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link href="/contact" className="btn btn-primary">
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTABand />
    </>
  )
}
