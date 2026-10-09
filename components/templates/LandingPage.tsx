import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config/site'
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs'
import { FAQSection } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { ServiceSchema } from '@/components/schema/ServiceSchema'
import { MediaFrame, type SwatchTone } from '@/components/atoms/MediaFrame'
import { ArrowIcon, ArrowUpRightIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { contactHref, homeHref, type Locale } from '@/lib/i18n'
import type { MediaSlot } from '@/content/media'
import type { ArtTone, TowelVariant } from '@/components/atoms/TowelArt'
import { ThreadField } from '@/components/effects/ThreadField'
import { SplitText } from '@/components/effects/SplitText'
import { Magnetic, Tilt } from '@/components/effects/Interactive'

/** Fotoğraf yokken her konuya uygun illüstrasyon. */
const ART_BY_SLOT: Partial<
  Record<MediaSlot, { art: TowelVariant; tone: ArtTone; accent?: ArtTone }>
> = {
  wholesale: { art: 'stack', tone: 'stone', accent: 'cream' },
  hotel: { art: 'stack', tone: 'white', accent: 'cream' },
  promotional: { art: 'hanging', tone: 'clay' },
  embroidered: { art: 'monogram', tone: 'white' },
  bathrobe: { art: 'robe', tone: 'cream' },
}

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
  locale?: Locale
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
  /** Hero görseli — content/media.ts yuvası ve fotoğraf yokken kullanılacak kumaş tonu. */
  media?: { slot: MediaSlot; tone: SwatchTone }
}

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/**
 * 16 landing sayfasının ortak şablonu. Bölüm sırası AGENTS.md §8.4 ile aynıdır:
 * Hero (eyebrow + H1 + intro + 2 CTA + güven şeridi) → özellikler → SSS →
 * ilgili sayfalar → CTA bandı. FAQSchema ve BreadcrumbSchema sayfada üretilir.
 */
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
  media = { slot: 'wholesale', tone: 'stone' },
}: LandingPageProps) {
  const en = locale === 'en'
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`
  const trust = [
    { label: en ? 'Founded' : 'Kuruluş', value: String(SITE_CONFIG.founded) },
    {
      label: en ? 'Export markets' : 'İhracat pazarı',
      value: `${SITE_CONFIG.exportRegions.tr.length}+`,
    },
    { label: en ? 'Sales' : 'Satış', value: en ? 'Wholesale & retail' : 'Toptan ve perakende' },
  ]

  return (
    <>
      <ServiceSchema name={title} description={intro} locale={locale} />

      {/* HERO — koyu, iplik alanı, harf harf başlık */}
      <section className="on-dark relative isolate overflow-hidden bg-ink pb-16 pt-10 text-paper sm:pb-24 sm:pt-14">
        <ThreadField className="absolute inset-0 -z-10 h-full w-full opacity-70" />
        <div className="container-x">
          <Breadcrumbs
            dark
            className="rise-fade"
            items={[{ label: en ? 'Home' : 'Ana Sayfa', href: homeHref(locale) }, { label: title }]}
          />
          <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col lg:col-span-7">
              <p className="kicker rise-fade" style={d(0.05)}>
                {eyebrow}
              </p>
              <h1 className="display-lg mt-6 text-paper">
                <SplitText text={title} delay={0.1} />
              </h1>
              <p className="lead rise-fade mt-7 max-w-xl text-charcoal-300" style={d(0.45)}>
                {intro}
              </p>
              <div className="rise-fade mt-10 flex flex-col gap-3 sm:flex-row" style={d(0.55)}>
                <Magnetic className="w-full sm:w-auto">
                  <Link href={contactHref(locale)} className="btn btn-primary w-full">
                    {ctaPrimaryLabel}
                    <ArrowIcon />
                  </Link>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                    {ctaWhatsappLabel}
                  </a>
                </Magnetic>
              </div>
              <dl
                className="rise-fade mt-12 grid grid-cols-3 gap-4 border-t border-line-dark pt-6 lg:mt-auto"
                style={d(0.65)}
              >
                {trust.map((item) => (
                  <div key={item.label} className="flex flex-col-reverse gap-1">
                    <dt className="text-caption text-charcoal-300">{item.label}</dt>
                    <dd className="text-[0.9375rem] font-semibold leading-snug text-paper sm:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rise-fade lg:col-span-5" style={d(0.3)}>
              <Tilt>
                <div className="relative overflow-hidden rounded-[2rem] border border-line-dark">
                  <MediaFrame
                    slot={media.slot}
                    tone={media.tone}
                    art={ART_BY_SLOT[media.slot]?.art ?? 'stack'}
                    artTone={ART_BY_SLOT[media.slot]?.tone ?? 'cream'}
                    artAccent={ART_BY_SLOT[media.slot]?.accent}
                    dark
                    className="aspect-4/3 w-full lg:aspect-4/5"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                    animate={false}
                  />
                  <span className="tilt-glare" aria-hidden="true" />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="bg-beige-100 py-20 sm:py-24">
        <div className="container-x">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <li
                  key={feature.title}
                  className="reveal group border-t border-line-strong py-8 sm:py-10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-orange-400 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-display text-[1.75rem] leading-tight">
                    {feature.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-charcoal-600">{feature.desc}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* SSS — şema sayfada ayrıca üretildiği için burada tekrar edilmez */}
      <FAQSection
        items={faqs}
        withSchema={false}
        kicker={en ? 'FAQ' : 'SSS'}
        title={faqHeading ?? (en ? 'Frequently Asked Questions' : 'Sık Sorulan Sorular')}
        contactText={
          en ? 'Have another question? Contact us' : 'Başka bir sorunuz mu var? İletişime geçin'
        }
        contactHref={contactHref(locale)}
      />

      {/* İlgili sayfalar — iç bağlantı */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <div className="container-x">
            <h2 className="reveal display-sm">
              {relatedHeading ?? (en ? 'Related Categories' : 'İlgili Kategoriler')}
            </h2>
            <ul className="reveal mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-5 text-[1.0625rem] transition-colors hover:text-orange-700"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABand locale={locale} />
    </>
  )
}
