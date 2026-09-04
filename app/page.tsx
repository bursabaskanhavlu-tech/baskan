import { HeroSection } from '@/components/organisms/HeroSection'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { GoogleReviewsWidget } from '@/components/organisms/GoogleReviewsWidget'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { ReviewSchema } from '@/components/schema/ReviewSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: `${SITE_CONFIG.name} | Havlu ve Bornoz İmalatçısı, Bursa`,
  description:
    "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Oteller, kurumlar ve promosyon sektörüne toptan satış. Arap ülkeleri ve Yunanistan'a ihracat.",
  path: '/',
  alternatePath: '/en',
})

// Google İşletme Profili'nden alınan gerçek müşteri yorumları (AGENTS.md §14.2 —
// doğrulanabilir, gerçek veri; sahte/uydurma içerik değil).
const customerReviews = [
  {
    authorName: 'Elif Karaca',
    reviewBody:
      'Bursa’da havlu almak için tavsiye üzerine Başkan Havlu Tekstil’e gittim. Ürün çeşitleri gerçekten fazla, özellikle pamuklu havluları çok beğendim. Fiyatları da kaliteye göre gayet uygun. Çalışanlar ilgili ve yardımcı oluyor, alışverişimden memnun kaldım.',
  },
  {
    authorName: 'Merve Aydın',
    reviewBody:
      'Ev tekstili için havlu ve bornoz bakıyordum. Başkan Havlu Tekstil’de hem farklı kalite ve ölçülerde havlu bulabildim hem de fiyat konusunda yardımcı oldular. Aldığım ürünlerin dokusu ve emiciliği güzel. Bursa’da bu tarz ürün arayanlara tavsiye edebilirim.',
  },
  {
    authorName: 'Seda Yılmaz',
    reviewBody:
      'İşletmemiz için toplu havlu siparişi verdik. Özellikle toptan havlu seçeneklerinin fazla olması işimizi kolaylaştırdı. Ürünlerin kalitesi beklentimizi karşıladı ve sipariş sürecinde iletişim konusunda herhangi bir problem yaşamadık. Tekrar alışveriş yapmayı düşünüyoruz.',
  },
  {
    authorName: 'Ahmet Kartepe',
    reviewBody:
      'Otelimiz için otel havlusu ve bornoz ihtiyacımız vardı. Başkan Havlu Tekstil’den toplu alım yaptık. Havluların kalınlığı, dokusu ve genel kalitesi gayet başarılı. Bursa’da otel tekstili ve toptan havlu arayan işletmeler için iyi bir seçenek.',
  },
  {
    authorName: 'Burak Demir',
    reviewBody:
      'Uzun zamandır farklı yerlerden havlu alıyorum, Başkan Havlu Tekstil’den aldığım ürünlerden memnun kaldım. %100 pamuk ürünlerin kalitesi özellikle hoşuma gitti. Hem perakende hem toptan alışveriş yapılabilmesi güzel. Fiyat konusunda da yardımcı oluyorlar.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Yapılandırılmış veri — ana sayfaya özgü Schema'lar.
          OrganizationSchema zaten @type: ["Organization","LocalBusiness"]
          birleşik olarak tanımlıyor; ayrı bir LocalBusinessSchema eklemek
          aynı işletme için farklı @id'lerle iki ayrı entity beyanına yol
          açardı (GEO entity tutarlılığını zayıflatır) — bkz. V2-ROADMAP-LOG.md
          FAZ 11, Görev 62. */}
      <OrganizationSchema />
      <WebSiteSchema />
      <ReviewSchema reviews={customerReviews} />

      <HeroSection />
      <ValueProposition />
      <ProductCategories />
      <FAQPreview />

      {/* Google Yorumları — CTABand/footer'a en yakın konumda, sitenin
          sonunda güven pekiştirici son sinyal olarak gösterilir. */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Müşteri Yorumları
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Google&apos;daki Yorumlarımız
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GoogleReviewsWidget />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}
