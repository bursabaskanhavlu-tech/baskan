export const SITE_CONFIG = {
  // Temel Kimlik
  name: 'Başkan Havlu Tekstil',
  url: 'https://baskanhavlu.com',
  founded: 1996,
  description: {
    tr: "1996'dan bu yana Bursa'da havlu ve bornoz üreten bir imalatçı firma. Oteller, kurumlar ve perakende sektörüne kendi üretimimiz havlu ve tekstil çözümleri.",
    en: 'Başkan Havlu Tekstil is a towel and bathrobe manufacturer based in Bursa, Turkey, producing since 1996.',
  },
  businessModel: 'Havlu ve bornoz imalatı — doğrudan üretici',

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
  googleMapsUrl: 'https://share.google/eu6S69JKkWPwql7Pi',
  googlePlaceId: 'ChIJhyX53cA-yhQRlmKIkucXAV8',
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJhyX53cA-yhQRlmKIkucXAV8',

  // Çalışma Saatleri
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],

  // İhracat Pazarları
  exportRegions: {
    tr: [
      'Yunanistan',
      'Bulgaristan',
      'Almanya',
      'Amerika',
      'İtalya',
      'Fas',
      'Cezayir',
      'Kuveyt',
      'Arap Ülkeleri',
      'Fransa',
      'Rusya',
      'Ukrayna',
      'Filistin',
    ],
    en: [
      'Greece',
      'Bulgaria',
      'Germany',
      'United States',
      'Italy',
      'Morocco',
      'Algeria',
      'Kuwait',
      'Arab Countries',
      'France',
      'Russia',
      'Ukraine',
      'Palestine',
    ],
  },

  // Ürün Kategorileri
  productCategories: {
    tr: [
      'El Havlusu',
      'Mutfak Havlusu',
      'Yüz Havlusu',
      'Ayak Havlusu',
      'Baş Havlusu',
      'Banyo Havlusu',
      'Bornoz',
      'Nevresim Takımı',
      'Pike Takımı',
      'Çarşaf',
      'Yastık Kılıfı',
      'Otel Yatak Takımı',
      'Nevresim',
      'Yastık',
      'Yorgan',
    ],
    en: [
      'Hand Towel',
      'Kitchen Towel',
      'Face Towel',
      'Foot Towel',
      'Head Towel',
      'Bath Towel',
      'Bathrobe',
      'Duvet Cover Set',
      'Bedspread Set',
      'Bed Sheet',
      'Pillowcase',
      'Hotel Bed Linen Set',
      'Duvet Cover',
      'Pillow',
      'Quilt',
    ],
  },

  // SEO varsayılanları
  seo: {
    defaultTitle: 'Başkan Havlu Tekstil | Bursa Havlu İmalatçısı',
    titleTemplate: '%s | Başkan Havlu Tekstil',
    defaultDescription:
      "1996'dan bu yana Bursa'da havlu ve bornoz imalatı. Otel, kurum ve promosyon sektörüne özel üretim çözümleri.",
    ogImage: 'https://baskanhavlu.com/images/logo-icon.png',
  },
} as const

export type SiteConfig = typeof SITE_CONFIG
