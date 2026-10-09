import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/HomeHero'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { SectorSolutions } from '@/components/home/SectorSolutions'
import { CustomProduction } from '@/components/home/CustomProduction'
import { TrustRow } from '@/components/home/TrustRow'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Towel and Bathrobe Manufacturer, Bursa`,
  description:
    'Turkish towel and bathrobe manufacturer based in Bursa since 1996. Wholesale supply for hotels, corporates and promotional companies. Exporting worldwide.',
  path: '/en',
  alternatePath: '/',
  locale: 'en',
})

export default function EnglishHomePage() {
  return (
    <>
      {/* Tek birleşik #organization entity'si (Organization + LocalBusiness) */}
      <OrganizationSchema locale="en" />
      <WebSiteSchema />

      <HomeHero locale="en" />
      <CategoryStrip locale="en" />
      <SectorSolutions locale="en" />
      <CustomProduction locale="en" />
      <TrustRow locale="en" />
      <CTABand locale="en" />
    </>
  )
}
