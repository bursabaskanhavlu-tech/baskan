import { SITE_CONFIG } from '@/lib/config/site'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { MagneticButton } from '@/components/motion-primitives/magnetic-button'

// Bu sayfa yalnızca doğrudan link/QR kod ile paylaşılmak üzere hazırlandı
// (mağaza içi QR, WhatsApp/SMS ile müşteriye gönderim). SEO değeri yoktur,
// bu yüzden aramalardan hariç tutulur (bkz. lib/utils/metadata.ts `noIndex`).
export const metadata: Metadata = generatePageMetadata({
  title: 'Bizi Değerlendirin | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil deneyiminizi Google üzerinden bizimle paylaşın.',
  path: '/yorum',
  noIndex: true,
})

export default function YorumPage() {
  return (
    <main
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(232,119,34,0.14), transparent 55%), #1a1a1a',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(232,119,34,0.05) 0px, rgba(232,119,34,0.05) 2px, transparent 2px, transparent 16px)',
        }}
        aria-hidden="true"
      />

      <FadeIn className="relative flex max-w-xl flex-col items-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            background: 'linear-gradient(135deg, #fff7f0, #ffe8cc)',
            border: '1px solid #ffd0a3',
          }}
        >
          <Star
            className="h-8 w-8"
            style={{ color: '#e87722' }}
            fill="#e87722"
            aria-hidden="true"
          />
        </div>

        <span
          className="mt-6 text-xs font-semibold uppercase tracking-widest"
          style={{ color: '#e87722' }}
        >
          {SITE_CONFIG.name}
        </span>

        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Deneyiminizi Bizimle Paylaşın
        </h1>

        <p className="mt-4 text-lg leading-relaxed" style={{ color: '#b3b3b3' }}>
          {SITE_CONFIG.founded}&apos;dan bu yana Bursa Havlucular Çarşısı&apos;nda hizmet veriyoruz.
          Sizden aldığımız geri bildirim, hem bizi daha iyi bir noktaya taşıyor hem de diğer
          müşterilerimize yol gösteriyor.
        </p>

        <FadeIn delay={0.15} className="mt-10">
          <MagneticButton>
            <a
              href={SITE_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-3 rounded-full px-10 text-base font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              style={{ backgroundColor: '#e87722' }}
            >
              <Star className="h-5 w-5" fill="white" aria-hidden="true" />
              Bizi Google&apos;da Değerlendirin
            </a>
          </MagneticButton>
        </FadeIn>

        <p className="mt-6 text-sm" style={{ color: '#8a7050' }}>
          Bir dakikanızı ayırmanız yeterli — teşekkür ederiz.
        </p>
      </FadeIn>
    </main>
  )
}
