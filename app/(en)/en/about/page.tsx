import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { AboutView } from '@/components/views/AboutView'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { getAboutContent } from '@/content/about'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us | Başkan Havlu Tekstil',
  description:
    'Towel and bathrobe manufacturing in Bursa, Turkey since 1996. Custom production solutions for hotels, corporates and promotional buyers.',
  path: '/en/about',
  alternatePath: '/about',
  locale: 'en',
  keywords: [
    'Başkan Havlu Tekstil',
    'Bursa towel manufacturer',
    'towel manufacturer Turkey',
    'towel export',
    'Turkish textile company',
    '1996 towel manufacturing',
  ],
})

export default function EnglishAboutPage() {
  const content = getAboutContent('en')
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'About', url: 'https://baskanhavlu.com/en/about' },
        ]}
      />
      <FAQSchema items={content.faq.items} />
      <OrganizationSchema locale="en" />
      <AboutView locale="en" content={content} />
    </>
  )
}
