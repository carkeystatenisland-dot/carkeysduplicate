import { SITE } from '@/lib/constants'
import { type Locale, localizePath } from '@/lib/i18n'
import CTABanner from '@/components/ui/CTABanner'
import { ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react'

const T = {
  en: {
    h1: `About ${SITE.name}`,
    sub: "New York City's premier mobile automotive locksmith service. We bring the dealership directly to you.",
    missionH: 'Our Mission',
    mission1: `We founded ${SITE.name} with one simple goal: to eliminate the stress, cost, and waiting times associated with replacing or duplicating car keys at a traditional dealership. In a fast-paced city like New York, you don't have days to wait for a new key, and you certainly don't want to pay exorbitant towing fees just to get your vehicle to a service center.`,
    mission2: "Our fully equipped mobile workshops act as self-contained laboratories. We carry the exact same OEM-grade diagnostic scanners, key cutting machines, and programming software that the dealerships use. The only difference? We come to your exact GPS coordinates, whether you're parked in a tight Brooklyn driveway, a Manhattan parking garage, or stranded at JFK airport.",
    whyH: 'Why Choose Us?',
    cards: [
      ['Rapid Response', 'Our technicians are strategically positioned across the 5 boroughs to ensure industry-leading response times.'],
      ['OEM-Level Technology', 'We utilize licensed software to securely program advanced transponders, smart keys, and push-to-start fobs.'],
      ['Licensed & Insured', 'Fully licensed to operate in NYC. We are bonded and insured, ensuring you are protected at all times.'],
      ['All 5 Boroughs', 'We proudly serve Brooklyn, Queens, Manhattan, The Bronx, and Staten Island without hidden travel fees.'],
    ],
    ctaTitle: 'Ready to get back on the road?', ctaSub: 'Our mobile technicians are standing by.',
  },
  es: {
    h1: `Sobre ${SITE.name}`,
    sub: 'El servicio de cerrajería automotriz móvil líder de la ciudad de Nueva York. Llevamos el dealer directamente hasta usted.',
    missionH: 'Nuestra misión',
    mission1: `Fundamos ${SITE.name} con un objetivo simple: eliminar el estrés, el costo y las esperas asociados a reemplazar o copiar llaves de carro en un dealer tradicional. En una ciudad tan acelerada como Nueva York, usted no tiene días para esperar una llave nueva, y mucho menos quiere pagar cargos exorbitantes de grúa solo para llevar su vehículo a un centro de servicio.`,
    mission2: 'Nuestros talleres móviles totalmente equipados funcionan como laboratorios autónomos. Llevamos exactamente los mismos escáneres de diagnóstico de nivel original, máquinas de corte de llaves y software de programación que usan los dealers. ¿La única diferencia? Vamos a sus coordenadas GPS exactas, ya sea que esté estacionado en una entrada estrecha de Brooklyn, en un estacionamiento de Manhattan o varado en el aeropuerto JFK.',
    whyH: '¿Por qué elegirnos?',
    cards: [
      ['Respuesta rápida', 'Nuestros técnicos están ubicados estratégicamente en los 5 condados para garantizar tiempos de respuesta líderes en la industria.'],
      ['Tecnología de nivel original', 'Usamos software con licencia para programar de forma segura llaves con chip avanzadas, llaves inteligentes y controles push-to-start.'],
      ['Con licencia y seguro', 'Con licencia completa para operar en NYC. Tenemos fianza y seguro, para que usted esté protegido en todo momento.'],
      ['Los 5 condados', 'Atendemos con orgullo Brooklyn, Queens, Manhattan, El Bronx y Staten Island sin cargos ocultos por viaje.'],
    ],
    ctaTitle: '¿Listo para volver a la carretera?', ctaSub: 'Nuestros técnicos móviles están disponibles.',
  },
}

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = T[locale]
  const icons = [Clock, Wrench, ShieldCheck, MapPin]
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-6">{t.h1}</h1>
        <p className="text-xl text-gray-600 mb-12">{t.sub}</p>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2>{t.missionH}</h2>
          <p>{t.mission1}</p>
          <p>{t.mission2}</p>
          <h2>{t.whyH}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.cards.map(([h, p], i) => {
            const I = icons[i]
            return (
              <div key={h} className="bg-brand-light p-6 rounded-xl border border-gray-100 flex gap-4">
                <I className="w-8 h-8 text-brand-accent shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-brand-primary text-lg mb-2">{h}</h3>
                  <p className="text-sm text-gray-600">{p}</p>
                </div>
              </div>
            )
          })}
        </div>

        <CTABanner title={t.ctaTitle} subtitle={t.ctaSub} bookHref={localizePath('/book-now', locale)} {...(locale === 'es' ? { bookLabel: 'Reservar servicio móvil', callLabel: 'Llamar al' } : {})} />
      </div>
    </div>
  )
}
