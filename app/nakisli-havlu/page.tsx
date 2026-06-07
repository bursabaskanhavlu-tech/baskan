import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Nakışlı Havlu | İşlemeli Havlu | Başkan Havlu Tekstil',
  description: 'Logo nakışlı ve özel işlemeli havlular. Kurumsal ve otel sektörü için kişiselleştirilmiş havlu üretimi. Teklif için iletişime geçin.',
  path: '/nakisli-havlu',
})

const faqs = [
  { question: 'Havlulara hangi nakış teknikleri uygulanabiliyor?', answer: 'Bilgisayar destekli nakış (bordür nakış) ve jakarlı dokuma teknikleri uygulanabilmektedir. Teknik seçimi sipariş miktarı ve tasarıma göre belirlenir.' },
  { question: 'Nakışlı havlu için minimum sipariş nedir?', answer: 'Nakış tekniğine ve tasarım karmaşıklığına göre değişmektedir. Teklif aşamasında kesin bilgi verilir.' },
  { question: 'Kendi tasarımımı getirebilir miyim?', answer: 'Evet. Logonuzu veya tasarımınızı bize iletmeniz yeterlidir. Vektörel format (AI, EPS veya yüksek çözünürlüklü PNG) tercih edilir.' },
  { question: 'Nakışlı havlular yıkamaya dayanıklı mı?', answer: 'Evet. Nakışlar yıkamaya dayanıklı ipliklerle yapılmaktadır. Endüstriyel yıkama koşullarına uygun seçenekler mevcuttur.' },
]

export default function NakisliHavluPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Nakışlı havlu hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Nakışlı Havlu', url: 'https://baskanhavlu.com/nakisli-havlu' }]} />
      <FAQSchema items={faqs} />
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Özel Üretim</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Nakışlı ve İşlemeli Özel Havlu</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>Logo nakışı ve özel işleme ile kişiselleştirilmiş havlular. Otel, kurum ve promosyon sektörü için.</p>
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
