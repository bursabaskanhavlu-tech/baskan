import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'

// İndekslenmesi istenmeyen yollar — TÜM botlar için aynı liste.
// `/_next/` bilinçli olarak engellenmez: Google sayfayı doğru render
// edebilmek için CSS/JS/görsel kaynaklarına erişebilmelidir.
const DISALLOW = ['/api/', '/admin/', '/tesekkurler/']

// AI arama ve içerik tarayıcıları — tam erişim (GEO için kritik, AGENTS.md §16).
// Bu liste yalnızca genişletilir, daraltılmaz. Kendi grubu olan bir bot `*`
// grubundaki kuralları görmediği için yasak listesi burada da tekrarlanır.
const AI_CRAWLERS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Google (Gemini / AI Overviews)
  'Google-Extended',
  'GoogleOther',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Apple
  'Applebot',
  'Applebot-Extended',
  // Microsoft / DuckDuckGo
  'Bingbot',
  'DuckAssistBot',
  // Meta
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  // Amazon, Mistral, You.com, Cohere, ByteDance
  'Amazonbot',
  'MistralAI-User',
  'YouBot',
  'cohere-ai',
  'Bytespider',
  // Açık veri setleri / diğer
  'CCBot',
  'Omgilibot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: DISALLOW },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
