interface BrandPatternPanelProps {
  className?: string
  iconSize?: number
}

/**
 * Fotoğraf hazır olmadan önce hero/tanıtım alanlarında kullanılan
 * marka desenli dolgu — kırık görsel yerine kasıtlı bir tasarım öğesi.
 */
export function BrandPatternPanel({ className = '', iconSize = 96 }: BrandPatternPanelProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(232,119,34,0.07) 0px, rgba(232,119,34,0.07) 2px, transparent 2px, transparent 16px), repeating-linear-gradient(45deg, rgba(196,168,130,0.12) 0px, rgba(196,168,130,0.12) 2px, transparent 2px, transparent 16px)',
        }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full bg-white shadow-sm"
          style={{ width: iconSize + 48, height: iconSize + 48 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            width={iconSize}
            height={iconSize}
            aria-hidden="true"
          >
            <rect x="6" y="10" width="36" height="9" rx="3" fill="#ede5d8" />
            <rect x="6" y="22" width="36" height="9" rx="3" fill="#e0d4c0" />
            <rect x="10" y="34" width="28" height="7" rx="3" fill="#e87722" />
            <line x1="6" y1="14.5" x2="42" y2="14.5" stroke="#c4a882" strokeWidth="1" />
            <line x1="6" y1="26.5" x2="42" y2="26.5" stroke="#a88c64" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  )
}
