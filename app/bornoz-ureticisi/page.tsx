import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bornoz Üreticisi | Bornoz Tedarikçisi Bursa | Başkan Havlu Tekstil',
  description: 'Otel, SPA ve kurumsal kullanım için bornoz tedariki. Kimono, şal yaka ve waffle seçenekleri. Logo nakışı mevcut. Toptan bornoz siparişi için iletişime geçin.',
  path: '/bornoz-ureticisi',
})

const faqs = [
  { question: 'Hangi tür bornozlar tedarik ediyorsunuz?', answer: 'Kimono, şal yaka ve waffle bornoz seçenekleri mevcuttur. Otel, SPA ve kurumsal kullanıma uygun modeller sunuyoruz.' },
  { question: 'Bornozlara logo nakışı yapabiliyor musunuz?', answer: 'Evet. Otel veya marka logonuzu bornozlara nakış ile işleyebiliyoruz.' },
  { question: 'Toptan bornoz siparişi için minimum miktar nedir?', answer: 'Minimum sipariş miktarı ürün tipine göre değişmektedir. Teklif için iletişime geçin.' },
  { question: 'Otel sektörü için özel bornoz koleksiyonunuz var mı?', answer: 'Evet. Otel standartlarına uygun, yüksek gramajlı ve dayanıklı bornoz seçenekleri sunuyoruz.' },
  { question: 'Bornoz gramajı nasıl seçilmeli?', answer: 'Otel kullanımı için 350-500 g/m² arası genellikle tercih edilir. Kullanım alanına göre farklı gramaj seçenekleri mevcuttur.' },
]

export default function BornozUreticisiPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Bornoz tedariki hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Bornoz Üreticisi', url: 'https://baskanhavlu.com/bornoz-ureticisi' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Bornoz & SPA Tekstili</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Otel ve SPA için Bornoz Tedarikçisi</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>Kimono, şal yaka ve waffle bornoz seçenekleri. Logo nakışı ve özel renk seçeneği mevcuttur.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Bornoz Teklifi Al</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp ile Sor</a>
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
