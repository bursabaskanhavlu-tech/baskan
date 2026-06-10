'use client'

import { createContext, useContext, useEffect, useState, startTransition } from 'react'

type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

type CookieConsentContextType = {
  consent: ConsentState | null
  acceptAll: () => void
  acceptNecessary: () => void
  resetConsent: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

const STORAGE_KEY = 'cookie_consent'
const VERSION = '1.0'

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentState & { version?: string }
        if (parsed.version === VERSION) {
          startTransition(() => {
            setConsent({ necessary: true, analytics: parsed.analytics, marketing: parsed.marketing })
          })
        }
      }
    } catch {
      // localStorage okuma hatası — banner tekrar gösterilir
    }
  }, [])

  const save = (state: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, version: VERSION }))
    setConsent(state)
  }

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true })
  const acceptNecessary = () => save({ necessary: true, analytics: false, marketing: false })
  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY)
    setConsent(null)
  }

  return (
    <CookieConsentContext.Provider value={{ consent, acceptAll, acceptNecessary, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}
