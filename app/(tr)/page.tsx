import type { Metadata } from 'next'
import { HeroSection } from '@/components/organisms/HeroSection'
import { Manifesto } from '@/components/organisms/Manifesto'
import { VelocityMarquee } from '@/components/effects/VelocityMarquee'
import { ChannelSplit } from '@/components/organisms/ChannelSplit'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { ReviewsSection } from '@/components/organisms/ReviewsSection'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { InstagramBand } from '@/components/organisms/InstagramBand'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { ReviewSchema } from '@/components/schema/ReviewSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { getHomeContent } from '@/content/home'
import { CUSTOMER_REVIEWS } from '@/content/reviews'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Havlu ve Bornoz İmalatçısı, Bursa`,
  description:
    "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Oteller, kurumlar ve promosyon sektörüne toptan satış. Arap ülkeleri ve Yunanistan'a ihracat.",
  path: '/',
  alternatePath: '/en',
})

export default function HomePage() {
  const content = getHomeContent('tr')

  return (
    <>
      {/* OrganizationSchema @type: ["Organization","LocalBusiness"] birleşik ve
          tek @id ile tanımlıdır; yorumlar da aynı @id'ye bağlanır. */}
      <OrganizationSchema />
      <WebSiteSchema />
      <ReviewSchema reviews={CUSTOMER_REVIEWS} />

      <HeroSection locale="tr" content={content.hero} facts={content.facts} />
      <VelocityMarquee
        items={content.marquee}
        className="border-b border-line py-6 font-display text-[3rem] italic sm:py-8 sm:text-[5.5rem]"
      />
      <Manifesto text={content.manifesto} />
      <ProductCategories content={content.categories} locale="tr" />
      <ChannelSplit locale="tr" content={content.channels} />
      <ValueProposition content={content.why} />
      <ReviewsSection />
      <FAQPreview />
      <InstagramBand content={content.instagram} />
      <CTABand />
    </>
  )
}
