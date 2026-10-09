import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { ContactView } from '@/components/views/ContactView'
import { generatePageMetadata } from '@/lib/utils/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'İletişim | Başkan Havlu Tekstil',
  description:
    "Bursa Havlucular Çarşısı'ndan havlu ve bornoz için teklif alın. +90 507 342 06 61 — tekstil@baskanhavlu.com",
  path: '/contact',
  alternatePath: '/en/contact',
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'İletişim', url: 'https://baskanhavlu.com/contact' },
        ]}
      />
      {/* Ayrı @id'li LocalBusinessSchema yerine sitenin tek birleşik entity'si */}
      <OrganizationSchema />
      <ContactView locale="tr" />
    </>
  )
}
