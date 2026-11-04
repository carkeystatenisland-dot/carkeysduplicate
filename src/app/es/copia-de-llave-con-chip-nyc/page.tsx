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
import { Cpu, DollarSign, Wrench, AlertTriangle, ShieldCheck, ClipboardCheck, Search } from 'lucide-react'

const PATH = '/es/copia-de-llave-con-chip-nyc'

export const metadata = generatePageMetadata({
  title: 'Copia de Llave con Chip en NYC | Programación a Domicilio',
  description:
    'Copia, programación y reemplazo de llaves de carro con chip en toda Nueva York. ¿Llave perdida o rota? Programada a domicilio en 20 min. Desde $95.',
  slug: PATH,
  keywords: ['llaves con chip nueva york', 'copia de llave con chip nyc', 'programacion de llave con chip', 'llave transponder copia', 'llave de carro con chip perdida nyc', 'llaves para carro con chip cerca de mi'],
})

const faqItems = [
  {
    question: '¿Qué es una llave con chip y cómo sé si tengo una?',
    answer:
      'Una llave con chip (transponder) tiene un pequeño chip de vidrio o carbono dentro de la cabeza de plástico. Al girar la ignición, el inmovilizador del carro envía una señal de radio, el chip responde con un código y solo una respuesta correcta deja encender el motor. Casi todos los carros vendidos en EE. UU. desde 1998 tienen uno. Si la cabeza de su llave es de plástico grueso (no una llave de metal plana) o el tablero muestra una luz de seguridad con forma de llave o candado al encender, tiene una llave con chip.',
  },
  {
    question: '¿Cuánto cuesta copiar una llave con chip en Nueva York?',
    answer:
      'Con nuestro servicio a domicilio, una copia de llave con chip cuesta $95-$180 cuando tiene una llave que funciona, y $150-$260 cuando se perdieron todas y hay que generarla con el VIN. Las llaves con chip de corte láser (alta seguridad) cuestan $150-$220. Los dealers en Nueva York cobran normalmente $200-$400 más la grúa si el carro no enciende.',
  },
  {
    question: '¿Un cerrajero puede copiar una llave con chip si perdí la original?',
    answer:
      'Sí. Decodificamos la cerradura de la puerta o buscamos el código de la llave con el VIN, cortamos una hoja nueva y programamos el chip nuevo al inmovilizador por el puerto OBD-II. También borramos la llave perdida del vehículo para que ya no pueda encender el carro. Necesita identificación con foto y prueba de propiedad.',
  },
  {
    question: 'Mi llave con chip se rompió. ¿Se puede reparar en vez de reemplazar?',
    answer:
      'Muchas veces sí. Si la hoja se partió pero el chip está intacto, pasamos el chip original a una carcasa nueva y cortamos una hoja fresca, lo que evita la programación. Si el chip mismo se agrietó (común después de caerse o pasar por la lavadora) programamos un chip nuevo. También extraemos hojas rotas atascadas en la ignición o en las puertas.',
  },
  {
    question: '¿Por qué la copia de la ferretería no enciende mi carro?',
    answer:
      'La ferretería copia solo el corte de metal. La llave abrirá la puerta y girará el cilindro de la ignición, pero el inmovilizador nunca recibe una respuesta válida del chip, así que el motor enciende y se apaga en un segundo o no arranca. El chip debe clonarse o programarse al carro.',
  },
  {
    question: '¿Cuánto tarda la programación de una llave con chip?',
    answer:
      'Clonar un chip de código fijo toma unos 10 minutos. La programación por OBD-II en la mayoría de Toyota, Honda, Nissan, Hyundai, Kia, Ford y GM toma 15-30 minutos. Los trabajos de todas las llaves perdidas o los sistemas europeos encriptados toman 45-90 minutos. La llegada en cualquier parte de NYC suele ser de 30-60 minutos.',
  },
  {
    question: '¿Cuál es la diferencia entre clonar y programar una llave con chip?',
    answer:
      'Clonar copia los datos de un chip que funciona a uno nuevo, de modo que el carro ve dos llaves idénticas; requiere la original y funciona en chips antiguos de código fijo. Programar registra un chip nuevo en la computadora del carro a través del puerto de diagnóstico; funciona en todos los sistemas modernos encriptados y es la única opción cuando no existe ninguna llave. Elegimos el método más económico y seguro para su vehículo.',
  },
  {
    question: '¿Programan llaves con chip para BMW, Mercedes-Benz, Audi y Volkswagen?',
    answer:
      'Sí. Las marcas europeas usan inmovilizadores encriptados (BMW CAS/FEM/BDC, Mercedes FBS3/FBS4, VW/Audi Immo 4/5 y MQB) que requieren cálculos de seguridad en línea o programación en banco. Nuestras camionetas llevan el equipo para estos sistemas, así que podemos copiar o reemplazar llaves que los cerrajeros generales mandan al dealer.',
  },
  {
    question: '¿Una llave nueva daña el carro o afecta mis otras llaves?',
    answer:
      'No. La programación profesional agrega una llave a la memoria del inmovilizador usando el procedimiento del propio fabricante. Sus llaves actuales siguen funcionando a menos que pida borrar una perdida. Nunca cortamos cables ni anulamos el inmovilizador, lo que comprometería la protección antirrobo de su carro.',
  },
  {
    question: '¿Necesitan el carro presente para copiar una llave con chip?',
    answer:
      'Para clonar un chip antiguo de código fijo a partir de una llave que funciona, no; podemos clonar solo con la llave. Para la programación por OBD-II (todos los sistemas de código rotativo y encriptados), sí, porque el chip nuevo se registra dentro de la computadora del vehículo. Como somos móviles, vamos a donde esté estacionado el carro.',
  },
]

export default function LlaveConChipPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Copia y programación de llaves con chip en NYC"
        description="Clonación, programación y reemplazo a domicilio de llaves de carro con chip (transponder) para todas las marcas en los cinco condados de Nueva York."
        path={PATH}
        minPrice={95}
        maxPrice={260}
        serviceType="Copia y programación de llave con chip"
        inLanguage="es-US"
        breadcrumbs={[
          { name: 'Inicio', path: '/es' },
          { name: 'Copia de llave con chip', path: PATH },
        ]}
      />

      <ServiceHero
        locale="es"
        eyebrow="Llaves con chip · clonadas o programadas en el lugar"
        title="Copia y Programación de Llaves con Chip en NYC"
        subtitle="Copie, reemplace o repare su llave con chip donde está su carro en Brooklyn, Queens, Manhattan, El Bronx o Staten Island. Llaves perdidas, llaves rotas y problemas de 'luz de seguridad' resueltos en una sola visita."
        primaryCta={{ label: 'Cotización gratis', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Reservar servicio móvil', href: '/book-now' }}
        callLabel="Llamar al"
        breadcrumbLabel="Ruta de navegación"
        breadcrumbs={[
          { name: 'Inicio', href: '/es' },
          { name: 'Servicios', href: '/es#servicios' },
          { name: 'Copia de llave con chip', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Respuesta rápida">
          <p>
            <strong>Una llave con chip se puede copiar en NYC sin ir al dealer.</strong> Un cerrajero móvil de {SITE.name} clona o
            programa el chip junto a su carro en <strong>15-30 minutos</strong>. Una copia a partir de una llave que funciona cuesta{' '}
            <strong>$95-$180</strong>; un reemplazo cuando se perdieron todas cuesta <strong>$150-$260</strong>. Tenga a mano identificación con foto y la registración o el título.
          </p>
        </QuickAnswer>

        <Section id="que-es" title="Qué es una llave con chip y por qué una copia simple no enciende el carro" icon={Cpu}>
          <p>
            Desde 1998 casi todos los vehículos tienen un <strong>inmovilizador</strong>. La cabeza de plástico de su llave esconde un chip
            RFID pasivo (el <em>transponder</em>). Al girar la ignición o presionar el botón de encendido, una antena alrededor de la
            ignición energiza el chip a 125 kHz, el chip responde con su identidad codificada y la computadora del motor la compara con las
            llaves guardadas en memoria. Si coincide, se habilitan la bomba de gasolina y la ignición. Si no, el carro arranca y se apaga o
            nunca enciende, y la <strong>luz de seguridad</strong> (un ícono de llave o candado) parpadea en el tablero.
          </p>
          <p>
            Por eso una copia de ferretería abre la puerta pero no enciende el motor, y por eso la "copia de llave con chip" son en realidad
            dos trabajos: cortar la hoja <em>y</em> lograr que el carro acepte un chip nuevo.
          </p>
        </Section>

        <Section id="tipos-de-chip" title="Tipos de chip que clonamos y programamos" icon={Search}
          intro="Cada fabricante usa familias de chip distintas. Saber cuál usa su carro determina si se puede clonar de la original o debe programarse por el puerto de diagnóstico.">
          <PriceTable
            caption="Familias de chip transponder más comunes por fabricante"
            columns={['Familia de chip', 'Marcas típicas', '¿Se clona de la original?', '¿Programación OBD-II?']}
            rows={[
              ['Texas 4C / 4D (código fijo, DST)', 'Toyota, Lexus, Ford (antes de 2011), Subaru, Mitsubishi', 'Sí', 'Sí'],
              ['Texas DST-80 / 8A (H-chip, 128 bits)', 'Toyota y Lexus 2013+, Subaru 2015+', 'Parcial (clon 8A)', 'Sí'],
              ['Philips ID46 (Hitag 2)', 'Nissan, Hyundai, Kia, GM, Honda (antiguos), Chrysler, Mitsubishi', 'Sí', 'Sí'],
              ['ID47 / Honda G / Hitag 3', 'Honda, Acura 2014+, Subaru, Hyundai/Kia 2017+', 'Limitado', 'Sí'],
              ['Megamos 48 / AES (MQB)', 'Volkswagen, Audi, Seat, Skoda', 'Solo 48 antiguo', 'Sí (cálculo en línea)'],
              ['Hitag 2 / Hitag Pro (CAS, FEM/BDC)', 'BMW, Mini, Mercedes-Benz', 'No', 'Sí (banco o en línea)'],
              ['Ford Tiris 4D-63 / 128 bits', 'Ford, Lincoln, Mazda', 'Sí (4D-63)', 'Sí'],
              ['GM Circle Plus / 46E', 'Chevrolet, GMC, Buick, Cadillac', 'Sí', 'Sí'],
            ]}
            note="Nuestros técnicos llevan lectores de identificación de chip, así que usted nunca necesita saber el tipo de chip. Las páginas por marca (en inglés) tienen detalles por año y modelo."
          />
        </Section>

        <Section id="precios" title="Precio de copia de llave con chip en NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="Precios de llaves con chip en la ciudad de Nueva York"
            columns={['Situación', 'Nuestro precio a domicilio', 'Dealer típico en NYC', 'Tiempo']}
            rows={[
              ['Clonar o programar una copia a partir de una llave que funciona', '$95 - $180', '$200 - $350 + espera', '15-30 min'],
              ['Llave con chip de corte láser', '$150 - $220', '$250 - $400', '30 min'],
              ['Todas las llaves perdidas: generar por VIN + programar', '$150 - $260', '$300 - $500 + grúa $100-$250', '45-90 min'],
              ['Pasar su chip a una carcasa nueva + hoja nueva', '$60 - $120', 'No se ofrece', '20 min'],
              ['Extraer una llave rota de la ignición o puerta', '$75 - $150', 'No se ofrece', '15-30 min'],
              ['Llave con chip y botones de control (remote-head)', '$120 - $220', '$250 - $450', '30 min'],
            ]}
            note="Precio fijo por año, marca y modelo antes de salir. Incluye el viaje dentro de los cinco condados."
          />
        </Section>

        <Section id="perdida-o-rota" title="¿Llave con chip perdida o rota? Esto es lo que pasa" icon={AlertTriangle}>
          <ul>
            <li>
              <strong>Perdió su única llave con chip:</strong> leemos el código de la cerradura de la puerta o lo obtenemos por VIN, cortamos una hoja nueva en la camioneta,
              programamos un chip nuevo por el puerto OBD-II y <strong>borramos la llave perdida</strong> del carro para que nunca pueda usarse. Sin grúa. Detalles en{' '}
              <Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc">reemplazo de llaves de carro perdidas</Link>.
            </li>
            <li><strong>Hoja rota, chip intacto:</strong> trasplantamos su chip original a una cabeza nueva y cortamos una hoja fresca. Como el chip no cambia, no hace falta programar y el precio es menor.</li>
            <li><strong>Llave atascada o rota dentro de la ignición:</strong> extraemos el fragmento sin dañar el cilindro y luego copiamos la llave.</li>
            <li><strong>Luz de seguridad parpadeando, llave en buen estado:</strong> el inmovilizador pudo haber borrado la llave de su memoria tras una batería descargada o un puente. La volvemos a registrar en el lugar.</li>
            <li><strong>La llave funciona a veces:</strong> chip agrietado o antena débil. Probamos la respuesta del chip y reemplazamos solo lo que falla.</li>
          </ul>
        </Section>

        <Section id="proceso" title="Cómo funciona nuestro servicio móvil de llaves con chip" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Identificar la llave', text: 'Envíenos año, marca y modelo (o una foto). Confirmamos el tipo de chip, la hoja y si aplica clonar o programar, y cotizamos un precio fijo.' },
              { title: 'Vamos hasta usted', text: 'Un técnico con licencia llega en 30-60 minutos con llaves en blanco, máquina de corte, clonadores de chip y programadores OBD-II para su marca.' },
              { title: 'Corte y programación', text: 'Tras revisar identificación y propiedad, cortamos la hoja por código o decodificando la original, y luego clonamos el chip o lo programamos al inmovilizador.' },
              { title: 'Prueba de cada función', text: 'El motor debe encender tres veces seguidas y todas las llaves existentes deben seguir funcionando antes de dar el trabajo por terminado.' },
            ]}
          />
        </Section>

        <Section id="que-traer" title="Qué tener listo" icon={ClipboardCheck}>
          <ul>
            <li>Identificación oficial con foto.</li>
            <li>Registración, título o tarjeta del seguro que demuestre que el vehículo es suyo o está autorizado a usarlo (obligatorio para cerrajeros con licencia de NYC).</li>
            <li>El vehículo, ya que la programación ocurre dentro de la computadora del carro.</li>
            <li>Cualquier llave que funcione, lo que permite clonar y baja el precio.</li>
          </ul>
        </Section>

        <Section id="seguridad" title="Seguridad: sin anulaciones y con verificación de propiedad" icon={ShieldCheck}>
          <p>
            Nunca anulamos ni desactivamos un inmovilizador. Cada llave que programamos se registra con el procedimiento oficial del fabricante,
            ofrecemos borrar llaves perdidas o robadas sin cargo extra y registramos cada transacción como exigen las reglas del Departamento de
            Protección al Consumidor y al Trabajador de NYC. Si alguien ofrece hacer una llave con chip para su carro sin verificar la propiedad,
            es una señal de alerta; lea nuestra guía sobre <Link href="/blog/avoid-locksmith-scams-nyc">cómo evitar estafas de cerrajeros en NYC (inglés)</Link>.
          </p>
        </Section>

        <LinkGrid
          title="Programación de llaves con chip por marca (páginas en inglés)"
          links={CAR_MAKES.map((m) => ({ label: `Llave con chip ${m.name}`, href: `/${m.slug}`, hrefLang: 'en-US' }))}
        />

        <LinkGrid
          title="Servicio de llaves con chip cerca de usted"
          links={ES_NAV.boroughs.map((b) => ({ label: `Copia de llave con chip en ${b.name}`, href: b.href, hrefLang: 'en-US' }))}
        />

        <FAQSection
          title="Preguntas frecuentes sobre llaves con chip"
          subtitle="Respuestas de los técnicos que programan llaves con chip en toda la ciudad de Nueva York."
          items={faqItems}
        />

        <Section id="relacionados" title="Servicios y guías relacionados">
          <ul>
            <li><Link href="/es/copia-de-control-de-carro-nyc">Copia y programación de control de carro (key fob)</Link></li>
            <li><Link href="/es/copia-de-llave-de-repuesto-nyc">Copia de llave de repuesto</Link></li>
            <li><Link href="/es/cerrajero-automotriz-movil-nyc">Cerrajero automotriz móvil</Link></li>
            <li><Link href="/blog/can-you-duplicate-transponder-key">Guía completa: ¿se puede copiar una llave con chip? (inglés)</Link></li>
            <li><Link href="/transponder-key-duplicate" hrefLang="en-US">This page in English: transponder key duplication in NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="¿Llave con chip perdida, rota o que no enciende el carro?"
          subtitle="Un técnico móvil puede estar junto a su vehículo en una hora en cualquier parte de NYC. Precio fijo antes de salir."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </div>
    </div>
  )
}
