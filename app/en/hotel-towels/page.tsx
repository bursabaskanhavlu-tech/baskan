import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Gauge, Pencil, Package } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hotel Towel Manufacturer | Başkan Havlu Tekstil',
  description:
    'Hotel towels manufactured at 250 g/m² and above, durable and available with logo embroidery. A reliable hotel towel manufacturer from Bursa, Turkey.',
  path: '/en/hotel-towels',
  alternatePath: '/otel-havlusu',
  locale: 'en',
  keywords: [
    'hotel towel manufacturer',
    'hotel towels Turkey',
    'wholesale hotel towels',
    'hotel textile manufacturer',
    'luxury hotel towels',
    'bulk hotel towels',
  ],
})

const faqs = [
  {
    question: 'What gsm range do you recommend for hotel towels?',
    answer:
      'For the hotel sector we typically manufacture in the 400–600 g/m² range. Different gsm options are available depending on your preference and budget.',
  },
  {
    question: 'Can you manufacture towels with a hotel logo?',
    answer:
      'Yes, we can add your hotel logo via embroidery or jacquard weaving. Minimum order quantity is specified at the quote stage.',
  },
  {
    question: 'How durable are your hotel towels?',
    answer:
      'Towels manufactured for hotel use are built to withstand heavy use and industrial laundering conditions.',
  },
  {
    question: 'Do you take bulk orders for large hotel chains?',
    answer: 'Yes. We offer special pricing and delivery planning for large-volume bulk orders.',
  },
  {
    question: 'Do you send samples?',
    answer:
      'Yes, samples are sent before large orders. Sample terms are defined at the quote stage.',
  },
]

const relatedLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Hotel Bathrobes', href: '/en/hotel-bathrobes' },
  { label: 'Collection', href: '/new-collection' },
]

export default function HotelTowelsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Hotel Towels', url: 'https://baskanhavlu.com/en/hotel-towels' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Hotel Textiles"
        title="Reliable Hotel Towel Manufacturer"
        intro="Durable hotel towels at 250 g/m² and above, with logo embroidery. Supplying every scale from boutique hotels to large chains."
        ctaPrimaryLabel="Get Hotel Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about hotel towel manufacturing."
        features={[
          {
            icon: Gauge,
            title: '250 g/m² and Above',
            desc: 'Durable gsm options built to hotel standards',
          },
          {
            icon: Pencil,
            title: 'Logo Embroidery',
            desc: 'Custom embroidery for your hotel identity',
          },
          {
            icon: Package,
            title: 'Bulk Orders',
            desc: 'Pricing tailored to high-volume orders',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
