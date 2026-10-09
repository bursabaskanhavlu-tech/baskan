'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'
import { getDictionary, type Locale } from '@/lib/i18n'

export function CookieConsentBanner({ locale = 'tr' }: { locale?: Locale }) {
  const { consent, ready, acceptAll, acceptNecessary } = useCookieConsent()
  const t = getDictionary(locale).cookie

  if (!ready || consent !== null) return null

  return (
    <div
      role="region"
      aria-label={t.label}
      className="rise-fade fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-60 rounded-2xl bg-ink p-5 text-paper shadow-[0_20px_60px_-20px_rgb(0_0_0/0.5)] sm:inset-x-auto sm:left-6 sm:max-w-md sm:p-6"
    >
      <p className="text-[0.9375rem] leading-relaxed text-charcoal-300">
        {t.text}{' '}
        <Link
          href="/cerez-politikasi"
          className="link-line-static text-paper transition-colors hover:text-orange-400"
        >
          {t.policy}
        </Link>
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={acceptNecessary}
          className="btn btn-sm border border-line-dark text-paper hover:bg-paper hover:text-ink"
        >
          {t.necessary}
        </button>
        <button type="button" onClick={acceptAll} className="btn btn-sm btn-primary">
          {t.accept}
        </button>
      </div>
    </div>
  )
}
