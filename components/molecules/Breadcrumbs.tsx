import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
  className?: string
}

/** Görünür breadcrumb — `<nav aria-label="Breadcrumb">` + `<ol>` yapısı korunur (AGENTS.md §12). */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-[0.8125rem]', className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-charcoal-600">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="link-line transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className="text-ink">
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className="text-charcoal-300">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
