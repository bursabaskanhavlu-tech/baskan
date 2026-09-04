import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Gauge, Pencil, Package } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Otel Havlusu İmalatçısı | Başkan Havlu Tekstil',
  description:
    "Oteller için 250 g/m² ve üzeri gramajlarda, dayanıklı ve logo nakışlı havlu imalatı. Otel sektörünün güvenilir havlu üreticisi. Bursa'dan dünyaya.",
  path: '/otel-havlusu',
  alternatePath: '/en/hotel-towels',
  keywords: [
    'otel havlusu',
    'otel havlusu imalatçısı',
    'otel havlusu toptan',
    'otel tekstili',
    'lüks otel havlusu',
    'otel havlusu fiyatları',
  ],
})

const faqs = [
  {
    question: 'Otel havluları için hangi gramajları öneriyorsunuz?',
    answer:
      'Otel sektörü için genellikle 400-600 g/m² gramaj aralığı tercih edilmektedir. Tercihinize ve bütçenize göre farklı gramaj seçenekleri sunuyoruz.',
  },
  {
    question: 'Otel logolu havlu üretebiliyor musunuz?',
    answer:
      'Evet, otel logonuzu havlulara nakış veya jakarlı dokuma ile işleyebiliriz. Minimum sipariş miktarı teklif aşamasında belirtilir.',
  },
  {
    question: 'Otel havluları ne kadar dayanıklıdır?',
    answer:
      'Otel kullanımına özel ürettiğimiz havlular, yoğun kullanım ve endüstriyel yıkama koşullarına dayanıklı olacak şekilde imal edilmektedir.',
  },
  {
    question: 'Büyük otel zincirleri için toplu sipariş alıyor musunuz?',
    answer:
      'Evet. Büyük kapasiteli toplu siparişler için özel fiyatlandırma ve teslimat planlaması sunuyoruz.',
  },
  {
    question: 'Numune gönderiyor musunuz?',
    answer:
      'Evet, büyük siparişler öncesinde numune gönderilmektedir. Numune koşulları teklif aşamasında belirlenir.',
  },
]

const relatedLinks = [
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Otel Bornozu', href: '/otel-bornozu' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function OtelHavlusuPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Otel Havlusu', url: 'https://baskanhavlu.com/otel-havlusu' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Otel Tekstili"
        title="Otel Sektörünün Güvenilir Havlu İmalatçısı"
        intro="250 g/m² ve üzeri gramajlarda, dayanıklı ve logo nakışlı otel havluları. Butik otelden büyük zincire her ölçekte tedarik."
        ctaPrimaryLabel="Otel Teklifi Al"
        ctaWhatsappLabel="WhatsApp ile Sor"
        waMessage="Otel havlusu imalatı hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Gauge,
            title: '250 g/m² ve Üzeri',
            desc: 'Otel standartlarında dayanıklı gramaj seçenekleri',
          },
          { icon: Pencil, title: 'Logo Nakışı', desc: 'Otel kimliğinize özel nakış seçeneği' },
          {
            icon: Package,
            title: 'Toplu Sipariş',
            desc: 'Büyük hacimli siparişlere uygun fiyatlandırma',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
