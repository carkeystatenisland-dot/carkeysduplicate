import Link from 'next/link'
import { type Locale, BLOG_SLUG_ES } from '@/lib/i18n'

export const BLOG_POSTS_INDEX = [
  { slug: 'car-key-duplicate-cost-nyc', en: 'How Much Does Car Key Duplication Cost in NYC?', es: '¿Cuánto cuesta copiar una llave de carro en NYC?' },
  { slug: 'dealer-vs-locksmith-key-duplicate-nyc', en: 'Dealer vs. Mobile Locksmith for Key Duplication', es: 'Dealer vs. cerrajero móvil para copiar llaves de carro' },
  { slug: 'can-you-duplicate-transponder-key', en: 'Can You Duplicate a Transponder Key?', es: '¿Se puede copiar una llave con chip (transponder)?' },
  { slug: 'avoid-locksmith-scams-nyc', en: 'How to Avoid Locksmith Scams in NYC', es: 'Cómo evitar estafas de cerrajeros en NYC' },
  { slug: 'what-happens-with-only-one-car-key', en: 'What Happens When You Only Have One Car Key Left', es: 'Qué pasa cuando solo te queda una llave del carro' },
]

const T = {
  en: { h1: 'NYC Locksmith Blog', sub: 'Expert tips and guides from our NYC automotive locksmith specialists.', read: 'Read Article →' },
  es: { h1: 'Blog de cerrajería automotriz en NYC', sub: 'Consejos y guías expertas de nuestros especialistas en cerrajería automotriz de NYC.', read: 'Leer artículo →' },
}

export default function BlogIndexPage({ locale }: { locale: Locale }) {
  const t = T[locale]
  return (
    <div className="bg-brand-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-4">{t.h1}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_INDEX.map((post) => {
            const href = locale === 'es' ? `/es/blog/${BLOG_SLUG_ES[post.slug]}` : `/blog/${post.slug}`
            const title = post[locale]
            return (
              <Link key={post.slug} href={href} className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="aspect-video relative bg-gray-200">
                    <img src={`/blog/${post.slug}.jpg`} alt={title} width={640} height={360} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{title}</h3>
                    <span className="text-brand-accent font-bold text-sm uppercase tracking-wider mt-auto">{t.read}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
