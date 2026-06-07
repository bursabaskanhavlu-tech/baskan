import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Promosyon Havlu | Logolu Kurumsal Havlu | Başkan Havlu Tekstil',
  description: 'Kurumsal kimliğinizi yansıtan logolu promosyon havluları. Etkinlik, fuar ve kurumsal hediye için özel üretim. Teklif için iletişime geçin.',
  path: '/promosyon-havlu',
})

const faqs = [
  { question: 'Promosyon havlularına logo baskısı yapabiliyor musunuz?', answer: 'Evet. Logo nakışı veya baskı ile markanızı havlulara işleyebiliyoruz. İki teknik arasındaki fark ve fiyatlandırma teklif aşamasında açıklanır.' },
  { question: 'Promosyon siparişlerinde minimum miktar nedir?', answer: 'Minimum sipariş miktarı ürün türüne ve baskı tekniğine göre değişmektedir. Detaylar için teklif alınız.' },
  { question: 'Kurumsal hediye seti hazırlayabiliyor musunuz?', answer: 'Evet, özel ambalaj ve kurumsal hediye seti organizasyonu sağlayabiliyoruz.' },
  { question: 'Renk seçenekleriniz var mı?', answer: 'Birçok renk seçeneği mevcuttur. Pantone renk kodunuza göre özel renk üretimi de organize edebiliriz.' },
  { question: 'Teslimat süresi nedir?', answer: 'Sipariş büyüklüğü ve baskı tekniğine göre değişmektedir. Teklif aşamasında kesin süre belirtilir.' },
]

export default function PromosyonHavluPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Promosyon ve logolu havlu hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Promosyon Havlu', url: 'https://baskanhavlu.com/promosyon-havlu' }]} />
      <FAQSchema items={faqs} />

      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Kurumsal & Promosyon</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Markanızı Yansıtan Logolu Promosyon Havlu</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
            Etkinlik, fuar, kurumsal hediye ve kampanya için logo nakışlı veya baskılı özel havlular.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Promosyon Teklifi Al</Link>
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
