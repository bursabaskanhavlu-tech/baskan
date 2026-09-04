import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { TextReveal } from '@/components/motion-primitives/text-reveal'
import { MagneticButton } from '@/components/motion-primitives/magnetic-button'

interface CTABandProps {
  locale?: 'tr' | 'en'
}

export function CTABand({ locale = 'tr' }: CTABandProps) {
  const isEn = locale === 'en'
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${isEn ? SITE_CONFIG.contact.whatsappMessageEn : SITE_CONFIG.contact.whatsappMessageTr}`
  const contactHref = isEn ? '/en/contact' : '/contact'

  return (
    <section
      className="py-24"
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
          <TextReveal text={isEn ? 'Get a Quote Now' : 'Hemen Teklif Alın'} wordDelay={0.08} />
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {isEn
            ? 'Want to learn more about our hotel, corporate or promotional towel manufacturing?'
            : 'Otel, kurum veya promosyon sektörü için havlu imalatımız hakkında bilgi almak ister misiniz?'}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Link
              href={contactHref}
              className="flex h-14 items-center justify-center rounded-full bg-white px-9 text-sm font-semibold text-orange-500 shadow-lg transition-colors hover:bg-beige-50"
            >
              {isEn ? 'Quote Form' : 'Teklif Formu'}
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-full border-2 border-white px-9 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {isEn ? 'Contact via WhatsApp' : 'WhatsApp ile Ulaş'}
            </a>
          </MagneticButton>
        </div>
      </FadeIn>
    </section>
  )
}
