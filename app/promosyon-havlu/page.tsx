import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Pencil, Gift, Palette } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Promosyon Havlu | Logolu Kurumsal Havlu | Başkan Havlu Tekstil',
  description:
    'Kurumsal kimliğinizi yansıtan logolu promosyon havluları. Etkinlik, fuar ve kurumsal hediye için özel üretim. Teklif için iletişime geçin.',
  path: '/promosyon-havlu',
  keywords: [
    'promosyon havlu',
    'logolu havlu',
    'kurumsal havlu',
    'logo nakışlı havlu',
    'kurumsal hediye havlu',
    'baskılı havlu',
  ],
})

const faqs = [
  {
    question: 'Promosyon havlularına logo baskısı yapabiliyor musunuz?',
    answer:
      'Evet. Logo nakışı veya baskı ile markanızı havlulara işleyebiliyoruz. İki teknik arasındaki fark ve fiyatlandırma teklif aşamasında açıklanır.',
  },
  {
    question: 'Promosyon siparişlerinde minimum miktar nedir?',
    answer:
      'Minimum sipariş miktarı ürün türüne ve baskı tekniğine göre değişmektedir. Detaylar için teklif alınız.',
  },
  {
    question: 'Kurumsal hediye seti hazırlayabiliyor musunuz?',
    answer: 'Evet, özel ambalaj ve kurumsal hediye seti organizasyonu sağlayabiliyoruz.',
  },
  {
    question: 'Renk seçenekleriniz var mı?',
    answer:
      'Birçok renk seçeneği mevcuttur. Pantone renk kodunuza göre özel renk üretimi de organize edebiliriz.',
  },
  {
    question: 'Teslimat süresi nedir?',
    answer:
      'Sipariş büyüklüğü ve baskı tekniğine göre değişmektedir. Teklif aşamasında kesin süre belirtilir.',
  },
]

const relatedLinks = [
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function PromosyonHavluPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Promosyon Havlu', url: 'https://baskanhavlu.com/promosyon-havlu' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Kurumsal & Promosyon"
        title="Markanızı Yansıtan Logolu Promosyon Havlu"
        intro="Etkinlik, fuar, kurumsal hediye ve kampanya için logo nakışlı veya baskılı özel havlular."
        ctaPrimaryLabel="Promosyon Teklifi Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Promosyon ve logolu havlu hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Pencil,
            title: 'Logo Nakış & Baskı',
            desc: 'Markanızı iki farklı teknikle havluya işliyoruz',
          },
          {
            icon: Gift,
            title: 'Kurumsal Hediye Seti',
            desc: 'Özel ambalaj ile hediye seti organizasyonu',
          },
          {
            icon: Palette,
            title: 'Özel Renk (Pantone)',
            desc: 'Pantone koduna göre özel renk üretimi',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
