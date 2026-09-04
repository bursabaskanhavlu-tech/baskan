import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'
import { BLOG_POSTS } from '@/content/blog'
import { PRODUCTS } from '@/content/products'

const BASE_URL = SITE_CONFIG.url

export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` yalnızca gerçek bir içerik tarihimiz olduğunda (blog
  // yazıları — `post.date`) verilir. Statik/landing/ürün sayfaları için
  // gerçek bir "içerik son güncelleme" tarihi takip edilmiyor; burada
  // `new Date()` (build anı) kullanmak her build'de değişen, yanıltıcı bir
  // "az önce güncellendi" sinyali üretirdi — Google'ın sitemap kılavuzu bu
  // tür güvenilmez lastmod değerlerinin göz ardı edilebileceğini belirtiyor.
  // `lastModified` Next.js'te opsiyonel olduğundan, veri yoksa hiç
  // gönderilmemesi, sahte bir tarih göndermekten daha doğrudur (AGENTS.md §14.2).

  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${BASE_URL}/new-collection`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
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
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // İngilizce sayfalar — gerçek /en/ önekli sayfa ağacı
  const enPages: MetadataRoute.Sitemap = [
    { path: '/en', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/en/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/en/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/en/turkish-towel-manufacturer', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/wholesale-towel-supplier', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/hotel-towels', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/promotional-towels', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/embroidered-towels', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/bathrobe-manufacturer', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/wholesale-bathrobes', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/en/hotel-bathrobes', priority: 0.9, changeFrequency: 'weekly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  }))

  // Blog yazıları — gerçek yayın tarihi mevcut, olduğu gibi kullanılır
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Ürün detay sayfaları
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE_URL}/new-collection/${product.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...landingPagesTR, ...enPages, ...blogPages, ...productPages]
}
