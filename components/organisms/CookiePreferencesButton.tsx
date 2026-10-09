'use client'

import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

/** Çerez tercihini sıfırlar; banner yeniden görünür ve kullanıcı onayını değiştirebilir (KVKK). */
export function CookiePreferencesButton({
  label,
  className = 'link-line py-1 transition-colors hover:text-paper',
}: {
  label: string
  className?: string
}) {
  const { resetConsent } = useCookieConsent()
  return (
    <button type="button" onClick={resetConsent} className={className}>
      {label}
    </button>
  )
}
