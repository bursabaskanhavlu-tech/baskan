import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Toptan Havlu Tedarikçisi | Başkan Havlu Tekstil',
  description: 'Toptan havlu siparişi için Bursa\'nın güvenilir tekstil tedarikçisi. Esnek MOQ, özel üretim, hızlı teklif. Otel ve kurumsal sektöre toptan satış.',
  path: '/toptan-havlu',
})

const faqs = [
  { question: 'Toptan havlu için minimum sipariş miktarı nedir?', answer: 'Minimum sipariş miktarı ürüne ve stok durumuna göre değişmektedir. Teklif almak için bizimle iletişime geçin, siparişinize özel MOQ belirleyelim.' },
  { question: 'Toptan fiyatlandırma nasıl işliyor?', answer: 'Fiyatlandırma sipariş miktarı, ürün türü ve özelleştirme gereksinimlerine göre belirlenir. Toplu siparişlerde avantajlı fiyatlar sunuyoruz.' },
  { question: 'Kurumsal fatura kesebiliyor musunuz?', answer: 'Evet, firmamız fatura kesmektedir. B2B sipariş sürecindeki tüm belgelendirme ihtiyaçlarınızı karşılıyoruz.' },
  { question: 'Toptan siparişlerde teslimat süresi nedir?', answer: 'Sipariş büyüklüğüne göre değişmektedir. Teklif aşamasında kesin teslimat sürenizi belirtiyoruz.' },
  { question: 'Numune sipariş edebilir miyim?', answer: 'Evet, toptan sipariş öncesi numune talep edebilirsiniz. Numune süreç ve koşulları teklif aşamasında netleştirilir.' },
]

export default function ToptanHavluPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Toptan havlu siparişi hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Toptan Havlu', url: 'https://baskanhavlu.com/toptan-havlu' }]} />
      <FAQSchema items={faqs} />

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Toptan Satış</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Fabrikadan Direkt Toptan Havlu Tedariki</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
            Esnek sipariş miktarı, rekabetçi fiyatlar ve hızlı teklif süreci. Otel, kurum ve perakende sektörüne toptan havlu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Toptan Teklif Al</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp ile Sor</a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-center" style={{ color: '#1a1a1a' }}>Sık Sorulan Sorular</h2>
          <div className="flex flex-col divide-y" style={{ borderColor: '#e0d4c0' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-medium" style={{ color: '#1a1a1a' }}>{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
