import type { HomeContent } from '@/content/home'

interface ValuePropositionProps {
  content: HomeContent['why']
}

/** Solda yapışkan başlık, sağda ince çizgilerle ayrılmış gerekçe listesi. */
export function ValueProposition({ content }: ValuePropositionProps) {
  return (
    <section className="bg-beige-100 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-32">
            <p className="kicker">{content.kicker}</p>
            <h2 className="display-md mt-6">{content.title}</h2>
            <p className="lead mt-6 max-w-md">{content.text}</p>
          </div>
        </div>
        <ul className="border-t border-line-strong lg:col-span-7">
          {content.items.map((item) => (
            <li
              key={item.title}
              className="reveal grid gap-2 border-b border-line-strong py-7 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:py-9"
            >
              <h3 className="font-display text-[1.625rem] leading-tight">{item.title}</h3>
              <p className="leading-relaxed text-charcoal-600 sm:pt-1.5">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
