import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Otel Bornozu Tedarikçisi | Başkan Havlu Tekstil',
  description: 'Otel ve SPA için yüksek kaliteli bornoz tedariki. Logo nakışı, özel gramaj seçeneği. Toplu otel bornozu siparişi için teklif alın.',
  path: '/otel-bornozu',
})

const faqs = [
  { question: 'Otel bornozu için hangi modelleri tedarik ediyorsunuz?', answer: 'Şal yaka, kimono ve waffle bornoz modelleri mevcuttur. Her model otel standartlarına uygun gramajlarda tedarik edilmektedir.' },
  { question: 'Otel logolu bornoz üretebiliyor musunuz?', answer: 'Evet. Otel logonuzu nakış ile bornozlara işleyebiliyoruz. Detaylar için teklif alın.' },
  { question: 'Büyük otel zincirleri için toplu sipariş alıyor musunuz?', answer: 'Evet. Büyük hacimli toplu siparişler için özel fiyatlandırma ve teslimat planı sunuyoruz.' },
]

export default function OtelBornozuPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Otel bornozu tedariki hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Otel Bornozu', url: 'https://baskanhavlu.com/otel-bornozu' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Otel Tekstili</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Otel ve SPA için Bornoz Tedarikçisi</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>Yüksek gramajlı, dayanıklı ve logolu otel bornozu. Şal yaka, kimono ve waffle seçenekleri.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Teklif Al</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-center" style={{ color: '#1a1a1a' }}>Sık Sorulan Sorular</h2>
          <div className="flex flex-col divide-y" style={{ borderColor: '#e0d4c0' }}>
            {faqs.map((faq, i) => (<div key={i} className="py-5"><h3 className="font-medium" style={{ color: '#1a1a1a' }}>{faq.question}</h3><p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>{faq.answer}</p></div>))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
