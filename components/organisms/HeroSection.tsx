import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'

export function HeroSection() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
      {/* Dekoratif arka plan */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, #ffe8cc 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">

          {/* Sol: Metin içeriği */}
          <div className="flex flex-1 flex-col gap-6">
            {/* Rozet */}
            <span
              className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ backgroundColor: '#fff7f0', color: '#cc6419' }}
            >
              Bursa — 1981&apos;den Bu Yana
            </span>

            {/* H1 */}
            <h1
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: '#1a1a1a', fontFamily: 'var(--font-heading, serif)' }}
            >
              Otel ve Kurumlar İçin{' '}
              <span style={{ color: '#e87722' }}>Premium Havlu</span>{' '}
              Tedariki
            </h1>

            {/* Alt başlık */}
            <p
              className="max-w-xl text-lg leading-relaxed"
              style={{ color: '#5c5c5c' }}
            >
              1981&apos;den bu yana Bursa&apos;dan tüm Türkiye&apos;ye ve Arap ülkeleri ile Yunanistan&apos;a havlu ve tekstil tedariki sağlıyoruz. Otel, kurum, kuaför ve promosyon sektörüne özel çözümler.
            </p>

            {/* Güven sinyalleri */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '1981', label: "Kuruluş Yılı" },
                { value: 'Arap\xa0Ülkeleri', label: "İhracat" },
                { value: 'Yunanistan', label: "İhracat" },
                { value: 'Otel & Kurum', label: "Sektörler" },
              ].map((stat) => (
                <div key={stat.label + stat.value} className="flex flex-col">
                  <span className="text-lg font-bold" style={{ color: '#e87722' }}>{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider" style={{ color: '#8a7050' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA butonları */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-md px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#e87722' }}
              >
                Teklif Al
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-md border px-7 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                WhatsApp ile Yaz
              </a>
              <Link
                href="/new-collection"
                className="flex h-12 items-center justify-center rounded-md border px-7 text-sm font-semibold transition-colors hover:bg-[#f5f0ea]"
                style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
              >
                Koleksiyonu Gör
              </Link>
            </div>
          </div>

          {/* Sağ: Görsel placeholder (fotoğraf gelince değişecek) */}
          <div
            className="relative hidden h-[400px] w-full max-w-md flex-shrink-0 overflow-hidden rounded-3xl lg:block"
            style={{ backgroundColor: '#ede5d8' }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#e87722' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: '#a88c64' }}>
                  Ürün görseli eklenecek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
