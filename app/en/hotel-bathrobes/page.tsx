import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Pencil, Package } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hotel Bathrobe Manufacturer | Başkan Havlu Tekstil',
  description:
    'High-quality bathrobe manufacturing for hotels and spas. Logo embroidery, custom gsm options. Request a quote for bulk hotel bathrobe orders.',
  path: '/en/hotel-bathrobes',
  alternatePath: '/otel-bornozu',
  locale: 'en',
  keywords: [
    'hotel bathrobe manufacturer',
    'hotel bathrobes Turkey',
    'spa bathrobes',
    'hotel textile manufacturer',
    'branded bathrobes',
    'bulk bathrobe orders',
  ],
})

const faqs = [
  {
    question: 'What bathrobe models do you manufacture for hotels?',
    answer:
      'We manufacture Shawl Collar, Kimono Collar, Kids, Hooded and Custom-Made bathrobes. Every model is manufactured at 250 g/m² and above, to hotel standards.',
  },
  {
    question: 'Can you manufacture bathrobes with a hotel logo?',
    answer: 'Yes. We can embroider your hotel logo onto bathrobes. Request a quote for details.',
  },
  {
    question: 'Do you take bulk orders for large hotel chains?',
    answer: 'Yes. We offer special pricing and delivery planning for high-volume bulk orders.',
  },
]

const relatedLinks = [
  { label: 'Wholesale Bathrobes', href: '/en/wholesale-bathrobes' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
  { label: 'Hotel Towels', href: '/en/hotel-towels' },
  { label: 'Collection', href: '/new-collection' },
]

export default function HotelBathrobesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Hotel Bathrobes', url: 'https://baskanhavlu.com/en/hotel-bathrobes' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Hotel Textiles"
        title="Hotel Bathrobe Manufacturer"
        intro="Durable, branded hotel bathrobes at 250 g/m² and above. Shawl collar, kimono collar, kids, hooded and custom-made options."
        ctaPrimaryLabel="Get Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about hotel bathrobe manufacturing."
        features={[
          {
            icon: Shirt,
            title: 'Shawl Collar / Kimono Collar / Hooded',
            desc: 'A model range built to hotel standards',
          },
          {
            icon: Pencil,
            title: 'Logo Embroidery',
            desc: 'Your hotel logo embroidered on request',
          },
          {
            icon: Package,
            title: 'Bulk Orders',
            desc: 'Special pricing for large hotel chains',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
