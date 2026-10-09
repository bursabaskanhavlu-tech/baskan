import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { ContactView } from '@/components/views/ContactView'
import { generatePageMetadata } from '@/lib/utils/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact | Başkan Havlu Tekstil',
  description:
    'Get a quote for towels and bathrobes from Bursa Havlucular Çarşısı. +90 507 342 06 61 — tekstil@baskanhavlu.com',
  path: '/en/contact',
  alternatePath: '/contact',
  locale: 'en',
})

export default function EnglishContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://baskanhavlu.com/en' },
          { name: 'Contact', url: 'https://baskanhavlu.com/en/contact' },
        ]}
      />
      <OrganizationSchema locale="en" />
      <ContactView locale="en" />
    </>
  )
}
