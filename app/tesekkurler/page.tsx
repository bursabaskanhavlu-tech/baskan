import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives/fade-in'

export default function TesekkurlerPage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`
  return (
    <main
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
      style={{
        background:
          'radial-gradient(circle at 50% 20%, rgba(37,211,102,0.06), transparent 55%), #faf8f5',
      }}
    >
      <FadeIn className="flex flex-col items-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: '#f0fdf4' }}
        >
          <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-3xl font-bold" style={{ color: '#1a1a1a' }}>
          Mesajınız İletildi!
        </h1>
        <p className="mt-4 max-w-md text-lg" style={{ color: '#5c5c5c' }}>
          En geç 24 saat içinde size geri döneceğiz. Acil durumlar için WhatsApp&apos;tan
          ulaşabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium text-white"
            style={{ backgroundColor: '#25d366' }}
          >
            WhatsApp ile Yaz
          </a>
          <Link
            href="/new-collection"
            className="flex h-11 items-center justify-center rounded-md border px-6 text-sm font-medium"
            style={{ borderColor: '#e87722', color: '#e87722' }}
          >
            Koleksiyonu İncele
          </Link>
          <Link
            href="/"
            className="flex h-11 items-center justify-center rounded-md border px-6 text-sm font-medium"
            style={{ borderColor: '#e0d4c0', color: '#1a1a1a' }}
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </FadeIn>
    </main>
  )
}
