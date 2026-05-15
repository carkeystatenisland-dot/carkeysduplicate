import { MetadataRoute } from 'next'
import { SITE, BOROUGHS, CAR_MAKES, SERVICE_TYPES } from '@/lib/constants'

const BLOG_SLUGS = [
  'car-key-duplication-cost-nyc',
  'dealer-vs-locksmith-key-duplication-nyc',
  'can-you-duplicate-transponder-key',
  'avoid-locksmith-scams-nyc',
  'what-happens-with-only-one-car-key',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url  // https://www.carkeysduplication.com

  const staticPages = [
    { url: baseUrl, lastModified: new Date('2026-05-15'), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/request-a-quote`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/book-now`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/mobile-car-key-duplication-nyc`, lastModified: new Date('2026-05-15'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/same-day-car-key-duplication-nyc`, lastModified: new Date('2026-05-15'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/24-hour-car-key-duplication-nyc`, lastModified: new Date('2026-05-15'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-05-15'), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  const boroughPages = BOROUGHS.map(b => ({
    url: `${baseUrl}/${b.slug}`,
    lastModified: new Date('2026-05-15'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const servicePages = SERVICE_TYPES.map(s => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: new Date('2026-05-15'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const makePages = CAR_MAKES.map(m => ({
    url: `${baseUrl}/${m.slug}`,
    lastModified: new Date('2026-05-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = BLOG_SLUGS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-05-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...boroughPages, ...servicePages, ...makePages, ...blogPages]
}
