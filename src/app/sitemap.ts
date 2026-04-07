import type { MetadataRoute } from 'next'
import { products, categories } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const baseUrl = 'https://www.stackspeptide.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Varied dates signal different content freshness to Google
  const D_HOME     = new Date('2026-04-05') // Homepage refreshed daily
  const D_LISTING  = new Date('2026-04-04') // Product/stack listing pages
  const D_ARTICLE  = new Date('2026-03-20') // Editorial articles
  const D_CATEGORY = new Date('2026-03-25') // Category pages
  const D_PRODUCT  = new Date('2026-03-15') // Individual product pages
  const D_STACK    = new Date('2026-03-10') // Stack pages

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: D_HOME,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: D_LISTING,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/looksmaxxing`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/stacks`,
      lastModified: D_LISTING,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    // High-value keyword landing pages
    {
      url: `${baseUrl}/peptide-stacking-guide-beginners`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${baseUrl}/looksmaxxing-peptides-guide`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/semaglutide-vs-tirzepatide-vs-retatrutide`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/wolverine-stack-bpc-157-tb-500`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cjc-1295-with-dac-vs-without-dac`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/peptide-stack-body-recomposition`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: `${baseUrl}/ghk-cu-results-timeline`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: `${baseUrl}/epithalon-protocol-longevity-cycle`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.83,
    },
    {
      url: `${baseUrl}/peptide-dosing-chart`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.83,
    },
    {
      url: `${baseUrl}/how-to-store-peptides`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${baseUrl}/jawline-peptides-looksmaxxing`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${baseUrl}/snap-8-vs-botox-looksmaxxing`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/looksmaxxing-peptide-stack-protocol`,
      lastModified: D_ARTICLE,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: D_CATEGORY,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const productRoutes: MetadataRoute.Sitemap = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: D_PRODUCT,
    changeFrequency: 'monthly' as const,
    // Top Sellers and featured products get higher crawl priority
    priority: product.tag === 'Top Seller' ? 0.88 : product.tag ? 0.80 : 0.75,
  }))

  const stackRoutes: MetadataRoute.Sitemap = stacks.map(s => ({
    url: `${baseUrl}/stacks/${s.id}`,
    lastModified: D_STACK,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...stackRoutes]
}
