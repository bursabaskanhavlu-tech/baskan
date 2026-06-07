import Link from 'next/link'
import { PRODUCTS } from '@/content/products'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Havlu Koleksiyonu | Başkan Havlu Tekstil',
  description:
    'El havlusu, yüz havlusu, banyo havlusu, promosyon havlu ve daha fazlası. Otel, kurum ve promosyon sektörüne özel havlu çözümleri.',
  path: '/new-collection',
})

export default function CollectionPage() {
  const waBase = `${SITE_CONFIG.contact.whatsappUrl}?text=`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Koleksiyon', url: 'https://baskanhavlu.com/new-collection' },
        ]}
      />

      {/* Sayfa başlığı */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
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

      {/* Ürün ızgarası */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => {
              const waMsg = encodeURIComponent(`Merhaba, "${product.name.tr}" hakkında bilgi almak istiyorum.`)
              return (
                <div
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-md"
                  style={{ border: '1px solid #e0d4c0' }}
                >
                  {/* Görsel placeholder */}
                  <div
                    className="flex h-48 items-center justify-center"
                    style={{ backgroundColor: '#ede5d8' }}
                  >
                    <span className="text-sm font-medium" style={{ color: '#a88c64' }}>
                      {product.name.tr}
                    </span>
                  </div>

                  {/* İçerik */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <h2 className="text-base font-semibold" style={{ color: '#1a1a1a' }}>
                        {product.name.tr}
                      </h2>
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
                        href={`${waBase}${waMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:opacity-80"
                        style={{ borderColor: '#25d366', color: '#25d366' }}
                        aria-label="WhatsApp ile sor"
                      >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Alt CTA */}
          <div className="mt-16 rounded-2xl p-10 text-center" style={{ backgroundColor: '#1a1a1a' }}>
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
