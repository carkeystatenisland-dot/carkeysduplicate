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
  const url = `${SITE.url}${slug.startsWith('/') ? slug : `/${slug}`}`
  const siteName = SITE.name
  
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: image || `${SITE.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || `${SITE.url}/og-image.jpg`],
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
