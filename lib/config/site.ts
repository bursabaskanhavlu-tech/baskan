export const SITE_CONFIG = {
  // Temel Kimlik
  name: 'Başkan Havlu Tekstil',
  url: 'https://baskanhavlu.com',
  founded: 1981,
  description: {
    tr: "1981'den bu yana Bursa'da faaliyet gösteren tekstil tedarik ve özel üretim koordinasyon firması. Oteller, kurumlar ve perakende sektörüne havlu ve tekstil çözümleri.",
    en: 'Başkan Havlu Tekstil, based in Bursa, Turkey, has been providing textile supply and custom production coordination services since 1981.',
  },
  businessModel:
    'Tekstil tedarik ve özel/fason üretim koordinasyonu — doğrudan fabrika değil',

  // İletişim — NAP (tüm sayfalarda birebir aynı kullanılacak)
  contact: {
    phone: '+90 507 342 06 61',
    phoneRaw: '+905073420661',
    whatsappNumber: '905073420661',
    whatsappUrl: 'https://wa.me/905073420661',
    whatsappMessageTr: 'Merhaba%2C%20bilgi%20almak%20istiyorum.',
    whatsappMessageEn: 'Hello%2C%20I%20would%20like%20to%20get%20information.',
    email: 'tekstil@baskanhavlu.com',
  },

  // Adres — tüm Schema ve sayfalarda birebir aynı
  address: {
    streetAddress: 'Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26',
    addressLocality: 'Osmangazi',
    addressRegion: 'Bursa',
    addressCountry: 'TR',
    fullDisplay:
      'Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa, Türkiye',
  },

  // Koordinatlar (yaklaşık — doğrulanacak)
  geo: {
    latitude: 40.1826,
    longitude: 29.0669,
  },

  // Sosyal Medya
  social: {
    instagram: 'https://www.instagram.com/bursahavlusu',
  },

  // Google Maps
  googleMapsUrl: 'https://share.google/fBgq5t9yzyukx2Fte',

  // Çalışma Saatleri
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],

  // İhracat Pazarları
  exportRegions: {
    tr: ['Arap Ülkeleri', 'Yunanistan'],
    en: ['Arab Countries', 'Greece'],
  },

  // Ürün Kategorileri
  productCategories: {
    tr: [
      'El Havlusu',
      'Yüz Havlusu',
      'Banyo Havlusu',
      'Kafa / Saç Havlusu',
      'Ayak Havlusu',
      'Promosyon Havlu',
    ],
    en: [
      'Hand Towel',
      'Face Towel',
      'Bath Towel',
      'Hair Towel',
      'Foot Towel',
      'Promotional Towel',
    ],
  },

  // SEO varsayılanları
  seo: {
    defaultTitle: 'Başkan Havlu Tekstil | Bursa Havlu Tedarikçisi',
    titleTemplate: '%s | Başkan Havlu Tekstil',
    defaultDescription:
      "1981'den bu yana Bursa'da havlu ve tekstil tedariki. Otel, kurum ve promosyon sektörüne özel çözümler.",
    ogImage: 'https://baskanhavlu.com/og-default.jpg',
  },
} as const

export type SiteConfig = typeof SITE_CONFIG
