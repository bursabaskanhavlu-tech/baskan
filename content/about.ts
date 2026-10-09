import { SITE_CONFIG } from '@/lib/config/site'
import type { Locale } from '@/lib/i18n'

export interface AboutContent {
  crumb: string
  kicker: string
  title: string
  lead: string
  story: { kicker: string; title: string; paragraphs: string[] }
  facts: { value: string; label: string }[]
  process: { kicker: string; title: string; steps: { title: string; desc: string }[] }
  quality: { title: string; text: string }
  privateLabel: {
    kicker: string
    title: string
    text: string
    items: { title: string; desc: string }[]
  }
  export: { kicker: string; title: string; text: string; note: string; regions: readonly string[] }
  faq: { kicker: string; title: string; items: { question: string; answer: string }[] }
}

const f = SITE_CONFIG.founded

const tr: AboutContent = {
  crumb: 'Hakkımızda',
  kicker: 'Firmamız',
  title: `${f}'dan Bu Yana Havlu ve Bornoz İmalatçısı`,
  lead: `Bursa Havlucular Çarşısı'nda ${f}'dan bu yana kendi üretim tesisimizde havlu ve bornoz imal ediyoruz.`,
  story: {
    kicker: 'Kim Biz?',
    title: 'Havlu ve Bornoz İmalatı',
    paragraphs: [
      `Başkan Havlu Tekstil, ${f} yılından bu yana Bursa Osmangazi'deki Havlucular Çarşısı'nda faaliyet gösteren bir havlu ve bornoz imalatçısıdır. Türkiye'nin en köklü havlu ticaret merkezlerinden birinde, kendi üretim tesisimizde imalat yapıyoruz. Sektördeki köklü deneyimimiz ve doğrudan üretim gücümüz sayesinde müşterilerimize yüksek kaliteli ürünü doğrudan kaynağından sunuyoruz.`,
      'Oteller, güzellik salonları, kurumsal firmalar ve promosyon şirketleri başta olmak üzere geniş bir müşteri kitlesine hizmet veriyoruz. Mağazamızda perakende satış yapıyor, başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası pazarlara da ihracat gerçekleştiriyoruz.',
    ],
  },
  facts: [
    { value: String(f), label: 'Kuruluş' },
    { value: `${SITE_CONFIG.exportRegions.tr.length}+`, label: 'İhracat pazarı' },
    { value: `${SITE_CONFIG.productCategories.tr.length}+`, label: 'Ürün grubu' },
  ],
  process: {
    kicker: 'Nasıl Çalışırız?',
    title: 'Üretim Sürecimiz',
    steps: [
      { title: 'İplik Seçimi', desc: 'Kaliteli hammadde seçimi ile üretim süreci başlar.' },
      { title: 'Dokuma', desc: 'Kendi tesisimizde gerçekleştirdiğimiz dokuma aşaması.' },
      { title: 'Boyama', desc: 'Yüksek renk haslığı ile boyama ve yıkama.' },
      { title: 'Kalite Kontrol', desc: 'Her parti ürün titizlikle kontrol edilir.' },
      { title: 'Paketleme ve Sevkiyat', desc: 'Özel ambalaj ve zamanında teslimat.' },
    ],
  },
  quality: {
    title: 'Kalite Kontrol Yaklaşımımız',
    text: 'Her parti ürün, sevkiyat öncesinde titizlikle kontrol edilir; standart dışı bulunan ürünler sevkiyata dahil edilmez.',
  },
  privateLabel: {
    kicker: 'Özel Üretim',
    title: 'Kurumsal Kimliğinize Uygun Özel Üretim',
    text: 'Kendi markanızla veya kurumsal kimliğinizle kişiselleştirilmiş havlu ve bornoz imalatı yapıyoruz.',
    items: [
      { title: 'Logo Nakışı ve Baskı', desc: 'Markanız havlu ve bornoza işlenir' },
      { title: 'Özel Renk Seçimi', desc: 'Kurumsal kimliğinize uygun renk üretimi' },
      { title: 'Özel Ambalaj', desc: 'Kurumsal hediye ve etkinlik ambalajı' },
    ],
  },
  export: {
    kicker: 'İhracat',
    title: 'Uluslararası Pazarlara İhracat',
    text: 'Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası müşterilerimize kendi ürettiğimiz havlu ve bornozu ihraç ediyoruz.',
    note: 'İhracat organizasyonu üretim sürecimize dahildir.',
    regions: SITE_CONFIG.exportRegions.tr,
  },
  faq: {
    kicker: 'Sık Sorulan Sorular',
    title: 'Firmamız Hakkında',
    items: [
      {
        question: 'Başkan Havlu Tekstil nerede faaliyet gösteriyor?',
        answer:
          "Bursa Osmangazi'de, Havlucular Çarşısı'nda faaliyet gösteren bir havlu ve bornoz imalatçısıyız.",
      },
      {
        question: 'Doğrudan fabrika mısınız?',
        answer: `Evet. ${f}'dan bu yana kendi üretim tesisimizde havlu ve bornoz imalatı yapıyoruz. Aracı bir tedarikçi değil, doğrudan üreticiyiz.`,
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
    ],
  },
}

const en: AboutContent = {
  crumb: 'About',
  kicker: 'Our Company',
  title: `Towel and Bathrobe Manufacturer Since ${f}`,
  lead: `We have been manufacturing towels and bathrobes in our own production facility in Bursa Havlucular Çarşısı since ${f}.`,
  story: {
    kicker: 'Who We Are',
    title: 'Towel and Bathrobe Manufacturing',
    paragraphs: [
      `Başkan Havlu Tekstil has been a towel and bathrobe manufacturer operating in Bursa Osmangazi's Havlucular Çarşısı since ${f}, one of Turkey's most established towel trading centers, where we manufacture in our own facility. Thanks to our deep industry experience and direct manufacturing capability, we deliver high-quality products straight from the source.`,
      'We serve a wide customer base including hotels, beauty salons, corporate companies and promotional companies. We sell retail at our store and also export to international markets, mainly Arab countries and Greece.',
    ],
  },
  facts: [
    { value: String(f), label: 'Founded' },
    { value: `${SITE_CONFIG.exportRegions.en.length}+`, label: 'Export markets' },
    { value: `${SITE_CONFIG.productCategories.en.length}+`, label: 'Product categories' },
  ],
  process: {
    kicker: 'How We Work',
    title: 'Our Manufacturing Process',
    steps: [
      { title: 'Yarn Selection', desc: 'Production starts with selecting quality raw materials.' },
      { title: 'Weaving', desc: 'Weaving carried out in our own facility.' },
      { title: 'Dyeing', desc: 'Dyeing and washing with high color fastness.' },
      { title: 'Quality Control', desc: 'Every batch is carefully inspected.' },
      { title: 'Packaging and Shipping', desc: 'Custom packaging and on-time delivery.' },
    ],
  },
  quality: {
    title: 'Our Approach to Quality Control',
    text: 'Every batch is carefully inspected before shipment; products that do not meet our standards are not shipped.',
  },
  privateLabel: {
    kicker: 'Custom Production',
    title: 'Custom Manufacturing for Your Corporate Identity',
    text: 'We manufacture towels and bathrobes personalized with your own brand or corporate identity.',
    items: [
      { title: 'Logo Embroidery and Printing', desc: 'Your brand applied to towels and bathrobes' },
      { title: 'Custom Color', desc: 'Color production matched to your corporate identity' },
      { title: 'Custom Packaging', desc: 'Corporate gift and event packaging' },
    ],
  },
  export: {
    kicker: 'Export',
    title: 'Exporting to International Markets',
    text: 'We export the towels and bathrobes we manufacture to international customers, mainly in Arab countries and Greece.',
    note: 'Export logistics are part of our manufacturing process.',
    regions: SITE_CONFIG.exportRegions.en,
  },
  faq: {
    kicker: 'Frequently Asked Questions',
    title: 'About Our Company',
    items: [
      {
        question: 'Where does Başkan Havlu Tekstil operate?',
        answer:
          'We are a towel and bathrobe manufacturer operating in Havlucular Çarşısı, Osmangazi, Bursa.',
      },
      {
        question: 'Are you a direct factory?',
        answer: `Yes. We have been manufacturing towels and bathrobes in our own production facility since ${f}. We are a direct manufacturer, not an intermediary supplier.`,
      },
      {
        question: 'Which sectors do you serve?',
        answer:
          'We serve hotels, beauty salons, hairdressers, corporate companies, promotional companies and retail stores.',
      },
      {
        question: 'Do you export?',
        answer:
          'Yes. We export to international customers across 13+ countries, including Greece, Germany, Italy and Arab countries.',
      },
    ],
  },
}

export function getAboutContent(locale: Locale): AboutContent {
  return locale === 'en' ? en : tr
}
