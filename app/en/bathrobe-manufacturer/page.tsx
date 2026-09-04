import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Baby, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bathrobe Manufacturer Turkey | Başkan Havlu Tekstil',
  description:
    'Turkish bathrobe manufacturer since 1996. Shawl collar, kimono, kids, hooded and custom bathrobes. Export worldwide. Request a quote today.',
  path: '/en/bathrobe-manufacturer',
  alternatePath: '/bornoz-ureticisi',
  locale: 'en',
  keywords: [
    'bathrobe manufacturer Turkey',
    'bathrobe supplier Turkey',
    'hotel bathrobe Turkey',
    'spa bathrobe manufacturer',
    'wholesale bathrobe Turkey',
    'hooded bathrobe manufacturer',
  ],
})

const faqs = [
  {
    question: 'What bathrobe models do you manufacture?',
    answer:
      'We manufacture Shawl Collar Bathrobes, Kimono Collar Bathrobes, Kids Bathrobes, Hooded Bathrobes and Custom-Made Bathrobes for hotels, spas and corporate buyers.',
  },
  {
    question: 'Can you add custom logo embroidery?',
    answer: 'Yes. Custom logo embroidery is available for all bathrobe models.',
  },
  {
    question: 'Do you export bathrobes internationally?',
    answer:
      'Yes. We export to markets including Greece, Bulgaria, Germany, Italy and Arab countries.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'MOQ varies by product. Please request a quote for exact details.',
  },
]

const relatedLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Collection', href: '/new-collection' },
]

export default function BathrobeManufacturerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          {
            name: 'Bathrobe Manufacturer',
            url: 'https://baskanhavlu.com/en/bathrobe-manufacturer',
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Turkey — Since 1996"
        title="Bathrobe Manufacturer from Turkey"
        intro="Shawl collar, kimono collar, kids, hooded and custom-made bathrobes for hotels and spas."
        ctaPrimaryLabel="Get Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about bathrobe manufacturing."
        features={[
          { icon: Shirt, title: 'Shawl Collar Bathrobe', desc: 'Classic hotel and spa choice' },
          { icon: Shirt, title: 'Kimono Collar Bathrobe', desc: 'Elegant, lightweight cut' },
          { icon: Baby, title: 'Kids Bathrobe', desc: 'Same quality in smaller sizes' },
          { icon: Shirt, title: 'Hooded Bathrobe', desc: 'Ideal for spa and wellness' },
          {
            icon: Pencil,
            title: 'Custom-Made Bathrobe',
            desc: 'Logo, color and weight tailored to your brand',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
