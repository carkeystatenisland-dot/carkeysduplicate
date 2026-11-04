import { MetadataRoute } from 'next'
import { SITE, BOROUGHS, CAR_MAKES, SERVICE_TYPES } from '@/lib/constants'
import { EN_TO_ES, HREFLANG } from '@/lib/i18n'

const BLOG_SLUGS = [
  'car-key-duplicate-cost-nyc',
  'dealer-vs-locksmith-key-duplicate-nyc',
  'can-you-duplicate-transponder-key',
  'avoid-locksmith-scams-nyc',
  'what-happens-with-only-one-car-key',
]

// Dates reflect the last substantive content change, not the build time.
const SITE_LAUNCH_REVISION = new Date('2026-09-09')
const CONTENT_REFRESH = new Date('2026-11-04')

type Entry = MetadataRoute.Sitemap[number]

/** Adds hreflang alternates when the path has a Spanish translation. */
function withAlternates(path: string, entry: Omit<Entry, 'url' | 'alternates'>): Entry {
  const baseUrl = SITE.url
  const url = path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`
  const es = EN_TO_ES[path]
  return {
    url,
    ...entry,
    ...(es
      ? {
          alternates: {
            languages: {
              [HREFLANG.en]: url,
              [HREFLANG.es]: `${baseUrl}${es}`,
            },
          },
        }
      : {}),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url // https://www.carkeyduplicate.com

  const staticPages: Entry[] = [
    withAlternates('/', { lastModified: CONTENT_REFRESH, changeFrequency: 'weekly', priority: 1.0 }),
    withAlternates('/about', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'monthly', priority: 0.6 }),
    withAlternates('/request-a-quote', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'monthly', priority: 0.9 }),
    withAlternates('/book-now', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'monthly', priority: 0.9 }),
    withAlternates('/mobile-car-key-duplicate-nyc', { lastModified: CONTENT_REFRESH, changeFrequency: 'weekly', priority: 0.9 }),
    withAlternates('/lost-car-key-replacement-nyc', { lastModified: CONTENT_REFRESH, changeFrequency: 'weekly', priority: 0.9 }),
    withAlternates('/same-day-car-key-duplicate-nyc', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'weekly', priority: 0.8 }),
    withAlternates('/24-hour-car-key-duplicate-nyc', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'weekly', priority: 0.8 }),
    withAlternates('/blog', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'weekly', priority: 0.7 }),
    withAlternates('/privacy-policy', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'yearly', priority: 0.3 }),
    withAlternates('/terms', { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'yearly', priority: 0.3 }),
  ]

  const boroughPages: Entry[] = BOROUGHS.map((b) =>
    withAlternates(`/${b.slug}`, { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'weekly', priority: 0.9 })
  )

  const REFRESHED_SERVICES = new Set(['key-fob-duplicate', 'transponder-key-duplicate', 'spare-key-copy'])
  const servicePages: Entry[] = SERVICE_TYPES.map((s) =>
    withAlternates(`/${s.slug}`, {
      lastModified: REFRESHED_SERVICES.has(s.slug) ? CONTENT_REFRESH : SITE_LAUNCH_REVISION,
      changeFrequency: 'weekly',
      priority: 0.85,
    })
  )

  const makePages: Entry[] = CAR_MAKES.map((m) =>
    withAlternates(`/${m.slug}`, { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'monthly', priority: 0.8 })
  )

  const blogPages: Entry[] = BLOG_SLUGS.map((slug) =>
    withAlternates(`/blog/${slug}`, { lastModified: SITE_LAUNCH_REVISION, changeFrequency: 'monthly', priority: 0.75 })
  )

  // Spanish pages: same alternates block, pointing back to the English URL.
  const spanishPages: Entry[] = Object.entries(EN_TO_ES).map(([en, es]) => ({
    url: `${baseUrl}${es}`,
    lastModified: CONTENT_REFRESH,
    changeFrequency: 'weekly',
    priority: en === '/' ? 0.9 : 0.8,
    alternates: {
      languages: {
        [HREFLANG.en]: en === '/' ? `${baseUrl}/` : `${baseUrl}${en}`,
        [HREFLANG.es]: `${baseUrl}${es}`,
      },
    },
  }))

  return [...staticPages, ...boroughPages, ...servicePages, ...makePages, ...blogPages, ...spanishPages]
}
