interface MarqueeProps {
  items: string[]
}

/** Ürün gruplarının yavaşça aktığı tipografik şerit. İkinci kopya yalnızca döngü içindir. */
export function Marquee({ items }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-12 font-display text-[2rem] italic sm:text-5xl"
        >
          <span>{item}</span>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-500" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className="marquee border-y border-line py-6 sm:py-8">
      {row(false)}
      {row(true)}
    </div>
  )
}
