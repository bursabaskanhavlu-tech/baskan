import '@/app/globals.css'
import { fontVariables } from '@/lib/fonts'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { StickyWhatsApp } from '@/components/organisms/StickyWhatsApp'
import { CookieConsentProvider } from '@/components/providers/CookieConsentProvider'
import { CookieConsentBanner } from '@/components/organisms/CookieConsentBanner'
import { GoogleAnalytics } from '@/components/organisms/GoogleAnalytics'
import { IntroCurtain } from '@/components/layout/IntroCurtain'
import { SmoothScroll } from '@/components/effects/SmoothScroll'
import { Cursor } from '@/components/effects/Cursor'
import type { Locale } from '@/lib/i18n'

interface SiteShellProps {
  locale: Locale
  children: React.ReactNode
}

/**
 * TR (`app/(tr)/layout.tsx`) ve EN (`app/(en)/layout.tsx`) kök layout'larının
 * ortak iskeleti. İki ayrı kök layout sayesinde her sayfa doğru `<html lang>`
 * değeriyle ve kendi dilindeki navigasyon/footer ile sunulur; URL'ler değişmez
 * (route group'lar URL'e yansımaz).
 */
export function SiteShell({ locale, children }: SiteShellProps) {
  return (
    <html lang={locale} className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[70] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {locale === 'en' ? 'Skip to content' : 'İçeriğe geç'}
        </a>
        <IntroCurtain />
        <div className="grain" aria-hidden="true" />
        <CookieConsentProvider>
          <Navbar locale={locale} />
          <main id="main" data-site-region className="flex-1 pt-[4.25rem] lg:pt-[5.25rem]">
            {children}
          </main>
          <div data-site-region>
            <Footer locale={locale} />
          </div>
          <StickyWhatsApp locale={locale} />
          <CookieConsentBanner locale={locale} />
          <GoogleAnalytics />
          <SmoothScroll />
          <Cursor />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
