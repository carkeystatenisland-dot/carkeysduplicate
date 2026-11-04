import Link from 'next/link'
import { BOROUGHS } from '@/lib/constants'
import { type Locale, localizePath, boroughName } from '@/lib/i18n'
import type { IntentContent } from '@/lib/serviceTemplateData'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { Zap, ShieldCheck, MapPin, Truck, Award, UserCheck, Lock } from 'lucide-react'

const T = {
  en: {
    book: 'Book Immediate Dispatch',
    cards: [
      ['Lightning Fast', 'Our decentralized mobile units are stationed across all boroughs to reach you in record time.'],
      ['Expert Quality', 'Every technician is fully certified and equipped with the latest diagnostic technology.'],
      ['Trust Verified', 'Fully licensed, bonded, and insured. We stand behind every key we cut and program.'],
    ],
    standardsH: 'Professional Standards',
    standards: [
      ['Fully Mobile Workshops', "We don't need external power. Our vans are self-contained labs."],
      ['No Damage Guarantee', 'Non-destructive entry and surgical precision cutting.'],
      ['Guaranteed Compatibility', "We use OEM-grade chips that will not interfere with your car's warranty."],
    ],
    availH: 'Service Availability',
    avail: 'We are standing by right now to assist you in any of the following locations:',
    home: 'Home',
  },
  es: {
    book: 'Pedir despacho inmediato',
    cards: [
      ['Rapidez extrema', 'Nuestras unidades móviles descentralizadas están ubicadas en todos los condados para llegar a usted en tiempo récord.'],
      ['Calidad experta', 'Cada técnico está totalmente certificado y equipado con la tecnología de diagnóstico más reciente.'],
      ['Confianza verificada', 'Con licencia, fianza y seguro completos. Respaldamos cada llave que cortamos y programamos.'],
    ],
    standardsH: 'Estándares profesionales',
    standards: [
      ['Talleres totalmente móviles', 'No necesitamos energía externa. Nuestras camionetas son laboratorios autónomos.'],
      ['Garantía de cero daños', 'Apertura no destructiva y corte de precisión quirúrgica.'],
      ['Compatibilidad garantizada', 'Usamos chips de nivel original que no interfieren con la garantía de su carro.'],
    ],
    availH: 'Disponibilidad del servicio',
    avail: 'Estamos listos ahora mismo para ayudarle en cualquiera de las siguientes ubicaciones:',
    home: 'Inicio',
  },
}

export default function IntentPage({ locale, intent }: { locale: Locale; intent: IntentContent }) {
  const t = T[locale]
  const c = intent.copy[locale]
  const l = (p: string) => localizePath(p, locale)
  const path = l(intent.enPath)
  const icons = [Zap, Award, UserCheck]
  const stdIcons = [Truck, Lock, ShieldCheck]

  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name={c.h1}
        description={c.description}
        path={path}
        minPrice={75}
        maxPrice={450}
        serviceType={locale === 'es' ? 'Cerrajero automotriz móvil' : 'Mobile automotive locksmith'}
        inLanguage={locale === 'es' ? 'es-US' : 'en-US'}
        breadcrumbs={[
          { name: t.home, path: l('/') },
          { name: c.h1, path },
        ]}
      />

      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">{c.h1}</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">{c.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link href={l('/book-now')} className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">{t.book}</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges locale={locale} /></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.cards.map(([h, p], i) => {
            const I = icons[i]
            return (
              <div key={h} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
                <I className="w-12 h-12 text-brand-accent mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-bold text-xl mb-2">{h}</h3>
                <p className="text-sm text-gray-600">{p}</p>
              </div>
            )
          })}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-4xl font-heading text-brand-primary font-bold text-center mb-10">{c.whyH}</h2>
          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-inner">
            <p className="text-xl leading-relaxed text-gray-800 text-center">{c.why}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-brand-primary mb-6 italic underline decoration-brand-accent underline-offset-4">{t.standardsH}</h3>
            <ul className="space-y-4">
              {t.standards.map(([h, p], i) => {
                const I = stdIcons[i]
                return (
                  <li key={h} className="flex gap-4 items-center">
                    <I className="w-10 h-10 text-brand-accent shrink-0 p-2 bg-brand-light rounded-lg" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold">{h}</h4>
                      <p className="text-sm text-gray-600">{p}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="bg-brand-primary text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent opacity-10 rounded-full -mr-16 -mt-16" aria-hidden="true"></div>
            <h3 className="text-2xl font-bold mb-4">{t.availH}</h3>
            <p className="mb-8 text-gray-300 italic">{t.avail}</p>
            <div className="grid grid-cols-2 gap-4">
              {BOROUGHS.map((b) => (
                <Link key={b.slug} href={l(`/${b.slug}`)} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                  <MapPin className="w-4 h-4 text-brand-accent" aria-hidden="true" /> {boroughName(b.slug, locale)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <CTABanner
          bookHref={l('/book-now')}
          {...(locale === 'es'
            ? { title: '¿Necesita una llave de repuesto hoy? Vamos a cualquier condado de NYC.', subtitle: 'No espere a perder su última llave. Nuestros técnicos copian su llave con chip, control o llave inteligente en su ubicación.', bookLabel: 'Reservar servicio móvil', callLabel: 'Llamar al' }
            : {})}
        />
      </div>
    </div>
  )
}
