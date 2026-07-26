import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Package, FileText, Truck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Toptan Havlu Tedarikçisi | Başkan Havlu Tekstil',
  description:
    "Toptan havlu siparişi için Bursa'nın güvenilir tekstil tedarikçisi. Esnek MOQ, özel üretim, hızlı teklif. Otel ve kurumsal sektöre toptan satış.",
  path: '/toptan-havlu',
  keywords: [
    'toptan havlu',
    'toptan havlu tedarikçisi',
    'toplu havlu siparişi',
    'havlu toptan satış',
    'toptan havlu fiyatları',
    'otel havlusu toptan',
  ],
})

const faqs = [
  {
    question: 'Toptan havlu için minimum sipariş miktarı nedir?',
    answer:
      'Minimum sipariş miktarı ürüne ve stok durumuna göre değişmektedir. Teklif almak için bizimle iletişime geçin, siparişinize özel MOQ belirleyelim.',
  },
  {
    question: 'Toptan fiyatlandırma nasıl işliyor?',
    answer:
      'Fiyatlandırma sipariş miktarı, ürün türü ve özelleştirme gereksinimlerine göre belirlenir. Toplu siparişlerde avantajlı fiyatlar sunuyoruz.',
  },
  {
    question: 'Kurumsal fatura kesebiliyor musunuz?',
    answer:
      'Evet, firmamız fatura kesmektedir. B2B sipariş sürecindeki tüm belgelendirme ihtiyaçlarınızı karşılıyoruz.',
  },
  {
    question: 'Toptan siparişlerde teslimat süresi nedir?',
    answer:
      'Sipariş büyüklüğüne göre değişmektedir. Teklif aşamasında kesin teslimat sürenizi belirtiyoruz.',
  },
  {
    question: 'Numune sipariş edebilir miyim?',
    answer:
      'Evet, toptan sipariş öncesi numune talep edebilirsiniz. Numune süreç ve koşulları teklif aşamasında netleştirilir.',
  },
]

const relatedLinks = [
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Otel Havlusu', href: '/otel-havlusu' },
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function ToptanHavluPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Toptan Havlu', url: 'https://baskanhavlu.com/toptan-havlu' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Toptan Satış"
        title="Güvenilir Tedarikçiden Toptan Havlu"
        intro="Esnek sipariş miktarı, rekabetçi fiyatlar ve hızlı teklif süreci. Otel, kurum ve perakende sektörüne toptan havlu."
        ctaPrimaryLabel="Toptan Teklif Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Toptan havlu siparişi hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Package,
            title: 'Esnek MOQ',
            desc: 'Siparişinize özel minimum miktar belirlenir',
          },
          {
            icon: FileText,
            title: 'Kurumsal Fatura',
            desc: 'B2B sipariş süreci için tam belgelendirme',
          },
          {
            icon: Truck,
            title: 'Planlı Teslimat',
            desc: 'Sipariş büyüklüğüne göre netleştirilen teslimat',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
