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
import { KeyRound, DollarSign, Cpu, ClipboardCheck, Building2, ShoppingCart, Wrench, ShieldCheck, Clock } from 'lucide-react'

const PATH = '/es/copia-de-control-de-carro-nyc'

export const metadata = generatePageMetadata({
  title: 'Copia de Control de Carro (Key Fob) en NYC | A Domicilio',
  description:
    'Copia y programación de controles de carro (key fob) y llaves inteligentes a domicilio en Nueva York. Listo en 20-30 min, desde $120. Los 5 condados.',
  slug: PATH,
  keywords: ['copia de control de carro nyc', 'key fob copia nueva york', 'programacion de control de carro', 'duplicado de control remoto de auto', 'llave inteligente copia nyc', 'control de carro brooklyn queens bronx'],
})

const faqItems = [
  {
    question: '¿Se puede copiar el control (key fob) de un carro en Nueva York sin ir al dealer?',
    answer:
      'Sí. Un cerrajero automotriz móvil con licencia corta y programa un control nuevo en su ubicación en cualquiera de los cinco condados. Nos conectamos al puerto OBD-II del carro, registramos el control nuevo en el inmovilizador y el módulo de carrocería, y probamos cada botón antes de irnos. El dealer suele tardar de 2 a 5 días hábiles y muchas veces exige llevar el carro con grúa; nosotros terminamos en 20-30 minutos en el lugar.',
  },
  {
    question: '¿Cuánto cuesta copiar un control de carro en NYC?',
    answer:
      'En 2026, una copia de control remoto (llave con botones o llave flip) cuesta $120-$220 con nuestro servicio a domicilio, un control inteligente o de botón de encendido $175-$395, y programar un control compatible que usted ya tiene $80-$150. Los dealers en Nueva York cobran normalmente $250-$600 por el mismo trabajo más la grúa si no tiene ninguna llave que funcione. Damos un precio fijo por año, marca y modelo antes de salir.',
  },
  {
    question: '¿Necesito el control original para hacer una copia?',
    answer:
      'No. Si todavía tiene un control que funciona, agregamos un segundo rápidamente (duplicado). Si se perdieron todos, generamos una llave nueva con el VIN, cortamos la hoja de emergencia, programamos el control y borramos el perdido del vehículo para que ya no pueda encender el carro. Vea nuestra página de reemplazo de llaves perdidas.',
  },
  {
    question: '¿Cuánto tarda la copia de un control?',
    answer:
      'La mayoría de los vehículos toman 20-30 minutos una vez que llega el técnico. Algunos modelos europeos (BMW, Mercedes-Benz, Audi, Volkswagen MQB) necesitan autorización en línea del fabricante o programación en banco y pueden tardar 45-90 minutos. El tiempo de llegada en NYC suele ser de 30-60 minutos.',
  },
  {
    question: '¿Pueden programar un control que compré por internet (Amazon, eBay)?',
    answer:
      'Normalmente sí, siempre que el FCC ID y el número de parte coincidan con su vehículo y el control sea nuevo o esté correctamente desbloqueado. Lo revisamos antes de programarlo. Muchos controles de internet son usados, están bloqueados a otro carro o son falsificados; si un control no pasa la verificación, podemos suministrar uno original o aprobado por la FCC en el momento.',
  },
  {
    question: '¿Cuál es la diferencia entre control, llave con chip y llave inteligente?',
    answer:
      'La llave con chip (transponder) es una llave de metal con un chip en la cabeza que solo enciende el motor. El control o key fob (llave con botones o llave flip) agrega botones de abrir, cerrar, cajuela y pánico que hablan con el carro mediante un código rotativo. La llave inteligente (de proximidad o botón de encendido) se queda en su bolsillo y permite abrir y encender el carro sin insertar nada. Copiamos y programamos las tres.',
  },
  {
    question: 'Mi control dejó de funcionar. ¿Necesito uno nuevo?',
    answer:
      'No siempre. Si los botones dejaron de responder pero el carro todavía enciende, pruebe primero una pila nueva CR2032 o CR2025. Si el carro no enciende y la luz de seguridad parpadea, el chip puede haber perdido la sincronización o el control tiene daño físico; un cerrajero puede resincronizarlo o reconstruirlo. Primero diagnosticamos y solo reemplazamos el control si realmente está dañado.',
  },
  {
    question: '¿Copian controles (fobs) de edificios o apartamentos?',
    answer:
      'No. Esta página trata solo de controles de automóvil (remotos, inteligentes y de botón de encendido). Los fobs de acceso a edificios (HID, Keri, AWID, Rosslare) son una tecnología distinta que se clona en un quiosco RFID o ferretería, no se programa a un vehículo.',
  },
  {
    question: '¿Qué debo mostrar para que copien mi control?',
    answer:
      'Una identificación oficial con foto y prueba de que el vehículo es suyo: registración, título o tarjeta del seguro a su nombre. Los cerrajeros con licencia de NYC están obligados a verificar la propiedad antes de cortar o programar cualquier llave de carro.',
  },
  {
    question: '¿La copia afecta la garantía del carro o mis otras llaves?',
    answer:
      'No. La programación agrega una llave nueva a la memoria del vehículo junto a las existentes; no las sobrescribe a menos que usted pida borrar una llave perdida. Usamos equipo de diagnóstico de nivel original, que no anula la garantía del fabricante.',
  },
]

export default function CopiaControlPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Copia y programación de control de carro (key fob) en NYC"
        description="Duplicado, reemplazo y programación a domicilio de controles remotos, llaves inteligentes y de botón de encendido en los cinco condados de Nueva York."
        path={PATH}
        minPrice={120}
        maxPrice={395}
        serviceType="Copia y programación de control de carro"
        inLanguage="es-US"
        breadcrumbs={[
          { name: 'Inicio', path: '/es' },
          { name: 'Copia de control de carro', path: PATH },
        ]}
      />

      <ServiceHero
        locale="es"
        eyebrow="Cerrajero automotriz móvil · Los 5 condados"
        title="Copia de Control de Carro (Key Fob) en NYC — Vamos a Su Ubicación"
        subtitle="Controles remotos, llaves flip, llaves inteligentes y de botón de encendido copiados, reemplazados y programados donde está su carro en unos 30 minutos. Precio fijo antes de salir."
        primaryCta={{ label: 'Cotización gratis', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Reservar servicio móvil', href: '/book-now' }}
        callLabel="Llamar al"
        breadcrumbLabel="Ruta de navegación"
        breadcrumbs={[
          { name: 'Inicio', href: '/es' },
          { name: 'Servicios', href: '/es#servicios' },
          { name: 'Copia de control de carro', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Respuesta rápida">
          <p>
            <strong>Sí, se puede copiar el control de un carro en NYC sin ir al dealer.</strong> {SITE.name} envía un cerrajero
            móvil con licencia a su casa, trabajo, estacionamiento o a la calle en Brooklyn, Queens, Manhattan, El Bronx y
            Staten Island. Una copia de control remoto cuesta <strong>$120-$220</strong>, un control inteligente o de botón de encendido{' '}
            <strong>$175-$395</strong>, y la programación tarda <strong>20-30 minutos</strong>. Tenga a mano una identificación con foto y la registración, el título o la tarjeta del seguro.
          </p>
        </QuickAnswer>

        <Section id="tipos" title="Qué controles de carro copiamos y programamos" icon={KeyRound}
          intro="Casi todos los carros fabricados desde finales de los años 90 usan alguna llave electrónica. Llevamos las llaves en blanco, el equipo de corte y el software de programación para todos estos tipos:">
          <ul>
            <li><strong>Llave con botones (remote-head)</strong> — llave con chip y botones de abrir, cerrar y cajuela en la cabeza (común en Toyota, Honda, Nissan, Hyundai, Kia, Ford y GM).</li>
            <li><strong>Llaves flip (navaja)</strong> — la hoja se dobla dentro del control (Volkswagen, Audi, Chrysler, Dodge, Jeep, Mazda, Kia).</li>
            <li><strong>Llaves inteligentes / de proximidad</strong> — abren las puertas al tocar la manija y encienden el carro con un botón (Toyota, Lexus, Honda, Nissan, Hyundai, Kia, Subaru, Mercedes-Benz, BMW).</li>
            <li><strong>Controles de botón de encendido (push-to-start)</strong> — la misma tecnología de proximidad en vehículos con botón de arranque; vea <Link href="/push-to-start-key-duplicate">copia de llave push-to-start (inglés)</Link>.</li>
            <li><strong>Fobik</strong> — controles de Chrysler, Dodge, Jeep y Ram que se insertan en el tablero (sin hoja visible).</li>
            <li><strong>Control separado + llave con chip</strong> — vehículos más antiguos donde el control es un aparato aparte y la llave tiene su propio chip. Trabajamos ambas partes.</li>
            <li><strong>Hojas de corte láser dentro del control</strong> — hojas de alta seguridad fresadas en nuestra máquina móvil de <Link href="/laser-cut-key-duplicate">corte láser (inglés)</Link>.</li>
          </ul>
          <p>¿No sabe cuál tiene? Envíe una foto de su llave por el <Link href="/request-a-quote">formulario de cotización</Link> y la identificamos y cotizamos en minutos.</p>
        </Section>

        <Section id="precios" title="Precio de copia de control de carro en NYC (2026)" icon={DollarSign}
          intro="El precio depende de tres cosas: la tecnología del control, si todavía tiene una llave que funciona y la marca. Esto es lo que pagan realmente los conductores de NYC con nuestro servicio a domicilio comparado con el dealer.">
          <PriceTable
            caption="Precios de copia y programación de controles de carro en la ciudad de Nueva York"
            columns={['Servicio', 'Nuestro precio a domicilio', 'Dealer típico en NYC', 'Tiempo en el lugar']}
            rows={[
              ['Copia de control con botones o llave flip (tiene una llave que funciona)', '$120 - $220', '$250 - $450 + 2-5 días de espera', '20-30 min'],
              ['Copia de control inteligente / proximidad / botón de encendido', '$175 - $395', '$350 - $600+', '30-45 min'],
              ['Programar un control que usted ya compró (compatible, desbloqueado)', '$80 - $150', 'A menudo rechazado o $150+', '15-20 min'],
              ['Reemplazar todos los controles perdidos (por VIN)', '$220 - $450', '$400 - $900 + grúa ($100-$250)', '45-90 min'],
              ['Pila, carcasa o reparación de botones', '$25 - $85', 'Normalmente no se ofrece', '10 min'],
              ['Borrar un control perdido o robado del carro', 'Incluido con cualquier programación', '$100 - $150', '5 min'],
            ]}
            note="Los precios incluyen el viaje dentro de los cinco condados, corte, programación y prueba. Los modelos europeos de lujo (BMW, Mercedes-Benz, Audi, Porsche, Land Rover) pueden quedar en la parte alta de cada rango porque requieren acceso al servidor del fabricante o programación en banco. Sin recargo nocturno ni de fin de semana para trabajos programados."
          />
        </Section>

        <Section id="como-funciona" title="Cómo se programa un control (clonar vs. programar)" icon={Cpu}>
          <p>
            Una ferretería puede copiar la hoja de metal de un control, pero no puede hacer que el control encienda su carro.
            Cada control moderno tiene dos radios: un <strong>chip transponder</strong> que responde al inmovilizador cuando gira la
            llave o presiona el botón, y un <strong>transmisor remoto</strong> que envía las órdenes de abrir y cerrar. El remoto usa un{' '}
            <strong>código rotativo</strong>: el código cambia en cada pulsación, así que una grabación no se puede repetir y el control
            no se puede "clonar" en un quiosco.
          </p>
          <p>Hay dos formas en que un profesional agrega un control a un carro:</p>
          <ul>
            <li><strong>Clonación del chip</strong> — para chips antiguos de código fijo (4C, 4D, algunos ID46) leemos el chip de su llave que funciona y escribimos los mismos datos en un chip nuevo. Rápido y sin abrir el carro. Los botones del remoto se emparejan por separado.</li>
            <li><strong>Programación por OBD-II</strong> — para sistemas con código rotativo y encriptados (Toyota H-chip, Honda G e ID47, Hyundai/Kia ID46 y 8A, Ford 128-bit, GM, Nissan 4A) conectamos un programador de diagnóstico al puerto bajo el tablero, ponemos el carro en modo de aprendizaje y registramos el número de serie único del control nuevo. Es el mismo método que usa el dealer.</li>
          </ul>
          <p>
            Ciertas plataformas europeas (BMW CAS4/FEM/BDC, Mercedes FBS3/FBS4, Volkswagen MQB) requieren un cálculo de seguridad en
            línea o leer el módulo del vehículo en banco. Hacemos ambas cosas desde la camioneta, y por eso programamos controles que muchos cerrajeros generales rechazan.
          </p>
        </Section>

        <Section id="proceso" title="Nuestro servicio móvil de controles en 4 pasos" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Cotización en minutos', text: 'Díganos año, marca, modelo, si tiene un control que funciona y dónde está el carro. Recibe un precio fijo por texto o teléfono, sin precios engañosos de "desde".' },
              { title: 'Técnico en camino', text: 'Un técnico con licencia conduce una camioneta totalmente equipada hasta su ubicación. La llegada típica es de 30-60 minutos en cualquiera de los cinco condados; el mismo día es lo normal.' },
              { title: 'Corte, programación y verificación', text: 'Verificamos su identificación y propiedad, cortamos la hoja de emergencia, programamos el control por el puerto OBD-II y confirmamos que el inmovilizador lo acepta.' },
              { title: 'Cada botón probado', text: 'Abrir, cerrar, cajuela, pánico, arranque remoto y funciones de proximidad se prueban, y comprobamos que sus controles originales siguen funcionando. Paga solo cuando el trabajo está terminado.' },
            ]}
          />
        </Section>

        <Section id="que-traer" title="Qué necesita tener listo" icon={ClipboardCheck}>
          <p>La ciudad de Nueva York exige a los cerrajeros con licencia confirmar que la persona que pide una llave de carro es el dueño o un conductor autorizado. Tenga a mano:</p>
          <ul>
            <li>Una <strong>identificación oficial con foto</strong> (licencia de conducir, ID estatal o pasaporte).</li>
            <li><strong>Prueba de propiedad</strong>: la registración, el título o la tarjeta del seguro a su nombre. Para un carro de empresa, una carta del dueño registrado es suficiente.</li>
            <li>El <strong>vehículo presente</strong>: el carro debe estar ahí porque el control se programa a su computadora.</li>
            <li>Su <strong>control actual</strong> si todavía lo tiene (hace el trabajo más rápido y económico).</li>
          </ul>
        </Section>

        <Section id="carro-vs-edificio" title="Control de carro vs. fob de apartamento o edificio" icon={Building2}>
          <p>
            Muchos neoyorquinos buscan "copia de key fob" cuando se refieren al pequeño fob RFID que abre la puerta de su edificio. Es
            un producto diferente. Los fobs de edificio (HID, Keri, AWID, Rosslare, Indala) guardan un ID fijo que un quiosco clona en
            minutos; un <strong>control de carro</strong> está encriptado y debe programarse a un vehículo específico a través de su puerto de
            diagnóstico. Nos especializamos exclusivamente en controles de automóvil, por eso llevamos programadores de vehículos,
            cortadoras de hojas y llaves originales en blanco en cada camioneta. Si necesita copiar un fob de edificio, una ferretería
            o un quiosco RFID es el lugar indicado; si necesita un control que encienda su carro, está en el lugar correcto.
          </p>
        </Section>

        <Section id="comprar-en-linea" title="Comprar un control por internet: original vs. genérico" icon={ShoppingCart}>
          <p>Tenemos controles originales (OEM) y genéricos aprobados por la FCC para la mayoría de las marcas, y con gusto programamos uno que usted haya comprado. Antes de pedir por internet, revise tres cosas o corre el riesgo de pagar por un control que no sirve:</p>
          <ul>
            <li>El <strong>FCC ID y el número de parte</strong> deben coincidir exactamente con su año y versión (dos controles pueden verse idénticos y usar frecuencias distintas: 315 MHz vs 433 MHz).</li>
            <li><strong>Nunca compre una llave inteligente "usada"</strong> para la mayoría de las marcas asiáticas y europeas. Una vez emparejado, el chip queda bloqueado al primer vehículo y no se puede reutilizar sin desbloqueo profesional.</li>
            <li>Las <strong>falsificaciones</strong> son comunes en los marketplaces. Un control barato con un transponder débil puede programarse y luego fallar a las pocas semanas. Probamos cada control del cliente antes de cobrar la programación.</li>
          </ul>
        </Section>

        <Section id="reparar-o-reemplazar" title="¿Reparar, reprogramar o reemplazar? Diagnóstico de un control que dejó de funcionar" icon={ShieldCheck}>
          <ul>
            <li><strong>Botones muertos, el carro todavía enciende:</strong> cambie la pila (CR2032, CR2025 o CR1620 según el control). Si aún no funciona, los contactos de los botones o la antena pueden estar rotos; podemos cambiar la carcasa o la placa.</li>
            <li><strong>El carro no enciende y la luz de seguridad parpadea:</strong> el chip no está siendo reconocido. Puede ser un chip dañado, un control que se cayó o un inmovilizador que perdió la memoria de llaves. Lo resincronizamos o programamos uno nuevo.</li>
            <li><strong>Solo le queda una llave:</strong> es el momento más barato para hacer una de repuesto; vea <Link href="/es/copia-de-llave-de-repuesto-nyc">copia de llave de repuesto</Link>.</li>
            <li><strong>Todos los controles perdidos o robados:</strong> creamos una llave nueva con el VIN y borramos el control perdido de la memoria del vehículo; lea <Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc">reemplazo de llaves de carro perdidas en NYC</Link>.</li>
          </ul>
        </Section>

        <Section id="mismo-dia" title="Reemplazo de controles el mismo día y las 24 horas en NYC" icon={Clock}>
          <p>
            Todos los trabajos de controles que reservamos son el mismo día. Nuestras camionetas están ubicadas en Queens, Brooklyn y
            Manhattan, así que un técnico suele llegar en 30-60 minutos, incluso con el tráfico de Midtown o en Staten Island. Para un
            control perdido de noche o en feriado, nuestro <Link href="/24-hour-car-key-duplicate-nyc">servicio de emergencia 24 horas (inglés)</Link> atiende
            a toda hora. Conozca más sobre nuestro <Link href="/es/cerrajero-automotriz-movil-nyc">cerrajero automotriz móvil</Link>.
          </p>
        </Section>

        <LinkGrid
          title="Programación de controles por marca (páginas en inglés)"
          links={CAR_MAKES.map((m) => ({ label: `Control ${m.name}`, href: `/${m.slug}`, hrefLang: 'en-US' }))}
        />

        <LinkGrid
          title="Copia de control de carro cerca de usted"
          links={ES_NAV.boroughs.map((b) => ({ label: `Copia de control en ${b.name}`, href: b.href, hrefLang: 'en-US' }))}
        />

        <FAQSection
          title="Preguntas frecuentes sobre copia de controles"
          subtitle="Respuestas directas de los técnicos que programan controles en NYC todos los días."
          items={faqItems}
        />

        <Section id="relacionados" title="Servicios y guías relacionados">
          <ul>
            <li><Link href="/es/copia-de-llave-con-chip-nyc">Copia de llave con chip (transponder) en NYC</Link></li>
            <li><Link href="/es/copia-de-llave-de-repuesto-nyc">Copia de llave de repuesto en NYC</Link></li>
            <li><Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc">Reemplazo de llaves de carro perdidas</Link></li>
            <li><Link href="/blog/avoid-locksmith-scams-nyc">Cómo evitar estafas de cerrajeros en NYC (inglés)</Link></li>
            <li><Link href="/key-fob-duplicate" hrefLang="en-US">This page in English: car key fob copy in NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="¿Necesita copiar un control hoy? Ya estamos en camino."
          subtitle="Precio fijo, técnicos con licencia, cada botón probado antes de pagar. Atendemos los cinco condados de NYC."
          bookLabel="Reservar servicio móvil"
          callLabel="Llamar al"
        />
      </div>
    </div>
  )
}
