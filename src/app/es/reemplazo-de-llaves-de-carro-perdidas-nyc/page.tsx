import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE, CAR_MAKES } from '@/lib/constants'
import { ES_NAV, MAKE_SLUG_ES } from '@/lib/i18n'
import ServiceSchema from '@/components/seo/ServiceSchema'
import ServiceHero from '@/components/content/ServiceHero'
import QuickAnswer from '@/components/content/QuickAnswer'
import Section from '@/components/content/Section'
import PriceTable from '@/components/content/PriceTable'
import StepList from '@/components/content/StepList'
import FAQSection from '@/components/content/FAQSection'
import LinkGrid from '@/components/content/LinkGrid'
import CTABanner from '@/components/ui/CTABanner'
import { AlertTriangle, DollarSign, Wrench, ClipboardCheck, ShieldCheck, Clock, Car } from 'lucide-react'

const PATH = '/es/reemplazo-de-llaves-de-carro-perdidas-nyc'

export const metadata = generatePageMetadata({
  title: 'Reemplazo de Llaves de Carro Perdidas en NYC | Sin Grúa',
  description:
    '¿Perdió todas las llaves de su carro en Nueva York? Cerrajero móvil hace una llave nueva por VIN en su ubicación en 45-90 min. Desde $150, sin grúa.',
  slug: PATH,
  keywords: ['llaves de carro perdidas nueva york', 'perdi las llaves de mi carro nyc', 'reemplazo de llave de carro nyc', 'hacer llave de carro sin la original', 'cerrajero llaves perdidas brooklyn queens bronx', 'llave de carro nueva por vin'],
})

const faqItems = [
  {
    question: 'Perdí la única llave de mi carro en Nueva York. ¿Qué hago primero?',
    answer:
      'Confirme que la llave realmente se perdió (revise los últimos tres lugares donde estuvo), luego llame a un cerrajero automotriz móvil con licencia en vez del dealer. Tenga lista su identificación con foto y la registración o el título, y sepa exactamente dónde está estacionado el carro. Un cerrajero móvil puede hacer una llave nueva junto al carro en 45-90 minutos, mientras que el dealer normalmente necesita el carro con grúa y de 2 a 5 días hábiles.',
  },
  {
    question: '¿Cuánto cuesta reemplazar una llave de carro perdida en NYC?',
    answer:
      'En 2026 un reemplazo con todas las llaves perdidas por cerrajero móvil cuesta $150-$260 para una llave con chip, $220-$350 para un control remoto y $260-$450 para una llave inteligente o de botón de encendido, incluido el viaje en los cinco condados. Los dealers cobran normalmente $300-$900 por la llave más una grúa de $100-$250. Los modelos europeos de lujo cuestan más por el acceso al servidor del fabricante.',
  },
  {
    question: '¿Un cerrajero puede hacer una llave de carro sin ninguna llave original?',
    answer:
      'Sí. El cerrajero decodifica el cilindro de la cerradura de la puerta para leer los cortes o recupera el código de fábrica con su VIN y la prueba de propiedad, corta la hoja por código y programa un chip o control nuevo por el puerto OBD-II. Esto se llama originación de llave y es rutina para todas las marcas comunes.',
  },
  {
    question: '¿Tengo que remolcar el carro al dealer si perdí todas las llaves?',
    answer:
      'No. La grúa solo es necesaria si va al concesionario. Un cerrajero móvil lleva el equipo de corte y programación hasta el carro, así que nunca se mueve. Eso solo ya ahorra $100-$250 y un día de espera.',
  },
  {
    question: '¿Cuánto tarda un reemplazo con todas las llaves perdidas?',
    answer:
      'La mayoría de los Toyota, Honda, Nissan, Hyundai, Kia, Ford, GM y Chrysler toman 45-60 minutos una vez que llega el técnico. Los vehículos con inmovilizadores europeos encriptados (BMW, Mercedes-Benz, Audi, Volkswagen) pueden tardar 60-120 minutos porque el módulo puede requerir lectura en banco o autorización en línea. La llegada en NYC suele ser de 30-60 minutos.',
  },
  {
    question: '¿La llave perdida todavía puede encender mi carro? ¿Debo preocuparme por un robo?',
    answer:
      'Hasta que se borre, sí. Durante un trabajo de todas las llaves perdidas eliminamos todas las llaves registradas anteriormente de la memoria del vehículo y registramos solo la nueva, así que una llave encontrada o robada queda inservible. Esto va incluido sin cargo extra.',
  },
  {
    question: '¿Qué documentos necesito para reemplazar una llave perdida?',
    answer:
      'Una identificación oficial con foto y prueba de propiedad: la registración, el título o una tarjeta del seguro a su nombre. Si el carro es arrendado (lease), financiado o de su empleador, traiga el contrato o una carta del dueño registrado. Los cerrajeros con licencia de NYC deben verificar la propiedad antes de originar una llave.',
  },
  {
    question: '¿El seguro del carro o la asistencia en carretera cubre el reemplazo de llaves perdidas?',
    answer:
      'Algunas pólizas de cobertura amplia y planes de asistencia (AAA Plus, ciertas tarjetas de crédito, programas de carro nuevo) reembolsan parte del reemplazo de una llave perdida. Le damos un recibo detallado para presentarlo. La grúa al dealer normalmente no se reembolsa, otra razón por la que la opción móvil sale más barata.',
  },
  {
    question: '¿La llave nueva tendrá todos los botones del control y el botón de encendido?',
    answer:
      'Sí. Reemplazamos igual por igual: una llave inteligente perdida se reemplaza con una llave inteligente, una llave con botones con otra igual, y cada función se programa y prueba. Si prefiere ahorrar, también podemos hacer una llave con chip básica que encienda el carro y un control por separado.',
  },
  {
    question: '¿Pueden reemplazar la llave de un carro arrendado (lease) o financiado?',
    answer:
      'Sí. Usted es el titular registrado y responsable de las llaves. Traiga la registración o el contrato de arrendamiento y su identificación. No necesitamos permiso de la compañía de leasing para hacer una llave de un carro registrado a su nombre.',
  },
]

export default function LlavesPerdidasPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Reemplazo de llaves de carro perdidas en NYC"
        description="Reemplazo de llaves de carro con todas las llaves perdidas por un cerrajero móvil con licencia: llave generada por VIN, cortada y programada junto al vehículo en cualquier parte de los cinco condados de Nueva York."
        path={PATH}
        minPrice={150}
        maxPrice={450}
        serviceType="Reemplazo de llaves de carro perdidas (todas las llaves perdidas)"
        inLanguage="es-US"
        breadcrumbs={[
          { name: 'Inicio', path: '/es' },
          { name: 'Reemplazo de llaves perdidas', path: PATH },
        ]}
      />

      <ServiceHero
        locale="es"
        eyebrow="Todas las llaves perdidas · Despacho 24/7"
        title="Reemplazo de Llaves de Carro Perdidas en NYC — Llave Nueva Junto a Su Carro, Sin Grúa"
        subtitle="¿Perdió todas las llaves? Generamos una llave nueva con su VIN, la cortamos, la programamos y borramos la perdida, justo donde está estacionado el carro en Brooklyn, Queens, Manhattan, El Bronx o Staten Island."
        primaryCta={{ label: 'Enviar un técnico', href: '/es/reservar' }}
        secondaryCta={{ label: 'Cotización fija', href: '/es/cotizacion' }}
        callLabel="Llamar al"
        breadcrumbLabel="Ruta de navegación"
        breadcrumbs={[
          { name: 'Inicio', href: '/es' },
          { name: 'Reemplazo de llaves perdidas', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Respuesta rápida">
          <p>
            <strong>¿Perdió todas las llaves de su carro en NYC? No necesita el dealer ni una grúa.</strong> {SITE.name} envía un cerrajero
            móvil con licencia que hace una llave nueva con su VIN junto al vehículo en <strong>45-90 minutos</strong>, la programa y borra la
            llave perdida para que ya no pueda encender el carro. Costo: <strong>$150-$260</strong> para una llave con chip,{' '}
            <strong>$220-$350</strong> para un control remoto, <strong>$260-$450</strong> para una llave inteligente. Tenga lista su identificación con foto y la registración.
          </p>
        </QuickAnswer>

        <Section id="primeros-pasos" title="¿Perdió su única llave? Haga estas tres cosas" icon={AlertTriangle}>
          <ol>
            <li><strong>Asegure el carro.</strong> Si está abierto, ciérrelo con el botón interior si alcanza, o quédese cerca. Si la llave pudo ser robada junto con su dirección, dé prioridad al paso de borrado que explicamos abajo.</li>
            <li><strong>Reúna sus documentos.</strong> Identificación con foto más registración, título o tarjeta del seguro a su nombre. Tome una foto del VIN en la base del parabrisas.</li>
            <li><strong>Llame a un cerrajero móvil con licencia, no al dealer.</strong> La ruta del dealer significa grúa, 2-5 días de espera por la llave y una factura que suele ser el doble. Un técnico móvil va hasta el carro y termina el mismo día.</li>
          </ol>
        </Section>

        <Section id="como" title="Cómo hacemos una llave cuando no hay nada que copiar" icon={Wrench}>
          <p>Reemplazar una llave perdida se llama <strong>originación de llave</strong>. Tiene tres partes, todas hechas desde la camioneta:</p>
          <StepList
            steps={[
              { title: 'Obtener los cortes de la llave', text: 'Decodificamos la cerradura de la puerta del conductor con un lector, o recuperamos el código de fábrica de la base de datos del fabricante con su VIN y la prueba de propiedad.' },
              { title: 'Cortar la hoja', text: 'La hoja nueva (de borde o de corte láser) se fresa por código en la máquina de la camioneta, para que entre en la ignición y las puertas como una llave de fábrica.' },
              { title: 'Programar el chip o el control', text: 'Nos conectamos al puerto OBD-II, ponemos el inmovilizador en modo de aprendizaje y registramos el chip o control inteligente nuevo. Los sistemas europeos encriptados se manejan con autorización en línea o lectura en banco.' },
              { title: 'Borrar la llave perdida y probar todo', text: 'Se eliminan todas las llaves viejas de la memoria, se prueba la nueva en encendido, cerraduras y funciones del control, y recibe un recibo detallado para el seguro.' },
            ]}
          />
        </Section>

        <Section id="precios" title="Costo de reemplazo de llaves de carro perdidas en NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="Precios de reemplazo de llaves de carro con todas las llaves perdidas en Nueva York"
            columns={['Tipo de llave perdida', 'Nuestro precio a domicilio (viaje incluido)', 'Dealer + grúa (típico)', 'Tiempo junto al carro']}
            rows={[
              ['Llave básica de metal (antes de 1998)', '$95 - $150', '$150 + grúa $100-$250', '20-30 min'],
              ['Llave con chip (transponder)', '$150 - $260', '$300 - $500 + grúa', '45-60 min'],
              ['Llave con chip de corte láser', '$200 - $300', '$350 - $550 + grúa', '45-60 min'],
              ['Control remoto o llave flip', '$220 - $350', '$400 - $650 + grúa', '45-75 min'],
              ['Llave inteligente / botón de encendido', '$260 - $450', '$500 - $900 + grúa', '60-90 min'],
              ['Llave inteligente europea de lujo (BMW, Mercedes, Audi)', '$350 - $650', '$700 - $1,500 + grúa', '60-120 min'],
              ['Borrar las llaves perdidas del vehículo', 'Incluido', '$100 - $150', '5 min'],
            ]}
            note="Precio fijo por año, marca y modelo antes de salir. Las llamadas programadas de día no tienen recargo; el cargo por emergencia fuera de horario se informa por adelantado."
          />
        </Section>

        <Section id="marcas" title="Llaves perdidas para todas las marcas, incluidos sistemas europeos" icon={Car}>
          <p>
            El reemplazo con todas las llaves perdidas en Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, Jeep, Chrysler, Subaru y Mazda es
            un procedimiento OBD-II estándar que hacemos a diario. BMW (CAS3/CAS4/FEM/BDC), Mercedes-Benz (FBS3, algunos FBS4), Volkswagen y Audi
            (Immo 4/5 y MQB) requieren leer el módulo de seguridad o un cálculo en línea del fabricante; nuestras camionetas llevan ese equipo, así
            que estos trabajos también se hacen a domicilio. Si su modelo es uno de los muy pocos que en 2026 solo atiende el dealer (algunos modelos
            recién salidos), se lo diremos desde el principio en vez de hacerle perder tiempo.
          </p>
        </Section>

        <Section id="documentos" title="Documentos que debemos ver (ley de NYC)" icon={ClipboardCheck}>
          <ul>
            <li><strong>Identificación con foto</strong>: licencia de conducir, ID estatal o pasaporte.</li>
            <li><strong>Prueba de propiedad</strong>: registración, título o tarjeta del seguro a su nombre; contrato de lease o financiamiento para carros arrendados; carta de autorización para vehículos de empresa.</li>
            <li><strong>VIN</strong>: visible en la base del parabrisas, en la etiqueta del marco de la puerta o en la registración.</li>
          </ul>
          <p>
            El Departamento de Protección al Consumidor y al Trabajador de NYC exige a los cerrajeros con licencia verificar la identidad y la
            propiedad y registrar cada llave de carro que originan. Un proveedor que se salta este paso está operando ilegalmente.
          </p>
        </Section>

        <Section id="robo" title="Llaves robadas: primero borrar, luego reemplazar" icon={ShieldCheck}>
          <p>
            Si le robaron las llaves junto con la billetera o el bolso, asuma que el ladrón sabe dónde vive y dónde estaciona. Hacemos del borrado la
            prioridad: a minutos de llegar podemos eliminar todas las llaves del inmovilizador para que el control robado quede muerto, y luego
            programamos su reemplazo. Para vehículos con llave inteligente también recomendamos un bloqueo de volante o una funda Faraday para su
            control nuevo para evitar ataques de relé. Presente un reporte policial; ayuda con el reembolso del seguro.
          </p>
        </Section>

        <Section id="rapidez" title="Despacho de emergencia 24/7 en toda la ciudad" icon={Clock}>
          <p>
            Las llaves rara vez se pierden en horario de oficina. Nuestro <Link href="/es/copia-de-llaves-de-carro-24-horas-nyc">servicio de emergencia 24 horas</Link> atiende
            a toda hora, y la respuesta de día en cualquier parte de los cinco condados suele ser de 30-60 minutos. Si todavía tiene una llave que
            funciona, lo que necesita es la mucho más económica <Link href="/es/copia-de-llave-de-repuesto-nyc">copia de llave de repuesto</Link> en vez de un reemplazo por llaves perdidas.
          </p>
        </Section>

        <LinkGrid
          title="Reemplazo de llaves perdidas por marca (páginas en inglés)"
          links={CAR_MAKES.map((m) => ({ label: `Llave perdida ${m.name}`, href: MAKE_SLUG_ES[m.slug] }))}
        />

        <LinkGrid
          title="Servicio de llaves perdidas cerca de usted"
          links={ES_NAV.boroughs.map((b) => ({ label: `Reemplazo de llaves de carro en ${b.name}`, href: b.href }))}
        />

        <FAQSection title="Preguntas frecuentes sobre llaves de carro perdidas" items={faqItems} />

        <Section id="relacionados" title="Servicios y guías relacionados">
          <ul>
            <li><Link href="/es/copia-de-llave-con-chip-nyc">Copia y programación de llave con chip</Link></li>
            <li><Link href="/es/copia-de-control-de-carro-nyc">Copia y programación de control de carro</Link></li>
            <li><Link href="/es/cerrajero-automotriz-movil-nyc">Cómo funciona el servicio móvil</Link></li>
            <li><Link href="/es/blog/como-evitar-estafas-de-cerrajeros-nyc">Cómo evitar estafas de cerrajeros en NYC</Link></li>
            <li><Link href="/lost-car-key-replacement-nyc" hrefLang="en-US">This page in English: lost car key replacement in NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="¿Perdió todas las llaves? Hacemos una nueva donde está su carro."
          subtitle="Técnicos móviles con licencia en los cinco condados. Precio fijo, llave perdida borrada, sin grúa."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </div>
    </div>
  )
}
