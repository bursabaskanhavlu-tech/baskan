interface FAQAccordionItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQAccordionItem[]
}

/**
 * Native <details>/<summary> akordeon. Cevaplar kapalıyken bile HTML'de yer
 * alır — JS çalıştırmayan AI tarayıcıları (GPTBot, ClaudeBot, PerplexityBot)
 * soruyla birlikte cevabı da okur ve FAQSchema ile görünür içerik birebir
 * eşleşir. Klavye ve ekran okuyucu desteği tarayıcıdan gelir; istemci JS'i yoktur.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="faq-item group">
          <summary>
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
