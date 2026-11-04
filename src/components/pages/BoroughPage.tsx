import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { type Locale, localizePath, boroughName, SERVICE_NAMES_ES } from '@/lib/i18n'
import type { BoroughContent } from '@/lib/boroughData'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, ShieldCheck, Clock, MapPin, Wrench, BarChart3, AlertTriangle } from 'lucide-react'

const SERVICE_LINKS = [
  { path: '/transponder-key-duplicate', en: 'Transponder Key Duplication' },
  { path: '/key-fob-duplicate', en: 'Key Fob Duplication' },
  { path: '/smart-key-duplicate', en: 'Smart Key Duplication' },
  { path: '/push-to-start-key-duplicate', en: 'Push-to-Start Key Duplication' },
  { path: '/laser-cut-key-duplicate', en: 'Laser-Cut Key Duplication' },
  { path: '/spare-key-copy', en: 'Spare Key Copy' },
]

const T = {
  en: {
    eyebrow: (b: string) => `Local ${b} Mobile Locksmith`,
    h1: (b: string) => `Mobile Car Key Duplication in ${b}, NYC`,
    sub: "Fast, professional, on-site programming. Don't tow your car to the dealer—we bring the dealership to you.",
    book: 'Book Mobile Service', call: 'Call Now',
    f1H: 'Rapid Dispatch', f1: (b: string) => `We navigate ${b} traffic efficiently, arriving at your exact location usually within 30-60 minutes.`,
    f2H: 'OEM-Grade Equipment', f2: 'We use the exact same diagnostic and laser-cutting tools as the major dealerships, guaranteeing perfect compatibility.',
    f3H: 'Upfront Pricing', f3: 'No bait-and-switch. We quote based on your specific Year/Make/Model before we ever dispatch a technician.',
    whyH: (b: string) => `Why Mobile Locksmith Service Matters in ${b}`,
    scamH: (b: string) => `${b} Locksmith Scam Alert`,
    dataH: 'Local Service Data',
    hoodsH: (b: string) => `Neighborhoods We Serve in ${b}`,
    solutionsH: (b: string) => `Comprehensive Key Solutions in ${b}`,
    solutions: [
      ['On-Site Key Programming', "We sync your new transponder or smart key directly with your car's computer."],
      ['Precision Laser Cutting', 'High-security blades cut with 0.05mm accuracy using CNC machinery.'],
      ['Broken Key Extraction', 'Safely remove snapped blades from your ignition or door locks without damage.'],
      ['Fob & Remote Replacement', 'OEM and high-quality aftermarket fobs for all makes and models.'],
    ],
    faqH: 'Frequently Asked Questions',
    lostLink: 'lost car key replacement',
    exploreH: (b: string) => `Explore Our Services in ${b}`,
    serviceIn: (s: string, b: string) => `${s} in ${b}`,
    ctaTitle: (b: string) => `Stranded in ${b}? We're on our way.`,
    ctaSub: 'Book online or call us now for immediate, professional dispatch.',
    schemaName: (b: string) => `Mobile car key duplication in ${b}`,
    schemaDesc: (b: string) => `On-site car key cutting and programming by a licensed mobile locksmith anywhere in ${b}, New York City.`,
    home: 'Home',
  },
  es: {
    eyebrow: (b: string) => `Cerrajero automotriz móvil local en ${b}`,
    h1: (b: string) => `Copia de Llaves de Carro a Domicilio en ${b}, NYC`,
    sub: 'Programación rápida, profesional y en el lugar. No remolque su carro al dealer: nosotros llevamos el dealer hasta usted.',
    book: 'Reservar servicio móvil', call: 'Llamar ahora',
    f1H: 'Despacho rápido', f1: (b: string) => `Nos movemos con eficiencia por el tráfico de ${b} y llegamos a su ubicación exacta normalmente en 30-60 minutos.`,
    f2H: 'Equipo de nivel original (OEM)', f2: 'Usamos exactamente las mismas herramientas de diagnóstico y corte láser que los grandes concesionarios, garantizando compatibilidad perfecta.',
    f3H: 'Precio por adelantado', f3: 'Sin precios engañosos. Cotizamos según su año, marca y modelo específicos antes de enviar a un técnico.',
    whyH: (b: string) => `Por qué importa el servicio de cerrajería móvil en ${b}`,
    scamH: (b: string) => `Alerta de estafas de cerrajeros en ${b}`,
    dataH: 'Datos del servicio local',
    hoodsH: (b: string) => `Vecindarios que atendemos en ${b}`,
    solutionsH: (b: string) => `Soluciones completas de llaves en ${b}`,
    solutions: [
      ['Programación de llaves en el lugar', 'Sincronizamos su nueva llave con chip o llave inteligente directamente con la computadora de su carro.'],
      ['Corte láser de precisión', 'Hojas de alta seguridad cortadas con precisión de 0.05 mm con maquinaria CNC.'],
      ['Extracción de llaves rotas', 'Retiramos de forma segura hojas partidas de su ignición o cerraduras de puerta sin causar daños.'],
      ['Reemplazo de controles y remotos', 'Controles originales y genéricos de alta calidad para todas las marcas y modelos.'],
    ],
    faqH: 'Preguntas frecuentes',
    lostLink: 'reemplazo de llaves de carro perdidas',
    exploreH: (b: string) => `Explore nuestros servicios en ${b}`,
    serviceIn: (s: string, b: string) => `${s} en ${b}`,
    ctaTitle: (b: string) => `¿Varado en ${b}? Ya vamos en camino.`,
    ctaSub: 'Reserve en línea o llámenos ahora para un despacho inmediato y profesional.',
    schemaName: (b: string) => `Copia de llaves de carro a domicilio en ${b}`,
    schemaDesc: (b: string) => `Corte y programación de llaves de carro en el lugar por un cerrajero móvil con licencia en cualquier parte de ${b}, ciudad de Nueva York.`,
    home: 'Inicio',
  },
}

export default function BoroughPage({ locale, borough }: { locale: Locale; borough: BoroughContent }) {
  const t = T[locale]
  const c = borough.copy[locale]
  const b = boroughName(borough.slug, locale)
  const l = (p: string) => localizePath(p, locale)
  const path = l(`/${borough.slug}`)
  const isStatenIsland = borough.slug === 'staten-island'

  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name={t.schemaName(b)}
        description={t.schemaDesc(b)}
        path={path}
        minPrice={75}
        maxPrice={450}
        serviceType={locale === 'es' ? 'Cerrajero automotriz móvil' : 'Mobile automotive locksmith'}
        inLanguage={locale === 'es' ? 'es-US' : 'en-US'}
        breadcrumbs={[
          { name: t.home, path: l('/') },
          { name: t.h1(b), path },
        ]}
      />

      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
            {t.eyebrow(b)}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">{t.h1(b)}</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">{t.sub}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={l('/book-now')} className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">{t.book}</Link>
            <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">{t.call}</a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges locale={locale} /></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            [Clock, t.f1H, t.f1(b)],
            [Wrench, t.f2H, t.f2],
            [ShieldCheck, t.f3H, t.f3],
          ].map(([Icon, h, p]) => {
            const I = Icon as typeof Clock
            return (
              <div key={h as string} className="bg-brand-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary"><I className="w-7 h-7" aria-hidden="true" /></div>
                <h3 className="font-bold text-lg mb-2">{h as string}</h3>
                <p className="text-gray-600 text-sm">{p as string}</p>
              </div>
            )
          })}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold underline decoration-brand-accent underline-offset-8">{t.whyH(b)}</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-10">
            <p className="text-lg leading-relaxed mb-6">{c.headline}</p>
            <p className="text-lg leading-relaxed">{c.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" /> {t.scamH(b)}
            </h3>
            <p className="text-red-800 leading-relaxed">{c.scamAlert}</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" aria-hidden="true" /> {t.dataH}
            </h3>
            <p className="text-blue-800 leading-relaxed">{c.localData}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-accent" aria-hidden="true" /> {t.hoodsH(b)}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm font-medium text-gray-700 list-none pl-0">
            {borough.neighborhoods.map((n) => (
              <li key={n} className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">{n}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-10 rounded-3xl mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">{t.solutionsH(b)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.solutions.map(([h, p]) => (
              <div key={h} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-bold">{h}</h4>
                  <p className="text-sm text-gray-600">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6">{t.faqH}</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-brand-primary mt-0 mb-3">{c.faqQuestion}</h3>
            <p className="text-gray-600 mb-0 leading-relaxed">
              {c.faqAnswer}
              {isStatenIsland && (
                <> <Link href={l('/lost-car-key-replacement-nyc')} className="underline text-brand-primary hover:text-brand-accent">{t.lostLink} →</Link></>
              )}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">{t.exploreH(b)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICE_LINKS.map((s) => (
              <Link key={s.path} href={l(s.path)} className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" aria-hidden="true" /> {t.serviceIn(locale === 'es' ? SERVICE_NAMES_ES[s.path] : s.en, b)}
              </Link>
            ))}
          </div>
        </div>

        <CTABanner
          title={t.ctaTitle(b)}
          subtitle={t.ctaSub}
          bookHref={l('/book-now')}
          {...(locale === 'es' ? { bookLabel: 'Reservar servicio móvil', callLabel: 'Llamar al' } : {})}
        />
      </div>
    </div>
  )
}
