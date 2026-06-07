import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'

const stats = [
  { value: '1981', label: 'Kuruluş Yılı' },
  { value: '10+', label: 'İhracat Pazarı' },
  { value: '1000+', label: 'Tamamlanan Kurumsal Sipariş' },
  { value: 'Otel · Promosyon · Perakende', label: 'Hizmet Verilen Sektörler' },
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[88vh] grid-cols-1 gap-0 lg:grid-cols-2">

          {/* Sol sütun — metin */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:py-24 lg:pr-16">

            {/* Rozet */}
            <div className="mb-6 inline-flex w-fit items-center gap-2">
              <span
                className="h-px w-8"
                style={{ backgroundColor: '#e87722' }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: '#e87722' }}
              >
                Bursa Havlu Tekstil
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
              style={{ color: '#1a1a1a', fontFamily: 'var(--font-heading, serif)' }}
            >
              1981&apos;den Beri Havlu ve Bornoz Üretiminde Güvenilir İsim
            </h1>

            {/* Alt metin */}
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: '#5c5c5c', maxWidth: '520px' }}
            >
              Başkan Havlu Tekstil; oteller, işletmeler, mağazalar, kuaförler, promosyon firmaları ve kurumsal markalar için toptan havlu, bornoz ve özel üretim tekstil çözümleri sunmaktadır.
            </p>

            {/* CTA butonları */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/new-collection"
                className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#e87722' }}
              >
                Ürünleri İncele
              </Link>
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold transition-colors hover:bg-[#f0ebe3]"
                style={{ borderColor: '#c4a882', color: '#1a1a1a' }}
              >
                Teklif Al
              </Link>
            </div>

            {/* İstatistikler */}
            <div
              className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
              style={{ borderColor: '#e0d4c0' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-xl font-bold sm:text-2xl"
                    style={{ color: '#1a1a1a' }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-1 text-xs leading-snug"
                    style={{ color: '#8a7050' }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ sütun — görsel kolaj */}
          <div
            className="relative hidden lg:flex lg:flex-col lg:justify-center lg:gap-4 lg:py-12"
            aria-hidden="true"
          >
            {/* Ana görsel alanı */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                backgroundColor: '#ede5d8',
                aspectRatio: '4/3',
              }}
            >
              {/*
                Gerçek görseller hazır olduğunda:
                <Image
                  src="/images/hero-towels-stack.jpg"
                  alt="Başkan Havlu Tekstil — istiflenmiş otel havluları"
                  fill
                  sizes="(max-width: 1024px) 0px, 50vw"
                  className="object-cover"
                  priority
                  fetchPriority="high"
                />
              */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  {/* Tekstil dokusu simgesi */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    className="mx-auto h-20 w-20 opacity-40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="8" y="8" width="64" height="64" rx="4" stroke="#a88c64" strokeWidth="2" />
                    <line x1="8" y1="26" x2="72" y2="26" stroke="#a88c64" strokeWidth="1.5" />
                    <line x1="8" y1="44" x2="72" y2="44" stroke="#a88c64" strokeWidth="1.5" />
                    <line x1="8" y1="62" x2="72" y2="62" stroke="#a88c64" strokeWidth="1.5" />
                    <line x1="26" y1="8" x2="26" y2="72" stroke="#a88c64" strokeWidth="1.5" />
                    <line x1="44" y1="8" x2="44" y2="72" stroke="#a88c64" strokeWidth="1.5" />
                    <line x1="62" y1="8" x2="62" y2="72" stroke="#a88c64" strokeWidth="1.5" />
                  </svg>
                  <p
                    className="mt-4 text-sm font-medium"
                    style={{ color: '#a88c64' }}
                  >
                    Otel havlusu görseli
                  </p>
                  <p className="mt-1 text-xs" style={{ color: '#c4a882' }}>
                    /public/images/hero-towels-stack.jpg
                  </p>
                </div>
              </div>

              {/* Marka etiketi — görsel üzeri */}
              <div
                className="absolute bottom-4 left-4 rounded-lg px-4 py-2.5"
                style={{ backgroundColor: 'rgba(26,26,26,0.85)' }}
              >
                <p className="text-xs font-semibold text-white">
                  Başkan Havlu Tekstil
                </p>
                <p className="text-xs" style={{ color: '#e87722' }}>
                  Bursa — 1981
                </p>
              </div>
            </div>

            {/* Alt iki küçük kart */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-4"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                <span className="text-2xl" role="img" aria-hidden="true">🏨</span>
                <div>
                  <p className="text-xs font-semibold text-white">Otel Havlusu</p>
                  <p className="text-xs" style={{ color: '#8a7050' }}>Yüksek gramaj</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-4"
                style={{ backgroundColor: '#e87722' }}
              >
                <span className="text-2xl" role="img" aria-hidden="true">🎁</span>
                <div>
                  <p className="text-xs font-semibold text-white">Promosyon</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>Logo nakışı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobil görsel — lg'den küçük ekranlarda alt şerit */}
      <div
        className="flex items-center justify-center py-10 lg:hidden"
        style={{ backgroundColor: '#ede5d8' }}
        aria-hidden="true"
      >
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {[
            { emoji: '🏨', label: 'Otel Havlusu' },
            { emoji: '🛁', label: 'Bornoz' },
            { emoji: '🎁', label: 'Promosyon' },
            { emoji: '✂️', label: 'Özel Üretim' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full px-4 py-2"
              style={{ backgroundColor: 'white', border: '1px solid #e0d4c0' }}
            >
              <span className="text-base" role="img" aria-hidden="true">{item.emoji}</span>
              <span className="text-xs font-medium" style={{ color: '#1a1a1a' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
