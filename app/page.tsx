import { HeroSection } from '@/components/organisms/HeroSection'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Başkan Havlu Tekstil | Havlu ve Bornoz Üretimi, Toptan Satış',
  description:
    "1981'den bu yana Bursa'da havlu ve bornoz üreten Başkan Havlu Tekstil. Otel, kurum ve promosyon sektörüne toptan satış. +10 ülkeye ihracat.",
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <HeroSection />
      <ValueProposition />
      <ProductCategories />
      <FAQPreview />
      <CTABand />
    </>
  )
}
