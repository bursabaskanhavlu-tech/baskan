import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { FadeIn } from '@/components/motion-primitives/fade-in'

const stats = [
  { value: '1981', label: 'Kuruluş Yılı' },
  { value: 'Arap Ülkeleri & Yunanistan', label: 'İhracat Pazarları' },
  { value: 'Otel · Kurum · Promosyon', label: 'Hizmet Verilen Sektörler' },
  { value: 'Özel Üretim', label: 'Logo Nakışı Dahil' },
]

export function HeroSection() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 12% 8%, rgba(232,119,34,0.07), transparent 45%), radial-gradient(circle at 92% 92%, rgba(196,168,130,0.12), transparent 50%), #faf8f5',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[88vh] grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Sol sütun — metin */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:py-24 lg:pr-16">
            <FadeIn>
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
                Başkan Havlu Tekstil <span style={{ color: '#e87722' }}>Üretim &amp; Toptan</span>
              </h1>

              {/* Alt metin */}
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: '#5c5c5c', maxWidth: '520px' }}
              >
                1981&apos;den bu yana Bursa&apos;da havlu ve bornoz üreten Başkan Havlu Tekstil;
                oteller, kurumlar, kuaförler ve promosyon firmalarına toptan satış yapmaktadır.
              </p>
            </FadeIn>

            {/* CTA butonları */}
            <FadeIn delay={0.1}>
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
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-md border px-8 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ borderColor: '#25d366', color: '#25d366' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </FadeIn>

            {/* İstatistikler */}
            <FadeIn delay={0.18}>
              <div
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
                style={{ borderColor: '#e0d4c0' }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold sm:text-2xl" style={{ color: '#1a1a1a' }}>
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug" style={{ color: '#8a7050' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Sağ sütun — görsel kolaj */}
          <FadeIn
            delay={0.15}
            aria-hidden={true}
            className="relative hidden lg:flex lg:flex-col lg:justify-center lg:gap-4 lg:py-12"
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
                Gerçek fabrika/ürün fotoğrafları temin edildiğinde bu panel
                <Image src="/images/hero-towels-stack.jpg" fill priority ... /> ile değiştirilebilir.
              */}
              <BrandPatternPanel iconSize={104} />

              {/* Marka etiketi — görsel üzeri */}
              <div
                className="absolute bottom-4 left-4 rounded-lg px-4 py-2.5"
                style={{ backgroundColor: 'rgba(26,26,26,0.85)' }}
              >
                <p className="text-xs font-semibold text-white">Başkan Havlu Tekstil</p>
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
                {/* Otel ikonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 10h2M8 14h2M14 10h2M14 14h2" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-white">Otel Havlusu</p>
                  <p className="text-xs" style={{ color: '#8a7050' }}>
                    Yüksek gramaj
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-4"
                style={{ backgroundColor: '#e87722' }}
              >
                {/* Promosyon/nakış ikonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-white">Promosyon</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Logo nakışı
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
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
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 10h2M8 14h2M14 10h2M14 14h2" />
                </svg>
              ),
              label: 'Otel Havlusu',
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4 12h8M4 8h8M4 16h4" />
                  <path d="M15 8a5 5 0 0 1 0 8" />
                  <path d="M18 5a9 9 0 0 1 0 14" />
                </svg>
              ),
              label: 'Bornoz',
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              ),
              label: 'Promosyon',
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              ),
              label: 'Özel Üretim',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full px-4 py-2"
              style={{ backgroundColor: 'white', border: '1px solid #e0d4c0', color: '#1a1a1a' }}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
