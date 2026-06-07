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
import { GA4Provider } from '@/components/providers/GA4Provider'

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
  title: "Başkan Havlu Tekstil | 1981'den Beri Bursa'da Havlu ve Bornoz Üretimi",
  description:
    "1981'den beri Bursa'da havlu ve bornoz üretimi. Otel, kurumsal firma, promosyon ve toptan satış çözümleri. Havlucular Çarşısı, Osmangazi.",
  metadataBase: new URL('https://baskanhavlu.com'),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
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
      <head>
        {/* Preconnect direktifleri — LCP iyileştirmesi (Görev 20.4) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#faf8f5', color: '#1a1a1a' }}>
        <OrganizationSchema />
        <WebSiteSchema />
        <CookieConsentProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <StickyWhatsApp />
          <CookieConsentBanner />
          <GA4Provider />
          <Analytics />
          <SpeedInsights />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
