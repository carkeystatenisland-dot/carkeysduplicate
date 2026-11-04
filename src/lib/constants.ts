export const SITE = {
  name: 'Car Key Duplicate NYC',
  url: 'https://www.carkeyduplicate.com',
  phone: '+19298287009',
  phoneDisplay: '(929) 828-7009',
  email: 'info@carkeyduplicate.com',
  address: '75-20 Astoria Blvd, East Elmhurst, NY 11370',
  hours: 'Mon-Sun 9AM - 5PM (24/7 Emergencies)'
}

export const BOROUGHS = [
  {
    name: 'Brooklyn',
    slug: 'brooklyn',
    description: 'Mobile car key duplication serving all Brooklyn neighborhoods',
    neighborhoods: ['Park Slope', 'Williamsburg', 'Bay Ridge', 'Flatbush', 'Crown Heights', 'Bushwick', 'DUMBO', 'Bed-Stuy'],
  },
  {
    name: 'Queens',
    slug: 'queens',
    description: 'Mobile car key duplication serving all Queens neighborhoods',
    neighborhoods: ['Flushing', 'Jamaica', 'Astoria', 'Jackson Heights', 'Forest Hills', 'Long Island City', 'Bayside', 'Jamaica'],
  },
  {
    name: 'Manhattan',
    slug: 'manhattan',
    description: 'Mobile car key duplication serving all Manhattan neighborhoods',
    neighborhoods: ['Midtown', 'Upper East Side', 'Upper West Side', 'Harlem', 'Lower East Side', 'Financial District', 'Chelsea', 'Hell\'s Kitchen'],
  },
  {
    name: 'The Bronx',
    slug: 'bronx',
    description: 'Mobile car key duplication serving all Bronx neighborhoods',
    neighborhoods: ['Fordham', 'Riverdale', 'Pelham Bay', 'Hunts Point', 'Morris Park', 'Kingsbridge', 'Co-op City', 'Tremont'],
  },
  {
    name: 'Staten Island',
    slug: 'staten-island',
    description: 'Mobile car key duplication serving all Staten Island neighborhoods',
    neighborhoods: ['St. George', 'New Springville', 'Tottenville', 'Great Kills', 'Stapleton', 'Annadale', 'Willowbrook', 'Eltingville'],
  },
]

export const CAR_MAKES = [
  { name: 'Toyota', slug: 'toyota-key-duplicate', chipType: 'Texas Crypto 128-bit / H-chip' },
  { name: 'Honda', slug: 'honda-key-duplicate', chipType: 'Honda G / ID47' },
  { name: 'Ford', slug: 'ford-key-duplicate', chipType: 'Tiris DST+ / 4D-63' },
  { name: 'BMW', slug: 'bmw-key-duplicate', chipType: 'Hitag 2 / CAS system' },
  { name: 'Nissan', slug: 'nissan-key-duplicate', chipType: 'PCF7936 / ID46' },
  { name: 'Hyundai', slug: 'hyundai-key-duplicate', chipType: 'Hyundai ID46 / 4D-60' },
  { name: 'Jeep', slug: 'jeep-key-duplicate', chipType: 'Chrysler Y-4 / 4D-64' },
  { name: 'Chevrolet', slug: 'chevrolet-key-duplicate', chipType: 'GM VATS / ID46' },
  { name: 'Kia', slug: 'kia-key-duplicate', chipType: 'Kia ID46 / 4D-60' },
  { name: 'Mercedes', slug: 'mercedes-key-duplicate', chipType: 'Infrared / NEC / Hitag Pro' },
  { name: 'Subaru', slug: 'subaru-key-duplicate', chipType: 'Subaru G / ID47' },
  { name: 'Volkswagen', slug: 'volkswagen-key-duplicate', chipType: 'Megamos Crypto 48 / MQB' },
]

export const SERVICE_TYPES = [
  {
    name: 'Transponder Key Duplication',
    slug: 'transponder-key-duplicate',
    description: 'Duplicate chip keys for any make and model, programmed on-site.',
    price: 'From $95',
  },
  {
    name: 'Key Fob Duplication',
    slug: 'key-fob-duplicate',
    description: 'Copy and program remote key fobs with full button functionality.',
    price: 'From $120',
  },
  {
    name: 'Smart Key Duplication',
    slug: 'smart-key-duplicate',
    description: 'Proximity smart keys duplicated and programmed to your vehicle.',
    price: 'From $175',
  },
  {
    name: 'Push-to-Start Key Duplication',
    slug: 'push-to-start-key-duplicate',
    description: 'Keyless ignition systems — new key fob cut, programmed, and tested.',
    price: 'From $175',
  },
  {
    name: 'Laser-Cut Key Duplication',
    slug: 'laser-cut-key-duplicate',
    description: 'High-security sidewinder keys duplicated with precision laser equipment.',
    price: 'From $150',
  },
  {
    name: 'Spare Key Copy',
    slug: 'spare-key-copy',
    description: 'Basic and chipped spare key copies made on-site at your location.',
    price: 'From $75',
  },
]

/** Business facts reused by structured data and on-page trust blocks. */
export const BUSINESS = {
  legalName: 'Car Key Duplicate NYC',
  description:
    'Mobile automotive locksmith serving all five NYC boroughs. We duplicate and program transponder keys, remote key fobs, smart keys, push-to-start fobs and laser-cut keys on-site, and replace lost car keys when every key is gone.',
  // 75-20 Astoria Blvd, East Elmhurst, Queens (approximate storefront coordinates)
  geo: { latitude: 40.7656, longitude: -73.8830 },
  priceRange: '$75 - $395',
  foundingYear: '2024',
  languages: ['English', 'Spanish'],
  serviceAreas: [
    { name: 'Brooklyn', sameAs: 'https://en.wikipedia.org/wiki/Brooklyn' },
    { name: 'Queens', sameAs: 'https://en.wikipedia.org/wiki/Queens' },
    { name: 'Manhattan', sameAs: 'https://en.wikipedia.org/wiki/Manhattan' },
    { name: 'The Bronx', sameAs: 'https://en.wikipedia.org/wiki/The_Bronx' },
    { name: 'Staten Island', sameAs: 'https://en.wikipedia.org/wiki/Staten_Island' },
  ],
}
