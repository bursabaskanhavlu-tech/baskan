import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'

const BASE_URL = SITE_CONFIG.url

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${BASE_URL}/new-collection`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const landingPagesTR = [
    'havlu-ureticisi',
    'toptan-havlu',
    'otel-havlusu',
    'promosyon-havlu',
    'bornoz-ureticisi',
    'toptan-bornoz',
    'otel-bornozu',
    'nakisli-havlu',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const landingPagesEN = [
    'turkish-towel-manufacturer',
    'bathrobe-manufacturer',
    'wholesale-towel-supplier',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...landingPagesTR, ...landingPagesEN]
}
