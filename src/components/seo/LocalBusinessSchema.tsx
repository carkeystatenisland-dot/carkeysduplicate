import { SITE } from '@/lib/constants'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE.name,
    "image": `${SITE.url}/og-image.jpg`,
    "@id": SITE.url,
    "url": SITE.url,
    "telephone": SITE.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "75-20 Astoria Blvd",
      "addressLocality": "East Elmhurst",
      "addressRegion": "NY",
      "postalCode": "11370",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      SITE.mainSite
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
