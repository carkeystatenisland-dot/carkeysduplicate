import { Metadata } from 'next'
import { SITE } from './constants'
import { HREFLANG, getAlternates, getLocaleFromPath, normalizePath, type Locale } from './i18n'

interface PageMetaProps {
  title: string
  description: string
  slug: string
  keywords?: string[]
  image?: string
  /** Defaults to the locale implied by the slug (/es/… → es). */
  locale?: Locale
  /** Open Graph object type. Blog posts should pass 'article'. */
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

const OG_LOCALE: Record<Locale, string> = { en: 'en_US', es: 'es_US' }

export function generatePageMetadata({
  title,
  description,
  slug,
  keywords,
  image,
  locale,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetaProps): Metadata {
  // Always resolve from the canonical base domain
  const base = SITE.url.replace(/\/$/, '')
  const path = normalizePath(slug)
  const canonicalUrl = path === '/' ? `${base}/` : `${base}${path}`
  const ogImage = image || `${base}/og-image.jpg`
  const resolvedLocale: Locale = locale ?? getLocaleFromPath(path)

  // hreflang: only emitted for pages that have a real translation.
  const alternates = getAlternates(path)
  const languages = alternates
    ? {
        [HREFLANG.en]: alternates.en === '/' ? `${base}/` : `${base}${alternates.en}`,
        [HREFLANG.es]: `${base}${alternates.es}`,
        'x-default': alternates.en === '/' ? `${base}/` : `${base}${alternates.en}`,
      }
    : undefined

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      type,
      locale: OG_LOCALE[resolvedLocale],
      ...(alternates ? { alternateLocale: [OG_LOCALE[resolvedLocale === 'en' ? 'es' : 'en']] } : {}),
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
