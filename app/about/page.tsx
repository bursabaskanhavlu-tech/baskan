import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'
import { FAQAccordion } from '@/components/molecules/FAQAccordion'
import { CTABand } from '@/components/organisms/CTABand'
import { BrandPatternPanel } from '@/components/atoms/BrandPatternPanel'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import {
  Scissors,
  Layers,
  Palette,
  ShieldCheck,
  Truck,
  Pencil,
  Package,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hakkımızda | Başkan Havlu Tekstil',
  description:
    "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Otel, kurum ve promosyon sektörüne özel üretim çözümleri.",
  path: '/about',
  alternatePath: '/en/about',
  keywords: [
    'Başkan Havlu Tekstil',
    'Bursa havlu imalatçısı',
    'havlu üreticisi',
    'havlu ihracat',
    'Bursa tekstil firması',
    '1996 havlu imalatı',
  ],
})

const processSteps = [
  {
    step: '01',
    icon: Scissors,
    title: 'İplik Seçimi',
    desc: 'Kaliteli hammadde seçimi ile üretim süreci başlar.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Dokuma',
    desc: 'Kendi tesisimizde gerçekleştirdiğimiz dokuma aşaması.',
  },
  {
    step: '03',
    icon: Palette,
    title: 'Boyama',
    desc: 'Renk haslığı yüksek boyama ve yıkama işlemleri.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Kalite Kontrol',
    desc: 'Her parti ürün titizlikle kontrol edilir.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Paketleme & Sevkiyat',
    desc: 'Özel ambalaj ve zamanında teslimat.',
  },
]

const privateLabelFeatures = [
  { icon: Pencil, title: 'Logo Nakışı / Baskı', desc: 'Markanız havlu ve bornoza işlenir' },
  { icon: Palette, title: 'Özel Renk Seçimi', desc: 'Kurumsal kimliğinize uygun renk üretimi' },
  { icon: Package, title: 'Özel Ambalaj', desc: 'Kurumsal hediye ve etkinlik ambalajı' },
]

const faqItems = [
  {
    question: 'Başkan Havlu Tekstil nerede faaliyet gösteriyor?',
    answer:
      "Bursa Osmangazi'de, Havlucular Çarşısı'nda faaliyet gösteren bir havlu ve bornoz imalatçısıyız.",
  },
  {
    question: 'Doğrudan fabrika mısınız?',
    answer:
      "Evet. 1996'dan bu yana kendi üretim tesisimizde havlu ve bornoz imalatı yapıyoruz — aracı bir tedarikçi değil, doğrudan üreticiyiz.",
  },
  {
    question: 'Hangi sektörlere hizmet veriyorsunuz?',
    answer:
      'Oteller, güzellik salonları, kuaförler, kurumsal firmalar, promosyon şirketleri ve perakende mağazalara hizmet veriyoruz.',
  },
  {
    question: 'İhracat yapıyor musunuz?',
    answer:
      'Evet. Başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası müşterilerimize ihracat hizmeti sunuyoruz.',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://baskanhavlu.com' },
          { name: 'Hakkımızda', url: 'https://baskanhavlu.com/about' },
        ]}
      />
      <FAQSchema items={faqItems} />
      {/* LocalBusinessSchema kasıtlı olarak kaldırıldı — OrganizationSchema
          zaten aynı entity'yi ["Organization","LocalBusiness"] olarak
          kapsıyor; ayrı @id ile ikinci bir beyan GEO entity tutarlılığını
          zayıflatırdı (bkz. V2-ROADMAP-LOG.md FAZ 11, Görev 62). */}
      <OrganizationSchema />

      {/* Başlık Hero */}
      <section
        className="py-20"
        style={{
          background:
            'radial-gradient(circle at 85% 0%, rgba(232,119,34,0.12), transparent 50%), #1a1a1a',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm" style={{ color: '#b3b3b3' }}>
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Hakkımızda</li>
            </ol>
          </nav>
          <FadeIn className="max-w-2xl">
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Firmamız
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              {SITE_CONFIG.founded}&apos;dan Bu Yana Havlu ve Bornoz İmalatçısı
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#b3b3b3' }}>
              Bursa Havlucular Çarşısı&apos;nda {SITE_CONFIG.founded}&apos;dan bu yana kendi üretim
              tesisimizde havlu ve bornoz imal ediyoruz.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Firma Hakkında */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span
                className="mb-3 block text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#e87722' }}
              >
                Kim Biz?
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
                Havlu ve Bornoz İmalatı
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Başkan Havlu Tekstil, {SITE_CONFIG.founded} yılından bu yana Bursa
                Osmangazi&apos;deki Havlucular Çarşısı&apos;nda faaliyet gösteren bir havlu ve
                bornoz imalatçısıdır — Türkiye&apos;nin en köklü havlu ticaret merkezlerinden
                birinde kendi üretim tesisimizde imalat yapıyoruz. Sektördeki köklü deneyimimiz ve
                doğrudan üretim gücümüz sayesinde müşterilerimize yüksek kaliteli ürünü doğrudan
                kaynağından sunuyoruz.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Oteller, güzellik salonları, kurumsal firmalar ve promosyon şirketleri başta olmak
                üzere geniş bir müşteri kitlesine hizmet veriyoruz. Başta Arap ülkeleri ve
                Yunanistan olmak üzere uluslararası pazarlara da ihracat gerçekleştiriyoruz.
              </p>

              {/* Öne çıkan veriler */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: String(SITE_CONFIG.founded), label: 'Kuruluş' },
                  { value: String(SITE_CONFIG.exportRegions.tr.length), label: 'İhracat Ülkesi' },
                  {
                    value: `${SITE_CONFIG.productCategories.tr.length}+`,
                    label: 'Ürün Kategorisi',
                  },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#e87722' }}>
                      {s.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#8a7050' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Fotoğraf hazır olduğunda BrandPatternPanel yerine gerçek görsel kullanılacak */}
            <FadeIn delay={0.1} className="h-80 overflow-hidden rounded-2xl" aria-hidden={true}>
              <div className="h-full w-full" style={{ backgroundColor: '#ede5d8' }}>
                <BrandPatternPanel iconSize={72} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Üretim Süreci */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Nasıl Çalışırız?
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Üretim Sürecimiz
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-0 lg:flex-row">
            {processSteps.map((s, i) => {
              const StepIcon = s.icon
              return (
                <FadeIn key={s.step} delay={i * 0.08} className="relative flex flex-1">
                  <div className="relative flex flex-1 flex-col items-center px-4 py-6 text-center">
                    {/* Bağlantı çizgisi */}
                    {i < processSteps.length - 1 && (
                      <div
                        className="absolute right-0 top-10 hidden h-0.5 w-1/2 lg:block"
                        style={{ backgroundColor: '#e87722', opacity: 0.3 }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md"
                      style={{ backgroundColor: '#e87722' }}
                    >
                      <StepIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      className="mt-2 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#c4a882' }}
                    >
                      Adım {s.step}
                    </span>
                    <h3 className="mt-1 font-semibold" style={{ color: '#1a1a1a' }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {s.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Kalite taahhüdü — mevcut "Kalite Kontrol" adımını öne çıkarır,
              yeni/doğrulanmamış bir iddia eklemez (bkz. AGENTS.md §14.2) */}
          <FadeIn delay={0.3}>
            <div
              className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 rounded-2xl p-8 text-center shadow-sm sm:flex-row sm:text-left"
              style={{ backgroundColor: 'white', border: '1px solid #e0d4c0' }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #fff7f0, #ffe8cc)',
                  border: '1px solid #ffd0a3',
                }}
              >
                <ShieldCheck className="h-6 w-6" style={{ color: '#e87722' }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>
                  Kalite Kontrol Yaklaşımımız
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                  Her parti ürün, sevkiyat öncesinde titizlikle kontrol edilir; standart dışı
                  bulunan ürünler sevkiyata dahil edilmez.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Özel Üretim / Private Label */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Özel Üretim
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Kurumsal Kimliğinize Uygun Özel Üretim
            </h2>
            <p className="mx-auto mt-4 max-w-2xl" style={{ color: '#5c5c5c' }}>
              Kendi markanızla veya kurumsal kimliğinizle kişiselleştirilmiş havlu ve bornoz imalatı
              yapıyoruz.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {privateLabelFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <FadeIn key={f.title} delay={i * 0.08}>
                  <div
                    className="h-full rounded-2xl p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}
                  >
                    <div
                      className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, #fff7f0, #ffe8cc)',
                        border: '1px solid #ffd0a3',
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: '#e87722' }} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold" style={{ color: '#1a1a1a' }}>
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                      {f.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* İhracat */}
      <section
        className="py-20"
        style={{
          background:
            'radial-gradient(circle at 15% 100%, rgba(232,119,34,0.10), transparent 50%), #1a1a1a',
        }}
      >
        <FadeIn className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span
            className="mb-3 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#e87722' }}
          >
            İhracat
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Uluslararası Pazarlara İhracat
          </h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: '#b3b3b3' }}>
            Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası müşterilerimize kendi
            ürettiğimiz havlu ve bornozu ihraç ediyoruz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SITE_CONFIG.exportRegions.tr.map((region) => (
              <span
                key={region}
                className="rounded-full border px-6 py-2 text-sm font-medium text-white shadow-sm"
                style={{ borderColor: '#e87722', backgroundColor: 'rgba(232,119,34,0.12)' }}
              >
                {region}
              </span>
            ))}
          </div>
          <div
            className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-sm"
            style={{ borderColor: 'rgba(232,119,34,0.4)', color: '#e0d4c0' }}
          >
            <Sparkles className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
            İhracat organizasyonu üretim sürecimize dahildir
          </div>
        </FadeIn>
      </section>

      {/* SSS — burada gösterilen sorular yukarıdaki FAQSchema ile birebir
          aynı diziden (faqItems) geliyor; şema/görünür içerik uyuşmazlığı
          olmaması için ayrıca bir bileşen (FAQPreview) kullanılmıyor. */}
      <section id="sss" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#e87722' }}
            >
              Sık Sorulan Sorular
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Firmamız Hakkında
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}
