import { MetadataRoute } from 'next'
import { SITE, BOROUGHS, CAR_MAKES, SERVICE_TYPES } from '@/lib/constants'

const BLOG_SLUGS = [
  'car-key-duplicate-cost-nyc',
  'dealer-vs-locksmith-key-duplicate-nyc',
  'can-you-duplicate-transponder-key',
  'avoid-locksmith-scams-nyc',
  'what-happens-with-only-one-car-key',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url  // https://www.carkeyduplicate.com
  const TODAY = new Date('2026-09-09')

  const staticPages = [
    { url: baseUrl, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/request-a-quote`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/book-now`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/mobile-car-key-duplicate-nyc`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/same-day-car-key-duplicate-nyc`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/24-hour-car-key-duplicate-nyc`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: TODAY, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: TODAY, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/key-fob-duplicate`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/smart-key-duplicate`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/push-to-start-key-duplicate`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/laser-cut-key-duplicate`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/transponder-key-duplicate`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/spare-key-copy`, lastModified: TODAY, changeFrequency: 'weekly' as const, priority: 0.85 },
  ]

  const boroughPages = BOROUGHS.map(b => ({
    url: `${baseUrl}/${b.slug}`,
    lastModified: TODAY,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const servicePages = SERVICE_TYPES.map(s => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: TODAY,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const makePages = CAR_MAKES.map(m => ({
    url: `${baseUrl}/${m.slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = BLOG_SLUGS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...boroughPages, ...servicePages, ...makePages, ...blogPages]
}
