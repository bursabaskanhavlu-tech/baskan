import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Shirt, Pencil, Package } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Otel Bornozu İmalatçısı | Başkan Havlu Tekstil',
  description:
    'Otel ve SPA için yüksek kaliteli bornoz imalatı. Logo nakışı, özel gramaj seçeneği. Toplu otel bornozu siparişi için teklif alın.',
  path: '/otel-bornozu',
  alternatePath: '/en/hotel-bathrobes',
  keywords: [
    'otel bornozu',
    'otel bornozu imalatçısı',
    'SPA bornozu',
    'otel tekstili',
    'logolu bornoz',
    'toplu bornoz siparişi',
  ],
})

const faqs = [
  {
    question: 'Otel bornozu için hangi modelleri üretiyorsunuz?',
    answer:
      'Şal Yaka Bornoz, Kimono Yaka Bornoz, Çocuk Bornoz, Kapüşonlu Bornoz ve Özel Üretim Bornoz modellerini üretiyoruz. Her model 250 g/m² ve üzeri gramajlarda otel standartlarında imal edilmektedir.',
  },
  {
    question: 'Otel logolu bornoz üretebiliyor musunuz?',
    answer: 'Evet. Otel logonuzu nakış ile bornozlara işleyebiliyoruz. Detaylar için teklif alın.',
  },
  {
    question: 'Büyük otel zincirleri için toplu sipariş alıyor musunuz?',
    answer:
      'Evet. Büyük hacimli toplu siparişler için özel fiyatlandırma ve teslimat planı sunuyoruz.',
  },
]

const relatedLinks = [
  { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
  { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
  { label: 'Otel Havlusu', href: '/otel-havlusu' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function OtelBornozuPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Otel Bornozu', url: 'https://baskanhavlu.com/otel-bornozu' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Otel Tekstili"
        title="Otel ve SPA için Bornoz İmalatçısı"
        intro="250 g/m² ve üzeri gramajlarda, dayanıklı ve logolu otel bornozu. Şal yaka, kimono yaka, çocuk, kapüşonlu ve özel üretim seçenekleri."
        ctaPrimaryLabel="Teklif Al"
        ctaWhatsappLabel="WhatsApp"
        waMessage="Otel bornozu imalatı hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Shirt,
            title: 'Şal Yaka / Kimono Yaka / Kapüşonlu',
            desc: 'Otel standartlarına uygun model çeşitliliği',
          },
          { icon: Pencil, title: 'Logo Nakışı', desc: 'Otel logonuz nakışla bornoza işlenir' },
          {
            icon: Package,
            title: 'Toplu Sipariş',
            desc: 'Büyük otel zincirleri için özel fiyatlandırma',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
