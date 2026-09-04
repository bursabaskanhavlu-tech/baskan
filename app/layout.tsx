import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { StickyWhatsApp } from '@/components/organisms/StickyWhatsApp'
import { CookieConsentProvider } from '@/components/providers/CookieConsentProvider'
import { CookieConsentBanner } from '@/components/organisms/CookieConsentBanner'
import { GoogleAnalytics } from '@/components/organisms/GoogleAnalytics'
import { SITE_CONFIG } from '@/lib/config/site'

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

// viewport-fit=cover: iOS'ta çentik/ev tuşu göstergesi olan cihazlarda
// env(safe-area-inset-*) değerlerinin sıfır dönmemesi için gereklidir
// (bkz. StickyWhatsApp.tsx).
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Havlu ve Bornoz İmalatçısı, Bursa`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: [
    'havlu imalatçısı',
    'toptan havlu',
    'otel havlusu',
    'bornoz imalatçısı',
    'promosyon havlu',
    'havlu üreticisi',
    'Bursa havlu',
    'Turkish towel manufacturer',
    'wholesale towel Turkey',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: '/images/logo-icon.png',
    shortcut: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bursahavlusu',
  },
  // Google Search Console doğrulama — .env'den okur
  ...(process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'] && {
    verification: {
      google: process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'],
    },
  }),
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
      <head>
        {/* Preconnect — performans için kritik */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Bing Webmaster doğrulama */}
        {process.env['NEXT_PUBLIC_BING_SITE_VERIFICATION'] && (
          <meta name="msvalidate.01" content={process.env['NEXT_PUBLIC_BING_SITE_VERIFICATION']} />
        )}
      </head>
      <body
        className="flex min-h-full flex-col"
        style={{ backgroundColor: '#faf8f5', color: '#1a1a1a' }}
      >
        <CookieConsentProvider>
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <StickyWhatsApp />
          <CookieConsentBanner />
          <GoogleAnalytics />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
