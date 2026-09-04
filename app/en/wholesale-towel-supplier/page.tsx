import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Package, Tag, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Wholesale Towel Manufacturer Turkey | Başkan Havlu Tekstil',
  description:
    'Wholesale towel manufacturer from Bursa, Turkey. Bulk towel orders for hotels, corporations and retailers. Flexible MOQ. Export worldwide. Request a quote.',
  path: '/en/wholesale-towel-supplier',
  alternatePath: '/toptan-havlu',
  locale: 'en',
  keywords: [
    'wholesale towel manufacturer',
    'bulk towels Turkey',
    'wholesale towels Turkey',
    'hotel towel wholesale',
    'towel exporter Turkey',
    'towel manufacturer Bursa',
  ],
})

const faqs = [
  {
    question: 'What is the minimum order quantity for wholesale towels?',
    answer: 'MOQ varies by product type and availability. Contact us for a tailored quote.',
  },
  {
    question: 'Do you offer competitive wholesale pricing?',
    answer:
      'Yes. We offer competitive pricing for bulk orders. Larger quantities attract better pricing.',
  },
  {
    question: 'Can you supply towels with custom branding?',
    answer: 'Yes. Custom logo embroidery and branded packaging are available.',
  },
  {
    question: 'Do you export wholesale towels?',
    answer: 'Yes. We export to 13+ countries and can arrange international shipping.',
  },
  {
    question: 'How do I get a wholesale quote?',
    answer: 'Fill in the contact form or message us on WhatsApp. We respond within 24 hours.',
  },
]

const relatedLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
  { label: 'Collection', href: '/new-collection' },
]

export default function WholesaleTowelSupplierPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          {
            name: 'Wholesale Towel Manufacturer',
            url: 'https://baskanhavlu.com/en/wholesale-towel-supplier',
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Bursa, Turkey — Since 1996"
        title="Wholesale Towel Manufacturer from Turkey"
        intro="Bulk towel supply for hotels, corporations and retailers. Flexible minimum order, custom branding available."
        ctaPrimaryLabel="Get Wholesale Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get a wholesale towel quote."
        features={[
          {
            icon: Package,
            title: 'Flexible MOQ',
            desc: 'Minimum order tailored to your business size',
          },
          {
            icon: Tag,
            title: 'Competitive Pricing',
            desc: 'Better rates on larger bulk quantities',
          },
          { icon: Pencil, title: 'Custom Branding', desc: 'Logo embroidery and branded packaging' },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
