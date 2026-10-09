'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { whatsappHref, type Locale } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/atoms/Icons'

interface ErrorViewProps {
  error: Error & { digest?: string }
  reset: () => void
  locale: Locale
}

export function ErrorView({ error, reset, locale }: ErrorViewProps) {
  useEffect(() => {
    console.error('[app/error] Yakalanmamış render hatası:', error)
  }, [error])

  const en = locale === 'en'

  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker">{en ? 'Error' : 'Hata'}</p>
      <h1 className="display-lg mt-6 max-w-4xl">
        {en ? 'Something went wrong.' : 'Bir şeyler ters gitti.'}
      </h1>
      <p className="lead mt-6 max-w-xl">
        {en
          ? 'An unexpected error occurred while loading the page. You can try again or reach us directly on WhatsApp.'
          : 'Sayfa yüklenirken beklenmeyen bir hata oluştu. Tekrar deneyebilir veya doğrudan WhatsApp üzerinden bizimle iletişime geçebilirsiniz.'}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="btn btn-dark">
          {en ? 'Try Again' : 'Tekrar Dene'}
        </button>
        <Link href={en ? '/en' : '/'} className="btn btn-outline">
          {en ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        <a
          href={whatsappHref(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
          {en ? 'Message on WhatsApp' : 'WhatsApp ile Yaz'}
        </a>
      </div>
    </section>
  )
}
