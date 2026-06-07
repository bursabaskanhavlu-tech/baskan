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
  title: 'Başkan Havlu Tekstil | Bursa Havlu Tedarikçisi',
  description:
    "1981'den bu yana Bursa'da havlu ve tekstil tedariki. Otel, kurum ve promosyon sektörüne özel çözümler.",
  metadataBase: new URL('https://baskanhavlu.com'),
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
        </CookieConsentProvider>
      </body>
    </html>
  )
}
