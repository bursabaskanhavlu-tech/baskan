import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Clock, Globe, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Turkish Towel Manufacturer & Supplier | Başkan Havlu Tekstil',
  description:
    'Başkan Havlu Tekstil — Turkish towel supplier based in Bursa since 1981. Hotel, corporate and promotional towels. Export to Arab countries and Greece. Get a quote.',
  path: '/turkish-towel-manufacturer',
  locale: 'en',
  keywords: [
    'Turkish towel manufacturer',
    'towel supplier Turkey',
    'wholesale towels Turkey',
    'hotel towels Turkey',
    'Bursa towel manufacturer',
    'Turkish bath towel supplier',
  ],
})

const faqs = [
  {
    question: 'Are you a towel manufacturer or supplier?',
    answer:
      'We are a textile supply and custom production coordination company based in Bursa, Turkey, since 1981. We work with trusted manufacturers to deliver high-quality towels.',
  },
  {
    question: 'What types of towels do you supply?',
    answer:
      'We supply hand towels, face towels, bath towels, hair towels, foot towels and promotional towels.',
  },
  {
    question: 'Do you export towels internationally?',
    answer:
      'Yes. We export to Arab countries and Greece. We can accommodate international shipping requirements.',
  },
  {
    question: 'Can you produce towels with custom logo embroidery?',
    answer:
      'Yes. Custom logo embroidery and personalized production are available. Please contact us for details and pricing.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'MOQ varies by product type and availability. Please request a quote for your specific requirements.',
  },
]

const relatedLinks = [
  { label: 'Wholesale Towel Supplier', href: '/wholesale-towel-supplier' },
  { label: 'Bathrobe Manufacturer', href: '/bathrobe-manufacturer' },
  { label: 'Collection', href: '/new-collection' },
]

export default function TurkishTowelManufacturerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com' },
          {
            name: 'Turkish Towel Manufacturer',
            url: 'https://baskanhavlu.com/turkish-towel-manufacturer',
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Bursa, Turkey — Since 1981"
        title="Turkish Towel Supplier & Production Coordinator"
        intro="Başkan Havlu Tekstil has been supplying quality towels from Bursa, Turkey since 1981. Hotel, corporate and promotional towels with custom logo options."
        ctaPrimaryLabel="Get Wholesale Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about Turkish towel manufacturing."
        features={[
          {
            icon: Clock,
            title: 'Since 1981',
            desc: '40+ years of textile supply experience from Bursa, Turkey',
          },
          { icon: Globe, title: 'Export Ready', desc: 'Exporting to Arab countries and Greece' },
          {
            icon: Pencil,
            title: 'Custom Production',
            desc: 'Logo embroidery and custom color options',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
