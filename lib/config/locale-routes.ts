// TR ⇄ EN sayfa eşleşmeleri — dil switcher ve hreflang için tek kaynak.
// Yeni bir TR/EN sayfa çifti eklendiğinde buraya da eklenir.
export const TR_TO_EN_ROUTES: Record<string, string> = {
  '/': '/en',
  '/about': '/en/about',
  '/contact': '/en/contact',
  '/havlu-ureticisi': '/en/turkish-towel-manufacturer',
  '/toptan-havlu': '/en/wholesale-towel-supplier',
  '/otel-havlusu': '/en/hotel-towels',
  '/promosyon-havlu': '/en/promotional-towels',
  '/nakisli-havlu': '/en/embroidered-towels',
  '/bornoz-ureticisi': '/en/bathrobe-manufacturer',
  '/toptan-bornoz': '/en/wholesale-bathrobes',
  '/otel-bornozu': '/en/hotel-bathrobes',
}

export const EN_TO_TR_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(TR_TO_EN_ROUTES).map(([tr, en]) => [en, tr])
)
