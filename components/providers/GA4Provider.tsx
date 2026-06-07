'use client'

// GA4 Provider — GDPR koşullu yükleme
// Kullanıcı analytics çerezine onay verirse GA4 script yüklenir.
// Görev 17.1: next/script strategy="afterInteractive"
// Görev 20.5: script strategy denetimi

import Script from 'next/script'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

export function GA4Provider() {
  const { consent } = useCookieConsent()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // GDPR: analytics onayı yoksa veya ölçüm kimliği yoksa yükleme
  if (!consent?.analytics || !measurementId) return null

  return (
    <>
      {/* GA4 Script — afterInteractive ile sayfa yüklendikten sonra */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}
