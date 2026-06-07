export interface Product {
  id: string
  slug: string
  name: { tr: string; en: string }
  description: { tr: string; en: string }
  useCases: string[]
  customization: string[]
  moq: string
  leadTime: string
  category: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'el-havlusu',
    slug: 'el-havlusu',
    name: { tr: 'El Havlusu', en: 'Hand Towel' },
    description: {
      tr: 'Oteller, güzellik salonları ve kurumsal kullanım için el havlusu. Özel logo nakışı ve renk seçeneği mevcuttur.',
      en: 'Hand towels for hotels, beauty salons and corporate use. Custom logo embroidery and color options available.',
    },
    useCases: ['Otel', 'Güzellik Salonu', 'Kuaför', 'Kurumsal', 'Promosyon'],
    customization: ['Logo nakışı', 'Renk seçimi', 'Özel boyut'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'havlu',
  },
  {
    id: 'yuz-havlusu',
    slug: 'yuz-havlusu',
    name: { tr: 'Yüz Havlusu', en: 'Face Towel' },
    description: {
      tr: 'Spa, otel ve kurumsal kullanım için yüz havlusu. Özel renk ve baskı seçenekleri mevcuttur.',
      en: 'Face towels for spa, hotel and corporate use. Custom color and print options available.',
    },
    useCases: ['Otel', 'Spa', 'Güzellik Merkezi', 'Kurumsal'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'havlu',
  },
  {
    id: 'banyo-havlusu',
    slug: 'banyo-havlusu',
    name: { tr: 'Banyo Havlusu', en: 'Bath Towel' },
    description: {
      tr: 'Otel ve konaklama sektörü için banyo havlusu. Çeşitli gramaj ve boyut seçenekleri mevcuttur.',
      en: 'Bath towels for hotel and hospitality sector. Various GSM and size options available.',
    },
    useCases: ['Otel', 'Apart Otel', 'Tatil Köyü', 'Konaklama'],
    customization: ['Logo nakışı', 'Özel gramaj', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'otel',
  },
  {
    id: 'kafa-havlusu',
    slug: 'kafa-havlusu',
    name: { tr: 'Kafa / Saç Havlusu', en: 'Hair Towel' },
    description: {
      tr: 'Kuaför, güzellik salonu ve SPA için saç havlusu. Özel logo baskısı mümkündür.',
      en: 'Hair towels for hairdressers, beauty salons and spas. Custom logo printing available.',
    },
    useCases: ['Kuaför', 'Güzellik Salonu', 'SPA', 'Promosyon'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'havlu',
  },
  {
    id: 'ayak-havlusu',
    slug: 'ayak-havlusu',
    name: { tr: 'Ayak Havlusu', en: 'Foot Towel' },
    description: {
      tr: 'Otel, SPA ve havuz kenarı kullanımı için ayak havlusu.',
      en: 'Foot towels for hotel, spa and poolside use.',
    },
    useCases: ['Otel', 'SPA', 'Havuz', 'Fitness Merkezi'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'otel',
  },
  {
    id: 'promosyon-havlu',
    slug: 'promosyon-havlu',
    name: { tr: 'Promosyon Havlu', en: 'Promotional Towel' },
    description: {
      tr: 'Kurumsal hediye ve promosyon kampanyaları için özel logolu havlu.',
      en: 'Custom logo towels for corporate gifts and promotional campaigns.',
    },
    useCases: ['Kurumsal Hediye', 'Promosyon Kampanyası', 'Etkinlik', 'Fuar'],
    customization: ['Logo baskı', 'Logo nakış', 'Özel renk', 'Özel ambalaj'],
    moq: 'Ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
    category: 'promosyon',
  },
]
