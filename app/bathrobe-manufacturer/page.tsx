import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bathrobe Manufacturer Turkey | Başkan Havlu Tekstil',
  description: 'Turkish bathrobe supplier since 1981. Hotel bathrobes, spa robes with custom logo. Export to Arab countries and Greece. Request a quote today.',
  path: '/bathrobe-manufacturer',
  locale: 'en',
})

const faqs = [
  { question: 'What bathrobe styles do you supply?', answer: 'We supply shawl collar, kimono and waffle bathrobes suitable for hotels and spas.' },
  { question: 'Can you add custom logo embroidery?', answer: 'Yes. Custom logo embroidery is available for all bathrobe models.' },
  { question: 'Do you export bathrobes internationally?', answer: 'Yes. We export to Arab countries and Greece.' },
  { question: 'What is the minimum order quantity?', answer: 'MOQ varies by product. Please request a quote for exact details.' },
]

export default function BathrobeManufacturerPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageEn}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://baskanhavlu.com' }, { name: 'Bathrobe Manufacturer', url: 'https://baskanhavlu.com/bathrobe-manufacturer' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Turkey — Since 1981</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Bathrobe Supplier from Turkey</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>Hotel and spa bathrobes with custom logo embroidery. Shawl collar, kimono and waffle styles available.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Get Quote</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp</a>
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
