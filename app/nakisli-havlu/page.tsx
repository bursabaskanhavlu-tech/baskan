import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Sparkles, Palette, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Nakışlı Havlu | İşlemeli Havlu | Başkan Havlu Tekstil',
  description:
    'Logo nakışlı ve özel işlemeli havlular. Kurumsal ve otel sektörü için kişiselleştirilmiş havlu üretimi. Teklif için iletişime geçin.',
  path: '/nakisli-havlu',
  alternatePath: '/en/embroidered-towels',
  keywords: [
    'nakışlı havlu',
    'işlemeli havlu',
    'logo nakışlı havlu',
    'özel havlu',
    'kişiselleştirilmiş havlu',
    'havlu nakış',
  ],
})

const faqs = [
  {
    question: 'Havlulara hangi nakış teknikleri uygulanabiliyor?',
    answer:
      'Bilgisayar destekli nakış (bordür nakış) ve jakarlı dokuma teknikleri uygulanabilmektedir. Teknik seçimi sipariş miktarı ve tasarıma göre belirlenir.',
  },
  {
    question: 'Nakışlı havlu için minimum sipariş nedir?',
    answer:
      'Nakış tekniğine ve tasarım karmaşıklığına göre değişmektedir. Teklif aşamasında kesin bilgi verilir.',
  },
  {
    question: 'Kendi tasarımımı getirebilir miyim?',
    answer:
      'Evet. Logonuzu veya tasarımınızı bize iletmeniz yeterlidir. Vektörel format (AI, EPS veya yüksek çözünürlüklü PNG) tercih edilir.',
  },
  {
    question: 'Nakışlı havlular yıkamaya dayanıklı mı?',
    answer:
      'Evet. Nakışlar yıkamaya dayanıklı ipliklerle yapılmaktadır. Endüstriyel yıkama koşullarına uygun seçenekler mevcuttur.',
  },
]

const relatedLinks = [
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function NakisliHavluPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Nakışlı Havlu', url: 'https://baskanhavlu.com/nakisli-havlu' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Özel Üretim"
        title="Nakışlı ve İşlemeli Özel Havlu"
        intro="Logo nakışı ve özel işleme ile kişiselleştirilmiş havlular. Otel, kurum ve promosyon sektörü için."
        ctaPrimaryLabel="Teklif Al"
        ctaWhatsappLabel="WhatsApp"
        waMessage="Nakışlı havlu hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Sparkles,
            title: 'Bilgisayarlı Nakış & Jakar',
            desc: 'Tasarımınıza uygun iki farklı teknik',
          },
          {
            icon: Palette,
            title: 'Kendi Tasarımınız',
            desc: 'Vektörel logonuzla kişiselleştirilmiş üretim',
          },
          {
            icon: ShieldCheck,
            title: 'Yıkamaya Dayanıklı',
            desc: 'Endüstriyel yıkamaya uygun iplikler',
          },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
