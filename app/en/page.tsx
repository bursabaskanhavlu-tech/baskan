import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { CTABand } from '@/components/organisms/CTABand'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { TextReveal } from '@/components/motion-primitives/text-reveal'
import { CountUp } from '@/components/motion-primitives/count-up'
import { Clock, Package, Pencil, Globe, Star, Check } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Towel and Bathrobe Manufacturer, Bursa`,
  description:
    'Turkish towel and bathrobe manufacturer based in Bursa since 1996. Wholesale supply for hotels, corporates and promotional companies. Exporting worldwide.',
  path: '/en',
  alternatePath: '/',
  locale: 'en',
})

const stats = [
  { value: 1996, suffix: '', label: 'Founded', isYear: true },
  { value: SITE_CONFIG.exportRegions.en.length, suffix: '+', label: 'Export Markets' },
  { value: SITE_CONFIG.productCategories.en.length, suffix: '+', label: 'Product Categories' },
  { value: 24, suffix: 'h', label: 'Quote Response Time' },
]

const features = [
  {
    icon: Clock,
    title: 'Since 1996',
    desc: '25+ years of manufacturing experience and our own production facility.',
  },
  {
    icon: Package,
    title: 'Flexible Orders',
    desc: 'We accommodate every order size, small or large.',
  },
  {
    icon: Pencil,
    title: 'Custom Production',
    desc: 'Personalized manufacturing with logo embroidery, custom color and packaging.',
  },
  {
    icon: Globe,
    title: 'Export Experience',
    desc: 'Exporting to 13+ countries, including Greece, Germany, Italy and Arab countries.',
  },
  {
    icon: Star,
    title: 'Hotel & Corporate',
    desc: 'Tailored solutions for hotels, salons, clinics and corporate buyers.',
  },
  {
    icon: Check,
    title: 'Fast Response',
    desc: 'Instant contact and a quick quote process via WhatsApp.',
  },
]

export default function EnglishHomePage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageEn}`

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />

      {/* HERO */}
      <section className="relative overflow-hidden bg-beige-50">
        <div className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-charcoal-900 sm:text-6xl lg:text-7xl">
            <TextReveal text="Towel and Bathrobe" as="span" className="block" />
            <TextReveal
              text="Manufacturer"
              as="span"
              className="block text-orange-500"
              startDelay={0.35}
            />
          </h1>

          <FadeIn delay={0.55}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-600 sm:text-xl">
              Başkan Havlu Tekstil has been manufacturing towels and bathrobes in Bursa, Turkey
              since 1996. We supply hotels, corporates, salons and promotional companies worldwide.
            </p>
          </FadeIn>

          <FadeIn delay={0.68}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/en/contact"
                className="flex h-14 items-center justify-center rounded-full bg-orange-500 px-9 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                Get a Quote
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center rounded-full border-2 bg-white px-9 text-sm font-semibold shadow-sm transition-colors hover:bg-[#25d366]/5"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.85}>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-beige-300 bg-white/80 px-4 py-5 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                    {s.isYear ? s.value : <CountUp value={s.value} suffix={s.suffix} />}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-beige-700">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-beige-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-orange-500">
              Why Başkan Havlu?
            </span>
            <h2 className="text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Your Towel and Bathrobe Manufacturer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
              Manufacturing quality towel and textile solutions in Bursa since 1996, for Turkey and
              the world.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={feature.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-beige-300 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-200 bg-linear-to-br from-orange-50 to-orange-100">
                      <Icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-charcoal-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal-600">{feature.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand locale="en" />
    </>
  )
}
