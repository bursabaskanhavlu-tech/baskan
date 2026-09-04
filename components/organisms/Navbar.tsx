'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG } from '@/lib/config/site'
import { TR_TO_EN_ROUTES, EN_TO_TR_ROUTES } from '@/lib/config/locale-routes'
import { Menu, X, Phone, ChevronDown, ArrowRight, Globe } from 'lucide-react'

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/new-collection' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/contact' },
]

const productCategories = [
  {
    title: 'Havlu',
    links: [
      { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
      { label: 'Toptan Havlu', href: '/toptan-havlu' },
      { label: 'Otel Havlusu', href: '/otel-havlusu' },
      { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
      { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
    ],
  },
  {
    title: 'Bornoz',
    links: [
      { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
      { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
      { label: 'Otel Bornozu', href: '/otel-bornozu' },
    ],
  },
  {
    title: 'Export',
    links: [
      { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
      { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
      { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
    ],
  },
]

function getLanguageSwitchTarget(pathname: string): { href: string; label: string } {
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  if (isEn) {
    return { href: EN_TO_TR_ROUTES[pathname] ?? '/', label: 'TR' }
  }
  return { href: TR_TO_EN_ROUTES[pathname] ?? '/en', label: 'EN' }
}

export function Navbar() {
  const pathname = usePathname()
  const languageSwitch = getLanguageSwitchTarget(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const productsMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const mobileCloseButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!productsOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [productsOpen])

  // Mobil menü açıkken: arka plan kaydırmasını kilitle, Escape ile kapat,
  // odağı kapatma butonuna taşı; kapanınca odağı hamburger butonuna geri ver.
  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    const hamburgerButton = hamburgerButtonRef.current
    document.body.style.overflow = 'hidden'
    mobileCloseButtonRef.current?.focus()

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onEscape)
      hamburgerButton?.focus()
    }
  }, [mobileOpen])

  const isEnPage = pathname === '/en' || pathname.startsWith('/en/')
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${isEnPage ? SITE_CONFIG.contact.whatsappMessageEn : SITE_CONFIG.contact.whatsappMessageTr}`
  const contactHref = isEnPage ? '/en/contact' : '/contact'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-shadow duration-200"
        style={{
          // Her zaman opak bir zemin: nav metni/logo sabit koyu renkte (#1a1a1a)
          // olduğu için, koyu (#1a1a1a) hero'lu sayfalarda (about/contact/
          // new-collection/blog) tam saydam header okunaksız hale gelirdi.
          // Sadece scroll'da gölge derinleşir, arka plan her zaman aynıdır.
          backgroundColor: 'rgba(250,248,245,0.96)',
          backdropFilter: 'blur(8px)',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 0 rgba(26,26,26,0.06)',
        }}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div style={{ width: '110px', height: '58px' }}>
              <Image
                src="/images/logo-text-cropped.png"
                alt="Başkan Havlu Tekstil"
                width={766}
                height={407}
                className="h-full w-full"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                }}
                quality={100}
                priority
              />
            </div>
          </Link>

          {/* Masaüstü nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Ana Navigasyon">
            {navLinks.map((link) =>
              link.label === 'Ürünler' ? (
                <div key={link.href} ref={productsMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#e87722]"
                    style={{ color: '#1a1a1a' }}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform"
                      style={{ transform: productsOpen ? 'rotate(180deg)' : 'none' }}
                      aria-hidden="true"
                    />
                  </button>

                  {productsOpen && (
                    <div
                      className="absolute left-1/2 top-full mt-4 w-[560px] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-xl"
                      style={{ border: '1px solid #e0d4c0' }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {productCategories.map((cat) => (
                          <div key={cat.title}>
                            <p
                              className="mb-3 text-xs font-semibold uppercase tracking-wider"
                              style={{ color: '#a88c64' }}
                            >
                              {cat.title}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {cat.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setProductsOpen(false)}
                                    className="text-sm transition-colors hover:text-[#e87722]"
                                    style={{ color: '#404040' }}
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div
                        className="mt-6 flex items-center justify-between border-t pt-4"
                        style={{ borderColor: '#e0d4c0' }}
                      >
                        <span className="text-sm" style={{ color: '#5c5c5c' }}>
                          Tüm ürün kategorilerini tek sayfada inceleyin
                        </span>
                        <Link
                          href="/new-collection"
                          onClick={() => setProductsOpen(false)}
                          className="flex items-center gap-1 text-sm font-semibold"
                          style={{ color: '#e87722' }}
                        >
                          Tüm Koleksiyon <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="text-sm font-medium transition-colors hover:text-[#e87722]"
                  style={{ color: pathname === link.href ? '#e87722' : '#1a1a1a' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Masaüstü CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={languageSwitch.href}
              className="flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
              style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
              aria-label={`Switch to ${languageSwitch.label === 'EN' ? 'English' : 'Turkish'}`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {languageSwitch.label}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border px-4 py-2 text-sm font-medium transition-colors"
              style={{ borderColor: '#25d366', color: '#25d366' }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <Link
              href={contactHref}
              className="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#e87722' }}
            >
              {isEnPage ? 'Get a Quote' : 'Teklif Al'}
            </Link>
          </div>

          {/* Mobil hamburger */}
          <button
            ref={hamburgerButtonRef}
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
            aria-label="Menüyü aç"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" style={{ color: '#1a1a1a' }} />
          </button>
        </div>
      </header>

      {/* Mobil menü overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div style={{ width: '104px', height: '55px' }}>
                <Image
                  src="/images/logo-text-cropped.png"
                  alt="Başkan Havlu Tekstil"
                  width={766}
                  height={407}
                  className="h-full w-full"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'left center',
                  }}
                  quality={100}
                />
              </div>
            </Link>
            <button
              ref={mobileCloseButtonRef}
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-md"
              aria-label="Menüyü kapat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobil Navigasyon">
            {navLinks.map((link) =>
              link.label === 'Ürünler' ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                    className="flex w-full items-center justify-between rounded-md px-4 py-3 text-xl font-semibold transition-colors hover:bg-[#faf8f5]"
                    style={{ color: '#1a1a1a' }}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-5 w-5 transition-transform"
                      style={{ transform: productsOpen ? 'rotate(180deg)' : 'none' }}
                      aria-hidden="true"
                    />
                  </button>
                  {productsOpen && (
                    <div className="flex flex-col gap-4 py-3 pl-4">
                      {productCategories.map((cat) => (
                        <div key={cat.title}>
                          <p
                            className="mb-2 text-xs font-semibold uppercase tracking-wider"
                            style={{ color: '#a88c64' }}
                          >
                            {cat.title}
                          </p>
                          <ul className="flex flex-col gap-1">
                            {cat.links.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setProductsOpen(false)
                                  }}
                                  className="block rounded-md px-3 py-2 text-base transition-colors hover:bg-[#faf8f5]"
                                  style={{ color: '#404040' }}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        href="/new-collection"
                        onClick={() => {
                          setMobileOpen(false)
                          setProductsOpen(false)
                        }}
                        className="flex items-center gap-1 px-3 text-sm font-semibold"
                        style={{ color: '#e87722' }}
                      >
                        Tüm Koleksiyon <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="rounded-md px-4 py-3 text-xl font-semibold transition-colors hover:bg-[#faf8f5]"
                  style={{ color: pathname === link.href ? '#e87722' : '#1a1a1a' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <Link
              href={languageSwitch.href}
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-md border text-sm font-medium"
              style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {languageSwitch.label === 'EN' ? 'English' : 'Türkçe'}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-md border text-sm font-medium"
              style={{ borderColor: '#25d366', color: '#25d366' }}
            >
              <Phone className="h-4 w-4" />
              {isEnPage ? 'Message on WhatsApp' : 'WhatsApp ile Yaz'}
            </a>
            <Link
              href={contactHref}
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-md text-sm font-medium text-white"
              style={{ backgroundColor: '#e87722' }}
            >
              {isEnPage ? 'Get a Quote' : 'Teklif Al'}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
