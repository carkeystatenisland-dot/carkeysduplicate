/**
 * Lightweight i18n routing map.
 * English pages live at the root; Spanish pages live under /es with Spanish slugs.
 * Only pages that have a real translation appear here — this map drives
 * hreflang tags, the sitemap alternates and the language switcher.
 */
export type Locale = 'en' | 'es'

export const HREFLANG: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-US',
}

/** English path → Spanish path */
export const EN_TO_ES: Record<string, string> = {
  '/': '/es',
  '/key-fob-duplicate': '/es/copia-de-control-de-carro-nyc',
  '/transponder-key-duplicate': '/es/copia-de-llave-con-chip-nyc',
  '/spare-key-copy': '/es/copia-de-llave-de-repuesto-nyc',
  '/mobile-car-key-duplicate-nyc': '/es/cerrajero-automotriz-movil-nyc',
  '/lost-car-key-replacement-nyc': '/es/reemplazo-de-llaves-de-carro-perdidas-nyc',
}

/** Spanish path → English path */
export const ES_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_ES).map(([en, es]) => [es, en])
)

export function normalizePath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p
}

export function getLocaleFromPath(path: string): Locale {
  const p = normalizePath(path)
  return p === '/es' || p.startsWith('/es/') ? 'es' : 'en'
}

/** Returns both language versions of a page, or null when no translation exists. */
export function getAlternates(path: string): { en: string; es: string } | null {
  const p = normalizePath(path)
  if (EN_TO_ES[p]) return { en: p, es: EN_TO_ES[p] }
  if (ES_TO_EN[p]) return { en: ES_TO_EN[p], es: p }
  return null
}

/** Spanish navigation model (only translated pages + helpful English fallbacks). */
export const ES_NAV = {
  services: [
    { name: 'Copia de control de carro (key fob)', href: '/es/copia-de-control-de-carro-nyc' },
    { name: 'Copia de llave con chip', href: '/es/copia-de-llave-con-chip-nyc' },
    { name: 'Copia de llave de repuesto', href: '/es/copia-de-llave-de-repuesto-nyc' },
    { name: 'Cerrajero automotriz móvil', href: '/es/cerrajero-automotriz-movil-nyc' },
    { name: 'Reemplazo de llaves perdidas', href: '/es/reemplazo-de-llaves-de-carro-perdidas-nyc' },
  ],
  boroughs: [
    { name: 'Brooklyn', href: '/brooklyn' },
    { name: 'Queens', href: '/queens' },
    { name: 'Manhattan', href: '/manhattan' },
    { name: 'El Bronx', href: '/bronx' },
    { name: 'Staten Island', href: '/staten-island' },
  ],
}
