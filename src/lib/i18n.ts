import { BOROUGHS, CAR_MAKES } from './constants'

/**
 * Lightweight i18n routing map.
 * English pages live at the root; Spanish pages live under /es with Spanish slugs.
 * EVERY public English page has a Spanish twin. This map drives hreflang tags,
 * the sitemap alternates, the language switcher and all localized internal links.
 */
export type Locale = 'en' | 'es'

export const LOCALES: Locale[] = ['en', 'es']

export const HREFLANG: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-US',
}

/** Spanish slug for each make page (English slug → Spanish path). */
export const MAKE_SLUG_ES: Record<string, string> = Object.fromEntries(
  CAR_MAKES.map((m) => [m.slug, `/es/copia-de-llave-${m.slug.replace('-key-duplicate', '')}`])
)

/** Spanish slug for each borough page. */
export const BOROUGH_SLUG_ES: Record<string, string> = Object.fromEntries(
  BOROUGHS.map((b) => [b.slug, `/es/llaves-de-carro-${b.slug}`])
)

/** English blog slug → Spanish blog slug (without the /es/blog prefix). */
export const BLOG_SLUG_ES: Record<string, string> = {
  'car-key-duplicate-cost-nyc': 'cuanto-cuesta-copiar-llave-de-carro-nyc',
  'dealer-vs-locksmith-key-duplicate-nyc': 'dealer-vs-cerrajero-llaves-de-carro-nyc',
  'can-you-duplicate-transponder-key': 'se-puede-copiar-una-llave-con-chip',
  'avoid-locksmith-scams-nyc': 'como-evitar-estafas-de-cerrajeros-nyc',
  'what-happens-with-only-one-car-key': 'que-pasa-si-solo-tienes-una-llave-de-carro',
}
export const BLOG_SLUG_EN: Record<string, string> = Object.fromEntries(
  Object.entries(BLOG_SLUG_ES).map(([en, es]) => [es, en])
)

/** English path → Spanish path */
export const EN_TO_ES: Record<string, string> = {
  '/': '/es',
  '/about': '/es/sobre-nosotros',
  '/request-a-quote': '/es/cotizacion',
  '/book-now': '/es/reservar',
  '/blog': '/es/blog',
  '/privacy-policy': '/es/politica-de-privacidad',
  '/terms': '/es/terminos-de-servicio',
  // services
  '/key-fob-duplicate': '/es/copia-de-control-de-carro-nyc',
  '/transponder-key-duplicate': '/es/copia-de-llave-con-chip-nyc',
  '/spare-key-copy': '/es/copia-de-llave-de-repuesto-nyc',
  '/smart-key-duplicate': '/es/copia-de-llave-inteligente-nyc',
  '/push-to-start-key-duplicate': '/es/copia-de-llave-push-to-start-nyc',
  '/laser-cut-key-duplicate': '/es/copia-de-llave-de-corte-laser-nyc',
  // intent pages
  '/mobile-car-key-duplicate-nyc': '/es/cerrajero-automotriz-movil-nyc',
  '/lost-car-key-replacement-nyc': '/es/reemplazo-de-llaves-de-carro-perdidas-nyc',
  '/same-day-car-key-duplicate-nyc': '/es/copia-de-llaves-de-carro-mismo-dia-nyc',
  '/24-hour-car-key-duplicate-nyc': '/es/copia-de-llaves-de-carro-24-horas-nyc',
  // boroughs + makes (generated)
  ...Object.fromEntries(BOROUGHS.map((b) => [`/${b.slug}`, BOROUGH_SLUG_ES[b.slug]])),
  ...Object.fromEntries(CAR_MAKES.map((m) => [`/${m.slug}`, MAKE_SLUG_ES[m.slug]])),
  // blog posts
  ...Object.fromEntries(Object.entries(BLOG_SLUG_ES).map(([en, es]) => [`/blog/${en}`, `/es/blog/${es}`])),
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

/**
 * Resolve an English path to the given locale. Pages always link with the
 * English path and let this helper pick the right URL, so EN and ES pages
 * share one source of truth for internal linking.
 */
export function localizePath(enPath: string, locale: Locale): string {
  const p = normalizePath(enPath)
  if (locale === 'en') return p
  return EN_TO_ES[p] ?? p
}

/** Spanish display names for services and intent pages (keyed by English path). */
export const SERVICE_NAMES_ES: Record<string, string> = {
  '/transponder-key-duplicate': 'Copia de llave con chip',
  '/key-fob-duplicate': 'Copia de control de carro (key fob)',
  '/smart-key-duplicate': 'Copia de llave inteligente',
  '/push-to-start-key-duplicate': 'Copia de llave push-to-start',
  '/laser-cut-key-duplicate': 'Copia de llave de corte láser',
  '/spare-key-copy': 'Copia de llave de repuesto',
  '/lost-car-key-replacement-nyc': 'Reemplazo de llaves perdidas',
  '/mobile-car-key-duplicate-nyc': 'Cerrajero automotriz móvil',
  '/same-day-car-key-duplicate-nyc': 'Servicio el mismo día',
  '/24-hour-car-key-duplicate-nyc': 'Emergencias 24 horas',
}

export const BOROUGH_NAMES_ES: Record<string, string> = {
  brooklyn: 'Brooklyn',
  queens: 'Queens',
  manhattan: 'Manhattan',
  bronx: 'El Bronx',
  'staten-island': 'Staten Island',
}

export function boroughName(slug: string, locale: Locale): string {
  if (locale === 'es') return BOROUGH_NAMES_ES[slug] ?? slug
  return BOROUGHS.find((b) => b.slug === slug)?.name ?? slug
}

/** Navigation model for both languages, derived from the same constants. */
export function getNav(locale: Locale) {
  const l = (p: string) => localizePath(p, locale)
  return {
    services: [
      ...['/transponder-key-duplicate', '/key-fob-duplicate', '/smart-key-duplicate', '/push-to-start-key-duplicate', '/laser-cut-key-duplicate', '/spare-key-copy', '/lost-car-key-replacement-nyc'].map((p) => ({
        name: locale === 'es' ? SERVICE_NAMES_ES[p] : (p === '/lost-car-key-replacement-nyc' ? 'Lost Car Key Replacement' : ''),
        href: l(p),
        enPath: p,
      })),
    ],
    boroughs: BOROUGHS.map((b) => ({ name: boroughName(b.slug, locale), href: l(`/${b.slug}`), enPath: `/${b.slug}` })),
    makes: CAR_MAKES.map((m) => ({ name: m.name, href: l(`/${m.slug}`), enPath: `/${m.slug}` })),
  }
}

/** @deprecated kept for the first Spanish pages; prefer getNav('es'). */
export const ES_NAV = {
  services: getNav('es').services.map((s) => ({ name: s.name, href: s.href })),
  boroughs: getNav('es').boroughs.map((b) => ({ name: b.name, href: b.href })),
}
