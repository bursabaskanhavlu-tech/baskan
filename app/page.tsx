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
  title: 'Başkan Havlu Tekstil | Bursa Havlu Tedarikçisi',
  description:
    "1981'den bu yana Bursa'da havlu ve tekstil tedariki. Otel, kurum ve promosyon sektörüne özel çözümler. Arap ülkeleri ve Yunanistan'a ihracat.",
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
