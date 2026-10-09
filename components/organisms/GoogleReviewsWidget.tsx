'use client'

import Script from 'next/script'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

/**
 * Elfsight Google yorumları widget'ı — üçüncü taraf betik olduğu için yalnızca
 * kullanıcı tüm çerezleri kabul ettiğinde yüklenir (KVKK). Onay yokken sayfa,
 * zaten görünür olan yorum kartları ve Google bağlantısıyla yetinir.
 */
export function GoogleReviewsWidget() {
  const { consent } = useCookieConsent()
  if (!consent?.marketing) return null

  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div className="elfsight-app-50a00806-efdc-4957-888f-29fb316745f0" data-elfsight-app-lazy />
    </>
  )
}
