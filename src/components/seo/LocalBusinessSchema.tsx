import { SITE, BUSINESS, SERVICE_TYPES } from '@/lib/constants'
import JsonLd from './JsonLd'

export const BUSINESS_ID = `${SITE.url}/#business`
export const WEBSITE_ID = `${SITE.url}/#website`

/**
 * Site-wide entity graph: the business (a Locksmith / AutomotiveBusiness) and the WebSite.
 * Page-level schema (Service, FAQPage, BlogPosting, BreadcrumbList) references BUSINESS_ID.
 */
export default function LocalBusinessSchema() {
  const business = {
    '@type': ['LocalBusiness', 'Locksmith', 'AutomotiveBusiness'],
    '@id': BUSINESS_ID,
    name: SITE.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-image.jpg`,
    logo: `${SITE.url}/icon`,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    foundingDate: BUSINESS.foundingYear,
    knowsLanguage: BUSINESS.languages,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '75-20 Astoria Blvd',
      addressLocality: 'East Elmhurst',
      addressRegion: 'NY',
      postalCode: '11370',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.serviceAreas.map((a) => ({
      '@type': 'City',
      name: a.name,
      sameAs: a.sameAs,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile car key duplication services',
      itemListElement: SERVICE_TYPES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${SITE.url}/${s.slug}`,
          description: s.description,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: Number(s.price.replace(/[^0-9]/g, '')),
        },
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE.url}/book-now`,
      name: 'Book mobile car key service',
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['en-US', 'es-US'],
    publisher: { '@id': BUSINESS_ID },
  }

  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': [business, website] }} />
}
