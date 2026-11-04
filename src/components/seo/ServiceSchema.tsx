import { SITE, BUSINESS } from '@/lib/constants'
import JsonLd from './JsonLd'
import { BUSINESS_ID } from './LocalBusinessSchema'

interface Crumb {
  name: string
  path: string
}

interface ServiceSchemaProps {
  /** Service name as shown in the H1 */
  name: string
  description: string
  /** Page path, e.g. /key-fob-duplicate */
  path: string
  /** Starting price in USD */
  minPrice?: number
  maxPrice?: number
  serviceType?: string
  inLanguage?: 'en-US' | 'es-US'
  breadcrumbs: Crumb[]
}

/** Service + BreadcrumbList JSON-LD for a service landing page. */
export default function ServiceSchema({
  name,
  description,
  path,
  minPrice,
  maxPrice,
  serviceType = 'Automotive locksmith',
  inLanguage = 'en-US',
  breadcrumbs,
}: ServiceSchemaProps) {
  const url = `${SITE.url}${path}`

  const service: Record<string, unknown> = {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    inLanguage,
    serviceType,
    provider: { '@id': BUSINESS_ID },
    areaServed: BUSINESS.serviceAreas.map((a) => ({ '@type': 'City', name: a.name, sameAs: a.sameAs })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/book-now`,
      servicePhone: SITE.phone,
      availableLanguage: ['English', 'Spanish'],
    },
  }

  if (minPrice) {
    service.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice,
        ...(maxPrice ? { maxPrice } : {}),
      },
    }
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path === '/' ? '/' : c.path}`,
    })),
  }

  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': [service, breadcrumb] }} />
}
