import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Package, FileText, Shirt } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Wholesale Bathrobe Manufacturer | Başkan Havlu Tekstil',
  description:
    'A reliable wholesale bathrobe manufacturer. Flexible MOQ, competitive pricing and fast quotes. Wholesale bathrobes for hotels, spas and corporates.',
  path: '/en/wholesale-bathrobes',
  alternatePath: '/toptan-bornoz',
  locale: 'en',
  keywords: [
    'wholesale bathrobe manufacturer',
    'bulk bathrobes',
    'wholesale bathrobes Turkey',
    'hotel bathrobe wholesale',
    'spa bathrobe wholesale',
    'corporate bathrobes',
  ],
})

const faqs = [
  {
    question: 'What is the minimum order quantity for wholesale bathrobes?',
    answer:
      'Minimum order quantity varies by product type and stock availability. Request a tailored quote for your order.',
  },
  {
    question: 'Do you offer discounts on wholesale bathrobe orders?',
    answer: 'Yes, we offer favorable pricing on large-volume wholesale orders.',
  },
  {
    question: 'Do you issue corporate invoices?',
    answer: 'Yes, invoices are issued for B2B wholesale orders.',
  },
  {
    question: 'Can different models be ordered together?',
    answer:
      'Yes, you can combine Shawl Collar, Kimono Collar, Kids, Hooded and Custom-Made models within the same order.',
  },
]

const relatedLinks = [
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
  { label: 'Hotel Bathrobes', href: '/en/hotel-bathrobes' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Collection', href: '/new-collection' },
]

export default function WholesaleBathrobesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Wholesale Bathrobes', url: 'https://baskanhavlu.com/en/wholesale-bathrobes' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Wholesale"
        title="Wholesale Bathrobe Manufacturer"
        intro="Wholesale bathrobes for hotels, spas and corporates. Flexible order quantity and competitive pricing."
        ctaPrimaryLabel="Get Wholesale Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about wholesale bathrobe orders."
        features={[
          { icon: Package, title: 'Flexible MOQ', desc: 'Minimum order tailored to product type' },
          {
            icon: FileText,
            title: 'Corporate Invoicing',
            desc: 'Full documentation for B2B wholesale orders',
          },
          {
            icon: Shirt,
            title: 'Model Variety',
            desc: 'Shawl collar, kimono collar, kids and hooded models combinable',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
