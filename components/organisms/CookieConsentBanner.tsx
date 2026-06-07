'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

export function CookieConsentBanner() {
  const { consent, acceptAll, acceptNecessary } = useCookieConsent()

  // Onay verilmişse banner gösterme
  if (consent !== null) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 py-4 shadow-xl sm:px-6"
      style={{ backgroundColor: '#1a1a1a' }}
      role="region"
      aria-label="Çerez bildirimi"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm" style={{ color: '#e0d4c0' }}>
          Bu sitede deneyiminizi iyileştirmek için çerezler kullanılmaktadır.{' '}
          <Link
            href="/cerez-politikasi"
            className="underline transition-colors hover:text-white"
            style={{ color: '#e87722' }}
          >
            Çerez Politikası
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={acceptNecessary}
            className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            style={{ borderColor: '#5c5c5c', color: '#b3b3b3' }}
          >
            Yalnızca Zorunlu
          </button>
          <button
            onClick={acceptAll}
            className="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#e87722' }}
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}
