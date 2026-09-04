import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Sparkles, Palette, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Embroidered Towels | Custom Embroidery | Başkan Havlu Tekstil',
  description:
    'Custom logo-embroidered towels. Personalized towel manufacturing for corporate and hotel sectors. Request a quote today.',
  path: '/en/embroidered-towels',
  alternatePath: '/nakisli-havlu',
  locale: 'en',
  keywords: [
    'embroidered towels',
    'custom embroidery towels',
    'logo embroidered towels',
    'personalized towels',
    'custom towel manufacturer',
    'towel embroidery',
  ],
})

const faqs = [
  {
    question: 'What embroidery techniques can be applied to towels?',
    answer:
      'We offer computerized (border) embroidery and jacquard weaving techniques. The technique is chosen based on order size and design.',
  },
  {
    question: 'What is the minimum order for embroidered towels?',
    answer:
      'It varies depending on the embroidery technique and design complexity. Exact details are provided at the quote stage.',
  },
  {
    question: 'Can I provide my own design?',
    answer:
      'Yes. Simply send us your logo or design — vector formats (AI, EPS) or high-resolution PNG are preferred.',
  },
  {
    question: 'Are embroidered towels wash-resistant?',
    answer:
      'Yes. Embroidery is done with wash-resistant threads. Options suitable for industrial laundering are available.',
  },
]

const relatedLinks = [
  { label: 'Promotional Towels', href: '/en/promotional-towels' },
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Collection', href: '/new-collection' },
]

export default function EmbroideredTowelsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Embroidered Towels', url: 'https://baskanhavlu.com/en/embroidered-towels' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Custom Manufacturing"
        title="Custom Embroidered Towels"
        intro="Personalized towels with logo embroidery and custom detailing, for hotels, corporates and promotional buyers."
        ctaPrimaryLabel="Get Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about embroidered towels."
        features={[
          {
            icon: Sparkles,
            title: 'Computer Embroidery & Jacquard',
            desc: 'Two techniques matched to your design',
          },
          {
            icon: Palette,
            title: 'Your Own Design',
            desc: 'Personalized production with your vector logo',
          },
          {
            icon: ShieldCheck,
            title: 'Wash-Resistant',
            desc: 'Threads suitable for industrial laundering',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
