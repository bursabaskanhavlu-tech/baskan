'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '@/lib/config/site'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Ürünler', href: '/new-collection' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'İletişim', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-200"
        style={{
          backgroundColor: scrolled ? 'rgba(250,248,245,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="overflow-hidden" style={{ width: '200px', height: '80px' }}>
              <Image
                src="/images/logo-text.png"
                alt="Başkan Havlu Tekstil"
                width={2000}
                height={2000}
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scale(1.5)',
                  transformOrigin: 'left center',
                }}
                priority
              />
            </div>
          </Link>

          {/* Masaüstü nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Ana Navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#e87722]"
                style={{ color: '#1a1a1a' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Masaüstü CTA */}
          <div className="hidden items-center gap-3 md:flex">
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
              href="/contact"
              className="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#e87722' }}
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobil hamburger */}
          <button
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
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="overflow-hidden" style={{ width: '200px', height: '80px' }}>
                <Image
                  src="/images/logo-text.png"
                  alt="Başkan Havlu Tekstil"
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.5)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-md"
              aria-label="Menüyü kapat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobil Navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-xl font-semibold transition-colors hover:bg-[#faf8f5]"
                style={{ color: '#1a1a1a' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-md border text-sm font-medium"
              style={{ borderColor: '#25d366', color: '#25d366' }}
            >
              <Phone className="h-4 w-4" />
              WhatsApp ile Yaz
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-md text-sm font-medium text-white"
              style={{ backgroundColor: '#e87722' }}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
