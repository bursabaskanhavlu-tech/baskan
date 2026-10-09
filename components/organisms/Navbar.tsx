'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG } from '@/lib/config/site'
import { TR_TO_EN_ROUTES, EN_TO_TR_ROUTES } from '@/lib/config/locale-routes'
import { getDictionary, contactHref, homeHref, whatsappHref, type Locale } from '@/lib/i18n'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { trackCTAClick, trackWhatsAppClick } from '@/lib/utils/analytics'
import { cn } from '@/lib/utils'

function languageTarget(pathname: string, locale: Locale): string {
  if (locale === 'en') return EN_TO_TR_ROUTES[pathname] ?? '/'
  return TR_TO_EN_ROUTES[pathname] ?? '/en'
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/' || href === '/en') return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}

interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const t = getDictionary(locale).nav
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastPath, setLastPath] = useState(pathname)
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Sayfa değişince menüler kapanır (render sırasında senkron durum düzeltmesi)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMenuOpen(false)
    setMegaOpen(false)
  }

  // Aşağı kaydırırken başlığı gizle, yukarı kaydırınca göster
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setHidden(y > 240 && y > lastY)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobil menü: kaydırma kilidi, arka planı etkisizleştirme, Escape
  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    const background = Array.from(document.querySelectorAll<HTMLElement>('[data-site-region]'))
    root.classList.add('menu-open')
    background.forEach((el) => (el.inert = true))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const toggle = toggleRef.current
    return () => {
      root.classList.remove('menu-open')
      background.forEach((el) => (el.inert = false))
      document.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [menuOpen])

  // Mega menü: Escape ile kapanır
  useEffect(() => {
    if (!megaOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [megaOpen])

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current)
    setMegaOpen(true)
  }
  const closeMegaSoon = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current)
    megaTimer.current = setTimeout(() => setMegaOpen(false), 140)
  }

  const waUrl = whatsappHref(locale)
  const switchHref = languageTarget(pathname, locale)
  const productsHref = '/new-collection'

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-500 ease-out',
          hidden && !menuOpen && !megaOpen ? '-translate-y-full' : 'translate-y-0',
          scrolled || megaOpen || menuOpen
            ? 'bg-paper/92 shadow-[0_1px_0_rgb(26_26_26/0.08)] backdrop-blur-md'
            : 'bg-paper'
        )}
      >
        <div className="container-x flex h-[4.25rem] items-center justify-between gap-6 lg:h-[5.25rem]">
          <Link
            href={homeHref(locale)}
            className="relative z-10 -ml-1 flex shrink-0 items-center p-1"
            aria-label={`${SITE_CONFIG.name}, ${locale === 'en' ? 'Home' : 'Ana Sayfa'}`}
          >
            <Image
              src="/images/logo-text-cropped.png"
              alt={SITE_CONFIG.name}
              width={766}
              height={407}
              sizes="(min-width: 1024px) 120px, 100px"
              priority
              className="h-auto w-[100px] lg:w-[120px]"
            />
          </Link>

          {/* Masaüstü navigasyon */}
          <nav aria-label={t.mainNavLabel} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {t.primary.map((link) =>
                link.href === productsHref ? (
                  <li key={link.href} onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                    <button
                      type="button"
                      onClick={() => setMegaOpen((v) => !v)}
                      aria-expanded={megaOpen}
                      aria-controls="mega-menu"
                      className={cn(
                        'flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.9375rem] transition-colors hover:text-orange-700',
                        isActive(pathname, link.href) && 'text-orange-700'
                      )}
                    >
                      {link.label}
                      <svg
                        viewBox="0 0 12 8"
                        className={cn(
                          'h-2 w-3 transition-transform duration-300',
                          megaOpen && 'rotate-180'
                        )}
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                      className={cn(
                        'block rounded-full px-4 py-2.5 text-[0.9375rem] transition-colors hover:text-orange-700',
                        isActive(pathname, link.href) && 'text-orange-700'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={switchHref}
              hrefLang={locale === 'en' ? 'tr' : 'en'}
              aria-label={t.switchLabel}
              className="hidden h-11 min-w-11 items-center justify-center rounded-full px-3 text-[0.8125rem] font-semibold tracking-wide transition-colors hover:text-orange-700 sm:flex"
            >
              {t.switchShort}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar', pathname)}
              aria-label={t.whatsapp}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-whatsapp hover:bg-whatsapp hover:text-white"
            >
              <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
            </a>
            <Link
              href={contactHref(locale)}
              onClick={() => trackCTAClick(t.quote, pathname)}
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              {t.quote}
            </Link>

            {/* Hamburger — iki çizgi X'e dönüşür */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper lg:hidden"
            >
              <span
                className={cn(
                  'absolute h-px w-5 bg-current transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]',
                  menuOpen ? 'rotate-45' : '-translate-y-[4px]'
                )}
              />
              <span
                className={cn(
                  'absolute h-px w-5 bg-current transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]',
                  menuOpen ? '-rotate-45' : 'translate-y-[4px]'
                )}
              />
            </button>
          </div>
        </div>

        {/* Mega menü (masaüstü) */}
        <div
          id="mega-menu"
          onMouseEnter={openMega}
          onMouseLeave={closeMegaSoon}
          inert={!megaOpen}
          className={cn(
            'absolute inset-x-0 top-full hidden border-y border-line bg-paper transition-[opacity,transform,visibility] duration-400 ease-out lg:block',
            megaOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
          )}
        >
          <div className="container-x grid grid-cols-12 gap-10 py-12">
            {t.productGroups.map((group) => (
              <div key={group.title} className="col-span-3">
                <p className="kicker">{group.title}</p>
                <ul className="mt-6 space-y-3.5">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMegaOpen(false)}
                        className="link-line text-[1.0625rem] transition-colors hover:text-orange-700"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href={t.allProducts.href}
              onClick={() => setMegaOpen(false)}
              className={cn(
                'group relative overflow-hidden',
                t.productGroups.length > 2 ? 'col-span-3' : 'col-span-6'
              )}
            >
              <div className="swatch swatch-stone absolute inset-0" aria-hidden="true" />
              <div className="relative flex h-full min-h-44 flex-col justify-end bg-gradient-to-t from-ink/55 to-transparent p-6 text-paper">
                <span className="display-sm">{t.allProducts.label}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm">
                  {locale === 'en' ? 'View all' : 'Hepsini gör'}
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobil / tablet tam ekran menü */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          'fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper pt-[4.25rem] transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(.76,0,.24,1)] lg:hidden',
          menuOpen
            ? 'visible [clip-path:inset(0_0_0_0)]'
            : 'invisible [clip-path:inset(0_0_100%_0)]'
        )}
      >
        <nav aria-label={t.mainNavLabel} className="container-x flex-1 pt-8">
          <ul>
            {t.primary.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  'border-b border-line transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)]',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                )}
                style={{ transitionDelay: menuOpen ? `${180 + i * 60}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between py-4 font-display text-[2.25rem] leading-none sm:text-5xl',
                    isActive(pathname, link.href) && 'text-orange-700'
                  )}
                >
                  {link.label}
                  <ArrowIcon className="h-5 w-5 opacity-40" />
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'mt-10 grid grid-cols-2 gap-8 pb-8 transition-opacity duration-700 sm:grid-cols-3',
              menuOpen ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: menuOpen ? '480ms' : '0ms' }}
          >
            {t.productGroups.map((group) => (
              <div key={group.title}>
                <p className="kicker">{group.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-[0.9375rem] text-charcoal-700"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div
          className={cn(
            'container-x border-t border-line py-6 transition-opacity duration-700',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: menuOpen ? '540ms' : '0ms' }}
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('mobile_menu', pathname)}
              className="btn btn-outline w-full"
            >
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
              {t.whatsapp}
            </a>
            <Link
              href={contactHref(locale)}
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              {t.quote}
            </Link>
          </div>
          <div className="mt-5 flex items-center justify-between text-sm text-charcoal-600">
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="py-2">
              {SITE_CONFIG.contact.phone}
            </a>
            <Link
              href={switchHref}
              hrefLang={locale === 'en' ? 'tr' : 'en'}
              onClick={() => setMenuOpen(false)}
              className="py-2 font-semibold text-ink"
            >
              {locale === 'en' ? 'Türkçe' : 'English'}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
