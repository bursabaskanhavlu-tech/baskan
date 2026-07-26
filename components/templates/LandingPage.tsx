import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Calendar, Globe2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQAccordion } from '@/components/molecules/FAQAccordion'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { CTABand } from '@/components/organisms/CTABand'

interface LandingFeature {
  icon: LucideIcon
  title: string
  desc: string
}

interface LandingFAQItem {
  question: string
  answer: string
}

interface LandingRelatedLink {
  label: string
  href: string
}

interface LandingPageProps {
  locale?: 'tr' | 'en'
  eyebrow: string
  title: string
  intro: string
  ctaPrimaryLabel: string
  ctaWhatsappLabel: string
  waMessage: string
  features: LandingFeature[]
  faqs: LandingFAQItem[]
  faqHeading?: string
  relatedLinks?: LandingRelatedLink[]
  relatedHeading?: string
}

export function LandingPage({
  locale = 'tr',
  eyebrow,
  title,
  intro,
  ctaPrimaryLabel,
  ctaWhatsappLabel,
  waMessage,
  features,
  faqs,
  faqHeading,
  relatedLinks,
  relatedHeading,
}: LandingPageProps) {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`
  const exportRegion =
    locale === 'en'
      ? SITE_CONFIG.exportRegions.en.join(' & ')
      : SITE_CONFIG.exportRegions.tr.join(' & ')

  return (
    <>
      {/* HERO */}
      <section
        className="py-20"
        style={{
          background:
            'radial-gradient(circle at 20% 15%, rgba(232,119,34,0.08), transparent 55%), radial-gradient(circle at 85% 85%, rgba(196,168,130,0.10), transparent 50%), #faf8f5',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              {eyebrow}
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>
              {title}
            </h1>
            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed"
              style={{ color: '#5c5c5c' }}
            >
              {intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#e87722' }}
              >
                {ctaPrimaryLabel}
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                {ctaWhatsappLabel}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div
              className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-6 border-t pt-6"
              style={{ borderColor: '#e0d4c0' }}
            >
              <span className="flex items-center gap-2 text-sm" style={{ color: '#8a7050' }}>
                <Calendar className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
                {locale === 'en' ? 'Since' : 'Kuruluş'} {SITE_CONFIG.founded}
              </span>
              <span className="flex items-center gap-2 text-sm" style={{ color: '#8a7050' }}>
                <Globe2 className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
                {exportRegion}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={feature.title} delay={i * 0.08}>
                  <div
                    className="h-full rounded-xl p-6 text-center transition-shadow hover:shadow-md"
                    style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}
                  >
                    <div
                      className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#fff7f0' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: '#e87722' }} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: '#1a1a1a' }}>
              {faqHeading ??
                (locale === 'en' ? 'Frequently Asked Questions' : 'Sık Sorulan Sorular')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQAccordion items={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* İlgili Sayfalar */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-6 text-center text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                {relatedHeading ?? (locale === 'en' ? 'Related Categories' : 'İlgili Kategoriler')}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-[#e87722] hover:text-[#e87722]"
                    style={{ borderColor: '#e0d4c0', color: '#5c5c5c' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
