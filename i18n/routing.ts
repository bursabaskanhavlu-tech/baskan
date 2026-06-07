// next-intl rota yapılandırması
// Desteklenen diller ve varsayılan dil tanımı

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // Desteklenen dil kodları
  locales: ['tr', 'en'],

  // Varsayılan dil (URL öneki olmadan sunulur)
  defaultLocale: 'tr',

  // Varsayılan dil için URL öneki ekleme
  // 'as-needed' → Türkçe için /tr öneki eklenmez, İngilizce için /en eklenir
  localePrefix: 'as-needed',
})
