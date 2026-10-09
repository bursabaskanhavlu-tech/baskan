import { useId } from 'react'

export type TowelVariant = 'stack' | 'roll' | 'robe' | 'hanging' | 'monogram'
export type ArtTone = 'cream' | 'sand' | 'stone' | 'clay' | 'charcoal' | 'white'

const TONES: Record<ArtTone, { base: string; light: string; shade: string; band: string }> = {
  white: { base: '#F4EFE7', light: '#FFFFFF', shade: '#D9CFBF', band: '#C4A882' },
  cream: { base: '#EDE5D8', light: '#FAF8F5', shade: '#CDBFA8', band: '#A88C64' },
  sand: { base: '#E0D4C0', light: '#F1E9DC', shade: '#BFAE92', band: '#8A7050' },
  stone: { base: '#C4A882', light: '#D9C3A0', shade: '#9C8261', band: '#6B2F08' },
  clay: { base: '#E87722', light: '#FF9F52', shade: '#A85210', band: '#FFE8CC' },
  charcoal: { base: '#404040', light: '#5C5C5C', shade: '#1A1A1A', band: '#E87722' },
}

interface TowelArtProps {
  variant: TowelVariant
  tone?: ArtTone
  /** İkinci renk (yığın ve rulolarda karışık tonlar için). */
  accent?: ArtTone
  className?: string
  /** Hafif süzülme animasyonu. */
  float?: boolean
}

/**
 * Fotoğraf yokken kullanılan, marka paletinde çizilmiş havlu illüstrasyonları.
 * Saf SVG: ölçeklenir, ağ isteği yoktur, ekran okuyuculardan gizlidir.
 */
export function TowelArt({
  variant,
  tone = 'cream',
  accent,
  className,
  float = true,
}: TowelArtProps) {
  const uid = useId().replace(/:/g, '')
  const t = TONES[tone]
  const a = TONES[accent ?? tone]
  const terry = `terry-${uid}`
  const shadow = `shadow-${uid}`

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Havlu ilmeği dokusu */}
        <pattern id={terry} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.9" fill="#000" opacity="0.07" />
          <circle cx="4.5" cy="4.5" r="0.9" fill="#fff" opacity="0.22" />
        </pattern>
        <filter id={shadow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dy="14" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {(['t', 'a'] as const).map((k) => {
          const c = k === 't' ? t : a
          return (
            <linearGradient key={k} id={`g${k}-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={c.light} />
              <stop offset="0.55" stopColor={c.base} />
              <stop offset="1" stopColor={c.shade} />
            </linearGradient>
          )
        })}
      </defs>

      <g className={float ? 'art-float' : undefined} filter={`url(#${shadow})`}>
        {variant === 'stack' && <Stack uid={uid} t={t} a={a} terry={terry} />}
        {variant === 'roll' && <Rolls uid={uid} t={t} a={a} terry={terry} />}
        {variant === 'robe' && <Robe uid={uid} t={t} terry={terry} />}
        {variant === 'hanging' && <Hanging uid={uid} t={t} terry={terry} />}
        {variant === 'monogram' && <Monogram uid={uid} t={t} terry={terry} />}
      </g>
    </svg>
  )
}

type Tone = (typeof TONES)[ArtTone]
interface PartProps {
  uid: string
  t: Tone
  a?: Tone
  terry: string
}

/** Katlanmış havlu yığını — her havlunun önünde kıvrım ve dokuma bordür. */
function Stack({ uid, t, a, terry }: PartProps) {
  const layers = [
    { y: 250, w: 280, g: 't', c: t },
    { y: 196, w: 266, g: 'a', c: a ?? t },
    { y: 142, w: 252, g: 't', c: t },
    { y: 88, w: 238, g: 'a', c: a ?? t },
  ]
  return (
    <>
      {layers.map((l) => {
        const x = 200 - l.w / 2
        return (
          <g key={l.y}>
            <rect x={x} y={l.y} width={l.w} height="56" rx="28" fill={`url(#g${l.g}-${uid})`} />
            <rect x={x} y={l.y} width={l.w} height="56" rx="28" fill={`url(#${terry})`} />
            {/* dokuma bordür */}
            <rect
              x={x + 34}
              y={l.y + 20}
              width={l.w - 68}
              height="3"
              fill={l.c.band}
              opacity="0.55"
            />
            <rect
              x={x + 34}
              y={l.y + 29}
              width={l.w - 68}
              height="1.5"
              fill={l.c.band}
              opacity="0.4"
            />
            {/* kıvrım gölgesi */}
            <rect
              x={x + 10}
              y={l.y + 46}
              width={l.w - 20}
              height="8"
              rx="4"
              fill="#000"
              opacity="0.07"
            />
          </g>
        )
      })}
    </>
  )
}

/** Spa usulü rulo havlular — uçtan görünüm, spiral sarım. */
function Rolls({ uid, t, a, terry }: PartProps) {
  const rolls = [
    { cx: 136, cy: 260, g: 't', c: t },
    { cx: 264, cy: 260, g: 'a', c: a ?? t },
    { cx: 200, cy: 152, g: 't', c: t },
  ]
  return (
    <>
      {rolls.map((r) => (
        <g key={`${r.cx}-${r.cy}`}>
          <circle cx={r.cx} cy={r.cy} r="66" fill={`url(#g${r.g}-${uid})`} />
          <circle cx={r.cx} cy={r.cy} r="66" fill={`url(#${terry})`} />
          {[52, 38, 25, 13].map((rad, i) => (
            <path
              key={rad}
              d={`M ${r.cx + rad} ${r.cy} A ${rad} ${rad} 0 1 1 ${r.cx - rad * 0.2} ${r.cy - rad * 0.98}`}
              fill="none"
              stroke={r.c.shade}
              strokeWidth={i === 0 ? 2.4 : 2}
              strokeLinecap="round"
              opacity={0.75 - i * 0.12}
            />
          ))}
          <circle
            cx={r.cx}
            cy={r.cy}
            r="66"
            fill="none"
            stroke={r.c.band}
            strokeWidth="3"
            opacity="0.5"
          />
        </g>
      ))}
    </>
  )
}

/** Şal yaka bornoz silüeti, kemerli. */
function Robe({ uid, t, terry }: PartProps) {
  const body =
    'M150 70 L250 70 L318 112 L352 230 L314 244 L292 176 L296 350 L104 350 L108 176 L86 244 L48 230 L82 112 Z'
  return (
    <>
      <path d={body} fill={`url(#gt-${uid})`} strokeLinejoin="round" />
      <path d={body} fill={`url(#${terry})`} />
      {/* şal yaka */}
      <path
        d="M150 70 Q200 150 200 214 Q200 150 250 70"
        fill="none"
        stroke={t.shade}
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M150 70 Q200 150 200 214 Q200 150 250 70"
        fill="none"
        stroke={t.light}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* kemer */}
      <rect x="104" y="226" width="192" height="16" rx="8" fill={t.shade} opacity="0.75" />
      <path
        d="M200 240 L186 296 M200 240 L216 292"
        stroke={t.shade}
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* cep ve kol bantları */}
      <rect
        x="126"
        y="270"
        width="52"
        height="40"
        rx="8"
        fill="none"
        stroke={t.band}
        strokeWidth="2"
        opacity="0.6"
      />
      <path d="M48 230 L86 244 M318 244 L352 230" stroke={t.band} strokeWidth="5" opacity="0.6" />
    </>
  )
}

/** Askıda peştemal — çubuk, iki kat kumaş, çizgili bordür ve püsküller. */
function Hanging({ uid, t, terry }: PartProps) {
  return (
    <>
      <rect x="60" y="76" width="280" height="10" rx="5" fill="#1A1A1A" opacity="0.85" />
      <path d="M100 82 L300 82 L300 140 L100 140 Z" fill={t.shade} />
      <rect x="100" y="82" width="200" height="232" fill={`url(#gt-${uid})`} />
      <rect x="100" y="82" width="200" height="232" fill={`url(#${terry})`} />
      {[248, 262, 270, 284].map((y, i) => (
        <rect
          key={y}
          x="100"
          y={y}
          width="200"
          height={i % 2 ? 3 : 7}
          fill={t.band}
          opacity="0.7"
        />
      ))}
      {Array.from({ length: 20 }, (_, i) => (
        <line
          key={i}
          x1={106 + i * 9.8}
          y1="314"
          x2={106 + i * 9.8 + (i % 2 ? 2 : -2)}
          y2={338 + (i % 3) * 4}
          stroke={t.shade}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </>
  )
}

/** Köşesinde nakış monogramı olan havlu. */
function Monogram({ uid, t, terry }: PartProps) {
  return (
    <>
      <rect x="70" y="70" width="260" height="260" rx="22" fill={`url(#gt-${uid})`} />
      <rect x="70" y="70" width="260" height="260" rx="22" fill={`url(#${terry})`} />
      <rect x="70" y="282" width="260" height="10" fill={t.band} opacity="0.55" />
      <rect x="70" y="298" width="260" height="3" fill={t.band} opacity="0.45" />
      <text
        x="200"
        y="214"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontSize="132"
        fill="none"
        stroke={t.band}
        strokeWidth="2.6"
        strokeDasharray="5 4"
      >
        BH
      </text>
    </>
  )
}
