import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives/fade-in'

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
    title: 'Bornoz',
    desc: 'Otel ve SPA için toptan bornoz',
    href: '/toptan-bornoz',
    bg: '#4a3728',
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
        <FadeIn className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
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
        </FadeIn>

        {/* Izgara — ilk kart (large) bento düzeninde 2 sütun kaplar */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeIn
              key={cat.title}
              delay={i * 0.05}
              className={cat.large ? 'sm:col-span-2' : undefined}
            >
              <Link
                href={cat.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                  cat.large ? 'min-h-55 sm:min-h-60 sm:p-8' : 'min-h-40'
                }`}
                style={{
                  background: `radial-gradient(circle at 88% 12%, rgba(255,255,255,0.12), transparent 55%), ${cat.bg}`,
                }}
              >
                <div>
                  <h3
                    className={cat.large ? 'text-2xl font-bold' : 'text-lg font-bold'}
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={cat.large ? 'mt-2 max-w-sm text-sm' : 'mt-1 text-sm'}
                    style={{ color: cat.color, opacity: 0.75 }}
                  >
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: cat.color, opacity: 0.9 }}
                  >
                    İncele
                  </span>
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    style={{ color: cat.color, opacity: 0.9 }}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
