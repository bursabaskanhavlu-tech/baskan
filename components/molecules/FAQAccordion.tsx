'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface FAQAccordionItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQAccordionItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border transition-colors"
            style={{
              borderColor: isOpen ? '#e87722' : '#e0d4c0',
              backgroundColor: isOpen ? '#fff7f0' : '#ffffff',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium" style={{ color: '#1a1a1a' }}>
                {item.question}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform"
                style={{ backgroundColor: '#fff0e0' }}
              >
                {isOpen ? (
                  <X className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4" style={{ color: '#e87722' }} aria-hidden="true" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
