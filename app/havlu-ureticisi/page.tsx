import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LandingPage } from '@/components/templates/LandingPage'
import { Clock, Package, Pencil } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Havlu Üreticisi Bursa | Başkan Havlu Tekstil',
  description:
    "1981'den bu yana Bursa'da havlu tedarik ve üretim koordinasyonu. Otel, kurum ve promosyon sektörüne özel çözümler. Teklif için iletişime geçin.",
  path: '/havlu-ureticisi',
  keywords: [
    'havlu üreticisi',
    'havlu tedarikçisi',
    'Bursa havlu üreticisi',
    'havlu üretimi',
    'toptan havlu Bursa',
    'havlu tedarik',
  ],
})

const faqs = [
  {
    question: 'Havlu üreticisi mi yoksa tedarikçi misiniz?',
    answer:
      "1981'den bu yana güvenilir üreticilerle koordineli çalışarak havlu tedariki ve özel üretim organizasyonu sağlıyoruz. Doğrudan fabrika olmamamıza rağmen, köklü sektör deneyimimizle kaliteli ürün teslim ediyoruz.",
  },
  {
    question: 'Hangi tür havlular tedarik ediyorsunuz?',
    answer:
      'El havlusu, yüz havlusu, banyo havlusu, kafa havlusu, ayak havlusu ve promosyon havlu dahil geniş bir ürün yelpazesi sunuyoruz.',
  },
  {
    question: "Bursa'dan Türkiye geneline tedarik yapıyor musunuz?",
    answer:
      "Evet. Bursa'daki merkezi konumumuzdan Türkiye'nin her yerine ve yurt dışına tedarik sağlıyoruz.",
  },
  {
    question: 'Özel logo nakışı yapabiliyor musunuz?',
    answer:
      'Evet, kurumsal kimliğe uygun logo nakışı ve özel renk seçenekleriyle kişiselleştirilmiş üretim sağlıyoruz.',
  },
  {
    question: 'Teklif almak için ne yapmalıyım?',
    answer:
      "İletişim formunu doldurabilir veya doğrudan WhatsApp'tan yazabilirsiniz. En kısa sürede size geri döneceğiz.",
  },
]

const relatedLinks = [
  { label: 'Otel Havlusu', href: '/otel-havlusu' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
  { label: 'Koleksiyon', href: '/new-collection' },
]

export default function HavluUreticisiPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Havlu Üreticisi', url: 'https://baskanhavlu.com/havlu-ureticisi' },
        ]}
      />
      <FAQSchema items={faqs} />

      <LandingPage
        eyebrow="Bursa — 1981'den Bu Yana"
        title="Güvenilir Havlu Üreticisi ve Tedarikçisi"
        intro="Oteller, kurumlar ve promosyon sektörü için kaliteli havlu tedariki. Bursa'dan Türkiye geneline ve ihracat."
        ctaPrimaryLabel="Toptan Teklif Al"
        ctaWhatsappLabel="WhatsApp ile Yaz"
        waMessage="Havlu üreticisi hakkında bilgi almak istiyorum."
        features={[
          {
            icon: Clock,
            title: "1981'den Bu Yana",
            desc: 'Köklü sektör deneyimi ve güvenilir tedarik ağı',
          },
          { icon: Package, title: 'Esnek Sipariş', desc: 'Her büyüklükteki siparişe uyum' },
          { icon: Pencil, title: 'Özel Üretim', desc: 'Logo nakışı ve özel renk seçenekleri' },
        ]}
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
