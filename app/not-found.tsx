import Link from 'next/link'
import { FadeIn } from '@/components/motion-primitives/fade-in'

export default function NotFound() {
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
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold" style={{ color: '#1a1a1a' }}>
          Sayfa Bulunamadı
        </h1>
        <p className="mt-4 max-w-md" style={{ color: '#5c5c5c' }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#e87722' }}
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/new-collection"
            className="rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:opacity-80"
            style={{ borderColor: '#e87722', color: '#e87722' }}
          >
            Ürünleri İncele
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:opacity-80"
            style={{ borderColor: '#b3b3b3', color: '#404040' }}
          >
            İletişim
          </Link>
        </div>
      </FadeIn>
    </main>
  )
}
