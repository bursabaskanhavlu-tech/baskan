import { HeroSection } from '@/components/organisms/HeroSection'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Havlu ve Bornoz Tedarikçisi, Bursa`,
  description:
    "1981'den bu yana Bursa'da havlu ve bornoz tedariki. Oteller, kurumlar ve promosyon sektörüne toptan satış. Arap ülkeleri ve Yunanistan'a ihracat.",
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* Yapılandırılmış veri — ana sayfaya özgü Schema'lar */}
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
