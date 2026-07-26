import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'
import { BLOG_POSTS } from '@/content/blog'
import { PRODUCTS } from '@/content/products'

const BASE_URL = SITE_CONFIG.url

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${BASE_URL}/new-collection`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  // Türkçe landing sayfalar
  const landingPagesTR: MetadataRoute.Sitemap = [
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

  // İngilizce landing sayfalar
  const landingPagesEN: MetadataRoute.Sitemap = [
    'turkish-towel-manufacturer',
    'bathrobe-manufacturer',
    'wholesale-towel-supplier',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Blog yazıları
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Ürün detay sayfaları
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE_URL}/new-collection/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...landingPagesTR, ...landingPagesEN, ...blogPages, ...productPages]
}
