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
  hero: null,
  store: null,
  production: null,
  wholesale: null,
  hotel: null,
  promotional: null,
  bathrobe: null,
  embroidered: null,
  salon: null,
  'product-el-havlusu': null,
  'product-yuz-havlusu': null,
  'product-banyo-havlusu': null,
  'product-kafa-havlusu': null,
  'product-ayak-havlusu': null,
  'product-promosyon-havlu': null,
  'product-bornoz': null,
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
