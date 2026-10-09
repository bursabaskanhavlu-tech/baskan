'use client'

import { createContext, useContext, useEffect, useState, startTransition } from 'react'

type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

type CookieConsentContextType = {
  consent: ConsentState | null
  /** localStorage okundu mu? Okunmadan banner gösterilmez (geri dönen ziyaretçide yanıp sönmeyi önler). */
  ready: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  resetConsent: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

const STORAGE_KEY = 'cookie_consent'
const VERSION = '1.0'

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let stored: ConsentState | null = null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState & { version?: string }
        if (parsed.version === VERSION) {
          stored = {
            necessary: true,
            analytics: parsed.analytics === true,
            marketing: parsed.marketing === true,
          }
        }
      }
    } catch {
      // localStorage erişilemiyor — banner tekrar gösterilir
    }
    startTransition(() => {
      setConsent(stored)
      setReady(true)
    })
  }, [])

  const save = (state: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, version: VERSION }))
    } catch {
      // Gizli sekme vb. — tercih yalnızca bu oturum için geçerli olur
    }
    setConsent(state)
  }

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true })
  const acceptNecessary = () => save({ necessary: true, analytics: false, marketing: false })
  const resetConsent = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // yok say
    }
    setConsent(null)
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent, ready, acceptAll, acceptNecessary, resetConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}
