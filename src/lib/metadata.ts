import { Metadata } from 'next'
import { SITE } from './constants'

interface PageMetaProps {
  title: string
  description: string
  slug: string
  keywords?: string[]
  image?: string
}

export function generatePageMetadata({ title, description, slug, keywords, image }: PageMetaProps): Metadata {
  // Always resolve from the canonical base domain
  const base = SITE.url.replace(/\/$/, '')
  const path = slug.startsWith('/') ? slug : `/${slug}`
  const canonicalUrl = `${base}${path}`
  const ogImage = image || `${base}/og-image.jpg`

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
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
