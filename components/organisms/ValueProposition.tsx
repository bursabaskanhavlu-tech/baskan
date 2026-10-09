import { TowelArt, type ArtTone, type TowelVariant } from '@/components/atoms/TowelArt'
import type { HomeContent } from '@/content/home'
import { cn } from '@/lib/utils'

interface ValuePropositionProps {
  content: HomeContent['why']
}

const CARD_STYLES: { card: string; text: string; art: TowelVariant; tone: ArtTone }[] = [
  { card: 'bg-white', text: 'text-charcoal-600', art: 'stack', tone: 'cream' },
  { card: 'bg-beige-200', text: 'text-charcoal-700', art: 'roll', tone: 'white' },
  { card: 'bg-orange-500', text: 'text-ink/80', art: 'monogram', tone: 'cream' },
  { card: 'bg-ink text-paper', text: 'text-charcoal-300', art: 'hanging', tone: 'sand' },
  { card: 'bg-beige-100', text: 'text-charcoal-600', art: 'robe', tone: 'white' },
  { card: 'bg-charcoal-800 text-paper', text: 'text-charcoal-300', art: 'stack', tone: 'clay' },
]

/**
 * Solda yapışkan başlık; sağda kaydırdıkça birbirinin üzerine yığılan kartlar
 * (CSS `position: sticky`, JS yok). Hareket azaltmada da çalışır — yalnızca
 * konumlandırmadır.
 */
export function ValueProposition({ content }: ValuePropositionProps) {
  return (
    <section className="bg-beige-50 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-32">
            <p className="kicker">{content.kicker}</p>
            <h2 className="display-lg mt-6">{content.title}</h2>
            <p className="lead mt-6 max-w-md">{content.text}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-6 lg:col-span-7">
          {content.items.map((item, i) => {
            const style = CARD_STYLES[i % CARD_STYLES.length] ?? CARD_STYLES[0]!
            return (
              <li
                key={item.title}
                className="stack-card"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div
                  className={cn(
                    'relative flex min-h-56 overflow-hidden rounded-[2rem] p-7 shadow-[0_-12px_40px_-24px_rgb(26_26_26/0.35)] sm:min-h-72 sm:p-10',
                    style.card
                  )}
                >
                  <div className="relative z-10 max-w-[72%] self-end sm:max-w-[62%]">
                    <h3 className="font-display text-[2.25rem] leading-none sm:text-5xl">
                      {item.title}
                    </h3>
                    <p className={cn('mt-4 leading-relaxed', style.text)}>{item.desc}</p>
                  </div>
                  <TowelArt
                    variant={style.art}
                    tone={style.tone}
                    className="pointer-events-none absolute -bottom-4 -right-6 h-32 w-32 opacity-90 sm:h-60 sm:w-60"
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
