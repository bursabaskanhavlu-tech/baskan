import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Turkish Towel Manufacturer & Supplier | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil — Turkish towel supplier based in Bursa since 1981. Hotel, corporate and promotional towels. Export to Arab countries and Greece. Get a quote.',
  path: '/turkish-towel-manufacturer',
  locale: 'en',
})

const faqs = [
  { question: 'Are you a towel manufacturer or supplier?', answer: 'We are a textile supply and custom production coordination company based in Bursa, Turkey, since 1981. We work with trusted manufacturers to deliver high-quality towels.' },
  { question: 'What types of towels do you supply?', answer: 'We supply hand towels, face towels, bath towels, hair towels, foot towels and promotional towels.' },
  { question: 'Do you export towels internationally?', answer: 'Yes. We export to Arab countries and Greece. We can accommodate international shipping requirements.' },
  { question: 'Can you produce towels with custom logo embroidery?', answer: 'Yes. Custom logo embroidery and personalized production are available. Please contact us for details and pricing.' },
  { question: 'What is the minimum order quantity (MOQ)?', answer: 'MOQ varies by product type and availability. Please request a quote for your specific requirements.' },
]

export default function TurkishTowelManufacturerPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageEn}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://baskanhavlu.com' }, { name: 'Turkish Towel Manufacturer', url: 'https://baskanhavlu.com/turkish-towel-manufacturer' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Bursa, Turkey — Since 1981</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Turkish Towel Supplier & Production Coordinator</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
            Başkan Havlu Tekstil has been supplying quality towels from Bursa, Turkey since 1981. Hotel, corporate and promotional towels with custom logo options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Get Wholesale Quote</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[{ t: 'Since 1981', d: '40+ years of textile supply experience from Bursa, Turkey' }, { t: 'Export Ready', d: 'Exporting to Arab countries and Greece' }, { t: 'Custom Production', d: 'Logo embroidery and custom color options' }].map(f => (
              <div key={f.t} className="rounded-xl p-6 text-center" style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}>
                <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>{f.t}</h3>
                <p className="mt-2 text-sm" style={{ color: '#5c5c5c' }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-center" style={{ color: '#1a1a1a' }}>Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y" style={{ borderColor: '#e0d4c0' }}>
            {faqs.map((faq, i) => (<div key={i} className="py-5"><h3 className="font-medium" style={{ color: '#1a1a1a' }}>{faq.question}</h3><p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>{faq.answer}</p></div>))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
