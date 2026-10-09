import { PageHero } from '@/components/molecules/PageHero'

interface LegalPageProps {
  title: string
  updated: string
  children: React.ReactNode
}

/** Gizlilik / çerez politikası gibi metin sayfalarının ortak düzeni. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHero
        size="md"
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: title }]}
        title={title}
        lead={<span className="text-[0.9375rem]">Son güncelleme: {updated}</span>}
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="prose-article max-w-3xl border-t border-line pt-4">{children}</div>
        </div>
      </section>
    </>
  )
}
