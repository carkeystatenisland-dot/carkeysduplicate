import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { BUSINESS_ID } from '@/components/seo/LocalBusinessSchema'
import { SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { type Locale, localizePath, boroughName, SERVICE_NAMES_ES } from '@/lib/i18n'
import type { BlogPostData } from '@/lib/blogData'

// Editorial dates come from the content repository history. Never render the
// build date as "Updated" — Google treats inaccurate freshness signals as spam.
export const DEFAULT_PUBLISHED = '2026-05-17'
export const DEFAULT_MODIFIED = '2026-08-05'

const T = {
  en: {
    home: 'Home', blog: 'Blog', by: `By the ${SITE.name} technician team`, published: 'Published', updated: 'Updated',
    quoteH: 'Get a Free Quote', quoteP: 'Need a key duplicated or replaced? We come to you anywhere in NYC.', quoteBtn: 'Request Quote Now',
    servicesH: 'Our Services', lost: 'Lost Car Key Replacement', areasH: 'Service Areas', breadcrumb: 'Breadcrumb', dateLocale: 'en-US',
    about: ['Car key duplication', 'Automotive locksmith', 'New York City'],
  },
  es: {
    home: 'Inicio', blog: 'Blog', by: `Por el equipo de técnicos de ${SITE.name}`, published: 'Publicado', updated: 'Actualizado',
    quoteH: 'Cotización gratis', quoteP: '¿Necesita copiar o reemplazar una llave? Vamos hasta usted en cualquier parte de NYC.', quoteBtn: 'Pedir cotización ahora',
    servicesH: 'Nuestros servicios', lost: 'Reemplazo de llaves perdidas', areasH: 'Zonas de servicio', breadcrumb: 'Ruta de navegación', dateLocale: 'es-US',
    about: ['Copia de llaves de carro', 'Cerrajero automotriz', 'Ciudad de Nueva York'],
  },
}

function formatDate(iso: string, dateLocale: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })
}

interface Props {
  locale: Locale
  post: BlogPostData
  /** English slug (used for the image and canonical pairing). */
  enSlug: string
  /** Path of this page (e.g. /blog/x or /es/blog/y). */
  path: string
}

export default function BlogPostLayout({ locale, post, enSlug, path }: Props) {
  const t = T[locale]
  const l = (p: string) => localizePath(p, locale)
  const published = post.datePublished ?? DEFAULT_PUBLISHED
  const modified = post.dateModified ?? DEFAULT_MODIFIED
  const url = `${SITE.url}${path}`
  const imageUrl = `${SITE.url}/blog/${enSlug}.jpg`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        image: imageUrl,
        datePublished: published,
        dateModified: modified,
        inLanguage: locale === 'es' ? 'es-US' : 'en-US',
        author: { '@id': BUSINESS_ID },
        publisher: { '@id': BUSINESS_ID },
        about: t.about,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE.url}${l('/') === '/' ? '/' : l('/')}` },
          { '@type': 'ListItem', position: 2, name: t.blog, item: `${SITE.url}${l('/blog')}` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <div className="bg-white min-h-screen py-12 border-t border-gray-100">
      <JsonLd data={schema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label={t.breadcrumb} className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={l('/')} className="hover:text-brand-accent">{t.home}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={l('/blog')} className="hover:text-brand-accent">{t.blog}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-700 truncate max-w-[60vw]" aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-primary mb-6 leading-tight">{post.title}</h1>
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img src={`/blog/${enSlug}.jpg`} alt={post.title} width={1280} height={720} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
              <span>{t.by}</span>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>{t.published} <time dateTime={published}>{formatDate(published, t.dateLocale)}</time></span>
              {modified !== published && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{t.updated} <time dateTime={modified}>{formatDate(modified, t.dateLocale)}</time></span>
                </>
              )}
            </div>
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-primary prose-a:text-brand-accent">
              {post.content}
            </div>
          </article>
          
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-brand-primary mb-4">{t.quoteH}</h3>
              <p className="text-sm text-gray-600 mb-6">{t.quoteP}</p>
              <Link href={l('/request-a-quote')} className="block w-full text-center bg-brand-accent text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">{t.quoteBtn}</Link>
              <div className="mt-8">
                <h4 className="font-bold text-brand-primary mb-3">{t.servicesH}</h4>
                <ul className="space-y-2 text-sm">
                  {SERVICE_TYPES.map(s => (
                    <li key={s.slug}><Link href={l(`/${s.slug}`)} className="text-gray-600 hover:text-brand-accent">{locale === 'es' ? SERVICE_NAMES_ES[`/${s.slug}`] : s.name}</Link></li>
                  ))}
                  <li><Link href={l('/lost-car-key-replacement-nyc')} className="text-gray-600 hover:text-brand-accent">{t.lost}</Link></li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-brand-primary mb-3">{t.areasH}</h4>
                <div className="flex flex-wrap gap-2">
                  {BOROUGHS.map(b => (
                    <Link key={b.slug} href={l(`/${b.slug}`)} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-brand-accent">{boroughName(b.slug, locale)}</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-16">
          <CTABanner bookHref={l('/book-now')} {...(locale === 'es' ? { title: '¿Necesita una llave de repuesto hoy? Vamos a cualquier condado de NYC.', subtitle: 'No espere a perder su última llave. Nuestros técnicos copian su llave con chip, control o llave inteligente en su ubicación.', bookLabel: 'Reservar servicio móvil', callLabel: 'Llamar al' } : {})} />
        </div>
      </div>
    </div>
  )
}
