import Link from 'next/link'
import { BOROUGHS } from '@/lib/constants'
import { type Locale, localizePath, boroughName } from '@/lib/i18n'
import type { ServiceTemplateContent } from '@/lib/serviceTemplateData'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { Cpu, Wrench, MapPin, Zap, Lock } from 'lucide-react'

const T = {
  en: {
    tagline: 'Precision cutting and OEM-grade electronic programming. 100% Mobile Service.',
    quote: 'Get a Free Quote', book: 'Book Service',
    engH: 'The Engineering Behind the Key',
    solH: 'Our Professional Mobile Lab Solution',
    proH: 'Why You Need a Professional',
    pro: "DIY programming tools found online can often 'brick' your car's security module, leading to thousands in repairs. We use licensed software that preserves your car's existing data.",
    secH: 'Security & Compliance',
    sec: "Every key we duplicate is officially registered with your vehicle's ECU. We also offer to erase old, lost keys from the memory to prevent unauthorized access.",
    stepsH: 'Fast 3-Step On-Site Process',
    steps: [
      ['Request Quote', 'Provide your VIN and location for an instant, guaranteed price.'],
      ['Mobile Dispatch', 'A technician arrives in a mobile workshop within 60 minutes.'],
      ['Sync & Verify', 'Key is cut, programmed, and tested for all lock/start functions.'],
    ],
    boroughsH: 'Service Available in All NYC Boroughs',
    serviceIn: (s: string, b: string) => `${s} in ${b}`,
    home: 'Home',
  },
  es: {
    tagline: 'Corte de precisión y programación electrónica de nivel original. Servicio 100% móvil.',
    quote: 'Cotización gratis', book: 'Reservar servicio',
    engH: 'La ingeniería detrás de la llave',
    solH: 'Nuestra solución de laboratorio móvil profesional',
    proH: 'Por qué necesita un profesional',
    pro: 'Las herramientas de programación "hágalo usted mismo" de internet a menudo pueden "brickear" el módulo de seguridad de su carro, con reparaciones de miles de dólares. Usamos software con licencia que preserva los datos existentes de su carro.',
    secH: 'Seguridad y cumplimiento',
    sec: 'Cada llave que copiamos se registra oficialmente en la computadora (ECU) de su vehículo. También ofrecemos borrar las llaves viejas o perdidas de la memoria para evitar accesos no autorizados.',
    stepsH: 'Proceso rápido en 3 pasos en el lugar',
    steps: [
      ['Pida su cotización', 'Dénos su VIN y ubicación para un precio instantáneo y garantizado.'],
      ['Despacho móvil', 'Un técnico llega en un taller móvil en menos de 60 minutos.'],
      ['Sincronizar y verificar', 'La llave se corta, se programa y se prueba en todas las funciones de cerraduras y arranque.'],
    ],
    boroughsH: 'Servicio disponible en todos los condados de NYC',
    serviceIn: (s: string, b: string) => `${s} en ${b}`,
    home: 'Inicio',
  },
}

export default function ServiceTemplatePage({ locale, service }: { locale: Locale; service: ServiceTemplateContent }) {
  const t = T[locale]
  const c = service.copy[locale]
  const l = (p: string) => localizePath(p, locale)
  const path = l(service.enPath)

  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name={c.h1}
        description={c.description}
        path={path}
        minPrice={service.minPrice}
        serviceType={c.linkLabel}
        inLanguage={locale === 'es' ? 'es-US' : 'en-US'}
        breadcrumbs={[
          { name: t.home, path: l('/') },
          { name: c.linkLabel, path },
        ]}
      />

      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">{c.h1}</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">{t.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={l('/request-a-quote')} className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">{t.quote}</Link>
            <Link href={l('/book-now')} className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">{t.book}</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges locale={locale} /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0 italic underline decoration-brand-accent">{t.engH}</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-700">
            <p className="mb-6">{c.engineering1}</p>
            <p className="font-semibold text-brand-primary">{c.engineering2}</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0">{t.solH}</h2>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-700">
            <p>{c.solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-brand-accent mb-4" aria-hidden="true" />
            <h3 className="font-bold text-xl mb-3">{t.proH}</h3>
            <p className="text-sm text-gray-600">{t.pro}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center text-center">
            <Lock className="w-12 h-12 text-brand-accent mb-4" aria-hidden="true" />
            <h3 className="font-bold text-xl mb-3">{t.secH}</h3>
            <p className="text-sm text-gray-600">{t.sec}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-10 text-center">{t.stepsH}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map(([h, p], i) => (
              <div key={h} className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center relative pt-10">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white" aria-hidden="true">{i + 1}</span>
                <h4 className="font-bold text-lg mb-2">{h}</h4>
                <p className="text-xs text-gray-600">{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">{t.boroughsH}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BOROUGHS.map((b) => (
              <Link key={b.slug} href={l(`/${b.slug}`)} className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors">
                <MapPin className="w-4 h-4 text-brand-accent" aria-hidden="true" /> {t.serviceIn(c.linkLabel, boroughName(b.slug, locale))}
              </Link>
            ))}
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
