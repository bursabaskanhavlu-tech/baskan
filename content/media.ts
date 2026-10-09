/**
 * Fotoğraf yuvaları — sitedeki her görsel alanın tek kaynağı.
 *
 * Gerçek fotoğraf yoksa ilgili alan `MediaFrame` bileşeninde marka dokulu
 * kumaş görseline (TextileSwatch) düşer; ziyaretçiye asla kırık görsel,
 * dosya yolu veya "görsel gelecek" metni gösterilmez (AGENTS.md §7.3).
 *
 * Fotoğraf eklemek için:
 *  1. Dosyayı `public/images/photos/` altına koyun (ör. `hero.jpg`, en az 1600px genişlik).
 *  2. Aşağıda ilgili yuvanın değerini `{ src: '/images/photos/hero.jpg', alt: '...' }` yapın.
 * Yalnızca firmaya ait (kendi çekiminiz veya @bursahavlusu Instagram'ınızdaki)
 * fotoğraflar kullanılır — stok/başka firmaya ait görsel kullanılmaz (§14.2).
 */
export interface MediaAsset {
  src: string
  alt: string
}

export type MediaSlot =
  | 'hero'
  | 'store'
  | 'production'
  | 'wholesale'
  | 'hotel'
  | 'promotional'
  | 'bathrobe'
  | 'embroidered'
  | 'salon'
  | 'product-el-havlusu'
  | 'product-yuz-havlusu'
  | 'product-banyo-havlusu'
  | 'product-kafa-havlusu'
  | 'product-ayak-havlusu'
  | 'product-promosyon-havlu'
  | 'product-bornoz'
  | 'instagram-1'
  | 'instagram-2'
  | 'instagram-3'
  | 'instagram-4'
  | 'instagram-5'
  | 'instagram-6'

export const MEDIA: Record<MediaSlot, MediaAsset | null> = {
  hero: { src: '/images/photos/hero.jpg', alt: 'Katlanmış beyaz ve turuncu havlular' },
  store: { src: '/images/photos/cta.jpg', alt: 'Askıda turuncu havlu' },
  production: {
    src: '/images/photos/sektor-otel.jpg',
    alt: 'Otel odasında katlanmış beyaz havlular',
  },
  wholesale: {
    src: '/images/photos/cat-banyo.jpg',
    alt: 'Üst üste katlanmış turuncu banyo havluları',
  },
  hotel: { src: '/images/photos/cat-otel.jpg', alt: 'Otel ve SPA için beyaz havlu yığını' },
  promotional: { src: '/images/photos/nakis.jpg', alt: 'Logo nakışlı beyaz havlu' },
  bathrobe: { src: '/images/photos/cat-bornoz.jpg', alt: 'Beyaz şal yaka bornoz' },
  embroidered: { src: '/images/photos/nakis.jpg', alt: 'Turuncu monogram nakışlı havlu' },
  salon: { src: '/images/photos/cat-mutfak.jpg', alt: 'Askıda çizgili mutfak havlusu' },
  'product-el-havlusu': { src: '/images/photos/cat-otel.jpg', alt: 'Beyaz el havluları' },
  'product-yuz-havlusu': null,
  'product-banyo-havlusu': { src: '/images/photos/cat-banyo.jpg', alt: 'Turuncu banyo havluları' },
  'product-kafa-havlusu': null,
  'product-ayak-havlusu': null,
  'product-promosyon-havlu': {
    src: '/images/photos/nakis.jpg',
    alt: 'Logo nakışlı promosyon havlu',
  },
  'product-bornoz': { src: '/images/photos/cat-bornoz.jpg', alt: 'Beyaz bornoz' },
  'instagram-1': null,
  'instagram-2': null,
  'instagram-3': null,
  'instagram-4': null,
  'instagram-5': null,
  'instagram-6': null,
}

export function productMediaSlot(slug: string): MediaSlot | null {
  const key = `product-${slug}`
  return key in MEDIA ? (key as MediaSlot) : null
}
