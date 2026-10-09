import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { whatsappHref } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/atoms/Icons'

export const metadata: Metadata = generatePageMetadata({
  title: 'Teşekkürler | Başkan Havlu Tekstil',
  description: 'Mesajınız bize ulaştı.',
  path: '/tesekkurler',
  noIndex: true,
})

export default function TesekkurlerPage() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker rise-fade">Teşekkürler</p>
      <h1 className="display-lg rise mt-6">Mesajınız iletildi.</h1>
      <p className="lead rise-fade mt-6 max-w-xl">
        En geç 24 saat içinde size geri döneceğiz. Acil durumlar için WhatsApp&apos;tan
        ulaşabilirsiniz.
      </p>
      <div className="rise-fade mt-10 flex flex-wrap gap-3">
        <a
          href={whatsappHref('tr')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
          WhatsApp ile Yaz
        </a>
        <Link href="/new-collection" className="btn btn-outline">
          Koleksiyonu İncele
        </Link>
        <Link href="/" className="btn btn-outline">
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  )
}
