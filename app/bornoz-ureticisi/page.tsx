import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Pencil, Gauge } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bornoz Üreticisi | Bornoz Tedarikçisi Bursa | Başkan Havlu Tekstil',
  description:
    'Otel, SPA ve kurumsal kullanım için bornoz tedariki. Kimono, şal yaka ve waffle seçenekleri. Logo nakışı mevcut. Toptan bornoz siparişi için iletişime geçin.',
  path: '/bornoz-ureticisi',
  keywords: [
    'bornoz üreticisi',
    'bornoz tedarikçisi',
    'otel bornozu',
    'toptan bornoz',
    'Bursa bornoz',
    'kimono bornoz',
    'şal yaka bornoz',
  ],
})

const faqs = [
  {
    question: 'Hangi tür bornozlar tedarik ediyorsunuz?',
    answer:
      'Kimono, şal yaka ve waffle bornoz seçenekleri mevcuttur. Otel, SPA ve kurumsal kullanıma uygun modeller sunuyoruz.',
  },
  {
    question: 'Bornozlara logo nakışı yapabiliyor musunuz?',
    answer: 'Evet. Otel veya marka logonuzu bornozlara nakış ile işleyebiliyoruz.',
  },
  {
    question: 'Toptan bornoz siparişi için minimum miktar nedir?',
    answer: 'Minimum sipariş miktarı ürün tipine göre değişmektedir. Teklif için iletişime geçin.',
  },
  {
    question: 'Otel sektörü için özel bornoz koleksiyonunuz var mı?',
    answer:
      'Evet. Otel standartlarına uygun, yüksek gramajlı ve dayanıklı bornoz seçenekleri sunuyoruz.',
  },
  {
    question: 'Bornoz gramajı nasıl seçilmeli?',
    answer:
      'Otel kullanımı için 350-500 g/m² arası genellikle tercih edilir. Kullanım alanına göre farklı gramaj seçenekleri mevcuttur.',
  },
]

const relatedLinks = [
  { label: 'Otel Bornozu', href: '/otel-bornozu' },
  { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function BornozUreticisiPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Bornoz Üreticisi', url: 'https://baskanhavlu.com/bornoz-ureticisi' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Bornoz & SPA Tekstili"
        title="Otel ve SPA için Bornoz Tedarikçisi"
        intro="Kimono, şal yaka ve waffle bornoz seçenekleri. Logo nakışı ve özel renk seçeneği mevcuttur."
        ctaPrimaryLabel="Bornoz Teklifi Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Bornoz tedariki hakkında bilgi almak istiyorum."
        features={[
          { icon: Shirt, title: 'Kimono / Şal Yaka / Waffle', desc: 'Üç farklı model seçeneği' },
          { icon: Pencil, title: 'Logo Nakışı', desc: 'Otel veya marka logonuz nakışla işlenir' },
          {
            icon: Gauge,
            title: 'Otel Standardı Gramaj',
            desc: '350–500 g/m² dayanıklı seçenekler',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
