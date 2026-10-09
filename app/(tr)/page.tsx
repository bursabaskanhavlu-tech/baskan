import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/HomeHero'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { SectorSolutions } from '@/components/home/SectorSolutions'
import { CustomProduction } from '@/components/home/CustomProduction'
import { TrustRow } from '@/components/home/TrustRow'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Havlu ve Bornoz İmalatçısı, Bursa`,
  description:
    "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Oteller, kurumlar ve promosyon sektörüne toptan satış. Arap ülkeleri ve Yunanistan'a ihracat.",
  path: '/',
  alternatePath: '/en',
})

export default function HomePage() {
  return (
    <>
      {/* Tek birleşik #organization entity'si (Organization + LocalBusiness) */}
      <OrganizationSchema />
      <WebSiteSchema />

      <HomeHero locale="tr" />
      <CategoryStrip locale="tr" />
      <SectorSolutions locale="tr" />
      <CustomProduction locale="tr" />
      <TrustRow locale="tr" />
      <FAQPreview />
      <CTABand />
    </>
  )
}
