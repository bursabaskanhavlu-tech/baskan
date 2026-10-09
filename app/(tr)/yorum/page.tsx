import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'

// Bu sayfa yalnızca doğrudan link/QR kod ile paylaşılmak üzere hazırlandı
// (mağaza içi QR, WhatsApp/SMS ile müşteriye gönderim). SEO değeri yoktur,
// bu yüzden aramalardan hariç tutulur (bkz. lib/utils/metadata.ts `noIndex`).
export const metadata: Metadata = generatePageMetadata({
  title: 'Bizi Değerlendirin | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil deneyiminizi Google üzerinden bizimle paylaşın.',
  path: '/yorum',
  noIndex: true,
})

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

export default function YorumPage() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-paper">
      <div
        className="swatch swatch-charcoal swatch-plain absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div className="container-x relative flex min-h-[80vh] flex-col justify-center py-24">
        <p className="kicker rise-fade">{SITE_CONFIG.name}</p>
        <h1 className="display-lg rise mt-6 max-w-4xl text-paper">
          Deneyiminizi bizimle <em className="text-orange-400">paylaşın</em>
        </h1>
        <p className="lead rise-fade mt-6 max-w-xl text-charcoal-300" style={d(0.12)}>
          {SITE_CONFIG.founded}&apos;dan bu yana Bursa Havlucular Çarşısı&apos;nda hizmet veriyoruz.
          Sizden aldığımız geri bildirim, hem bizi daha iyi bir noktaya taşıyor hem de diğer
          müşterilerimize yol gösteriyor.
        </p>
        <div className="rise-fade mt-10" style={d(0.2)}>
          <a
            href={SITE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Bizi Google&apos;da Değerlendirin
            <ArrowUpRightIcon />
          </a>
        </div>
        <p className="mt-6 text-sm text-charcoal-300">
          Bir dakikanızı ayırmanız yeterli. Teşekkür ederiz.
        </p>
      </div>
    </section>
  )
}
