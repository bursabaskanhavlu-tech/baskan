import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Clock, Globe, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Turkish Towel Manufacturer | Başkan Havlu Tekstil',
  description:
    'Başkan Havlu Tekstil — Turkish towel manufacturer based in Bursa since 1996. Hotel, corporate and promotional towels. Export worldwide. Get a quote.',
  path: '/en/turkish-towel-manufacturer',
  locale: 'en',
  alternatePath: '/havlu-ureticisi',
  keywords: [
    'Turkish towel manufacturer',
    'towel manufacturer Turkey',
    'wholesale towels Turkey',
    'hotel towels Turkey',
    'Bursa towel manufacturer',
    'Turkish bath towel manufacturer',
  ],
})

const faqs = [
  {
    question: 'Are you a towel manufacturer or supplier?',
    answer:
      'We are a direct towel manufacturer based in Bursa, Turkey, since 1996. We produce all our towels in our own facility — not a third-party trading company.',
  },
  {
    question: 'What types of towels do you manufacture?',
    answer:
      'We manufacture hand towels, kitchen towels, face towels, foot towels, head towels, bath towels and promotional towels.',
  },
  {
    question: 'Do you export towels internationally?',
    answer:
      'Yes. We export to markets including Greece, Bulgaria, Germany, the United States, Italy, Morocco, Algeria, Kuwait, Arab countries, France, Russia, Ukraine and Palestine.',
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
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
  { label: 'Collection', href: '/new-collection' },
]

export default function TurkishTowelManufacturerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          {
            name: 'Turkish Towel Manufacturer',
            url: 'https://baskanhavlu.com/en/turkish-towel-manufacturer',
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Bursa, Turkey — Since 1996"
        title="Turkish Towel Manufacturer"
        intro="Başkan Havlu Tekstil has been manufacturing quality towels in Bursa, Turkey since 1996. Hotel, corporate and promotional towels with custom logo options."
        ctaPrimaryLabel="Get Wholesale Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about Turkish towel manufacturing."
        features={[
          {
            icon: Clock,
            title: 'Since 1996',
            desc: '25+ years of towel manufacturing experience in Bursa, Turkey',
          },
          { icon: Globe, title: 'Export Ready', desc: 'Exporting to 13+ countries worldwide' },
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
