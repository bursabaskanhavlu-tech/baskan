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
    <div className="flex flex-col divide-y" style={{ borderColor: '#e0d4c0' }}>
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-base font-medium" style={{ color: '#1a1a1a' }}>
              {item.question}
            </span>
            {openIndex === i ? (
              <X className="h-5 w-5 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
            ) : (
              <Plus className="h-5 w-5 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
            )}
          </button>
          {openIndex === i && (
            <div className="pb-5">
              <p className="text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
