import { MetadataRoute } from 'next'
import { SITE, BOROUGHS, CAR_MAKES, SERVICE_TYPES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url
  
  // Helper to generate a random date between May 1 and May 15, 2026
  const getRandomDate = () => {
    const start = new Date('2026-05-01T00:00:00Z').getTime()
    const end = new Date('2026-05-15T23:59:59Z').getTime()
    const randomTimestamp = Math.floor(Math.random() * (end - start + 1) + start)
    return new Date(randomTimestamp)
  }

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: getRandomDate(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: getRandomDate(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: getRandomDate(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/request-a-quote`, lastModified: getRandomDate(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/book-now`, lastModified: getRandomDate(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/mobile-car-key-duplication-nyc`, lastModified: getRandomDate(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/same-day-car-key-duplication-nyc`, lastModified: getRandomDate(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/24-hour-car-key-duplication-nyc`, lastModified: getRandomDate(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: getRandomDate(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  const boroughPages = BOROUGHS.map(b => ({
    url: `${baseUrl}/${b.slug}`,
    lastModified: getRandomDate(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const servicePages = SERVICE_TYPES.map(s => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: getRandomDate(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const makePages = CAR_MAKES.map(m => ({
    url: `${baseUrl}/${m.slug}`,
    lastModified: getRandomDate(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...boroughPages, ...servicePages, ...makePages]
}
