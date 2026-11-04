import type { Locale } from './i18n'

interface ServiceCopy {
  title: string
  description: string
  h1: string
  engineering1: string
  engineering2: string
  solution: string
  linkLabel: string
}

export interface ServiceTemplateContent {
  slug: string
  enPath: string
  minPrice: number
  copy: Record<Locale, ServiceCopy>
}

/** Content for the three template-style service pages (smart key, push-to-start, laser-cut). */
export const SERVICE_TEMPLATE_CONTENT: ServiceTemplateContent[] = [
  {
    slug: 'smart-key-duplicate', enPath: '/smart-key-duplicate', minPrice: 175,
    copy: {
      en: {
        title: 'Smart Key Duplication NYC | Mobile, On-Site Programming',
        description: 'Expert smart key duplication across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.',
        h1: 'Smart Key Duplication in NYC',
        engineering1: "Smart keys (or proximity keys) represent the height of modern vehicle convenience. These fobs constantly emit a low-frequency signal. When you touch the door handle or press the start button, the vehicle's internal antennas triangulate the key's exact position. If it detects the authorized key inside the cabin, it authenticates the start.",
        engineering2: "Smart key systems are integrated with your car's Body Control Module (BCM). A mistake here can immobilize the entire car. We carry redundant programming units to ensure a safe, 'read-only' diagnostic check before writing any data.",
        solution: "Programming a proximity key requires advanced security clearances within the vehicle's software. We utilize state-of-the-art programmers capable of bypassing dealer lockouts to safely add a new smart key to your system. We also ensure that any lost smart keys are erased from the vehicle's memory to prevent theft.",
        linkLabel: 'Smart Key Duplication',
      },
      es: {
        title: 'Copia de Llave Inteligente en NYC | Programación a Domicilio',
        description: 'Copia de llaves inteligentes en todos los condados de NYC. Vamos a su ubicación con herramientas de diagnóstico de nivel original y programamos su vehículo.',
        h1: 'Copia de Llave Inteligente en NYC',
        engineering1: 'Las llaves inteligentes (o llaves de proximidad) representan la cima de la comodidad en los vehículos modernos. Estos controles emiten constantemente una señal de baja frecuencia. Cuando toca la manija de la puerta o presiona el botón de encendido, las antenas internas del vehículo triangulan la posición exacta de la llave. Si detecta la llave autorizada dentro de la cabina, autentica el arranque.',
        engineering2: 'Los sistemas de llave inteligente están integrados con el módulo de control de carrocería (BCM) de su carro. Un error aquí puede inmovilizar todo el vehículo. Llevamos unidades de programación redundantes para hacer una verificación de diagnóstico segura, de "solo lectura", antes de escribir cualquier dato.',
        solution: 'Programar una llave de proximidad requiere permisos de seguridad avanzados dentro del software del vehículo. Usamos programadores de última generación capaces de superar los bloqueos del dealer para agregar de forma segura una llave inteligente nueva a su sistema. También nos aseguramos de que cualquier llave inteligente perdida se borre de la memoria del vehículo para evitar robos.',
        linkLabel: 'Copia de llave inteligente',
      },
    },
  },
  {
    slug: 'push-to-start-key-duplicate', enPath: '/push-to-start-key-duplicate', minPrice: 175,
    copy: {
      en: {
        title: 'Push-to-Start Key Duplication NYC | Mobile Programming',
        description: 'Expert push-to-start key duplication across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.',
        h1: 'Push-to-Start Key Duplication in NYC',
        engineering1: 'Push-to-start ignition systems eliminate the mechanical ignition cylinder entirely. The vehicle relies 100% on the electronic handshake between the key fob and the push-button module (often integrated into the steering column lock or body control module).',
        engineering2: "Many people don't realize that push-to-start fobs still contain a 'hidden' emergency mechanical blade. We cut this blade for you as part of the service, so you can still enter the car if the battery dies.",
        solution: 'Because there is no mechanical backup, precision programming is critical. We use specialized diagnostic software to securely pair your new push-to-start fob. We also demonstrate how to use the emergency backup start method (usually holding the fob against the start button) before we leave your location.',
        linkLabel: 'Push-to-Start Key Duplication',
      },
      es: {
        title: 'Copia de Llave Push-to-Start en NYC | A Domicilio',
        description: 'Copia de llaves push-to-start en todos los condados de NYC. Vamos a su ubicación con herramientas de diagnóstico de nivel original y programamos su vehículo.',
        h1: 'Copia de Llave Push-to-Start (Botón de Encendido) en NYC',
        engineering1: 'Los sistemas de encendido con botón eliminan por completo el cilindro mecánico de la ignición. El vehículo depende 100% del intercambio electrónico entre el control y el módulo del botón (a menudo integrado en el bloqueo de la columna de dirección o en el módulo de control de carrocería).',
        engineering2: 'Muchas personas no saben que los controles push-to-start todavía contienen una hoja mecánica de emergencia "oculta". Cortamos esta hoja como parte del servicio, para que pueda entrar al carro si la batería se agota.',
        solution: 'Como no hay respaldo mecánico, la programación de precisión es crítica. Usamos software de diagnóstico especializado para emparejar de forma segura su nuevo control push-to-start. También le mostramos cómo usar el método de arranque de emergencia (normalmente acercando el control al botón de encendido) antes de irnos de su ubicación.',
        linkLabel: 'Copia de llave push-to-start',
      },
    },
  },
  {
    slug: 'laser-cut-key-duplicate', enPath: '/laser-cut-key-duplicate', minPrice: 150,
    copy: {
      en: {
        title: 'Laser-Cut Key Duplication NYC | Mobile, On-Site Programming',
        description: 'Expert laser-cut key duplication across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.',
        h1: 'Laser-Cut Key Duplication in NYC',
        engineering1: 'Unlike traditional keys with jagged cuts on the top and bottom, laser-cut (or sidewinder) keys feature a continuous groove milled down the center of the blade. This design provides significantly higher physical security and is much harder to pick or duplicate. It is the standard for European luxury vehicles, Honda, and newer Ford models.',
        engineering2: "Standard hardware store machines produce 'vibration cuts' that wear down your ignition pins over time. Our laser-cut blades have a tolerance of 0.05mm, ensuring zero friction and maximum longevity for your ignition cylinder.",
        solution: "We carry high-precision, automated CNC laser cutting machines inside our mobile vans. We decode your existing key's bitting using digital calipers and input the exact specifications into our machine, resulting in a factory-perfect laser cut that turns smoothly in your locks without causing internal wear.",
        linkLabel: 'Laser-Cut Key Duplication',
      },
      es: {
        title: 'Copia de Llave de Corte Láser en NYC | Servicio a Domicilio',
        description: 'Copia de llaves de corte láser en todos los condados de NYC. Vamos a su ubicación con máquinas láser de precisión y equipo de diagnóstico de nivel original.',
        h1: 'Copia de Llave de Corte Láser en NYC',
        engineering1: 'A diferencia de las llaves tradicionales con cortes dentados arriba y abajo, las llaves de corte láser (o sidewinder) tienen un canal continuo fresado en el centro de la hoja. Este diseño ofrece una seguridad física mucho mayor y es mucho más difícil de forzar o copiar. Es el estándar en vehículos europeos de lujo, Honda y modelos Ford más nuevos.',
        engineering2: 'Las máquinas estándar de ferretería producen "cortes con vibración" que desgastan los pines de su ignición con el tiempo. Nuestras hojas de corte láser tienen una tolerancia de 0.05 mm, garantizando cero fricción y máxima duración para el cilindro de su ignición.',
        solution: 'Llevamos máquinas CNC de corte láser automatizadas de alta precisión dentro de nuestras camionetas. Decodificamos los cortes de su llave actual con calibradores digitales e ingresamos las especificaciones exactas en nuestra máquina, logrando un corte láser perfecto de fábrica que gira suavemente en sus cerraduras sin causar desgaste interno.',
        linkLabel: 'Copia de llave de corte láser',
      },
    },
  },
]

export function getServiceTemplate(slug: string): ServiceTemplateContent {
  const s = SERVICE_TEMPLATE_CONTENT.find((x) => x.slug === slug)
  if (!s) throw new Error(`Unknown service slug: ${slug}`)
  return s
}

interface IntentCopy {
  title: string
  description: string
  h1: string
  tagline: string
  whyH: string
  why: string
}

export interface IntentContent {
  slug: string
  enPath: string
  copy: Record<Locale, IntentCopy>
}

export const INTENT_CONTENT: IntentContent[] = [
  {
    slug: 'same-day-car-key-duplicate-nyc', enPath: '/same-day-car-key-duplicate-nyc',
    copy: {
      en: {
        title: 'Same Day Car Key Duplication NYC | Fast On-Site Service',
        description: 'Same-day car key duplication in NYC. Call before 2 PM for guaranteed same-day dispatch for any make/model. Professional mobile locksmiths in all 5 boroughs.',
        h1: 'Same Day Car Key Duplication NYC',
        tagline: 'Why wait for the dealer to order a key from the factory?',
        whyH: 'Why Choose Us for Same Day Car Key Duplication NYC?',
        why: 'We stock over 2,000 blank fobs and transponders in our mobile units. If you call before 2 PM, we guarantee a same-day appointment for any make or model.',
      },
      es: {
        title: 'Copia de Llaves de Carro el Mismo Día en NYC | Rápido',
        description: 'Copia de llaves de carro el mismo día en NYC. Llame antes de las 2 PM para despacho garantizado para cualquier marca y modelo. Los 5 condados.',
        h1: 'Copia de Llaves de Carro el Mismo Día en NYC',
        tagline: '¿Por qué esperar a que el dealer pida una llave a la fábrica?',
        whyH: '¿Por qué elegirnos para copiar su llave el mismo día en NYC?',
        why: 'Tenemos más de 2,000 controles y transponders en blanco en nuestras unidades móviles. Si llama antes de las 2 PM, garantizamos una cita el mismo día para cualquier marca o modelo.',
      },
    },
  },
  {
    slug: '24-hour-car-key-duplicate-nyc', enPath: '/24-hour-car-key-duplicate-nyc',
    copy: {
      en: {
        title: '24 Hour Car Key Duplication NYC | Fast On-Site Service',
        description: 'Emergency 24-hour car key duplication in NYC. On-call 24/7/365 for immediate roadside key replacement and programming. We come to your exact coordinates!',
        h1: '24 Hour Car Key Duplication NYC',
        tagline: 'Lost your keys at 3 AM in a parking garage?',
        whyH: 'Why Choose Us for 24 Hour Car Key Duplication NYC?',
        why: "Our dispatchers and technicians are on-call 24/7, 365 days a year. Whether it's New Year's Eve or a Sunday morning, we are the only ones answering the phone.",
      },
      es: {
        title: 'Copia de Llaves de Carro 24 Horas en NYC | Servicio Rápido',
        description: 'Copia de llaves de carro de emergencia las 24 horas en NYC. De guardia 24/7/365 para reemplazo y programación inmediata de llaves. ¡Vamos a su ubicación exacta!',
        h1: 'Copia de Llaves de Carro 24 Horas en NYC',
        tagline: '¿Perdió las llaves a las 3 AM en un estacionamiento?',
        whyH: '¿Por qué elegirnos para copiar su llave las 24 horas en NYC?',
        why: 'Nuestros despachadores y técnicos están de guardia 24/7, los 365 días del año. Ya sea Nochevieja o un domingo por la mañana, somos los únicos que contestan el teléfono.',
      },
    },
  },
]

export function getIntentContent(slug: string): IntentContent {
  const s = INTENT_CONTENT.find((x) => x.slug === slug)
  if (!s) throw new Error(`Unknown intent slug: ${slug}`)
  return s
}
