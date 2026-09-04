import Link from 'next/link'
import { PRODUCTS, type Product } from '@/content/products'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { CollectionPageSchema } from '@/components/schema/CollectionPageSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

const CATEGORY_LABELS: Record<string, string> = {
  havlu: 'Havlu',
  otel: 'Otel Tekstili',
  promosyon: 'Promosyon',
}
const CATEGORY_ORDER = ['havlu', 'otel', 'promosyon']

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

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const waMsg = encodeURIComponent(`Merhaba, "${product.name.tr}" hakkında bilgi almak istiyorum.`)
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${waMsg}`

  return (
    <FadeIn
      delay={delay}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ border: '1px solid #e0d4c0' }}
    >
      {/* Görsel */}
      <Link
        href={`/new-collection/${product.slug}`}
        className="block h-48 overflow-hidden"
        style={{ backgroundColor: '#ede5d8' }}
      >
        <BrandPatternPanel iconSize={56} />
      </Link>

      {/* İçerik */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold" style={{ color: '#1a1a1a' }}>
            <Link href={`/new-collection/${product.slug}`} className="hover:opacity-70">
              {product.name.tr}
            </Link>
          </h3>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
            {product.description.tr}
          </p>
        </div>

        {/* Kullanım alanları */}
        <div className="flex flex-wrap gap-1.5">
          {product.useCases.slice(0, 3).map((use) => (
            <span
              key={use}
              className="rounded-full px-2 py-0.5 text-xs font-medium"
              style={{ backgroundColor: '#fff7f0', color: '#cc6419' }}
            >
              {use}
            </span>
          ))}
        </div>

        {/* MOQ notu */}
        <p className="text-xs" style={{ color: '#8a7050' }}>
          Min. Sipariş: {product.moq}
        </p>

        {/* CTA butonları */}
        <div className="mt-auto flex gap-2">
          <Link
            href="/contact"
            className="flex h-10 flex-1 items-center justify-center rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#e87722' }}
          >
            Teklif İste
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:opacity-80"
            style={{ borderColor: '#25d366', color: '#25d366' }}
            aria-label="WhatsApp ile sor"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

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

      {/* Sayfa başlığı */}
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
              <li className="text-white">Koleksiyon</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Havlu Koleksiyonumuz</h1>
          <p className="mt-3 text-lg" style={{ color: '#b3b3b3' }}>
            Otel, kurum ve promosyon sektörüne özel havlu çözümleri
          </p>
        </div>
      </section>

      {/* Ürün ızgarası — kategoriye göre gruplu */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {categories.map((cat) => (
              <div key={cat.key}>
                <FadeIn className="mb-6 flex items-center gap-3">
                  <h2 className="text-xl font-bold" style={{ color: '#1a1a1a' }}>
                    {cat.label}
                  </h2>
                  <span className="h-px flex-1" style={{ backgroundColor: '#e0d4c0' }} />
                  <span className="text-xs font-medium" style={{ color: '#a88c64' }}>
                    {cat.products.length} ürün
                  </span>
                </FadeIn>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.products.map((product, i) => (
                    <ProductCard key={product.id} product={product} delay={(i % 3) * 0.06} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Alt CTA */}
          <div
            className="mt-16 rounded-2xl p-10 text-center"
            style={{
              background:
                'radial-gradient(circle at 85% 15%, rgba(232,119,34,0.14), transparent 50%), #1a1a1a',
            }}
          >
            <h2 className="text-2xl font-bold text-white">Aradığınızı Bulamadınız mı?</h2>
            <p className="mt-3" style={{ color: '#b3b3b3' }}>
              Özel üretim ve toplu sipariş için bize ulaşın.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="flex h-11 items-center justify-center rounded-md px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#e87722' }}
              >
                Teklif Al
              </Link>
              <a
                href={`${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center rounded-md border px-7 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                WhatsApp ile Sor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
