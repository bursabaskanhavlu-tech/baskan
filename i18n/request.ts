// next-intl sunucu tarafı yapılandırması
// Docs: https://next-intl.dev/docs/getting-started/app-router

import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Rota parametresinden dil kodunu al
  let locale = await requestLocale

  // Geçersiz locale ise varsayılan kullan
  if (!locale || !routing.locales.includes(locale as 'tr' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
