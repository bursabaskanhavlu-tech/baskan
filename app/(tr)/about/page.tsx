import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { AboutView } from '@/components/views/AboutView'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { getAboutContent } from '@/content/about'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hakkımızda | Başkan Havlu Tekstil',
  description:
    "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Otel, kurum ve promosyon sektörüne özel üretim çözümleri.",
  path: '/about',
  alternatePath: '/en/about',
  keywords: [
    'Başkan Havlu Tekstil',
    'Bursa havlu imalatçısı',
    'havlu üreticisi',
    'havlu ihracat',
    'Bursa tekstil firması',
    '1996 havlu imalatı',
  ],
})

export default function AboutPage() {
  const content = getAboutContent('tr')
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Hakkımızda', url: 'https://baskanhavlu.com/about' },
        ]}
      />
      {/* Görünür SSS ile birebir aynı diziden */}
      <FAQSchema items={content.faq.items} />
      <OrganizationSchema />
      <AboutView locale="tr" content={content} />
    </>
  )
}
