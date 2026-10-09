/**
 * Blog içeriği için küçük, bağımlılıksız Markdown → HTML dönüştürücü.
 * Desteklenen: ## / ### başlık, paragraf, - liste, 1. liste, **kalın**,
 * [metin](url), ---. Çıktı geçerli blok yapısıdır (önceki regex zinciri
 * <p> içine <h2> ve <ul>'siz <li> üretiyordu). Tüm metin HTML'e kaçışlanır;
 * yalnızca güvenli URL şemalarına bağlantı verilir.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function safeHref(url: string): string | null {
  const trimmed = url.trim()
  if (/^(\/|#|https:\/\/|mailto:|tel:)/i.test(trimmed)) return trimmed
  return null
}

function inline(text: string): string {
  let out = escapeHtml(text)
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, url: string) => {
    // url, escapeHtml'den geçmiş haliyle gelir; &amp; geri çevrilerek doğrulanır
    const href = safeHref(url.replace(/&amp;/g, '&'))
    if (!href) return label
    const external = href.startsWith('https://')
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
    return `<a href="${escapeHtml(href)}"${attrs}>${label}</a>`
  })
  return out
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let paragraph: string[] = []
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inline(paragraph.join(' '))}</p>`)
      paragraph = []
    }
  }
  const flushList = () => {
    if (list) {
      html.push(
        `<${list.type}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.type}>`
      )
      list = null
    }
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushParagraph()
      flushList()
      continue
    }
    const h3 = /^###\s+(.+)$/.exec(line)
    const h2 = /^##\s+(.+)$/.exec(line)
    const ul = /^[-*]\s+(.+)$/.exec(line)
    const ol = /^\d+\.\s+(.+)$/.exec(line)

    const heading = h3 ?? h2
    const item = ul ?? ol

    if (heading) {
      flushParagraph()
      flushList()
      const tag = h3 ? 'h3' : 'h2'
      html.push(`<${tag}>${inline(heading[1] ?? '')}</${tag}>`)
    } else if (line === '---') {
      flushParagraph()
      flushList()
      html.push('<hr />')
    } else if (item) {
      flushParagraph()
      const type = ul ? 'ul' : 'ol'
      if (list && list.type !== type) flushList()
      list ??= { type, items: [] }
      list.items.push(item[1] ?? '')
    } else {
      flushList()
      paragraph.push(line)
    }
  }
  flushParagraph()
  flushList()
  return html.join('\n')
}
