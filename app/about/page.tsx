import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hakkımızda | Başkan Havlu Tekstil',
  description:
    "1981'den bu yana Bursa'da tekstil tedarik ve üretim koordinasyonu. Otel, kurum ve promosyon sektörüne özel havlu çözümleri.",
  path: '/about',
})

const processSteps = [
  { step: '01', title: 'İplik Seçimi', desc: 'Kaliteli hammadde seçimi ile üretim süreci başlar.' },
  { step: '02', title: 'Dokuma', desc: 'Deneyimli üreticilerle koordineli dokuma aşaması.' },
  { step: '03', title: 'Boyama', desc: 'Renk haslığı yüksek boyama ve yıkama işlemleri.' },
  { step: '04', title: 'Kalite Kontrol', desc: 'Her parti ürün titizlikle kontrol edilir.' },
  { step: '05', title: 'Paketleme & Sevkiyat', desc: 'Özel ambalaj ve zamanında teslimat.' },
]

const faqItems = [
  { question: 'Başkan Havlu Tekstil nerede faaliyet gösteriyor?', answer: 'Bursa Osmangazi\'de, Havlucular Çarşısı\'nda faaliyet gösteren bir tekstil tedarik ve üretim koordinasyon firmasıyız.' },
  { question: 'Doğrudan fabrika mısınız?', answer: 'Doğrudan üretim tesisimiz bulunmamaktadır. Güvenilir üreticilerle koordineli çalışarak müşterilerimize kaliteli ürün tedarik ediyoruz.' },
  { question: 'Hangi sektörlere hizmet veriyorsunuz?', answer: 'Oteller, güzellik salonları, kuaförler, kurumsal firmalar, promosyon şirketleri ve perakende mağazalara hizmet veriyoruz.' },
  { question: 'İhracat yapıyor musunuz?', answer: 'Evet. Başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası müşterilerimize ihracat hizmeti sunuyoruz.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
        { name: 'Hakkımızda', url: 'https://baskanhavlu.com/about' },
      ]} />
      <FAQSchema items={faqItems} />

      {/* Başlık Hero */}
      <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Hakkımızda</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
              Firmamız
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              {SITE_CONFIG.founded}&apos;den Bu Yana Güvenilir Tekstil Tedarikçisi
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#b3b3b3' }}>
              Bursa Havlucular Çarşısı&apos;nda {SITE_CONFIG.founded}&apos;dan bu yana tekstil tedarik ve özel üretim koordinasyonu yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Firma Hakkında */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
                Kim Biz?
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
                Tekstil Tedarik ve Üretim Koordinasyonu
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Başkan Havlu Tekstil, {SITE_CONFIG.founded} yılından bu yana Bursa&apos;da faaliyet gösteren bir tekstil tedarik ve özel üretim koordinasyon firmasıdır. Doğrudan fabrika olmamamıza rağmen, sektördeki köklü deneyimimiz ve güvenilir üretici ağımız sayesinde müşterilerimize yüksek kaliteli ürün tedariki sağlıyoruz.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Oteller, güzellik salonları, kurumsal firmalar ve promosyon şirketleri başta olmak üzere geniş bir müşteri kitlesine hizmet veriyoruz. Başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası pazarlara da ihracat gerçekleştiriyoruz.
              </p>

              {/* Öne çıkan veriler */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: '1981', label: 'Kuruluş' },
                  { value: '2', label: 'İhracat Bölgesi' },
                  { value: '6+', label: 'Ürün Kategorisi' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#e87722' }}>{s.value}</p>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#8a7050' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Görsel placeholder */}
            <div className="flex h-80 items-center justify-center rounded-2xl" style={{ backgroundColor: '#ede5d8' }}>
              <p className="text-sm font-medium" style={{ color: '#a88c64' }}>Fabrika / Dükkan görseli eklenecek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim Süreci */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>Nasıl Çalışırız?</span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>Üretim ve Tedarik Süreci</h2>
          </div>
          <div className="flex flex-col gap-0 lg:flex-row">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative flex flex-1 flex-col items-center px-4 py-6 text-center">
                {/* Bağlantı çizgisi */}
                {i < processSteps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-1/2 lg:block" style={{ backgroundColor: '#e87722', opacity: 0.3 }} aria-hidden="true" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-sm" style={{ backgroundColor: '#e87722' }}>
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold" style={{ color: '#1a1a1a' }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İhracat */}
      <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>İhracat</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Uluslararası Pazarlara Tedarik</h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: '#b3b3b3' }}>
            Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası müşterilerimize güvenilir tekstil tedariki sağlıyoruz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SITE_CONFIG.exportRegions.tr.map((region) => (
              <span key={region} className="rounded-full border px-6 py-2 text-sm font-medium text-white" style={{ borderColor: '#e87722' }}>
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <div id="sss">
        <FAQPreview />
      </div>

      <CTABand />
    </>
  )
}
