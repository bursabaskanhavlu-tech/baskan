import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { StickyWhatsApp } from '@/components/organisms/StickyWhatsApp'
import { CookieConsentProvider } from '@/components/providers/CookieConsentProvider'
import { CookieConsentBanner } from '@/components/organisms/CookieConsentBanner'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Başkan Havlu Tekstil | Havlu ve Bornoz Üretimi, Toptan Satış',
  description:
    "1981'den bu yana Bursa'da havlu ve bornoz üreten Başkan Havlu Tekstil. Otel, kurum ve promosyon sektörüne toptan satış. +10 ülkeye ihracat.",
  metadataBase: new URL('https://baskanhavlu.com'),
  icons: {
    icon: '/images/logo-icon.png',
    shortcut: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#faf8f5', color: '#1a1a1a' }}>
        <OrganizationSchema />
        <WebSiteSchema />
        <CookieConsentProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <StickyWhatsApp />
          <CookieConsentBanner />
          <Analytics />
          <SpeedInsights />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
