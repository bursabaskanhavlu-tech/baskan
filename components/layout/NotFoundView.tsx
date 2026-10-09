import Link from 'next/link'
import { ArrowIcon } from '@/components/atoms/Icons'

/** 404 içeriği — hem grup içi `not-found.tsx` hem `global-not-found.tsx` tarafından kullanılır. */
export function NotFoundView() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker rise-fade">404</p>
      <h1 className="display-lg rise mt-6 max-w-4xl">
        Aradığınız sayfa <em>burada değil</em>.
      </h1>
      <p className="lead rise-fade mt-6 max-w-xl" style={{ '--d': '0.1s' } as React.CSSProperties}>
        Sayfa taşınmış veya kaldırılmış olabilir. Koleksiyonumuza göz atabilir ya da bize doğrudan
        yazabilirsiniz.
      </p>
      <div
        className="rise-fade mt-10 flex flex-wrap gap-3"
        style={{ '--d': '0.18s' } as React.CSSProperties}
      >
        <Link href="/" className="btn btn-dark">
          Ana Sayfaya Dön
          <ArrowIcon />
        </Link>
        <Link href="/new-collection" className="btn btn-outline">
          Ürünleri İncele
        </Link>
        <Link href="/contact" className="btn btn-outline">
          İletişim
        </Link>
      </div>
      <p className="mt-12 text-sm text-charcoal-600">
        Looking for our English pages?{' '}
        <Link href="/en" className="link-line-static text-ink">
          Visit the English site
        </Link>
      </p>
    </section>
  )
}
