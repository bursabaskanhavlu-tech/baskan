import { SITE_CONFIG } from '@/lib/config/site'
import { yearsInBusiness, type Locale } from '@/lib/i18n'
import type { MediaSlot } from '@/content/media'
import type { SwatchTone } from '@/components/atoms/MediaFrame'
import type { ArtTone, TowelVariant } from '@/components/atoms/TowelArt'

/**
 * Ana sayfa içerikleri (TR / EN). Sayılar ve yıllar yalnızca SITE_CONFIG'den
 * türetilir (AGENTS.md §14.2, §14.4); elle rakam yazılmaz.
 */

export interface CategoryCard {
  title: string
  desc: string
  href: string
  slot: MediaSlot
  tone: SwatchTone
  art: TowelVariant
  artTone: ArtTone
  artAccent?: ArtTone
}

export interface HomeContent {
  hero: {
    kicker: string
    titleLine1: string
    titleLine2: string
    intro: string
    primary: string
    whatsapp: string
  }
  facts: { value: string; label: string }[]
  /** Kaydırdıkça kelime kelime belirginleşen kısa manifesto (doğrulanmış bilgilerden). */
  manifesto: string
  marquee: string[]
  channels: {
    wholesale: {
      kicker: string
      title: string
      text: string
      links: { label: string; href: string }[]
      cta: string
    }
    retail: {
      kicker: string
      title: string
      text: string
      hoursLabel: string
      hours: string[]
      addressLabel: string
      directions: string
      call: string
    }
  }
  categories: {
    kicker: string
    title: string
    text: string
    all: string
    items: CategoryCard[]
  }
  why: {
    kicker: string
    title: string
    text: string
    items: { title: string; desc: string }[]
  }
  instagram: {
    kicker: string
    title: string
    text: string
    follow: string
  }
}

const years = yearsInBusiness()
const exportCount = SITE_CONFIG.exportRegions.tr.length
const categoryCount = SITE_CONFIG.productCategories.tr.length

const tr: HomeContent = {
  hero: {
    kicker: `Bursa, Havlucular Çarşısı · ${SITE_CONFIG.founded}'dan bu yana`,
    titleLine1: 'Havlu ve Bornoz',
    titleLine2: 'İmalatçınız',
    intro: `${SITE_CONFIG.founded}'dan bu yana Bursa'da kendi tesisimizde havlu ve bornoz üretiyoruz. Oteller, kurumlar, kuaförler ve promosyon firmalarına toptan; mağazamızda ise perakende satış yapıyoruz.`,
    primary: 'Teklif Al',
    whatsapp: 'WhatsApp ile Yaz',
  },
  facts: [
    { value: String(SITE_CONFIG.founded), label: 'Kuruluş yılı' },
    { value: `${exportCount}+`, label: 'İhracat pazarı' },
    { value: `${categoryCount}+`, label: 'Ürün grubu' },
    { value: '24 sa', label: 'Teklif yanıt süresi' },
  ],
  manifesto: `${SITE_CONFIG.founded}’dan bu yana Bursa Havlucular Çarşısı’nda havlu ve bornoz üretiyoruz. Otelden kuaföre, promosyondan ihracata; toptan da perakende de aynı özenle.`,
  marquee: [...SITE_CONFIG.productCategories.tr],
  channels: {
    wholesale: {
      kicker: 'Toptan · Kurumsal · İhracat',
      title: 'Toptan satış ve özel üretim',
      text: 'Oteller, güzellik salonları, kurumsal firmalar ve promosyon şirketleri için logo nakışlı, özel renk ve ölçüde havlu ve bornoz üretiyoruz. Minimum sipariş ve teslimat süresi ürüne göre teklif aşamasında netleşir.',
      links: [
        { label: 'Toptan Havlu', href: '/toptan-havlu' },
        { label: 'Otel Havlusu', href: '/otel-havlusu' },
        { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
        { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
        { label: 'Export (English)', href: '/en/wholesale-towel-supplier' },
      ],
      cta: 'Toptan Teklif Al',
    },
    retail: {
      kicker: 'Perakende',
      title: 'Mağazamıza bekleriz',
      text: "Havlucular Çarşısı'ndaki mağazamızda havlu, bornoz ve ev tekstili ürünlerini yerinde görüp perakende olarak satın alabilirsiniz.",
      hoursLabel: 'Çalışma saatleri',
      hours: ['Pazartesi–Cuma 09:00–18:00', 'Cumartesi 09:00–14:00'],
      addressLabel: 'Adres',
      directions: 'Yol tarifi al',
      call: 'Mağazayı ara',
    },
  },
  categories: {
    kicker: 'Ürün Kategorileri',
    title: 'Her sektöre özel çözüm',
    text: 'Otel odasından kuaför koltuğuna, kurumsal hediyeden ihracat siparişine kadar ihtiyaca göre üretilen havlu ve bornozlar.',
    all: 'Tüm ürünler',
    items: [
      {
        title: 'Otel Havlusu',
        desc: 'Oteller için yüksek gramajlı, dayanıklı havlu çözümleri',
        href: '/otel-havlusu',
        slot: 'hotel',
        tone: 'white',
        art: 'stack',
        artTone: 'white',
        artAccent: 'cream',
      },
      {
        title: 'Promosyon Havlu',
        desc: 'Logo nakışlı kurumsal havlular',
        href: '/promosyon-havlu',
        slot: 'promotional',
        tone: 'clay',
        art: 'hanging',
        artTone: 'clay',
      },
      {
        title: 'Toptan Havlu',
        desc: 'Esnek MOQ ile toplu sipariş',
        href: '/toptan-havlu',
        slot: 'wholesale',
        tone: 'stone',
        art: 'stack',
        artTone: 'stone',
        artAccent: 'sand',
      },
      {
        title: 'Bornoz',
        desc: 'Otel ve SPA için toptan bornoz',
        href: '/toptan-bornoz',
        slot: 'bathrobe',
        tone: 'cream',
        art: 'robe',
        artTone: 'cream',
      },
      {
        title: 'Nakışlı Havlu',
        desc: 'Kişiselleştirilmiş tasarımlar',
        href: '/nakisli-havlu',
        slot: 'embroidered',
        tone: 'charcoal',
        art: 'monogram',
        artTone: 'white',
      },
      {
        title: 'Kuaför ve Salon',
        desc: 'Güzellik sektörüne özel',
        href: '/new-collection',
        slot: 'salon',
        tone: 'sand',
        art: 'roll',
        artTone: 'sand',
        artAccent: 'white',
      },
    ],
  },
  why: {
    kicker: 'Neden Başkan Havlu?',
    title: 'Havlu ve bornoz imalatçınız',
    text: `${SITE_CONFIG.founded}'dan bu yana Bursa'dan Türkiye'ye ve dünyaya kendi ürettiğimiz havlu ve tekstil çözümlerini sunuyoruz.`,
    items: [
      {
        title: `${SITE_CONFIG.founded}’dan bu yana`,
        desc: `${years} yıllık üretim deneyimi ve kendi imalat tesisimiz.`,
      },
      { title: 'Esnek sipariş', desc: 'Küçük veya büyük her sipariş büyüklüğüne uyum sağlıyoruz.' },
      {
        title: 'Özel üretim',
        desc: 'Logo nakışı, özel renk ve ambalajla kişiselleştirilmiş üretim.',
      },
      {
        title: 'İhracat deneyimi',
        desc: 'Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası ihracat.',
      },
      { title: 'Otel ve kurum', desc: 'Otel, kuaför, klinik ve kurumsal sektöre özel çözümler.' },
      { title: 'Hızlı yanıt', desc: 'WhatsApp üzerinden anında iletişim ve hızlı teklif süreci.' },
    ],
  },
  instagram: {
    kicker: 'Instagram',
    title: 'Üretimden ve mağazadan kareler',
    text: 'Yeni ürünler, renkler ve hazırlanan siparişler Instagram hesabımızda.',
    follow: "Instagram'da takip et",
  },
}

const en: HomeContent = {
  hero: {
    kicker: `Bursa, Havlucular Çarşısı · Since ${SITE_CONFIG.founded}`,
    titleLine1: 'Towel and Bathrobe',
    titleLine2: 'Manufacturer',
    intro: `Başkan Havlu Tekstil has been manufacturing towels and bathrobes in Bursa, Turkey since ${SITE_CONFIG.founded}. We supply hotels, corporates, salons and promotional companies worldwide, and sell retail at our store.`,
    primary: 'Get a Quote',
    whatsapp: 'Message on WhatsApp',
  },
  facts: [
    { value: String(SITE_CONFIG.founded), label: 'Founded' },
    { value: `${SITE_CONFIG.exportRegions.en.length}+`, label: 'Export markets' },
    { value: `${SITE_CONFIG.productCategories.en.length}+`, label: 'Product categories' },
    { value: '24 h', label: 'Quote response time' },
  ],
  manifesto: `Since ${SITE_CONFIG.founded}, we have been making towels and bathrobes in Bursa’s Havlucular Çarşısı. From hotels to salons, from promotional gifts to export orders; wholesale and retail with the same care.`,
  marquee: [...SITE_CONFIG.productCategories.en],
  channels: {
    wholesale: {
      kicker: 'Wholesale · Private label · Export',
      title: 'Wholesale and custom production',
      text: 'Towels and bathrobes for hotels, salons, corporates and promotional companies, with logo embroidery, custom colors and sizes. MOQ and lead time vary by product and are confirmed at the quotation stage.',
      links: [
        { label: 'Wholesale Towels', href: '/en/wholesale-towel-supplier' },
        { label: 'Hotel Towels', href: '/en/hotel-towels' },
        { label: 'Promotional Towels', href: '/en/promotional-towels' },
        { label: 'Wholesale Bathrobes', href: '/en/wholesale-bathrobes' },
        { label: 'Embroidered Towels', href: '/en/embroidered-towels' },
      ],
      cta: 'Get Wholesale Quote',
    },
    retail: {
      kicker: 'Retail',
      title: 'Visit our store',
      text: 'At our store in Bursa’s Havlucular Çarşısı you can see towels, bathrobes and home textiles in person and buy at retail.',
      hoursLabel: 'Opening hours',
      hours: ['Monday–Friday 09:00–18:00', 'Saturday 09:00–14:00'],
      addressLabel: 'Address',
      directions: 'Get directions',
      call: 'Call the store',
    },
  },
  categories: {
    kicker: 'Products',
    title: 'Solutions for every sector',
    text: 'Towels and bathrobes made to order for hotels, spas, salons, corporate gifting and export buyers.',
    all: 'Full collection',
    items: [
      {
        title: 'Hotel Towels',
        desc: 'High GSM, durable towels for hotels',
        href: '/en/hotel-towels',
        slot: 'hotel',
        tone: 'white',
        art: 'stack',
        artTone: 'white',
        artAccent: 'cream',
      },
      {
        title: 'Promotional Towels',
        desc: 'Corporate towels with logo embroidery',
        href: '/en/promotional-towels',
        slot: 'promotional',
        tone: 'clay',
        art: 'hanging',
        artTone: 'clay',
      },
      {
        title: 'Wholesale Towels',
        desc: 'Bulk orders with flexible MOQ',
        href: '/en/wholesale-towel-supplier',
        slot: 'wholesale',
        tone: 'stone',
        art: 'stack',
        artTone: 'stone',
        artAccent: 'sand',
      },
      {
        title: 'Bathrobes',
        desc: 'Wholesale bathrobes for hotels and spas',
        href: '/en/wholesale-bathrobes',
        slot: 'bathrobe',
        tone: 'cream',
        art: 'robe',
        artTone: 'cream',
      },
      {
        title: 'Embroidered Towels',
        desc: 'Personalized designs',
        href: '/en/embroidered-towels',
        slot: 'embroidered',
        tone: 'charcoal',
        art: 'monogram',
        artTone: 'white',
      },
      {
        title: 'Hotel Bathrobes',
        desc: 'Shawl collar, kimono and hooded models',
        href: '/en/hotel-bathrobes',
        slot: 'salon',
        tone: 'sand',
        art: 'robe',
        artTone: 'white',
      },
    ],
  },
  why: {
    kicker: 'Why Başkan Havlu?',
    title: 'Your towel and bathrobe manufacturer',
    text: `Manufacturing quality towel and textile solutions in Bursa since ${SITE_CONFIG.founded}, for Turkey and the world.`,
    items: [
      {
        title: `Since ${SITE_CONFIG.founded}`,
        desc: `${years} years of manufacturing experience and our own production facility.`,
      },
      { title: 'Flexible orders', desc: 'We accommodate every order size, small or large.' },
      {
        title: 'Custom production',
        desc: 'Personalized manufacturing with logo embroidery, custom color and packaging.',
      },
      {
        title: 'Export experience',
        desc: `Exporting to ${exportCount}+ markets, including Greece, Germany, Italy and Arab countries.`,
      },
      {
        title: 'Hotel and corporate',
        desc: 'Tailored solutions for hotels, salons, clinics and corporate buyers.',
      },
      { title: 'Fast response', desc: 'Instant contact and a quick quote process via WhatsApp.' },
    ],
  },
  instagram: {
    kicker: 'Instagram',
    title: 'From our production and store',
    text: 'New products, colors and orders in progress on our Instagram account.',
    follow: 'Follow on Instagram',
  },
}

export function getHomeContent(locale: Locale): HomeContent {
  return locale === 'en' ? en : tr
}
