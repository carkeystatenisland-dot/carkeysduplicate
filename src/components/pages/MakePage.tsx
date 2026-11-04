import Link from 'next/link'
import { SITE, BOROUGHS } from '@/lib/constants'
import { type Locale, localizePath, boroughName } from '@/lib/i18n'
import type { MakeContent } from '@/lib/makeData'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, Cpu, ListChecks, Info, Zap } from 'lucide-react'

const T = {
  en: {
    h1: (m: string) => `${m} Car Key Duplication NYC`,
    sub: (m: string) => `Specialized programming and cutting for ${m} vehicles. We bypass the dealership wait times by bringing the equipment directly to your location in all 5 boroughs.`,
    quote: 'Get an Exact Quote',
    lead: (m: string) => `Your Premier ${m} Locksmith in New York City`,
    intro1: (m: string) => `Losing a car key or needing a spare for your ${m} in New York City can be an incredibly stressful experience. Between alternate side parking rules, expensive parking garages in Manhattan, and the fast-paced lifestyle of Brooklyn and Queens, you do not have the time to tow your vehicle to a ${m} dealership and wait days for a replacement. That is exactly why our mobile automotive locksmith service exists. We provide on-site ${m} car key duplication, transponder key programming, and smart key fob replacements directly at your vehicle's location.`,
    intro2: "Our certified technicians are equipped with advanced diagnostic tools capable of reading your vehicle's ECU and safely programming a new key. Whether you need a standard metal blade duplicated or a complex push-to-start proximity fob synced to your car's computer, we guarantee dealership-level quality at a fraction of the cost.",
    securityH: (m: string) => `${m} Security Architecture Explained`,
    security: (m: string) => `Modern ${m} vehicles utilize immobilizer systems designed to prevent theft. The key fob contains a microchip that transmits a specific radio frequency signal to the receiver located near the ignition. If the cryptographic code matches, the Engine Control Unit (ECU) enables the fuel injectors and ignition coils. Simple hardware store duplicates cannot replicate this chip. We utilize factory-level OBD-II programmers to securely extract the PIN code and pair the new key to your ${m}'s immobilizer system.`,
    modelsH: (m: string) => `Supported ${m} Models`,
    modelsIntro: (m: string) => `We have blank keys, fobs, and transponders in stock for all years and trim levels for the following ${m} models in the US market:`,
    modelsNote: '* If your model is not listed here, please call us. We source rare and imported keys rapidly.',
    servicesH: (m: string) => `Comprehensive ${m} Key Services`,
    s1H: '1. Smart Key & Proximity Fobs',
    s1: (m: string) => `If your ${m} features push-to-start ignition, it relies on a smart proximity key. These fobs constantly communicate with the car's Body Control Module (BCM). We program these advanced fobs to ensure all features—including remote start, trunk release, and panic alarm—function flawlessly.`,
    s2H: '2. Transponder Key Programming',
    s2: "For traditional turn-key ignitions that have a plastic head, there is a hidden RFID chip inside. We clone or program a brand new chip to your car's immobilizer. We ensure the key turns smoothly without damaging the ignition wafers.",
    s3H: '3. High-Security Laser Cutting',
    s3: (m: string) => `Many modern ${m} keys use sidewinder/laser-cut blades instead of traditional edge cuts. Our vans are equipped with automated CNC laser cutting machines. We digitally decode your current key and mill a factory-perfect duplicate, avoiding the "vibration cuts" that cheaper machines produce.`,
    dealerH: 'The Dealership Hassle',
    dealer: ['Requires towing your car to the lot.', 'Waiting days for parts to arrive from the factory.', 'Paying premium dealership labor rates.', 'Wasting hours in a waiting room.'],
    usH: `The ${SITE.name} Advantage`,
    us: ['We come to you (Home, Office, or Street).', 'We carry stock on our vans for immediate service.', 'Upfront pricing over the phone.', 'Usually completed in under 45 minutes on-site.'],
    lostH: 'Lost All Keys?',
    lost: "If you have zero working keys, you require an emergency Key Origination service. We don't just duplicate—we can generate a key from scratch by decoding your door locks and reprogramming the car's computer.",
    lostCta: 'Request Emergency Service →',
    faqH: (m: string) => `Frequently Asked Questions: ${m} Keys`,
    faqs: (m: string) => [
      { q: `How much does a ${m} key duplicate cost?`, a: 'The cost varies entirely depending on the year and model. A basic transponder key starts around $95, while a high-tech smart proximity fob can range from $175 to $350. We provide exact quotes over the phone based on your VIN.' },
      { q: 'Do you have to erase my old keys?', a: "If you simply need a spare, we do not erase old keys. However, if your keys were stolen, we highly recommend erasing the vehicle's memory so the stolen key cannot start the engine." },
      { q: 'Can you program a key I bought online?', a: 'Yes, we can cut and program customer-supplied keys. However, be warned: many online keys are counterfeit or have the wrong chip frequency. We cannot guarantee keys we do not supply, and the programming fee still applies.' },
      { q: 'How long does the duplicate take?', a: 'Once our technician arrives, standard duplication takes about 20-30 minutes. More complex systems or key origination may take up to an hour.' },
      { q: 'Are you licensed to work in NYC?', a: 'Yes, we are a fully licensed, bonded, and insured NYC automotive locksmith service. We comply with all Department of Consumer and Worker Protection regulations.' },
    ],
    noteH: 'Important Note',
    note: (m: string) => `Newer ${m} models (2022+) may require cloud-based authorization through our secure server. We are one of the few NYC locksmiths with active OEM credentials to perform this. Beware of unverified locksmiths attempting to "hack" the module, which can void your warranty.`,
    boroughsH: (m: string) => `${m} Service Available In:`,
    boroughLink: (m: string, b: string) => `${m} keys in ${b}`,
    schemaName: (m: string) => `${m} car key duplication in NYC`,
    schemaDesc: (m: string) => `Mobile cutting and programming of ${m} transponder keys, remote fobs and smart keys at the customer's location across the five NYC boroughs.`,
    home: 'Home',
  },
  es: {
    h1: (m: string) => `Copia de Llaves de Carro ${m} en NYC`,
    sub: (m: string) => `Programación y corte especializados para vehículos ${m}. Evitamos las esperas del dealer llevando el equipo directamente a su ubicación en los 5 condados.`,
    quote: 'Pedir cotización exacta',
    lead: (m: string) => `Su cerrajero ${m} de confianza en la ciudad de Nueva York`,
    intro1: (m: string) => `Perder la llave del carro o necesitar una de repuesto para su ${m} en la ciudad de Nueva York puede ser una experiencia muy estresante. Entre las reglas de estacionamiento alterno, los caros estacionamientos de Manhattan y el ritmo acelerado de Brooklyn y Queens, usted no tiene tiempo para remolcar su vehículo a un dealer ${m} y esperar días por un reemplazo. Exactamente por eso existe nuestro servicio de cerrajería automotriz móvil. Ofrecemos copia de llaves ${m}, programación de llaves con chip y reemplazo de controles inteligentes directamente donde está su vehículo.`,
    intro2: 'Nuestros técnicos certificados están equipados con herramientas de diagnóstico avanzadas capaces de leer la computadora (ECU) de su vehículo y programar una llave nueva de forma segura. Ya sea que necesite copiar una hoja de metal estándar o sincronizar un control de proximidad de botón de encendido con la computadora de su carro, garantizamos calidad de nivel dealer a una fracción del costo.',
    securityH: (m: string) => `La arquitectura de seguridad de ${m} explicada`,
    security: (m: string) => `Los vehículos ${m} modernos usan sistemas inmovilizadores diseñados para evitar robos. El control contiene un microchip que transmite una señal de radiofrecuencia específica al receptor ubicado cerca de la ignición. Si el código criptográfico coincide, la computadora del motor (ECU) habilita los inyectores de combustible y las bobinas de encendido. Las copias simples de ferretería no pueden replicar este chip. Usamos programadores OBD-II de nivel de fábrica para extraer de forma segura el código PIN y emparejar la llave nueva con el inmovilizador de su ${m}.`,
    modelsH: (m: string) => `Modelos ${m} compatibles`,
    modelsIntro: (m: string) => `Tenemos llaves en blanco, controles y transponders en inventario para todos los años y versiones de los siguientes modelos ${m} del mercado de EE. UU.:`,
    modelsNote: '* Si su modelo no aparece aquí, llámenos. Conseguimos llaves raras e importadas rápidamente.',
    servicesH: (m: string) => `Servicios completos de llaves ${m}`,
    s1H: '1. Llaves inteligentes y controles de proximidad',
    s1: (m: string) => `Si su ${m} tiene encendido con botón (push-to-start), depende de una llave inteligente de proximidad. Estos controles se comunican constantemente con el módulo de control de carrocería (BCM) del carro. Programamos estos controles avanzados para asegurar que todas las funciones (arranque remoto, apertura de cajuela y alarma de pánico) funcionen a la perfección.`,
    s2H: '2. Programación de llaves con chip',
    s2: 'En las igniciones tradicionales de girar la llave con cabeza de plástico, hay un chip RFID oculto dentro. Clonamos o programamos un chip totalmente nuevo al inmovilizador de su carro. Nos aseguramos de que la llave gire suavemente sin dañar las láminas de la ignición.',
    s3H: '3. Corte láser de alta seguridad',
    s3: (m: string) => `Muchas llaves ${m} modernas usan hojas de corte láser (sidewinder) en vez de los cortes de borde tradicionales. Nuestras camionetas están equipadas con máquinas CNC de corte láser automatizadas. Decodificamos digitalmente su llave actual y fresamos una copia perfecta de fábrica, evitando los "cortes con vibración" que producen las máquinas más baratas.`,
    dealerH: 'El problema con el dealer',
    dealer: ['Requiere remolcar su carro al lote.', 'Esperar días a que lleguen las piezas de fábrica.', 'Pagar tarifas premium de mano de obra del dealer.', 'Perder horas en una sala de espera.'],
    usH: `La ventaja de ${SITE.name}`,
    us: ['Vamos hasta usted (casa, oficina o calle).', 'Llevamos inventario en nuestras camionetas para servicio inmediato.', 'Precio por adelantado por teléfono.', 'Normalmente terminado en menos de 45 minutos en el lugar.'],
    lostH: '¿Perdió todas las llaves?',
    lost: 'Si no tiene ninguna llave que funcione, necesita un servicio de emergencia de originación de llave. No solo copiamos: podemos generar una llave desde cero decodificando las cerraduras de sus puertas y reprogramando la computadora del carro.',
    lostCta: 'Solicitar servicio de emergencia →',
    faqH: (m: string) => `Preguntas frecuentes: llaves ${m}`,
    faqs: (m: string) => [
      { q: `¿Cuánto cuesta una copia de llave ${m}?`, a: 'El costo varía completamente según el año y el modelo. Una llave con chip básica empieza alrededor de $95, mientras que un control inteligente de proximidad de alta tecnología puede costar entre $175 y $350. Damos cotizaciones exactas por teléfono según su VIN.' },
      { q: '¿Tienen que borrar mis llaves viejas?', a: 'Si solo necesita una de repuesto, no borramos las llaves viejas. Sin embargo, si le robaron las llaves, recomendamos encarecidamente borrar la memoria del vehículo para que la llave robada no pueda encender el motor.' },
      { q: '¿Pueden programar una llave que compré por internet?', a: 'Sí, podemos cortar y programar llaves suministradas por el cliente. Pero tenga cuidado: muchas llaves de internet son falsificadas o tienen la frecuencia de chip equivocada. No podemos garantizar llaves que no suministramos, y el cargo de programación aplica de todos modos.' },
      { q: '¿Cuánto tarda la copia?', a: 'Una vez que llega nuestro técnico, la copia estándar toma unos 20-30 minutos. Los sistemas más complejos o la originación de llave pueden tomar hasta una hora.' },
      { q: '¿Tienen licencia para trabajar en NYC?', a: 'Sí, somos un servicio de cerrajería automotriz de NYC con licencia, fianza y seguro completos. Cumplimos con todas las regulaciones del Departamento de Protección al Consumidor y al Trabajador.' },
    ],
    noteH: 'Nota importante',
    note: (m: string) => `Los modelos ${m} más nuevos (2022+) pueden requerir autorización en la nube a través de nuestro servidor seguro. Somos uno de los pocos cerrajeros de NYC con credenciales OEM activas para hacerlo. Cuidado con cerrajeros no verificados que intentan "hackear" el módulo, lo que puede anular su garantía.`,
    boroughsH: (m: string) => `Servicio ${m} disponible en:`,
    boroughLink: (m: string, b: string) => `Llaves ${m} en ${b}`,
    schemaName: (m: string) => `Copia de llaves de carro ${m} en NYC`,
    schemaDesc: (m: string) => `Corte y programación a domicilio de llaves con chip, controles remotos y llaves inteligentes ${m} en la ubicación del cliente en los cinco condados de NYC.`,
    home: 'Inicio',
  },
}

export default function MakePage({ locale, make }: { locale: Locale; make: MakeContent }) {
  const t = T[locale]
  const m = make.name
  const l = (p: string) => localizePath(p, locale)
  const path = l(`/${make.slug}`)

  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name={t.schemaName(m)}
        description={t.schemaDesc(m)}
        path={path}
        minPrice={95}
        maxPrice={350}
        serviceType={locale === 'es' ? `Copia de llaves ${m}` : `${m} car key duplication`}
        inLanguage={locale === 'es' ? 'es-US' : 'en-US'}
        breadcrumbs={[
          { name: t.home, path: l('/') },
          { name: t.h1(m), path },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">{t.h1(m)}</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">{t.sub(m)}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={l('/request-a-quote')} className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">{t.quote}</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges locale={locale} /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro paragraph for semantic depth */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-16">
          <p className="lead text-2xl font-bold text-brand-primary mb-6">{t.lead(m)}</p>
          <p>{t.intro1(m)}</p>
          <p>{t.intro2}</p>
        </article>

        {/* Security Architecture */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
          <div className="bg-brand-light border-b border-gray-200 px-8 py-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-primary" aria-hidden="true" />
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">{t.securityH(m)}</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{make.intro[locale]}</p>
            <p className="text-gray-700">{t.security(m)}</p>
          </div>
        </div>

        {/* Supported Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2 underline decoration-brand-accent">
            <ListChecks className="w-6 h-6" aria-hidden="true" /> {t.modelsH(m)}
          </h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 font-medium italic">{t.modelsIntro(m)}</p>
            <ul className="flex flex-wrap gap-2 text-sm list-none pl-0">
              {make.models.map((model) => (
                <li key={model} className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">{model}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">{t.modelsNote}</p>
          </div>
        </div>

        {/* Service Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">{t.servicesH(m)}</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.s1H}</h3>
              <p className="text-gray-700">{t.s1(m)}</p>
            </div>
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.s2H}</h3>
              <p className="text-gray-700">{t.s2}</p>
            </div>
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.s3H}</h3>
              <p className="text-gray-700">{t.s3(m)}</p>
            </div>
          </div>
        </div>

        {/* Dealer vs Locksmith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-600" aria-hidden="true" /> {t.dealerH}
            </h3>
            <ul className="space-y-3 text-sm text-red-800">
              {t.dealer.map((d) => <li key={d}>• {d}</li>)}
            </ul>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-brand-accent">
            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" aria-hidden="true" /> {t.usH}
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {t.us.map((d) => <li key={d}>• {d}</li>)}
            </ul>
          </div>
        </div>

        {/* Emergency Origination CTA */}
        <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-300 flex flex-col justify-center mb-16 text-center">
          <h3 className="text-2xl font-bold text-brand-primary mb-3">{t.lostH}</h3>
          <p className="text-lg text-gray-700 mb-6">{t.lost}</p>
          <Link href={l('/lost-car-key-replacement-nyc')} className="inline-block mx-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">{t.lostCta}</Link>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">{t.faqH(m)}</h2>
          <div className="space-y-6">
            {t.faqs(m).map((f) => (
              <div key={f.q}>
                <h4 className="font-bold text-lg text-gray-800 mb-2">{f.q}</h4>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center gap-2 mb-2 font-bold text-yellow-800"><Info className="w-5 h-5" aria-hidden="true" /> {t.noteH}</div>
          <p className="text-yellow-700 text-sm italic">{t.note(m)}</p>
        </div>

        {/* Borough Availability */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">{t.boroughsH(m)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BOROUGHS.map((b) => (
              <Link key={b.slug} href={l(`/${b.slug}`)} className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors">
                <Car className="w-4 h-4 text-brand-accent" aria-hidden="true" /> {t.boroughLink(m, boroughName(b.slug, locale))}
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
