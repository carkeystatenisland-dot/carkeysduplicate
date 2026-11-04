import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE, CAR_MAKES } from '@/lib/constants'
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
import { KeyRound, DollarSign, Scale, Wrench, ClipboardCheck, Lightbulb } from 'lucide-react'

const PATH = '/es/copia-de-llave-de-repuesto-nyc'

export const metadata = generatePageMetadata({
  title: 'Copia de Llave de Repuesto para Carro en NYC | Desde $75',
  description:
    'Llave de repuesto para su carro hecha en su puerta en Nueva York. Básicas, con chip, controles e inteligentes en 15-30 min. Más barato que el dealer.',
  slug: PATH,
  keywords: ['llave de repuesto para carro nyc', 'copia de llaves de carro cerca de mi', 'duplicado de llave de auto nueva york', 'hacer llaves de carro brooklyn', 'copia de llaves de auto queens', 'llave extra de carro'],
})

const faqItems = [
  {
    question: '¿Cuánto cuesta una llave de repuesto para carro en Nueva York?',
    answer:
      'Una llave básica sin chip cuesta $75 (incluye la visita), una llave con chip de repuesto $95-$180, un control remoto $120-$220 y una llave inteligente o de botón de encendido $175-$395. Los dealers cobran normalmente el doble y necesitan el carro en el concesionario de 2 a 5 días. Nosotros cortamos y programamos la llave en su ubicación en 15-30 minutos.',
  },
  {
    question: '¿Es más barato hacer la llave de repuesto ahora o esperar a perder la única que tengo?',
    answer:
      'Hacer una copia mientras todavía tiene una llave que funciona cuesta aproximadamente la mitad que un reemplazo con todas las llaves perdidas, porque podemos clonar o agregar la llave nueva sin decodificar cerraduras ni generar una llave por VIN. También evita una grúa y el riesgo de quedarse varado. Si le queda una sola llave, este es el momento más barato para actuar.',
  },
  {
    question: '¿Pueden hacer una llave de repuesto sin la original?',
    answer:
      'Sí. Podemos generar una llave con su VIN o decodificando la cerradura de la puerta, cortarla y programarla al vehículo. Cuesta más que copiar una llave que funciona y debe mostrar identificación con foto y prueba de propiedad. Vea nuestra página de reemplazo de llaves perdidas.',
  },
  {
    question: '¿Dónde conviene copiar una llave de carro en NYC: dealer, quiosco, ferretería o cerrajero?',
    answer:
      'La ferretería o el quiosco pueden copiar una llave de metal simple y unos pocos chips antiguos, pero no programan controles, llaves inteligentes ni la mayoría de los chips posteriores a 2010. El dealer puede hacer todo pero es más lento y caro y normalmente necesita el carro en su lote. Un cerrajero automotriz móvil con licencia programa cualquier tipo de llave en su ubicación el mismo día, normalmente entre 40% y 60% más barato que el dealer.',
  },
  {
    question: '¿Cuánto tarda hacer una llave de repuesto?',
    answer:
      'Las llaves básicas toman 5 minutos, las llaves con chip 15-30 minutos y las llaves inteligentes 30-45 minutos una vez que llega el técnico. El tiempo de llegada en los cinco condados suele ser de 30-60 minutos.',
  },
  {
    question: '¿Qué es una llave de valet y sirve como repuesto?',
    answer:
      'Una llave de valet enciende el carro y abre las puertas pero no abre la cajuela ni la guantera. Es un repuesto más económico, ideal para el estacionamiento con valet, conductores jóvenes o para guardar en una caja de seguridad. Podemos cortar y programar llaves de valet para la mayoría de las marcas.',
  },
  {
    question: '¿Tengo que estar presente para hacer la llave de repuesto?',
    answer:
      'El vehículo debe estar presente para la programación, y el dueño (o un conductor autorizado con los documentos del dueño) debe mostrar identificación con foto y la registración, el título o la tarjeta del seguro. Podemos encontrarnos en su casa, trabajo, estacionamiento o en la calle.',
  },
  {
    question: '¿La llave de repuesto funciona exactamente igual que la original?',
    answer:
      'Sí. Una llave de repuesto bien programada enciende el carro, abre todas las cerraduras y, si es un control o llave inteligente, todos los botones y funciones de proximidad. Probamos la copia y la original antes de irnos para asegurar que ambas funcionen.',
  },
  {
    question: '¿Cuántas llaves de repuesto puede tener un carro?',
    answer:
      'La mayoría de los vehículos guardan de 4 a 8 llaves en la memoria del inmovilizador. Podemos programar varias copias en una sola visita, útil para familias y flotas de empresa, y cada llave adicional en la misma visita tiene descuento.',
  },
]

export default function LlaveRepuestoPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Copia de llave de repuesto para carro en NYC"
        description="Duplicado a domicilio de llaves de repuesto básicas, con chip, con control e inteligentes en la ubicación del cliente en los cinco condados de Nueva York."
        path={PATH}
        minPrice={75}
        maxPrice={395}
        serviceType="Copia de llave de repuesto para carro"
        inLanguage="es-US"
        breadcrumbs={[
          { name: 'Inicio', path: '/es' },
          { name: 'Copia de llave de repuesto', path: PATH },
        ]}
      />

      <ServiceHero
        locale="es"
        eyebrow="Llaves de repuesto hechas en su puerta"
        title="Copia de Llave de Repuesto para Carro en NYC — El Mismo Día, a Domicilio"
        subtitle="Llaves básicas, con chip, controles y llaves inteligentes copiadas en su casa, oficina o en la calle en cualquiera de los cinco condados. Precio fijo antes de salir."
        primaryCta={{ label: 'Cotizar llave de repuesto', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Reservar servicio móvil', href: '/book-now' }}
        callLabel="Llamar al"
        breadcrumbLabel="Ruta de navegación"
        breadcrumbs={[
          { name: 'Inicio', href: '/es' },
          { name: 'Servicios', href: '/es#servicios' },
          { name: 'Copia de llave de repuesto', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Respuesta rápida">
          <p>
            <strong>Una llave de repuesto para carro en NYC cuesta entre $75 y $395 según el tipo de llave</strong>, y {SITE.name} la hace en su
            ubicación en <strong>15-30 minutos</strong>. Copiar una llave mientras todavía tiene una que funciona cuesta la mitad que reemplazar
            una llave perdida y evita la grúa al dealer. Tenga a mano identificación con foto y la registración.
          </p>
        </QuickAnswer>

        <Section id="tipos" title="Tipos de llave de repuesto que copiamos" icon={KeyRound}>
          <ul>
            <li><strong>Llaves básicas de metal</strong> para carros anteriores a 1998 y muchas camionetas de trabajo: se cortan en el momento.</li>
            <li><strong>Llaves con chip (transponder)</strong>: clonadas de su original o programadas al carro; vea <Link href="/es/copia-de-llave-con-chip-nyc">copia de llave con chip</Link>.</li>
            <li><strong>Controles remotos y llaves flip</strong> con botones de abrir, cerrar y cajuela; vea <Link href="/es/copia-de-control-de-carro-nyc">copia de control de carro</Link>.</li>
            <li><strong>Llaves inteligentes y de botón de encendido</strong>: llaves de proximidad para entrada y arranque sin llave; vea <Link href="/smart-key-duplicate">llave inteligente (inglés)</Link>.</li>
            <li><strong>Llaves de corte láser</strong>: hojas de alta seguridad fresadas en nuestra máquina móvil; vea <Link href="/laser-cut-key-duplicate">corte láser (inglés)</Link>.</li>
            <li><strong>Llaves de valet</strong>: encienden el carro y abren las puertas pero no la cajuela ni la guantera; un repuesto más barato y seguro.</li>
          </ul>
        </Section>

        <Section id="precios" title="Precio de llave de repuesto para carro en NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="Precios de copia de llave de repuesto en Nueva York por tipo de llave"
            columns={['Tipo de llave de repuesto', 'Nuestro precio a domicilio', 'Dealer (típico)', 'Ferretería / quiosco']}
            rows={[
              ['Llave básica de metal (sin chip)', '$75 con visita incluida', '$40 - $80 + viaje al dealer', '$5 - $15 (solo la hoja)'],
              ['Llave con chip (transponder)', '$95 - $180', '$200 - $350', '$50 - $90, solo chips antiguos'],
              ['Llave con chip de corte láser', '$150 - $220', '$250 - $400', 'No disponible'],
              ['Control remoto / llave flip', '$120 - $220', '$250 - $450', 'No disponible'],
              ['Llave inteligente / botón de encendido', '$175 - $395', '$350 - $600+', 'No disponible'],
              ['Llave de valet', '$75 - $140', '$120 - $250', 'No disponible'],
              ['Cada llave adicional en la misma visita', '15% de descuento', 'Precio completo', 'n/a'],
            ]}
            note="Los precios incluyen el viaje dentro de los cinco condados, corte, programación y prueba."
          />
        </Section>

        <Section id="por-que-ahora" title="Por qué tener una sola llave es un riesgo y la copia es un seguro barato" icon={Lightbulb}>
          <p>
            Cuando pierde su única llave, el trabajo cambia de <strong>duplicado</strong> a <strong>originación</strong>: el cerrajero debe
            decodificar la cerradura o sacar el código por VIN, generar una hoja desde cero y programar un chip en un inmovilizador sin llave
            de referencia. Eso tarda más, cuesta aproximadamente el doble y, si pasa de noche o lejos de casa, puede implicar además una grúa.
            Una copia hecha hoy mientras su llave funciona se clona o agrega en minutos, y también lo protege si un control se daña, una pila
            muere en el peor momento o un familiar necesita su propia llave.
          </p>
        </Section>

        <Section id="comparar" title="Dealer vs. quiosco vs. ferretería vs. cerrajero móvil" icon={Scale}>
          <PriceTable
            caption="Comparación de lugares para hacer una llave de repuesto para carro en NYC"
            columns={['', 'Cerrajero móvil (nosotros)', 'Concesionario (dealer)', 'Quiosco / ferretería']}
            rows={[
              ['Tipos de llave', 'Todos: básica, chip, control, inteligente, láser', 'Todos, de su propia marca', 'Básica + algunos chips antiguos'],
              ['Dónde', 'Su ubicación, cualquier condado', 'Lote del dealer (con el carro presente)', 'Tienda o quiosco (sin el carro, solo clon de chip)'],
              ['Espera', 'El mismo día, llegada en 30-60 min', '2-5 días hábiles para que llegue la llave', 'Minutos, si es compatible'],
              ['Programación', 'Incluida, en el lugar', 'Incluida', 'No disponible para controles ni llaves inteligentes'],
              ['Verificación de propiedad', 'Sí (licencia de NYC)', 'Sí', 'Varía'],
              ['Costo típico', '$75 - $395', '$150 - $600+', '$5 - $90'],
            ]}
          />
        </Section>

        <Section id="proceso" title="Cómo funciona" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Cotización', text: 'Año, marca, modelo y tipo de llave. Le damos un precio fijo por la copia y descuento por copias adicionales.' },
              { title: 'Vamos hasta usted', text: 'Un técnico con licencia llega a su casa, oficina o estacionamiento en 30-60 minutos con llaves en blanco para su marca.' },
              { title: 'Corte y clonación o programación', text: 'Decodificamos su llave que funciona, cortamos la hoja y clonamos el chip o agregamos la llave nueva por el puerto OBD-II.' },
              { title: 'Prueba de ambas llaves', text: 'La copia y la original se prueban en la ignición, las puertas y las funciones del control antes de que pague.' },
            ]}
          />
        </Section>

        <Section id="que-traer" title="Qué tener listo" icon={ClipboardCheck}>
          <ul>
            <li>Identificación con foto y registración, título o tarjeta del seguro (la ley de cerrajeros de NYC exige verificar la propiedad).</li>
            <li>Su llave que funciona, para clonarla o decodificarla.</li>
            <li>El vehículo, si la llave tiene chip o control que deba programarse.</li>
          </ul>
        </Section>

        <LinkGrid
          title="Llaves de repuesto por marca (páginas en inglés)"
          links={CAR_MAKES.map((m) => ({ label: `Llave de repuesto ${m.name}`, href: `/${m.slug}`, hrefLang: 'en-US' }))}
        />

        <LinkGrid
          title="Copia de llave de repuesto cerca de usted"
          links={ES_NAV.boroughs.map((b) => ({ label: `Copia de llaves de carro en ${b.name}`, href: b.href, hrefLang: 'en-US' }))}
        />

        <FAQSection title="Preguntas frecuentes sobre llaves de repuesto" items={faqItems} />

        <Section id="relacionados" title="Servicios y guías relacionados">
          <ul>
            <li><Link href="/es/cerrajero-automotriz-movil-nyc">Cerrajero automotriz móvil: cómo funciona</Link></li>
            <li><Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc">¿Perdió todas las llaves? Reemplazo de llaves perdidas</Link></li>
            <li><Link href="/blog/car-key-duplicate-cost-nyc">Costo de copia de llaves de carro en NYC (inglés)</Link></li>
            <li><Link href="/spare-key-copy" hrefLang="en-US">This page in English: spare car key copy in NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="¿Le queda una sola llave? Haga la de repuesto hoy."
          subtitle="Servicio móvil en los cinco condados. Precio fijo, técnicos con licencia, ambas llaves probadas antes de pagar."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </div>
    </div>
  )
}
