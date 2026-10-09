'use client'

import { usePathname } from 'next/navigation'
import { WhatsAppIcon } from '@/components/atoms/Icons'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'
import { getDictionary, whatsappHref, type Locale } from '@/lib/i18n'
import { trackWhatsAppClick } from '@/lib/utils/analytics'
import { cn } from '@/lib/utils'

/** Her sayfada, her ekran boyutunda görünür WhatsApp butonu (AGENTS.md §8.1). */
export function StickyWhatsApp({ locale = 'tr' }: { locale?: Locale }) {
  const pathname = usePathname()
  const { consent, ready } = useCookieConsent()
  // Çerez bildirimi açıkken buton bildirimin üstüne çıkar, altında kalmaz.
  const bannerVisible = ready && consent === null

  return (
    <a
      href={whatsappHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={getDictionary(locale).stickyWhatsapp}
      onClick={() => trackWhatsAppClick('sticky_button', pathname)}
      className={cn(
        'group fixed right-[calc(1rem+env(safe-area-inset-right))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.6)] transition-[bottom,transform] duration-500 ease-out-soft hover:scale-105 sm:right-[calc(1.5rem+env(safe-area-inset-right))]',
        bannerVisible
          ? 'bottom-[calc(11rem+env(safe-area-inset-bottom))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]'
          : 'bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]'
      )}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
