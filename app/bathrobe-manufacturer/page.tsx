import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Pencil, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bathrobe Manufacturer Turkey | Başkan Havlu Tekstil',
  description:
    'Turkish bathrobe supplier since 1981. Hotel bathrobes, spa robes with custom logo. Export to Arab countries and Greece. Request a quote today.',
  path: '/bathrobe-manufacturer',
  locale: 'en',
  keywords: [
    'bathrobe manufacturer Turkey',
    'bathrobe supplier Turkey',
    'hotel bathrobe Turkey',
    'spa bathrobe supplier',
    'wholesale bathrobe Turkey',
    'custom logo bathrobe',
  ],
})

const faqs = [
  {
    question: 'What bathrobe styles do you supply?',
    answer: 'We supply shawl collar, kimono and waffle bathrobes suitable for hotels and spas.',
  },
  {
    question: 'Can you add custom logo embroidery?',
    answer: 'Yes. Custom logo embroidery is available for all bathrobe models.',
  },
  {
    question: 'Do you export bathrobes internationally?',
    answer: 'Yes. We export to Arab countries and Greece.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'MOQ varies by product. Please request a quote for exact details.',
  },
]

const relatedLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Supplier', href: '/wholesale-towel-supplier' },
  { label: 'Collection', href: '/new-collection' },
]

export default function BathrobeManufacturerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com' },
          { name: 'Bathrobe Manufacturer', url: 'https://baskanhavlu.com/bathrobe-manufacturer' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Turkey — Since 1981"
        title="Bathrobe Supplier from Turkey"
        intro="Hotel and spa bathrobes with custom logo embroidery. Shawl collar, kimono and waffle styles available."
        ctaPrimaryLabel="Get Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about bathrobe manufacturing."
        features={[
          {
            icon: Shirt,
            title: 'Shawl Collar / Kimono / Waffle',
            desc: 'Three style options for every setting',
          },
          {
            icon: Pencil,
            title: 'Custom Logo Embroidery',
            desc: 'Available on all bathrobe models',
          },
          { icon: Globe, title: 'Export Ready', desc: 'Shipping to Arab countries and Greece' },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
