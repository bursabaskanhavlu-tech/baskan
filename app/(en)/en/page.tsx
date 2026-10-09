import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { HeroSection } from '@/components/organisms/HeroSection'
import { Marquee } from '@/components/organisms/Marquee'
import { ChannelSplit } from '@/components/organisms/ChannelSplit'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { InstagramBand } from '@/components/organisms/InstagramBand'
import { CTABand } from '@/components/organisms/CTABand'
import { getHomeContent } from '@/content/home'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Towel and Bathrobe Manufacturer, Bursa`,
  description:
    'Turkish towel and bathrobe manufacturer based in Bursa since 1996. Wholesale supply for hotels, corporates and promotional companies. Exporting worldwide.',
  path: '/en',
  alternatePath: '/',
  locale: 'en',
})

export default function EnglishHomePage() {
  const content = getHomeContent('en')

  return (
    <>
      <OrganizationSchema locale="en" />
      <WebSiteSchema />

      <HeroSection locale="en" content={content.hero} facts={content.facts} />
      <Marquee items={content.marquee} />
      <ChannelSplit locale="en" content={content.channels} />
      <ProductCategories content={content.categories} />
      <ValueProposition content={content.why} />
      <InstagramBand content={content.instagram} />
      <CTABand locale="en" />
    </>
  )
}
