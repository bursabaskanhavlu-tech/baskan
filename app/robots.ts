import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Tüm botlar — ana içerik açık, yönetim ve API gizli
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/tesekkurler/'],
      },
      // AI içerik tarayıcıları — tam erişim (GEO için kritik)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Omgilibot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
