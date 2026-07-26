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
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Omgilibot', allow: '/' },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
