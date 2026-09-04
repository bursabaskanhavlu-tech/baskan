import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Package, FileText, Shirt } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Toptan Bornoz | Toplu Bornoz Siparişi | Başkan Havlu Tekstil',
  description:
    'Toptan bornoz siparişi için güvenilir imalatçı. Esnek MOQ, rekabetçi fiyat ve hızlı teklif. Otel, SPA ve kurumsal sektöre toptan bornoz.',
  path: '/toptan-bornoz',
  alternatePath: '/en/wholesale-bathrobes',
  keywords: [
    'toptan bornoz',
    'toplu bornoz',
    'bornoz toptan satış',
    'otel bornozu toptan',
    'SPA bornozu toptan',
    'kurumsal bornoz',
  ],
})

const faqs = [
  {
    question: 'Toptan bornoz siparişi için minimum miktar nedir?',
    answer:
      'Minimum sipariş miktarı ürün tipine ve stok durumuna göre değişmektedir. Siparişiniz için özel teklif alın.',
  },
  {
    question: 'Toptan bornoz siparişlerinde indirim uyguluyor musunuz?',
    answer: 'Evet, büyük hacimli toptan siparişlerde avantajlı fiyatlandırma sunuyoruz.',
  },
  {
    question: 'Kurumsal fatura kesiyor musunuz?',
    answer: 'Evet, B2B toptan siparişler için fatura kesilmektedir.',
  },
  {
    question: 'Farklı modeller için ayrı ayrı sipariş verilebilir mi?',
    answer:
      'Evet, şal yaka, kimono yaka, çocuk, kapüşonlu ve özel üretim gibi farklı modelleri aynı sipariş içinde birleştirebilirsiniz.',
  },
]

const relatedLinks = [
  { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
  { label: 'Otel Bornozu', href: '/otel-bornozu' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function ToptanBornozPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Toptan Bornoz', url: 'https://baskanhavlu.com/toptan-bornoz' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Toptan Satış"
        title="Toptan Bornoz İmalatçısı"
        intro="Otel, SPA ve kurumsal sektöre toptan bornoz. Esnek sipariş miktarı ve rekabetçi fiyatlar."
        ctaPrimaryLabel="Toptan Teklif Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Toptan bornoz siparişi hakkında bilgi almak istiyorum."
        features={[
          { icon: Package, title: 'Esnek MOQ', desc: 'Ürün tipine göre özel minimum sipariş' },
          {
            icon: FileText,
            title: 'Kurumsal Fatura',
            desc: 'B2B toptan siparişler için tam belgelendirme',
          },
          {
            icon: Shirt,
            title: 'Model Çeşitliliği',
            desc: 'Şal yaka, kimono yaka, çocuk ve kapüşonlu modeller bir arada sipariş edilebilir',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
