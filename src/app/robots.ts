import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      { userAgent: 'Googlebot',    allow: '/' },
      { userAgent: 'Bingbot',      allow: '/' },
      { userAgent: 'Slurp',        allow: '/' },
      { userAgent: 'DuckDuckBot',  allow: '/' },
      { userAgent: 'Baiduspider',  allow: '/' },
      { userAgent: 'YandexBot',    allow: '/' },
      { userAgent: 'facebot',      allow: '/' },
      { userAgent: 'Twitterbot',   allow: '/' },
      { userAgent: 'LinkedInBot',  allow: '/' },
      { userAgent: 'AhrefsBot',    allow: '/' },
      { userAgent: 'SemrushBot',   allow: '/' },
    ],
    sitemap: 'https://stackspeptide.com/sitemap.xml',
    host: 'https://stackspeptide.com',
  }
}
