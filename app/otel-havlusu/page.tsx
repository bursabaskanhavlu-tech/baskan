import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Otel Havlusu Tedarikçisi | Başkan Havlu Tekstil',
  description: 'Oteller için yüksek gramajlı, dayanıklı ve logo nakışlı havlu tedariki. Otel sektörünün güvenilir tekstil tedarikçisi. Bursa\'dan dünyaya.',
  path: '/otel-havlusu',
})

const faqs = [
  { question: 'Otel havluları için hangi gramajları öneriyorsunuz?', answer: 'Otel sektörü için genellikle 400-600 g/m² gramaj aralığı tercih edilmektedir. Tercihinize ve bütçenize göre farklı gramaj seçenekleri sunuyoruz.' },
  { question: 'Otel logolu havlu üretebiliyor musunuz?', answer: 'Evet, otel logonuzu havlulara nakış veya jakarlı dokuma ile işleyebiliriz. Minimum sipariş miktarı teklif aşamasında belirtilir.' },
  { question: 'Otel havluları ne kadar dayanıklıdır?', answer: 'Otel kullanımına özel seçilen ürünlerimiz yoğun kullanım ve endüstriyel yıkama koşullarına dayanıklı olacak şekilde tedarik edilmektedir.' },
  { question: 'Büyük otel zincirleri için toplu sipariş alıyor musunuz?', answer: 'Evet. Büyük kapasiteli toplu siparişler için özel fiyatlandırma ve teslimat planlaması sunuyoruz.' },
  { question: 'Numune gönderiyor musunuz?', answer: 'Evet, büyük siparişler öncesinde numune gönderilmektedir. Numune koşulları teklif aşamasında belirlenir.' },
]

export default function OtelHavlusuPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Otel havlusu tedariki hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Otel Havlusu', url: 'https://baskanhavlu.com/otel-havlusu' }]} />
      <FAQSchema items={faqs} />

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Otel Tekstili</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Otel Sektörünün Güvenilir Havlu Tedarikçisi</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
            Yüksek gramajlı, dayanıklı ve logo nakışlı otel havluları. Butik otelden büyük zincire her ölçekte tedarik.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Otel Teklifi Al</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp ile Sor</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[{ t: 'Yüksek Gramaj', d: '400–600 g/m² otel standartlarında ürünler' }, { t: 'Logo Nakışı', d: 'Otel kimliğinize özel nakış seçeneği' }, { t: 'Toplu Sipariş', d: 'Büyük hacimli siparişlere uygun fiyatlandırma' }].map(f => (
              <div key={f.t} className="rounded-xl p-6 text-center" style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}>
                <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>{f.t}</h3>
                <p className="mt-2 text-sm" style={{ color: '#5c5c5c' }}>{f.d}</p>
              </div>
            ))}
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
