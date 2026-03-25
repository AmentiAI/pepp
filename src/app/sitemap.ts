import type { MetadataRoute } from 'next'
import { products, categories } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const baseUrl = 'https://www.stackspeptide.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/looksmaxxing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/stacks`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    // High-value keyword landing pages
    {
      url: `${baseUrl}/peptide-stacking-guide-beginners`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${baseUrl}/looksmaxxing-peptides-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/semaglutide-vs-tirzepatide-vs-retatrutide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/wolverine-stack-bpc-157-tb-500`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cjc-1295-with-dac-vs-without-dac`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/peptide-stack-body-recomposition`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: `${baseUrl}/ghk-cu-results-timeline`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: `${baseUrl}/epithalon-protocol-longevity-cycle`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.83,
    },
    {
      url: `${baseUrl}/peptide-dosing-chart`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.83,
    },
    {
      url: `${baseUrl}/how-to-store-peptides`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${baseUrl}/jawline-peptides-looksmaxxing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: `${baseUrl}/snap-8-vs-botox-looksmaxxing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/looksmaxxing-peptide-stack-protocol`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const productRoutes: MetadataRoute.Sitemap = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    // Top Sellers and featured products get higher crawl priority
    priority: product.tag === 'Top Seller' ? 0.88 : product.tag ? 0.80 : 0.75,
  }))

  const stackRoutes: MetadataRoute.Sitemap = stacks.map(s => ({
    url: `${baseUrl}/stacks/${s.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...stackRoutes]
}
