import { TowelArt } from '@/components/atoms/TowelArt'

/**
 * Büyük editoryal cümle; kaydırdıkça kelime kelime belirginleşir
 * (`.scrub-word`, CSS scroll-driven). Desteklemeyen tarayıcıda tam görünür.
 */
export function Manifesto({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <TowelArt
        variant="roll"
        tone="cream"
        accent="stone"
        className="pointer-events-none absolute -right-24 top-10 hidden h-80 w-80 opacity-60 lg:block"
      />
      <div className="container-x relative">
        <p className="display-lg max-w-6xl">
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>
              <span className="scrub-word inline-block">{word}</span>
              {i < words.length - 1 ? ' ' : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
