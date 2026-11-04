import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Clock, DollarSign, ClipboardCheck, Cpu } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES, CAR_MAKES } from '@/lib/constants'
import { SERVICE_NAMES_ES, BLOG_SLUG_ES, boroughName, localizePath } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import TrustBadges from '@/components/ui/TrustBadges'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import PriceTable from '@/components/content/PriceTable'

export const metadata = generatePageMetadata({
  title: 'Copia de Llaves de Carro en NYC | Cerrajero Automotriz Móvil',
  description:
    'Copia y programación de llaves de carro a domicilio en Nueva York: llaves con chip, controles, llaves inteligentes y llaves perdidas. Mismo día, desde $75.',
  slug: '/es',
  keywords: ['copia de llaves de carro nueva york', 'llaves con chip nyc', 'cerrajero automotriz nueva york', 'duplicado de llaves de auto', 'copia de control de carro', 'cerrajero de carros brooklyn queens bronx'],
})

const l = (p: string) => localizePath(p, 'es')
const LINK = 'text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent'

const SERVICE_DESC_ES: Record<string, string> = {
  'transponder-key-duplicate': 'Copia de llaves con chip para cualquier marca y modelo, programadas en el lugar.',
  'key-fob-duplicate': 'Copia y programación de controles remotos con todas las funciones de los botones.',
  'smart-key-duplicate': 'Llaves inteligentes de proximidad copiadas y programadas a su vehículo.',
  'push-to-start-key-duplicate': 'Sistemas de encendido sin llave: control nuevo cortado, programado y probado.',
  'laser-cut-key-duplicate': 'Llaves sidewinder de alta seguridad copiadas con equipo láser de precisión.',
  'spare-key-copy': 'Copias de llaves de repuesto básicas y con chip hechas en su ubicación.',
}
const PRICE_ES: Record<string, string> = { 'From $95': 'Desde $95', 'From $120': 'Desde $120', 'From $175': 'Desde $175', 'From $150': 'Desde $150', 'From $75': 'Desde $75' }

const faqItems = [
  { question: '¿Cuánto cuesta la copia de una llave de carro en Nueva York?', answer: 'Con nuestro servicio a domicilio, una llave básica cuesta $75, una llave con chip $95-$180, un control remoto (key fob) $120-$220, una llave de corte láser $150-$220 y una llave inteligente o de botón de encendido $175-$395, con el viaje incluido. Reemplazar una llave cuando se perdieron todas cuesta $150-$450 según el tipo. El concesionario (dealer) cobra normalmente entre 40% y 60% más y exige llevar el carro. Damos un precio fijo por año, marca y modelo antes de enviar al técnico.' },
  { question: '¿Pueden hacer una copia si no tengo la llave original?', answer: 'Sí. Si no tiene ninguna llave que funcione, generamos una nueva con el número VIN o decodificando la cerradura de la puerta, la cortamos, la programamos al carro y borramos la llave perdida. Esto se llama originación de llave y lo hacemos donde está su vehículo. Necesita una identificación con foto y la registración, el título o la tarjeta del seguro.' },
  { question: '¿Cuál es la diferencia entre copiar y reemplazar una llave?', answer: 'Copiar (duplicar) significa que usted todavía tiene una llave que funciona y hacemos otra igual; es más rápido y económico porque el chip se clona o se agrega en minutos. Reemplazar (todas las llaves perdidas) significa crear la llave desde cero: decodificar la cerradura o buscar el código por VIN, cortar la hoja y programar un chip o control nuevo sin llave de referencia.' },
  { question: '¿Van hasta donde estoy o tengo que llevar el carro?', answer: 'Somos 100% móviles. Un técnico con licencia va a su casa, trabajo, estacionamiento o a la calle en cualquier parte de Brooklyn, Queens, Manhattan, El Bronx y Staten Island, y corta y programa la llave junto al carro. No hay tienda que visitar ni grúa que pagar.' },
  { question: '¿Cuánto tarda el servicio?', answer: 'La llegada suele ser de 30 a 60 minutos. Una vez en el lugar, una llave básica toma 5-10 minutos, una llave con chip 15-30 minutos, un control 20-30 minutos y una llave inteligente 30-45 minutos. Cuando se perdieron todas las llaves, el trabajo toma 45-90 minutos.' },
  { question: '¿Qué marcas de carro atienden?', answer: 'Programamos llaves para más del 95% de los vehículos en Nueva York: Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, Jeep, Chrysler, Dodge, Subaru, Mazda, Volkswagen, Audi, BMW, Mercedes-Benz, Lexus, Acura e Infiniti. Trabajamos llaves con chip, de corte láser, controles remotos, llaves inteligentes y Fobik de Chrysler.' },
  { question: '¿Qué documentos necesito?', answer: 'Una identificación oficial con foto y prueba de que el carro es suyo: la registración, el título o la tarjeta del seguro a su nombre. La ciudad de Nueva York exige a los cerrajeros con licencia verificar la propiedad antes de cortar o programar cualquier llave de vehículo, y registramos cada trabajo como lo exigen las reglas del Departamento de Protección al Consumidor y al Trabajador.' },
  { question: '¿Atienden las 24 horas?', answer: 'Sí. El servicio programado y del mismo día funciona todos los días, y el despacho de emergencia por llaves perdidas o carro cerrado está disponible las 24 horas, los 7 días de la semana, en los cinco condados. Las llamadas de emergencia fuera de horario tienen un cargo que informamos antes de salir.' },
  { question: '¿Es más barato un cerrajero móvil que el dealer?', answer: 'Para la mayoría de las marcas sí, entre 40% y 60% más barato. El dealer pide la llave de fábrica, necesita el carro en su lote (muchas veces con grúa) y tarda de 2 a 5 días hábiles. Un cerrajero automotriz móvil programa una llave original o aprobada por la FCC el mismo día donde está el carro. Solo unos pocos modelos muy nuevos o exóticos siguen siendo exclusivos del dealer, y le diremos si el suyo es uno de ellos.' },
  { question: '¿Copian el fob (llavero) de un apartamento o edificio?', answer: 'No. Trabajamos exclusivamente con llaves y controles de automóvil. Los fobs RFID de edificio se clonan en quioscos de llaves o ferreterías; los controles de carro deben programarse al vehículo a través de su puerto de diagnóstico, que es nuestra especialidad.' },
  { question: 'Do you speak English?', answer: 'Yes. We serve customers in English and Spanish across all five boroughs. Visit our English page for car key duplication, key fobs and smart keys in New York City.' },
]

export default function HomeEs() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Cerrajero automotriz móvil con licencia · Los 5 condados · We speak English
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6 max-w-5xl mx-auto">
            Copia de Llaves de Carro en NYC — Vamos a Su Ubicación y la Programamos en el Lugar
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Llaves con chip, controles (key fob), llaves inteligentes, llaves de corte láser y reemplazo de llaves perdidas, cortadas y
            programadas donde está su carro en Brooklyn, Queens, Manhattan, El Bronx y Staten Island. Mismo día, precio fijo, sin grúa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={l('/book-now')} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Reservar ahora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={l('/request-a-quote')} className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
              Cotización gratis
            </Link>
            <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-4 text-lg hover:text-brand-accent transition-colors">
              <Phone className="w-5 h-5 text-brand-accent" /> {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10">
            <TrustBadges locale="es" />
          </div>
        </div>
      </section>

      {/* 2. RESPUESTA RÁPIDA */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="bg-brand-light border-l-4 border-brand-accent rounded-r-2xl p-6 md:p-8 shadow-sm" aria-label="Respuesta rápida">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">Respuesta rápida</p>
            <p className="text-lg leading-relaxed text-gray-800">
              <strong>{SITE.name} es un cerrajero móvil con licencia que copia y programa llaves de carro en su ubicación en cualquier parte de la ciudad de Nueva York.</strong>{' '}
              Una llave con chip de repuesto cuesta <strong>$95-$180</strong>, un control remoto <strong>$120-$220</strong> y una llave inteligente{' '}
              <strong>$175-$395</strong>, con el viaje incluido. La llegada típica es de <strong>30-60 minutos</strong> y la mayoría de las llaves quedan listas en
              15-45 minutos. También reemplazamos llaves cuando se perdieron todas, desde <strong>$150</strong>. Tenga a mano su identificación con foto y la registración.
            </p>
          </aside>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section id="servicios" className="bg-gray-50 py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Servicios de copia de llaves de carro en NYC</h2>
            <p className="text-lg text-gray-600">Desde una llave básica de repuesto hasta una llave inteligente europea encriptada, cada servicio se realiza en el lugar desde una camioneta totalmente equipada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ...SERVICE_TYPES.map((s) => ({ name: SERVICE_NAMES_ES[`/${s.slug}`], href: l(`/${s.slug}`), text: SERVICE_DESC_ES[s.slug], price: PRICE_ES[s.price] ?? s.price })),
              { name: 'Reemplazo de llaves de carro perdidas', href: l('/lost-car-key-replacement-nyc'), text: '¿Perdió todas las llaves? Llave nueva generada con su VIN, programada en el carro, llave perdida borrada.', price: 'Desde $150' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="block group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{s.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{s.text}</p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-brand-primary font-bold">{s.price}</span>
                    <span className="text-sm font-medium text-brand-accent group-hover:text-yellow-600">Ver detalles →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10">
            ¿Lo necesita rápido? Ofrecemos{' '}
            <Link href={l('/same-day-car-key-duplicate-nyc')} className={LINK}>servicio el mismo día</Link>,{' '}
            <Link href={l('/24-hour-car-key-duplicate-nyc')} className={LINK}>despacho de emergencia 24 horas</Link>{' '}
            y{' '}
            <Link href={l('/mobile-car-key-duplicate-nyc')} className={LINK}>copia de llaves de carro totalmente a domicilio</Link>{' '}
            en cualquier parte de NYC.
          </p>
        </div>
      </section>

      {/* 4. PRECIOS */}
      <section id="precios" className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">¿Cuánto cuesta copiar una llave de carro en NYC?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">Precios 2026 transparentes con el viaje dentro de los cinco condados incluido. Su cotización exacta depende del año, marca, modelo y de si todavía tiene una llave que funcione.</p>
          <PriceTable
            caption="Precios de copia de llaves de carro en Nueva York por tipo de llave"
            columns={['Tipo de llave', 'Copia (tiene una llave)', 'Todas las llaves perdidas', 'Dealer típico en NYC']}
            rows={[
              ['Llave básica de metal', '$75', '$95 - $150', '$40 - $80 + viaje'],
              ['Llave con chip (transponder)', '$95 - $180', '$150 - $260', '$200 - $400 + grúa'],
              ['Llave de corte láser (sidewinder)', '$150 - $220', '$200 - $300', '$250 - $450 + grúa'],
              ['Control remoto / llave flip', '$120 - $220', '$220 - $350', '$250 - $450 + grúa'],
              ['Llave inteligente / botón de encendido', '$175 - $395', '$260 - $450', '$350 - $600 + grúa'],
              ['Llave inteligente europea de lujo', '$250 - $450', '$350 - $650', '$600 - $1,500 + grúa'],
            ]}
            note="Precio fijo antes de enviar al técnico. Sin cargo por viaje dentro de NYC. El cargo por despacho de emergencia fuera de horario se informa por adelantado."
          />
          <p className="text-gray-600">
            Desglose completo por marca y situación en nuestra guía: <Link href={`/es/blog/${BLOG_SLUG_ES['car-key-duplicate-cost-nyc']}`} className={LINK}>cuánto cuesta copiar una llave de carro en NYC</Link>.
          </p>
        </div>
      </section>

      {/* 5. CONDADOS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Servicio móvil de llaves de carro en los 5 condados de NYC</h2>
            <p className="text-lg text-gray-600">Con base en East Elmhurst, Queens, a minutos de LaGuardia y JFK, y camionetas que recorren cada condado a diario. Elija el suyo para ver vecindarios y tiempos de respuesta.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {BOROUGHS.map((b) => (
              <Link key={b.slug} href={l(`/${b.slug}`)} className="block group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                      <MapPin className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">{boroughName(b.slug, 'es')}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Copia de llaves de carro a domicilio en todos los vecindarios de {boroughName(b.slug, 'es')}</p>
                  <div className="text-sm font-medium text-brand-accent group-hover:text-yellow-600 flex items-center gap-1">Servicio móvil en su ubicación <span className="text-lg">→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CÓMO FUNCIONA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Cómo funciona la copia de llaves de carro a domicilio</h2>
            <p className="text-lg text-gray-600">Sin grúa y sin sala de espera del dealer. Cuatro pasos, normalmente en menos de dos horas de principio a fin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: '1. Cotización en minutos', text: 'Díganos año, marca, modelo, tipo de llave y dónde está el carro. Recibe un precio fijo por teléfono o texto.' },
              { icon: MapPin, title: '2. Vamos hasta usted', text: 'Un técnico con licencia llega en 30-60 minutos con llaves en blanco, cortadoras y programadores OBD-II para su marca.' },
              { icon: ClipboardCheck, title: '3. Verificación de identidad y propiedad', text: 'Revisamos su identificación con foto y la registración, como lo exigen las reglas de cerrajeros de NYC, antes de cortar cualquier llave.' },
              { icon: CheckCircle2, title: '4. Corte, programación y prueba', text: 'Hoja cortada, chip o control programado, cada función probada junto con sus llaves actuales. Paga cuando funciona.' },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center mb-4">
                  <s.icon className="w-8 h-8 text-brand-accent" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIPOS DE LLAVE */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">¿Qué llave de carro tiene usted?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">Conocer el tipo de llave explica el precio y el método. Todas se copian en el lugar.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Llave con chip (transponder)', text: 'Una llave de metal con un chip en la cabeza de plástico. El inmovilizador debe reconocer el chip o el motor no encenderá. Se clona de su original o se programa por OBD-II.', href: l('/transponder-key-duplicate'), link: 'Copia de llave con chip' },
              { title: 'Control remoto / llave flip', text: 'Una llave con chip más botones de abrir, cerrar, cajuela y pánico con código rotativo. Debe programarse al carro; no se puede clonar en un quiosco.', href: l('/key-fob-duplicate'), link: 'Copia y programación de control de carro' },
              { title: 'Llave inteligente / botón de encendido', text: 'Control de proximidad que abre al tocar la manija y enciende el carro con un botón. Encriptado; se programa en el lugar, incluidos los sistemas europeos.', href: l('/smart-key-duplicate'), link: 'Copia de llave inteligente' },
              { title: 'Llave de corte láser (sidewinder)', text: 'Una hoja gruesa con un canal serpenteante fresado en el centro. Requiere una máquina de corte láser, que llevamos en la camioneta.', href: l('/laser-cut-key-duplicate'), link: 'Copia de llave de corte láser' },
            ].map((k) => (
              <div key={k.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{k.title}</h3>
                <p className="text-gray-600 mb-4">{k.text}</p>
                <Link href={k.href} className={LINK}>{k.link} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MARCAS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">Copiamos llaves de todas las marcas</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Software de programación y llaves en blanco compatibles con las originales para vehículos americanos, asiáticos y europeos, incluidos los sistemas encriptados de BMW, Mercedes-Benz y Volkswagen.</p>
            </div>
            <Link href={l('/request-a-quote')} className={`${LINK} whitespace-nowrap`}>¿No ve su marca? Pregúntenos →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAR_MAKES.map((make) => (
              <Link key={make.slug} href={l(`/${make.slug}`)} className="block group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:border-brand-accent hover:bg-brand-light">
                  <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{make.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEALER VS NOSOTROS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Por qué los conductores de NYC eligen un cerrajero móvil en vez del dealer</h2>
            <p className="text-lg text-gray-600">Una comparación honesta. Para unos pocos modelos muy nuevos o exóticos el dealer sigue siendo la única opción, y se lo diremos.</p>
          </div>
          <PriceTable
            caption="Concesionario versus cerrajero móvil para copia de llaves de carro en NYC"
            columns={['Factor', 'El concesionario (dealer)', SITE.name]}
            rows={[
              ['Costo de llave con chip', '$200 - $400', 'Desde $95'],
              ['Costo de llave inteligente', '$350 - $600+', 'Desde $175'],
              ['Tiempo de espera', '2-5 días hábiles por la llave', 'El mismo día, a menudo en menos de 2 horas'],
              ['Grúa si perdió todas las llaves', 'Casi siempre obligatoria ($100-$250)', 'Nunca, vamos hasta el carro'],
              ['Dónde', 'Lote del dealer, horario de oficina', 'Su ubicación, emergencias 24/7'],
              ['Verificación de propiedad', 'Sí', 'Sí (licencia de NYC)'],
            ]}
          />
          <p className="text-gray-600 text-center">
            Lea la comparación completa: <Link href={`/es/blog/${BLOG_SLUG_ES['dealer-vs-locksmith-key-duplicate-nyc']}`} className={LINK}>dealer vs. cerrajero para llaves de carro en NYC</Link>.
          </p>
        </div>
      </section>

      {/* 10. CONFIANZA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Con licencia, seguro y verificación', text: 'Cerrajeros con licencia de NYC que revisan identificación y propiedad en cada trabajo y registran cada llave como exige el Departamento de Protección al Consumidor y al Trabajador. Sin precios engañosos de "cerrajero de $15".' },
              { icon: Clock, title: 'Mismo día, emergencias 24/7', text: 'Camionetas con base en Queens y Brooklyn llegan a casi toda la ciudad en menos de una hora. El trabajo programado de día no tiene recargo; los cargos de emergencia se informan antes de salir.' },
              { icon: CheckCircle2, title: 'Probada antes de pagar', text: 'Se verifica el encendido, cada cerradura y cada botón del control, y se comprueban sus llaves actuales. Equipo de nivel original que nunca anula el inmovilizador.' },
            ].map((t) => (
              <div key={t.title} className="bg-brand-light rounded-2xl p-8 border border-gray-100">
                <t.icon className="w-10 h-10 text-brand-accent mb-4" aria-hidden="true" />
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{t.title}</h3>
                <p className="text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Preguntas frecuentes sobre copia de llaves de carro</h2>
            <p className="text-lg text-gray-600">Las preguntas que más nos hacen los conductores de NYC, respondidas por los técnicos que hacen el trabajo.</p>
          </div>
          <FAQAccordion items={faqItems} />
          <p className="text-center text-gray-600 mt-8">
            <Link href="/" hrefLang="en-US" lang="en" className={LINK}>View this page in English →</Link>
          </p>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <CTABanner
          title="¿Necesita una llave de repuesto hoy? Vamos a cualquier condado de NYC."
          subtitle="No espere a perder su última llave. Nuestros técnicos copian su llave con chip, control o llave inteligente en su ubicación."
          bookHref={l('/book-now')}
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </section>

      {/* 13. BLOG */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">Guías de nuestros técnicos de NYC</h2>
              <p className="text-lg text-gray-600">Precios, seguridad y consejos de compra para los conductores de Nueva York.</p>
            </div>
            <Link href={l('/blog')} className={`${LINK} whitespace-nowrap`}>Ver todos los artículos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'car-key-duplicate-cost-nyc', title: '¿Cuánto cuesta copiar una llave de carro en NYC? (Guía 2026)', text: 'Rangos de precio reales por tipo de llave y marca, por qué los precios en NYC son distintos y las señales de alerta que debe evitar.' },
              { slug: 'dealer-vs-locksmith-key-duplicate-nyc', title: 'Dealer vs. cerrajero móvil para llaves de carro', text: 'Rapidez, costo, calidad y comodidad comparados con honestidad para los conductores de Nueva York.' },
              { slug: 'can-you-duplicate-transponder-key', title: '¿Se puede copiar una llave con chip?', text: 'Las llaves con chip explicadas: clonación vs. programación y cuándo necesita la original.' },
            ].map((post) => (
              <Link key={post.slug} href={`/es/blog/${BLOG_SLUG_ES[post.slug]}`} className="block group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={`/blog/${post.slug}.jpg`} alt="" width={640} height={360} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.text}</p>
                  <span className="text-sm font-semibold text-brand-accent">Leer artículo →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
