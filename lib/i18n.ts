import { SITE_CONFIG } from '@/lib/config/site'

export type Locale = 'tr' | 'en'

export function isEnPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/')
}

/** WhatsApp bağlantısı — mesaj verilmezse dilin varsayılan selamı kullanılır. */
export function whatsappHref(locale: Locale, message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : locale === 'en'
      ? SITE_CONFIG.contact.whatsappMessageEn
      : SITE_CONFIG.contact.whatsappMessageTr
  return `${SITE_CONFIG.contact.whatsappUrl}?text=${text}`
}

/** Kuruluştan bu yana geçen yıl — metinlerde elle yazılan "25+ yıl" gibi eskiyen ifadelerin yerine. */
export function yearsInBusiness(): number {
  return new Date().getFullYear() - SITE_CONFIG.founded
}

export function homeHref(locale: Locale) {
  return locale === 'en' ? '/en' : '/'
}

export function contactHref(locale: Locale) {
  return locale === 'en' ? '/en/contact' : '/contact'
}

interface NavLink {
  label: string
  href: string
}

interface NavGroup {
  title: string
  links: NavLink[]
}

interface Dictionary {
  nav: {
    primary: NavLink[]
    productsLabel: string
    productGroups: NavGroup[]
    allProducts: NavLink
    quote: string
    whatsapp: string
    openMenu: string
    closeMenu: string
    mainNavLabel: string
    switchLabel: string
    switchShort: string
  }
  footer: {
    statement: string
    quickLinks: string
    products: string
    export: string
    contact: string
    hours: string[]
    rights: string
    privacy: string
    cookies: string
    cookiePrefs: string
    instagram: string
  }
  cta: {
    title: string
    text: string
    primary: string
    whatsapp: string
  }
  common: {
    home: string
    whatsappWrite: string
    viewMap: string
    founded: string
    exportMarkets: string
    productGroups: string
    store: string
    readMore: string
  }
  cookie: {
    text: string
    policy: string
    necessary: string
    accept: string
    label: string
  }
  stickyWhatsapp: string
}

const tr: Dictionary = {
  nav: {
    primary: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Ürünler', href: '/new-collection' },
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'İletişim', href: '/contact' },
    ],
    productsLabel: 'Ürünler',
    productGroups: [
      {
        title: 'Havlu',
        links: [
          { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
          { label: 'Toptan Havlu', href: '/toptan-havlu' },
          { label: 'Otel Havlusu', href: '/otel-havlusu' },
          { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
          { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
        ],
      },
      {
        title: 'Bornoz',
        links: [
          { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
          { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
          { label: 'Otel Bornozu', href: '/otel-bornozu' },
        ],
      },
      {
        title: 'Export',
        links: [
          { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
          { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
          { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
        ],
      },
    ],
    allProducts: { label: 'Tüm koleksiyon', href: '/new-collection' },
    quote: 'Teklif Al',
    whatsapp: 'WhatsApp',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    mainNavLabel: 'Ana Navigasyon',
    switchLabel: 'Switch to English',
    switchShort: 'EN',
  },
  footer: {
    statement: `Bursa Havlucular Çarşısı’nda ${SITE_CONFIG.founded}’dan bu yana havlu ve bornoz.`,
    quickLinks: 'Hızlı Bağlantılar',
    products: 'Ürün Kategorileri',
    export: 'Export',
    contact: 'İletişim',
    hours: ['Pazartesi–Cuma 09:00–18:00', 'Cumartesi 09:00–14:00'],
    rights: 'Tüm hakları saklıdır.',
    privacy: 'Gizlilik Politikası',
    cookies: 'Çerez Politikası',
    cookiePrefs: 'Çerez Tercihleri',
    instagram: 'Instagram',
  },
  cta: {
    title: 'Hemen Teklif Alın',
    text: 'Otel, kurum veya promosyon sektörü için havlu imalatımız hakkında bilgi almak ister misiniz?',
    primary: 'Teklif Formu',
    whatsapp: 'WhatsApp ile Ulaş',
  },
  common: {
    home: 'Ana Sayfa',
    whatsappWrite: 'WhatsApp ile Yaz',
    viewMap: 'Haritada Görüntüle',
    founded: 'Kuruluş',
    exportMarkets: 'İhracat Pazarı',
    productGroups: 'Ürün Grubu',
    store: 'Mağaza',
    readMore: 'Devamını oku',
  },
  cookie: {
    text: 'Bu sitede deneyiminizi iyileştirmek için çerezler kullanılmaktadır.',
    policy: 'Çerez Politikası',
    necessary: 'Yalnızca Zorunlu',
    accept: 'Kabul Et',
    label: 'Çerez bildirimi',
  },
  stickyWhatsapp: 'WhatsApp ile iletişime geçin',
}

const en: Dictionary = {
  nav: {
    primary: [
      { label: 'Home', href: '/en' },
      { label: 'Products', href: '/new-collection' },
      { label: 'About', href: '/en/about' },
      { label: 'Contact', href: '/en/contact' },
    ],
    productsLabel: 'Products',
    productGroups: [
      {
        title: 'Towels',
        links: [
          { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
          { label: 'Wholesale Towels', href: '/en/wholesale-towel-supplier' },
          { label: 'Hotel Towels', href: '/en/hotel-towels' },
          { label: 'Promotional Towels', href: '/en/promotional-towels' },
          { label: 'Embroidered Towels', href: '/en/embroidered-towels' },
        ],
      },
      {
        title: 'Bathrobes',
        links: [
          { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
          { label: 'Wholesale Bathrobes', href: '/en/wholesale-bathrobes' },
          { label: 'Hotel Bathrobes', href: '/en/hotel-bathrobes' },
        ],
      },
    ],
    allProducts: { label: 'Full collection', href: '/new-collection' },
    quote: 'Get a Quote',
    whatsapp: 'WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavLabel: 'Main navigation',
    switchLabel: 'Türkçeye geç',
    switchShort: 'TR',
  },
  footer: {
    statement: `Towels and bathrobes from Bursa’s Havlucular Çarşısı since ${SITE_CONFIG.founded}.`,
    quickLinks: 'Quick Links',
    products: 'Products',
    export: 'Türkçe',
    contact: 'Contact',
    hours: ['Monday–Friday 09:00–18:00', 'Saturday 09:00–14:00'],
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    cookiePrefs: 'Cookie Preferences',
    instagram: 'Instagram',
  },
  cta: {
    title: 'Get a Quote Now',
    text: 'Want to learn more about our hotel, corporate or promotional towel manufacturing?',
    primary: 'Quote Form',
    whatsapp: 'Contact via WhatsApp',
  },
  common: {
    home: 'Home',
    whatsappWrite: 'Message on WhatsApp',
    viewMap: 'View on Map',
    founded: 'Founded',
    exportMarkets: 'Export Markets',
    productGroups: 'Product Groups',
    store: 'Store',
    readMore: 'Read more',
  },
  cookie: {
    text: 'This site uses cookies to improve your experience.',
    policy: 'Cookie Policy',
    necessary: 'Necessary Only',
    accept: 'Accept',
    label: 'Cookie notice',
  },
  stickyWhatsapp: 'Contact us on WhatsApp',
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === 'en' ? en : tr
}
