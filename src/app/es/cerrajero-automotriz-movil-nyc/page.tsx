import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import { ES_NAV } from '@/lib/i18n'
import ServiceSchema from '@/components/seo/ServiceSchema'
import ServiceHero from '@/components/content/ServiceHero'
import QuickAnswer from '@/components/content/QuickAnswer'
import Section from '@/components/content/Section'
import PriceTable from '@/components/content/PriceTable'
import StepList from '@/components/content/StepList'
import FAQSection from '@/components/content/FAQSection'
import LinkGrid from '@/components/content/LinkGrid'
import CTABanner from '@/components/ui/CTABanner'
import { Truck, MapPin, DollarSign, Wrench, Clock, ShieldCheck, ClipboardCheck } from 'lucide-react'

const PATH = '/es/cerrajero-automotriz-movil-nyc'

export const metadata = generatePageMetadata({
  title: 'Cerrajero Automotriz Móvil en NYC | Llegamos en 30-60 Min',
  description:
    'Cerrajero automotriz a domicilio en Nueva York: un técnico con licencia va hasta su carro y corta y programa la llave en el lugar. Sin grúa, precio fijo.',
  slug: PATH,
  keywords: ['cerrajero automotriz nueva york', 'cerrajero de autos nyc', 'cerrajero automotriz cerca de mi', 'cerrajero de carros a domicilio brooklyn queens bronx', 'cerrajero movil llaves de carro', 'llaves de carro a domicilio'],
})

const faqItems = [
  {
    question: '¿Qué hace un cerrajero automotriz móvil?',
    answer:
      'Un cerrajero automotriz móvil es un cerrajero con licencia cuya camioneta lleva máquina de corte de llaves, fresadora de corte láser, clonadores de chip, programadores OBD-II y un inventario de llaves en blanco y controles. En vez de que usted remolque el carro al dealer, el técnico va hasta el vehículo y corta y programa la llave donde está estacionado.',
  },
  {
    question: '¿Cuánto cuesta extra el servicio a domicilio?',
    answer:
      'Nada extra dentro de los cinco condados. El precio cotizado cubre el viaje, el corte, la programación y la prueba. Los trabajos programados de día no tienen recargo; solo el despacho de emergencia fuera de horario (9 PM a 7 AM) tiene un cargo de emergencia que informamos antes de salir.',
  },
  {
    question: '¿Qué tan rápido pueden llegar?',
    answer:
      'La llegada típica es de 30-60 minutos en cualquier parte de Brooklyn, Queens, Manhattan, El Bronx y Staten Island. Nuestras camionetas tienen base en Queens y Brooklyn y recorren toda la ciudad, así que la mayoría de las llamadas se atienden en menos de una hora, incluso con el tráfico de Midtown.',
  },
  {
    question: '¿Dónde pueden encontrarse conmigo?',
    answer:
      'En cualquier lugar donde el carro esté estacionado legalmente y sea accesible: su entrada o la calle, un estacionamiento de oficina o apartamento, el lote de un centro comercial, un taller de carrocería, el estacionamiento de largo plazo del aeropuerto o el lote de un dealer si prefiere un cerrajero. Solo necesitamos el vehículo y sus documentos de identidad y propiedad.',
  },
  {
    question: '¿Necesitan tomacorriente o Wi-Fi?',
    answer:
      'No. Las camionetas son autónomas, con inversores para las máquinas de corte y datos celulares para los servidores de seguridad de los fabricantes. Podemos trabajar en un estacionamiento subterráneo o en una calle sin servicios.',
  },
  {
    question: '¿Un cerrajero móvil puede programar cualquier tipo de llave?',
    answer:
      'Sí: llaves básicas, llaves con chip, controles remotos, llaves inteligentes y de botón de encendido, llaves de corte láser y Fobik de Chrysler. También manejamos sistemas europeos encriptados (BMW, Mercedes-Benz, Audi, Volkswagen) que requieren cálculos en línea o programación en banco.',
  },
  {
    question: '¿Es seguro y legal copiar llaves a domicilio?',
    answer:
      'Sí, cuando lo hace un cerrajero con licencia. La ciudad de Nueva York exige que los cerrajeros tengan licencia del Departamento de Protección al Consumidor y al Trabajador, verifiquen la identidad del cliente y la propiedad del vehículo, y lleven un registro de cada llave que hacen. Cumplimos las tres reglas en cada trabajo.',
  },
  {
    question: '¿Debo llamar al dealer o a un cerrajero móvil?',
    answer:
      'Para la mayoría de las marcas comunes, el cerrajero móvil es más rápido (el mismo día en vez de varios días), más barato (normalmente 40% a 60% menos) y evita la grúa porque el trabajo se hace junto al carro. El dealer es la opción correcta solo para unos pocos modelos muy nuevos o exóticos cuya programación sigue restringida a los concesionarios; le diremos con honestidad si su carro es uno de ellos.',
  },
]

export default function CerrajeroMovilPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Cerrajero automotriz móvil en NYC"
        description="Corte y programación en el lugar de llaves y controles de carro por un cerrajero automotriz móvil con licencia en cualquier parte de los cinco condados de Nueva York."
        path={PATH}
        minPrice={75}
        maxPrice={450}
        serviceType="Cerrajero automotriz móvil"
        inLanguage="es-US"
        breadcrumbs={[
          { name: 'Inicio', path: '/es' },
          { name: 'Cerrajero automotriz móvil', path: PATH },
        ]}
      />

      <ServiceHero
        locale="es"
        eyebrow="El taller de llaves que va hasta usted"
        title="Cerrajero Automotriz Móvil en NYC — Llaves Cortadas y Programadas en Su Ubicación"
        subtitle="Sin grúa, sin sala de espera del dealer, sin cargo oculto por viaje. Un técnico con licencia llega en 30-60 minutos a cualquier parte de los cinco condados con todo lo necesario para hacer su llave en el momento."
        primaryCta={{ label: 'Pedir servicio móvil', href: '/es/reservar' }}
        secondaryCta={{ label: 'Cotización fija', href: '/es/cotizacion' }}
        callLabel="Llamar al"
        breadcrumbLabel="Ruta de navegación"
        breadcrumbs={[
          { name: 'Inicio', href: '/es' },
          { name: 'Cerrajero automotriz móvil', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Respuesta rápida">
          <p>
            <strong>Un cerrajero automotriz móvil lleva el taller completo hasta su carro.</strong> {SITE.name} envía un cerrajero
            con licencia a cualquier dirección en Brooklyn, Queens, Manhattan, El Bronx o Staten Island, normalmente en{' '}
            <strong>30-60 minutos</strong>. Las llaves y controles se cortan y programan en el lugar en 15-45 minutos. El viaje está incluido
            en el precio fijo (desde <strong>$75</strong> una llave básica, <strong>$95</strong> una llave con chip, <strong>$120</strong> un control).
          </p>
        </QuickAnswer>

        <Section id="camioneta" title="Qué hay en la camioneta: un laboratorio de llaves completo" icon={Truck}>
          <ul>
            <li><strong>Máquinas de corte</strong> para hojas de corte de borde y de <strong>corte láser</strong>, con corte por código para hacer una llave sin original.</li>
            <li><strong>Herramientas de clonación de chip</strong> para chips 4C, 4D, ID46, 8A y Megamos.</li>
            <li><strong>Programadores OBD-II</strong> con software actualizado para Toyota, Honda, Nissan, Hyundai, Kia, Ford, GM, Chrysler, Subaru, Mazda, Volkswagen, Audi, BMW y Mercedes-Benz.</li>
            <li><strong>Decodificadores de cerradura y kits de extracción</strong> para llaves perdidas y llaves rotas atascadas en la ignición.</li>
            <li><strong>Inventario de llaves originales y aprobadas por la FCC</strong>: llaves con chip, con botones, flip, inteligentes, de botón de encendido y Fobik.</li>
            <li><strong>Energía y conectividad</strong>: inversores a bordo y datos celulares para los servidores de seguridad de los fabricantes; nunca necesitamos su tomacorriente ni su Wi-Fi.</li>
          </ul>
        </Section>

        <Section id="donde" title="Dónde nos encontramos con usted" icon={MapPin}>
          <p>En cualquier lugar donde el vehículo esté estacionado y podamos acceder legalmente:</p>
          <ul>
            <li>Su casa, entrada o estacionamiento en la calle en cualquier condado.</li>
            <li>Estacionamientos de oficinas, apartamentos y públicos (trabajamos bajo tierra, sin necesidad de electricidad).</li>
            <li>Centros comerciales, hospitales, escuelas y estadios.</li>
            <li>Talleres de carrocería, mecánicos y lotes de carros usados que necesitan llaves para vehículos de clientes.</li>
            <li>Estacionamiento de largo plazo de JFK y LaGuardia: nuestra base en East Elmhurst está a minutos de ambos aeropuertos.</li>
            <li>En la carretera, después de quedarse afuera del carro o de romper la llave en la ignición.</li>
          </ul>
        </Section>

        <Section id="tiempos" title="Tiempos de llegada típicos por condado" icon={Clock}>
          <PriceTable
            caption="Tiempo promedio de llegada del servicio móvil de llaves de carro por condado de NYC"
            columns={['Condado', 'Llegada típica', 'Notas']}
            rows={[
              ['Queens', '20-45 min', 'Base en East Elmhurst; la cobertura más rápida de Astoria a Jamaica y Flushing.'],
              ['Brooklyn', '30-60 min', 'Las camionetas pasan por Williamsburg, Downtown y Bay Ridge a diario.'],
              ['Manhattan', '30-60 min', 'Midtown y Downtown por el puente Queensboro y el túnel de Midtown; sin recargo por congestión.'],
              ['El Bronx', '30-60 min', 'Por los puentes RFK y Whitestone; Fordham, Riverdale y Co-op City cubiertos.'],
              ['Staten Island', '45-75 min', 'Se prefieren citas programadas; despacho de emergencia disponible.'],
            ]}
            note="Tiempos típicos para llamadas programadas y del mismo día en horario comercial. El despacho de emergencia funciona 24/7."
          />
        </Section>

        <Section id="precios" title="Precios de llaves de carro a domicilio (viaje incluido)" icon={DollarSign}>
          <PriceTable
            caption="Precios de copia de llaves de carro a domicilio en NYC"
            columns={['Servicio', 'Precio con viaje', 'Tiempo en el lugar']}
            rows={[
              ['Llave básica de repuesto', 'Desde $75', '5-10 min'],
              ['Copia de llave con chip', '$95 - $180', '15-30 min'],
              ['Copia de control remoto', '$120 - $220', '20-30 min'],
              ['Llave de corte láser', '$150 - $220', '30 min'],
              ['Copia de llave inteligente / botón de encendido', '$175 - $395', '30-45 min'],
              ['Todas las llaves perdidas (generar por VIN)', '$150 - $450', '45-90 min'],
              ['Extracción de llave rota', '$75 - $150', '15-30 min'],
            ]}
            note="Precio fijo antes de salir. Sin cargo por viaje dentro de los cinco condados; el cargo por emergencia fuera de horario se informa por adelantado."
          />
          <p>Precios detallados: <Link href="/es/copia-de-llave-de-repuesto-nyc">llave de repuesto</Link>, <Link href="/es/copia-de-control-de-carro-nyc">control de carro</Link>, <Link href="/es/copia-de-llave-con-chip-nyc">llave con chip</Link>, <Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc">llaves perdidas</Link>.</p>
        </Section>

        <Section id="proceso" title="Cómo funciona el despacho móvil" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Llame, escriba o reserve en línea', text: 'Dénos año, marca, modelo, tipo de llave y la ubicación exacta del carro (calles, nivel del estacionamiento, sección del lote).' },
              { title: 'Precio fijo y hora de llegada', text: 'Recibe el precio completo y una ventana de llegada realista antes de que salga una camioneta. Sin precios engañosos de "desde".' },
              { title: 'Llega el técnico', text: 'Un técnico con licencia y uniforme revisa su identificación y documentos de propiedad, y luego corta y programa la llave junto al carro.' },
              { title: 'Probada, luego paga', text: 'Se prueban el encendido, las cerraduras y cada función del control, se verifican sus llaves originales y paga con tarjeta o efectivo cuando la llave funciona.' },
            ]}
          />
        </Section>

        <Section id="licencia" title="Con licencia, seguro y locales" icon={ShieldCheck}>
          <p>
            Nuestros técnicos operan bajo la licencia de cerrajero de la ciudad de Nueva York, tienen seguro de responsabilidad y verifican la
            propiedad del vehículo en cada trabajo. Despachamos desde Queens, no desde un centro de llamadas nacional, así que la empresa que
            lo cotiza es la que llega. Si un "cerrajero" cotiza $15-$35 por internet y luego exige cientos de dólares en efectivo en el lugar,
            es un patrón de estafa que explicamos en nuestra guía sobre <Link href="/es/blog/como-evitar-estafas-de-cerrajeros-nyc">cómo evitar estafas de cerrajeros en NYC</Link>.
          </p>
        </Section>

        <Section id="que-traer" title="Tenga esto listo cuando llegue la camioneta" icon={ClipboardCheck}>
          <ul>
            <li>Identificación con foto.</li>
            <li>Registración, título o tarjeta del seguro del vehículo.</li>
            <li>Cualquier llave que todavía funcione.</li>
            <li>Acceso al carro (puerta del garaje, boleto del estacionamiento, aviso a la seguridad del edificio).</li>
          </ul>
        </Section>

        <LinkGrid
          title="Servicios móviles que hacemos en el lugar"
          links={[
            ...ES_NAV.services.filter((s) => s.href !== PATH),
            { name: 'Servicio el mismo día', href: '/same-day-car-key-duplicate-nyc' },
            { name: 'Emergencias 24 horas', href: '/24-hour-car-key-duplicate-nyc' },
          ].map((s) => ({ label: s.name, href: s.href }))}
        />

        <LinkGrid
          title="Cerrajero automotriz por condado"
          links={ES_NAV.boroughs.map((b) => ({ label: `Cerrajero automotriz móvil en ${b.name}`, href: b.href }))}
        />

        <FAQSection title="Preguntas frecuentes sobre el servicio móvil" items={faqItems} />

        <Section id="relacionados" title="Guías relacionadas">
          <ul>
            <li><Link href="/es/blog/dealer-vs-cerrajero-llaves-de-carro-nyc">Dealer vs. cerrajero móvil en NYC</Link></li>
            <li><Link href="/es/blog/cuanto-cuesta-copiar-llave-de-carro-nyc">Costo de copia de llaves de carro en NYC</Link></li>
            <li><Link href="/mobile-car-key-duplicate-nyc" hrefLang="en-US">This page in English: mobile car key maker in NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="¿Necesita una llave donde está estacionado su carro?"
          subtitle="Despacho móvil en los cinco condados, normalmente en menos de una hora. Viaje incluido en su precio fijo."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </div>
    </div>
  )
}
