import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Wholesale Towel Supplier Turkey | Başkan Havlu Tekstil',
  description: 'Wholesale towel supplier from Bursa, Turkey. Bulk towel orders for hotels, corporations and retailers. Flexible MOQ. Export worldwide. Request a quote.',
  path: '/wholesale-towel-supplier',
  locale: 'en',
})

const faqs = [
  { question: 'What is the minimum order quantity for wholesale towels?', answer: 'MOQ varies by product type and availability. Contact us for a tailored quote.' },
  { question: 'Do you offer competitive wholesale pricing?', answer: 'Yes. We offer competitive pricing for bulk orders. Larger quantities attract better pricing.' },
  { question: 'Can you supply towels with custom branding?', answer: 'Yes. Custom logo embroidery and branded packaging are available.' },
  { question: 'Do you export wholesale towels?', answer: 'Yes. We export to Arab countries and Greece and can arrange international shipping.' },
  { question: 'How do I get a wholesale quote?', answer: 'Fill in the contact form or message us on WhatsApp. We respond within 24 hours.' },
]

export default function WholesaleTowelSupplierPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageEn}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://baskanhavlu.com' }, { name: 'Wholesale Towel Supplier', url: 'https://baskanhavlu.com/wholesale-towel-supplier' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Bursa, Turkey — Since 1981</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Wholesale Towel Supplier from Turkey</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>Bulk towel supply for hotels, corporations and retailers. Flexible minimum order, custom branding available.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Get Wholesale Quote</Link>
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
