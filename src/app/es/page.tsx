import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Clock, DollarSign, ClipboardCheck, Cpu } from 'lucide-react'
import { SITE, CAR_MAKES } from '@/lib/constants'
import { ES_NAV } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import TrustBadges from '@/components/ui/TrustBadges'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import PriceTable from '@/components/content/PriceTable'
import ServiceSchema from '@/components/seo/ServiceSchema'

export const metadata = generatePageMetadata({
  title: 'Copia de Llaves de Carro en NYC | Cerrajero Automotriz Móvil',
  description:
    'Copia y programación de llaves de carro a domicilio en Nueva York: llaves con chip, controles, llaves inteligentes y llaves perdidas. Mismo día, desde $75.',
  slug: '/es',
  keywords: ['copia de llaves de carro nueva york', 'llaves con chip nyc', 'cerrajero automotriz nueva york', 'duplicado de llaves de auto', 'copia de control de carro', 'cerrajero de carros brooklyn queens bronx'],
})

const faqItems = [
  {
    question: '¿Cuánto cuesta la copia de una llave de carro en Nueva York?',
    answer:
      'Con nuestro servicio a domicilio, una llave básica cuesta $75, una llave con chip $95-$180, un control remoto (key fob) $120-$220, una llave de corte láser $150-$220 y una llave inteligente o de botón de encendido $175-$395, con el viaje incluido. Reemplazar una llave cuando se perdieron todas cuesta $150-$450 según el tipo. El concesionario (dealer) cobra normalmente entre 40% y 60% más y exige llevar el carro. Damos un precio fijo por año, marca y modelo antes de enviar al técnico.',
  },
  {
    question: '¿Pueden hacer una copia si no tengo la llave original?',
    answer:
      'Sí. Si no tiene ninguna llave que funcione, generamos una nueva con el número VIN o decodificando la cerradura de la puerta, la cortamos, la programamos al carro y borramos la llave perdida. Esto se llama originación de llave y lo hacemos donde está su vehículo. Necesita una identificación con foto y la registración, el título o la tarjeta del seguro.',
  },
  {
    question: '¿Cuál es la diferencia entre copiar y reemplazar una llave?',
    answer:
      'Copiar (duplicar) significa que usted todavía tiene una llave que funciona y hacemos otra igual; es más rápido y económico porque el chip se clona o se agrega en minutos. Reemplazar (todas las llaves perdidas) significa crear la llave desde cero: decodificar la cerradura o buscar el código por VIN, cortar la hoja y programar un chip o control nuevo sin llave de referencia.',
  },
  {
    question: '¿Van hasta donde estoy o tengo que llevar el carro?',
    answer:
      'Somos 100% móviles. Un técnico con licencia va a su casa, trabajo, estacionamiento o a la calle en cualquier parte de Brooklyn, Queens, Manhattan, El Bronx y Staten Island, y corta y programa la llave junto al carro. No hay tienda que visitar ni grúa que pagar.',
  },
  {
    question: '¿Cuánto tarda el servicio?',
    answer:
      'La llegada suele ser de 30 a 60 minutos. Una vez en el lugar, una llave básica toma 5-10 minutos, una llave con chip 15-30 minutos, un control 20-30 minutos y una llave inteligente 30-45 minutos. Cuando se perdieron todas las llaves, el trabajo toma 45-90 minutos.',
  },
  {
    question: '¿Qué marcas de carro atienden?',
    answer:
      'Programamos llaves para más del 95% de los vehículos en Nueva York: Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, Jeep, Chrysler, Dodge, Subaru, Mazda, Volkswagen, Audi, BMW, Mercedes-Benz, Lexus, Acura e Infiniti. Trabajamos llaves con chip, de corte láser, controles remotos, llaves inteligentes y Fobik de Chrysler.',
  },
  {
    question: '¿Qué documentos necesito?',
    answer:
      'Una identificación oficial con foto y prueba de que el carro es suyo: la registración, el título o la tarjeta del seguro a su nombre. La ciudad de Nueva York exige a los cerrajeros con licencia verificar la propiedad antes de cortar o programar cualquier llave de vehículo.',
  },
  {
    question: '¿Atienden las 24 horas?',
    answer:
      'Sí. El servicio programado y del mismo día funciona todos los días, y el despacho de emergencia por llaves perdidas o carro cerrado está disponible las 24 horas, los 7 días de la semana, en los cinco condados. Las llamadas de emergencia fuera de horario tienen un cargo que informamos antes de salir.',
  },
  {
    question: '¿Es más barato un cerrajero que el dealer?',
    answer:
      'Para la mayoría de las marcas sí, entre 40% y 60% más barato. El dealer pide la llave de fábrica, necesita el carro en su lote (muchas veces con grúa) y tarda de 2 a 5 días hábiles. Un cerrajero automotriz móvil programa una llave original o aprobada por la FCC el mismo día donde está el carro.',
  },
  {
    question: '¿Hablan español?',
    answer:
      'Sí. Nuestro equipo atiende en español e inglés por teléfono y en persona en los cinco condados de Nueva York.',
  },
]

export default function HomeEs() {
  return (
    <>
      <ServiceSchema
        name="Copia de llaves de carro a domicilio en Nueva York"
        description="Cerrajero automotriz móvil que copia y programa llaves con chip, controles, llaves inteligentes y reemplaza llaves perdidas en los cinco condados de NYC."
        path="/es"
        minPrice={75}
        maxPrice={450}
        serviceType="Cerrajero automotriz móvil"
        inLanguage="es-US"
        breadcrumbs={[{ name: 'Inicio', path: '/es' }]}
      />

      {/* HERO */}
      <section className="relative bg-brand-primary text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Cerrajero automotriz con licencia · Los 5 condados · Hablamos español
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6 max-w-5xl mx-auto">
            Copia de Llaves de Carro en Nueva York — Vamos a Su Ubicación
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Llaves con chip, controles (key fob), llaves inteligentes, llaves de corte láser y reemplazo de llaves perdidas,
            cortadas y programadas donde está su carro en Brooklyn, Queens, Manhattan, El Bronx y Staten Island. Mismo día, precio fijo, sin grúa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/book-now" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Reservar ahora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
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

      {/* RESPUESTA RÁPIDA */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="bg-brand-light border-l-4 border-brand-accent rounded-r-2xl p-6 md:p-8 shadow-sm" aria-label="Respuesta rápida">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">Respuesta rápida</p>
            <p className="text-lg leading-relaxed text-gray-800">
              <strong>{SITE.name} es un cerrajero automotriz con licencia que copia y programa llaves de carro a domicilio en toda la ciudad de Nueva York.</strong>{' '}
              Una llave con chip de repuesto cuesta <strong>$95-$180</strong>, un control remoto <strong>$120-$220</strong> y una llave inteligente{' '}
              <strong>$175-$395</strong>, con el viaje incluido. Llegamos en <strong>30-60 minutos</strong> y la mayoría de las llaves quedan listas en 15-45 minutos.
              También reemplazamos llaves cuando se perdieron todas, desde <strong>$150</strong>. Tenga a mano su identificación y la registración.
            </p>
          </aside>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-gray-50 py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Servicios de copia de llaves de carro en NYC</h2>
            <p className="text-lg text-gray-600">Desde una llave básica de repuesto hasta una llave inteligente europea encriptada, todo se hace en el lugar desde una camioneta totalmente equipada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Copia de control de carro (key fob)', href: '/es/copia-de-control-de-carro-nyc', text: 'Controles remotos, llaves flip, llaves inteligentes y de botón de encendido, programados en el lugar.', price: 'Desde $120' },
              { name: 'Copia de llave con chip', href: '/es/copia-de-llave-con-chip-nyc', text: 'Llaves con transponder clonadas o programadas para cualquier marca y modelo.', price: 'Desde $95' },
              { name: 'Copia de llave de repuesto', href: '/es/copia-de-llave-de-repuesto-nyc', text: 'Llaves básicas y con chip de repuesto hechas en su casa o trabajo.', price: 'Desde $75' },
              { name: 'Cerrajero automotriz móvil', href: '/es/cerrajero-automotriz-movil-nyc', text: 'El taller completo va hasta su carro: corte, programación y prueba sin remolque.', price: 'Viaje incluido' },
              { name: 'Reemplazo de llaves perdidas', href: '/es/reemplazo-de-llaves-de-carro-perdidas-nyc', text: '¿Perdió todas las llaves? Llave nueva por VIN, programada en el carro y llave perdida borrada.', price: 'Desde $150' },
              { name: 'Llave inteligente / smart key (inglés)', href: '/smart-key-duplicate', text: 'Llaves de proximidad y botón de encendido para marcas asiáticas, americanas y europeas.', price: 'Desde $175' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="block group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{s.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{s.text}</p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-brand-primary font-bold">{s.price}</span>
                    <span className="text-sm font-medium text-brand-accent">Ver detalles →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">¿Cuánto cuesta copiar una llave de carro en Nueva York?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">Precios 2026 transparentes con el viaje dentro de los cinco condados incluido. La cotización exacta depende del año, marca, modelo y de si todavía tiene una llave que funcione.</p>
          <PriceTable
            caption="Precios de copia de llaves de carro en Nueva York por tipo de llave"
            columns={['Tipo de llave', 'Copia (tiene una llave)', 'Todas las llaves perdidas', 'Dealer típico en NYC']}
            rows={[
              ['Llave básica de metal', '$75', '$95 - $150', '$40 - $80 + viaje'],
              ['Llave con chip (transponder)', '$95 - $180', '$150 - $260', '$200 - $400 + grúa'],
              ['Llave de corte láser', '$150 - $220', '$200 - $300', '$250 - $450 + grúa'],
              ['Control remoto / llave flip', '$120 - $220', '$220 - $350', '$250 - $450 + grúa'],
              ['Llave inteligente / botón de encendido', '$175 - $395', '$260 - $450', '$350 - $600 + grúa'],
              ['Llave inteligente europea de lujo', '$250 - $450', '$350 - $650', '$600 - $1,500 + grúa'],
            ]}
            note="Precio fijo antes de enviar al técnico. Sin cargo por viaje dentro de NYC. El cargo por emergencia fuera de horario se informa por adelantado."
          />
        </div>
      </section>

      {/* ZONAS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Servicio móvil en los 5 condados de Nueva York</h2>
            <p className="text-lg text-gray-600">Con base en East Elmhurst, Queens, a minutos de LaGuardia y JFK, y camionetas que recorren cada condado todos los días.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ES_NAV.boroughs.map((b) => (
              <Link key={b.href} href={b.href} className="block group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                      <MapPin className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">{b.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Copia de llaves de carro a domicilio en todo {b.name}.</p>
                  <div className="text-sm font-medium text-brand-accent">Servicio en su ubicación →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Cómo funciona la copia de llaves a domicilio</h2>
            <p className="text-lg text-gray-600">Sin grúa y sin sala de espera del dealer. Cuatro pasos, normalmente en menos de dos horas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: '1. Cotización en minutos', text: 'Díganos año, marca, modelo, tipo de llave y dónde está el carro. Recibe un precio fijo por teléfono o texto.' },
              { icon: MapPin, title: '2. Vamos hasta usted', text: 'Un técnico con licencia llega en 30-60 minutos con llaves en blanco, máquinas de corte y programadores OBD-II para su marca.' },
              { icon: ClipboardCheck, title: '3. Verificación de identidad', text: 'Revisamos su identificación y registración, como lo exige la ley de cerrajeros de NYC, antes de cortar cualquier llave.' },
              { icon: CheckCircle2, title: '4. Corte, programación y prueba', text: 'Hoja cortada, chip o control programado, todas las funciones probadas con sus llaves actuales. Paga cuando funciona.' },
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

      {/* TIPOS DE LLAVE */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">¿Qué tipo de llave tiene su carro?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">Saber el tipo de llave explica el precio y el método. Todas se copian en el lugar.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Llave con chip (transponder)', text: 'Llave de metal con un chip en la cabeza de plástico. El inmovilizador debe reconocer el chip o el motor no enciende. Se clona de su original o se programa por OBD-II.', href: '/es/copia-de-llave-con-chip-nyc', link: 'Copia de llave con chip' },
              { title: 'Control remoto / llave flip (key fob)', text: 'Llave con chip más botones de abrir, cerrar, cajuela y pánico con código rotativo. Debe programarse al carro; no se clona en un quiosco.', href: '/es/copia-de-control-de-carro-nyc', link: 'Copia de control de carro' },
              { title: 'Llave inteligente / botón de encendido', text: 'Control de proximidad que abre al tocar la manija y enciende con un botón. Encriptada; se programa en el lugar, incluidos sistemas europeos.', href: '/smart-key-duplicate', link: 'Llave inteligente (inglés)' },
              { title: 'Llave de corte láser', text: 'Hoja gruesa con un canal serpenteante en el centro. Requiere una máquina de corte láser que llevamos en la camioneta.', href: '/laser-cut-key-duplicate', link: 'Llave de corte láser (inglés)' },
            ].map((k) => (
              <div key={k.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{k.title}</h3>
                <p className="text-gray-600 mb-4">{k.text}</p>
                <Link href={k.href} className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">{k.link} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">Copiamos llaves de todas las marcas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-10">Software de programación y llaves compatibles con las originales para vehículos americanos, asiáticos y europeos. Las páginas por marca están en inglés.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAR_MAKES.map((make) => (
              <Link key={make.slug} href={`/${make.slug}`} className="block group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:border-brand-accent hover:bg-brand-light">
                  <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{make.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DEALER VS NOSOTROS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Por qué los conductores de NYC prefieren un cerrajero móvil al dealer</h2>
            <p className="text-lg text-gray-600">Una comparación honesta. Para unos pocos modelos muy nuevos o exóticos el dealer sigue siendo la única opción, y se lo diremos.</p>
          </div>
          <PriceTable
            caption="Concesionario versus cerrajero móvil para copia de llaves de carro en NYC"
            columns={['Factor', 'El concesionario (dealer)', SITE.name]}
            rows={[
              ['Costo de llave con chip', '$200 - $400', 'Desde $95'],
              ['Costo de llave inteligente', '$350 - $600+', 'Desde $175'],
              ['Tiempo de espera', '2-5 días hábiles', 'El mismo día, a menudo en menos de 2 horas'],
              ['Grúa si perdió todas las llaves', 'Casi siempre ($100-$250)', 'Nunca, vamos hasta el carro'],
              ['Dónde', 'Lote del dealer, horario de oficina', 'Su ubicación, emergencias 24/7'],
              ['Verificación de propiedad', 'Sí', 'Sí (licencia de NYC)'],
            ]}
          />
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Con licencia, seguro y verificación', text: 'Cerrajeros con licencia de NYC que revisan identificación y propiedad en cada trabajo y registran cada llave como exige el Departamento de Protección al Consumidor y al Trabajador (DCWP). Sin precios engañosos de "$15".' },
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

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Preguntas frecuentes sobre copia de llaves de carro</h2>
            <p className="text-lg text-gray-600">Lo que más nos preguntan los conductores de Nueva York, respondido por los técnicos que hacen el trabajo.</p>
          </div>
          <FAQAccordion items={faqItems} />
          <p className="text-center text-gray-600 mt-8">
            <Link href="/" hrefLang="en-US" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">View this page in English →</Link>
          </p>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <CTABanner
          title="¿Necesita una llave de repuesto hoy? Vamos a cualquier condado de NYC."
          subtitle="No espere a perder su última llave. Nuestros técnicos copian su llave con chip, control o llave inteligente en su ubicación."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </section>
    </>
  )
}
