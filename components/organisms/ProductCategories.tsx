import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Otel Havlusu',
    desc: 'Oteller için yüksek gramajlı, dayanıklı havlu çözümleri',
    href: '/otel-havlusu',
    bg: '#e87722',
    color: 'white',
    large: true,
  },
  {
    title: 'Promosyon Havlu',
    desc: 'Logo nakışlı kurumsal havlular',
    href: '/promosyon-havlu',
    bg: '#1a1a1a',
    color: 'white',
    large: false,
  },
  {
    title: 'Toptan Havlu',
    desc: 'Esnek MOQ ile toplu sipariş',
    href: '/toptan-havlu',
    bg: '#c4a882',
    color: 'white',
    large: false,
  },
  {
    title: 'El & Yüz Havlusu',
    desc: 'Otel ve kurum için set çözümleri',
    href: '/otel-havlusu',
    bg: '#2d2d2d',
    color: 'white',
    large: false,
  },
  {
    title: 'Nakışlı Havlu',
    desc: 'Kişiselleştirilmiş tasarımlar',
    href: '/nakisli-havlu',
    bg: '#faf8f5',
    color: '#1a1a1a',
    large: false,
  },
  {
    title: 'Kuaför & Salon',
    desc: 'Güzellik sektörüne özel',
    href: '/new-collection',
    bg: '#fff7f0',
    color: '#1a1a1a',
    large: false,
  },
]

export function ProductCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Ürün Kategorileri
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Her Sektöre Özel Çözüm
            </h2>
          </div>
          <Link
            href="/new-collection"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#e87722' }}
          >
            Tüm Ürünler <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Izgara */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: cat.bg }}
            >
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ color: cat.color, opacity: 0.75 }}
                >
                  {cat.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1">
                <span className="text-xs font-semibold" style={{ color: cat.color, opacity: 0.9 }}>
                  İncele
                </span>
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  style={{ color: cat.color, opacity: 0.9 }}
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
