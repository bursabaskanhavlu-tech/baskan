import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'
import { FAQAccordion } from '@/components/molecules/FAQAccordion'
import { CTABand } from '@/components/organisms/CTABand'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import {
  Scissors,
  Layers,
  Palette,
  ShieldCheck,
  Truck,
  Pencil,
  Package,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us | Başkan Havlu Tekstil',
  description:
    'Towel and bathrobe manufacturing in Bursa, Turkey since 1996. Custom production solutions for hotels, corporates and promotional buyers.',
  path: '/en/about',
  alternatePath: '/about',
  locale: 'en',
  keywords: [
    'Başkan Havlu Tekstil',
    'Bursa towel manufacturer',
    'towel manufacturer Turkey',
    'towel export',
    'Turkish textile company',
    '1996 towel manufacturing',
  ],
})

const processSteps = [
  {
    step: '01',
    icon: Scissors,
    title: 'Yarn Selection',
    desc: 'Production starts with selecting quality raw materials.',
  },
  { step: '02', icon: Layers, title: 'Weaving', desc: 'Weaving carried out in our own facility.' },
  {
    step: '03',
    icon: Palette,
    title: 'Dyeing',
    desc: 'Dyeing and washing with high color fastness.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Every batch is carefully inspected.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Packaging & Shipping',
    desc: 'Custom packaging and on-time delivery.',
  },
]

const privateLabelFeatures = [
  {
    icon: Pencil,
    title: 'Logo Embroidery / Printing',
    desc: 'Your brand applied to towels and bathrobes',
  },
  {
    icon: Palette,
    title: 'Custom Color',
    desc: 'Color production matched to your corporate identity',
  },
  { icon: Package, title: 'Custom Packaging', desc: 'Corporate gift and event packaging' },
]

const faqItems = [
  {
    question: 'Where does Başkan Havlu Tekstil operate?',
    answer:
      'We are a towel and bathrobe manufacturer operating in Havlucular Çarşısı, Osmangazi, Bursa.',
  },
  {
    question: 'Are you a direct factory?',
    answer:
      'Yes. We have been manufacturing towels and bathrobes in our own production facility since 1996 — we are a direct manufacturer, not an intermediary supplier.',
  },
  {
    question: 'Which sectors do you serve?',
    answer:
      'We serve hotels, beauty salons, hairdressers, corporate companies, promotional companies and retail stores.',
  },
  {
    question: 'Do you export?',
    answer:
      'Yes. We export to international customers across 13+ countries, including Greece, Germany, Italy and Arab countries.',
  },
]

export default function EnglishAboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'About', url: 'https://baskanhavlu.com/en/about' },
        ]}
      />
      <FAQSchema items={faqItems} />
      <OrganizationSchema />

      <section
        className="py-20"
        style={{
          background:
            'radial-gradient(circle at 85% 0%, rgba(232,119,34,0.12), transparent 50%), #1a1a1a',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">About</li>
            </ol>
          </nav>
          <FadeIn className="max-w-2xl">
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Our Company
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              Towel and Bathrobe Manufacturer Since {SITE_CONFIG.founded}
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#b3b3b3' }}>
              We have been manufacturing towels and bathrobes in our own production facility in
              Bursa Havlucular Çarşısı since {SITE_CONFIG.founded}.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span
                className="mb-3 block text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#e87722' }}
              >
                Who We Are
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
                Towel and Bathrobe Manufacturing
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Başkan Havlu Tekstil has been a towel and bathrobe manufacturer operating in Bursa
                Osmangazi&apos;s Havlucular Çarşısı since {SITE_CONFIG.founded} — one of
                Turkey&apos;s most established towel trading centers, where we manufacture in our
                own facility. Thanks to our deep industry experience and direct manufacturing
                capability, we deliver high-quality products straight from the source.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                We serve a wide customer base including hotels, beauty salons, corporate companies
                and promotional companies. We also export to international markets, mainly Arab
                countries and Greece.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: String(SITE_CONFIG.founded), label: 'Founded' },
                  { value: String(SITE_CONFIG.exportRegions.en.length), label: 'Export Markets' },
                  {
                    value: `${SITE_CONFIG.productCategories.en.length}+`,
                    label: 'Product Categories',
                  },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#e87722' }}>
                      {s.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#8a7050' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="h-80 overflow-hidden rounded-2xl" aria-hidden={true}>
              <div className="h-full w-full" style={{ backgroundColor: '#ede5d8' }}>
                <BrandPatternPanel iconSize={72} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              How We Work
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Our Manufacturing Process
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-0 lg:flex-row">
            {processSteps.map((s, i) => {
              const StepIcon = s.icon
              return (
                <FadeIn key={s.step} delay={i * 0.08} className="relative flex flex-1">
                  <div className="relative flex flex-1 flex-col items-center px-4 py-6 text-center">
                    {i < processSteps.length - 1 && (
                      <div
                        className="absolute right-0 top-10 hidden h-0.5 w-1/2 lg:block"
                        style={{ backgroundColor: '#e87722', opacity: 0.3 }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md"
                      style={{ backgroundColor: '#e87722' }}
                    >
                      <StepIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      className="mt-2 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#c4a882' }}
                    >
                      Step {s.step}
                    </span>
                    <h3 className="mt-1 font-semibold" style={{ color: '#1a1a1a' }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {s.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Custom Production
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Custom Manufacturing for Your Corporate Identity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl" style={{ color: '#5c5c5c' }}>
              We manufacture towels and bathrobes personalized with your own brand or corporate
              identity.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {privateLabelFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <FadeIn key={f.title} delay={i * 0.08}>
                  <div
                    className="h-full rounded-2xl p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}
                  >
                    <div
                      className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, #fff7f0, #ffe8cc)',
                        border: '1px solid #ffd0a3',
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: '#e87722' }} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {f.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            'radial-gradient(circle at 15% 100%, rgba(232,119,34,0.10), transparent 50%), #1a1a1a',
        }}
      >
        <FadeIn className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span
            className="mb-3 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#e87722' }}
          >
            Export
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Exporting to International Markets
          </h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: '#b3b3b3' }}>
            We export the towels and bathrobes we manufacture to international customers, mainly in
            Arab countries and Greece.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SITE_CONFIG.exportRegions.en.map((region) => (
              <span
                key={region}
                className="rounded-full border px-6 py-2 text-sm font-medium text-white shadow-sm"
                style={{ borderColor: '#e87722', backgroundColor: 'rgba(232,119,34,0.12)' }}
              >
                {region}
              </span>
            ))}
          </div>
          <div
            className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-sm"
            style={{ borderColor: 'rgba(232,119,34,0.4)', color: '#e0d4c0' }}
          >
            <Sparkles className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
            Export logistics are part of our manufacturing process
          </div>
        </FadeIn>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              About Our Company
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      <CTABand locale="en" />
    </>
  )
}
