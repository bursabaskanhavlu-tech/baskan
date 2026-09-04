'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { FadeIn } from '@/components/motion-primitives/fade-in'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[app/error] Yakalanmamış render hatası:', error)
  }, [error])

  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{
        background:
          'radial-gradient(circle at 50% 30%, rgba(232,119,34,0.06), transparent 55%), #faf8f5',
      }}
    >
      <FadeIn className="flex flex-col items-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
          Hata
        </p>
        <h1 className="mt-4 text-3xl font-bold" style={{ color: '#1a1a1a' }}>
          Bir şeyler ters gitti
        </h1>
        <p className="mt-4 max-w-md" style={{ color: '#5c5c5c' }}>
          Sayfa yüklenirken beklenmeyen bir hata oluştu. Tekrar deneyebilir veya doğrudan WhatsApp
          üzerinden bizimle iletişime geçebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#e87722' }}
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:opacity-80"
            style={{ borderColor: '#e87722', color: '#e87722' }}
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:opacity-80"
            style={{ borderColor: '#25d366', color: '#25d366' }}
          >
            WhatsApp ile Yaz
          </a>
        </div>
      </FadeIn>
    </main>
  )
}
