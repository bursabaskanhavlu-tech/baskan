import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Baby, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bornoz Üreticisi | Bornoz İmalatçısı Bursa | Başkan Havlu Tekstil',
  description:
    'Otel, SPA ve kurumsal kullanım için bornoz imalatı. Şal yaka, kimono yaka, çocuk, kapüşonlu ve özel üretim bornoz seçenekleri. Toptan bornoz siparişi için iletişime geçin.',
  path: '/bornoz-ureticisi',
  alternatePath: '/en/bathrobe-manufacturer',
  keywords: [
    'bornoz üreticisi',
    'bornoz imalatçısı',
    'otel bornozu',
    'toptan bornoz',
    'Bursa bornoz',
    'şal yaka bornoz',
    'kapüşonlu bornoz',
  ],
})

const faqs = [
  {
    question: 'Hangi bornoz modellerini üretiyorsunuz?',
    answer:
      'Şal Yaka Bornoz, Kimono Yaka Bornoz, Çocuk Bornoz, Kapüşonlu Bornoz ve Özel Üretim Bornoz modellerini üretiyoruz. Otel, SPA ve kurumsal kullanıma uygun seçenekler sunuyoruz.',
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
      'Evet. Otel standartlarına uygun, 250 g/m² ve üzeri gramajlarda dayanıklı bornoz seçenekleri sunuyoruz.',
  },
  {
    question: 'Bornoz gramajı nasıl seçilmeli?',
    answer:
      'Ürettiğimiz bornozlar 250 g/m² ve üzeri gramajlarda sunulur. Kullanım alanına göre farklı gramaj seçenekleri mevcuttur.',
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
        title="Otel ve SPA için Bornoz İmalatçısı"
        intro="Şal yaka, kimono yaka, çocuk, kapüşonlu ve özel üretim bornoz seçenekleri. Logo nakışı ve özel renk seçeneği mevcuttur."
        ctaPrimaryLabel="Bornoz Teklifi Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Bornoz imalatı hakkında bilgi almak istiyorum."
        features={[
          { icon: Shirt, title: 'Şal Yaka Bornoz', desc: 'Klasik otel ve SPA tercihi' },
          { icon: Shirt, title: 'Kimono Yaka Bornoz', desc: 'Zarif, hafif kesim' },
          { icon: Baby, title: 'Çocuk Bornoz', desc: 'Küçük bedenlerde aynı kalite' },
          { icon: Shirt, title: 'Kapüşonlu Bornoz', desc: 'SPA ve wellness için ideal' },
          {
            icon: Pencil,
            title: 'Özel Üretim Bornoz',
            desc: 'Logo, renk ve gramaj kurumsal kimliğinize göre',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
