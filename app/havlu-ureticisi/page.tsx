import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { CTABand } from '@/components/organisms/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Havlu Üreticisi Bursa | Başkan Havlu Tekstil',
  description: "1981'den bu yana Bursa'da havlu tedarik ve üretim koordinasyonu. Otel, kurum ve promosyon sektörüne özel çözümler. Teklif için iletişime geçin.",
  path: '/havlu-ureticisi',
})

const faqs = [
  { question: 'Havlu üreticisi mi yoksa tedarikçi misiniz?', answer: "1981'den bu yana güvenilir üreticilerle koordineli çalışarak havlu tedariki ve özel üretim organizasyonu sağlıyoruz. Doğrudan fabrika olmamamıza rağmen, köklü sektör deneyimimizle kaliteli ürün teslim ediyoruz." },
  { question: 'Hangi tür havlular tedarik ediyorsunuz?', answer: 'El havlusu, yüz havlusu, banyo havlusu, kafa havlusu, ayak havlusu ve promosyon havlu dahil geniş bir ürün yelpazesi sunuyoruz.' },
  { question: 'Bursa\'dan Türkiye geneline tedarik yapıyor musunuz?', answer: "Evet. Bursa'daki merkezi konumumuzdan Türkiye'nin her yerine ve yurt dışına tedarik sağlıyoruz." },
  { question: 'Özel logo nakışı yapabiliyor musunuz?', answer: 'Evet, kurumsal kimliğe uygun logo nakışı ve özel renk seçenekleriyle kişiselleştirilmiş üretim sağlıyoruz.' },
  { question: 'Teklif almak için ne yapmalıyım?', answer: 'İletişim formunu doldurabilir veya doğrudan WhatsApp\'tan yazabilirsiniz. En kısa sürede size geri döneceğiz.' },
]

export default function HavluUreticisiPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent('Havlu üreticisi hakkında bilgi almak istiyorum.')}`
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', url: 'https://baskanhavlu.com' }, { name: 'Havlu Üreticisi', url: 'https://baskanhavlu.com/havlu-ureticisi' }]} />
      <FAQSchema items={faqs} />

      {/* HERO */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Bursa — 1981&apos;den Bu Yana</span>
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#1a1a1a' }}>Güvenilir Havlu Üreticisi ve Tedarikçisi</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
            Oteller, kurumlar ve promosyon sektörü için kaliteli havlu tedariki. Bursa&apos;dan Türkiye geneline ve ihracat.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white" style={{ backgroundColor: '#e87722' }}>Toptan Teklif Al</Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-md border px-8 text-sm font-semibold" style={{ borderColor: '#25d366', color: '#25d366' }}>WhatsApp ile Yaz</a>
          </div>
        </div>
      </section>

      {/* DEĞER ÖNERİSİ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[{ t: "1981'den Bu Yana", d: 'Köklü sektör deneyimi ve güvenilir tedarik ağı' }, { t: 'Esnek Sipariş', d: 'Her büyüklükteki siparişe uyum' }, { t: 'Özel Üretim', d: 'Logo nakışı ve özel renk seçenekleri' }].map(f => (
              <div key={f.t} className="rounded-xl p-6 text-center" style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}>
                <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>{f.t}</h3>
                <p className="mt-2 text-sm" style={{ color: '#5c5c5c' }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
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
