import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FadeIn } from '@/components/motion-primitives/fade-in'

export function CTABand() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <section
      className="py-20"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 45%), #e87722',
      }}
    >
      <FadeIn className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-white sm:text-4xl"
          style={{ fontFamily: 'var(--font-heading, serif)' }}
        >
          Hemen Teklif Alın
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Otel, kurum veya promosyon sektörü için havlu tedariki hakkında bilgi almak ister misiniz?
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'white', color: '#e87722' }}
          >
            Teklif Formu
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-md border-2 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            style={{ borderColor: 'white' }}
          >
            WhatsApp ile Ulaş
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
