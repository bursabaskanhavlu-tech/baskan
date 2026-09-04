import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Pencil, Gift, Palette } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Promotional Towels | Custom Logo Towels | Başkan Havlu Tekstil',
  description:
    'Custom logo promotional towels for corporate branding. Manufactured for events, trade shows and corporate gifts. Request a quote today.',
  path: '/en/promotional-towels',
  alternatePath: '/promosyon-havlu',
  locale: 'en',
  keywords: [
    'promotional towels',
    'custom logo towels',
    'corporate towels',
    'branded towels',
    'corporate gift towels',
    'printed towels',
  ],
})

const faqs = [
  {
    question: 'Can you print or embroider logos on promotional towels?',
    answer:
      'Yes. We can apply your brand via embroidery or printing. The difference between the two techniques and pricing is explained at the quote stage.',
  },
  {
    question: 'What is the minimum order for promotional towels?',
    answer:
      'Minimum order quantity varies by product type and branding technique. Please request a quote for details.',
  },
  {
    question: 'Can you prepare corporate gift sets?',
    answer: 'Yes, we can organize custom packaging and corporate gift sets.',
  },
  {
    question: 'Do you offer color options?',
    answer:
      'Many color options are available. We can also arrange custom color production matched to your Pantone code.',
  },
  {
    question: 'What is the delivery time?',
    answer:
      'It depends on order size and branding technique. The exact timeline is confirmed at the quote stage.',
  },
]

const relatedLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Collection', href: '/new-collection' },
]

export default function PromotionalTowelsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Promotional Towels', url: 'https://baskanhavlu.com/en/promotional-towels' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        locale="en"
        eyebrow="Corporate & Promotional"
        title="Custom Logo Promotional Towels"
        intro="Embroidered or printed custom towels for events, trade shows, corporate gifts and campaigns."
        ctaPrimaryLabel="Get Promotional Quote"
        ctaWhatsappLabel="WhatsApp"
        waMessage="I would like to get information about promotional and custom logo towels."
        features={[
          {
            icon: Pencil,
            title: 'Embroidery & Printing',
            desc: 'Your brand applied with two available techniques',
          },
          {
            icon: Gift,
            title: 'Corporate Gift Sets',
            desc: 'Custom packaging and gift-set organization',
          },
          {
            icon: Palette,
            title: 'Custom Color (Pantone)',
            desc: 'Custom color production matched to your Pantone code',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
