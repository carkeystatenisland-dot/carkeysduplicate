import type { Locale } from './i18n'

interface BoroughCopy {
  headline: string
  body: string
  scamAlert: string
  localData: string
  faqQuestion: string
  faqAnswer: string
}

export interface BoroughContent {
  slug: string
  neighborhoods: string[]
  copy: Record<Locale, BoroughCopy>
}

/** Per-borough editorial content shared by the English and Spanish borough pages. */
export const BOROUGH_CONTENT: BoroughContent[] = [
  {
    slug: 'brooklyn',
    neighborhoods: ['Williamsburg', 'Park Slope', 'Bay Ridge', 'Bensonhurst', 'Flatbush', 'Canarsie', 'Crown Heights', 'Bed-Stuy'],
    copy: {
      en: {
        headline: "Brooklyn's alternate side parking rules mean a lost key isn't just an inconvenience—it's a race against a parking ticket.",
        body: 'We understand that navigating tight Brooklyn streets requires a nimble mobile response. Whether you are stuck in a residential driveway in Bensonhurst or a pay-by-the-hour lot in Williamsburg, our mobile locksmith vans bring dealership-level programming equipment directly to your vehicle.',
        scamAlert: "In Brooklyn, 'ghost locksmiths' often quote $15 on the phone and demand $500 on-site. We provide a firm quote based on your VIN before we even start our engine.",
        localData: "Brooklyn has the highest rate of 'locked out while running' incidents in NYC due to the high density of street parking and quick errands.",
        faqQuestion: 'Can you cut a key if my car is parked on a busy Brooklyn street?',
        faqAnswer: 'Absolutely. Our vans are fully self-contained with power and cutting machines. We simply park nearby and perform the programming right at your vehicle.',
      },
      es: {
        headline: 'Las reglas de estacionamiento alterno de Brooklyn hacen que una llave perdida no sea solo una molestia: es una carrera contra una multa de estacionamiento.',
        body: 'Sabemos que moverse por las calles estrechas de Brooklyn exige una respuesta móvil ágil. Ya sea que esté atascado en la entrada de una casa en Bensonhurst o en un estacionamiento por hora en Williamsburg, nuestras camionetas de cerrajería llevan equipo de programación de nivel dealer directamente hasta su vehículo.',
        scamAlert: 'En Brooklyn, los "cerrajeros fantasma" suelen cotizar $15 por teléfono y exigir $500 en el lugar. Le damos un precio firme basado en su VIN antes de encender el motor.',
        localData: 'Brooklyn tiene la tasa más alta de incidentes de "carro cerrado con el motor encendido" en NYC por la alta densidad de estacionamiento en la calle y los mandados rápidos.',
        faqQuestion: '¿Pueden cortar una llave si mi carro está estacionado en una calle transitada de Brooklyn?',
        faqAnswer: 'Por supuesto. Nuestras camionetas son totalmente autónomas, con energía y máquinas de corte. Simplemente estacionamos cerca y hacemos la programación junto a su vehículo.',
      },
    },
  },
  {
    slug: 'queens',
    neighborhoods: ['Astoria', 'Long Island City', 'Flushing', 'Jamaica', 'Bayside', 'Forest Hills', 'Jackson Heights', 'Corona'],
    copy: {
      en: {
        headline: 'With limited subway access in eastern Queens, your car is your lifeline. A lost key brings your entire day to a halt.',
        body: "Queens has the highest number of registered vehicles in NYC. We've optimized our dispatch routes to reach deep into neighborhoods like Bayside, Jamaica, and Flushing in record time. We also specialize in rapid response for travelers stranded at JFK or LaGuardia airports who have lost their keys during transit.",
        scamAlert: 'Queens residents are often targeted by bait-and-switch locksmiths near airport terminals. Always verify the van branding matches the company you called.',
        localData: 'Queens accounts for nearly 35% of all car key duplication requests in NYC, primarily driven by multi-generational households needing spare keys.',
        faqQuestion: 'Do you service the parking garages at JFK and LaGuardia?',
        faqAnswer: 'Yes, we frequently dispatch technicians to airport parking facilities to assist returning travelers who have lost their car keys.',
      },
      es: {
        headline: 'Con acceso limitado al metro en el este de Queens, su carro es su salvavidas. Una llave perdida detiene todo su día.',
        body: 'Queens tiene la mayor cantidad de vehículos registrados en NYC. Hemos optimizado nuestras rutas de despacho para llegar a fondo a vecindarios como Bayside, Jamaica y Flushing en tiempo récord. También nos especializamos en respuesta rápida para viajeros varados en los aeropuertos JFK o LaGuardia que perdieron sus llaves durante el viaje.',
        scamAlert: 'Los residentes de Queens suelen ser blanco de cerrajeros con precios engañosos cerca de las terminales del aeropuerto. Verifique siempre que la rotulación de la camioneta coincida con la empresa a la que llamó.',
        localData: 'Queens representa casi el 35% de todas las solicitudes de copia de llaves de carro en NYC, impulsadas principalmente por hogares multigeneracionales que necesitan llaves de repuesto.',
        faqQuestion: '¿Atienden en los estacionamientos de JFK y LaGuardia?',
        faqAnswer: 'Sí, con frecuencia enviamos técnicos a los estacionamientos de los aeropuertos para ayudar a viajeros que regresan y perdieron las llaves de su carro.',
      },
    },
  },
  {
    slug: 'manhattan',
    neighborhoods: ['Upper East Side', 'Upper West Side', 'Midtown', 'Financial District', 'Chelsea', 'Harlem', 'Washington Heights', 'Greenwich Village'],
    copy: {
      en: {
        headline: 'A car stranded in a Manhattan parking garage accrues massive hourly fees while you wait days for a dealership appointment.',
        body: 'Manhattan presents unique challenges: underground garages with no cell service and tight clearances. Our technicians are trained to handle these exact scenarios. We carry specialized diagnostic equipment to program luxury makes like BMW, Mercedes, and Audi, which are highly prevalent in Manhattan, saving you the exorbitant cost of a dealership tow.',
        scamAlert: "Many 'Manhattan Locksmiths' actually operate from outside the city and charge huge travel fees. We are local and our pricing is borough-blind.",
        localData: 'The average Manhattan customer saves over $450 by choosing our mobile service over a dealership tow and premium Manhattan garage storage.',
        faqQuestion: 'Can your mobile van fit into underground Manhattan parking garages?',
        faqAnswer: "Our equipment is fully portable. Even if our van cannot clear a low ceiling, our technicians can walk the cutting and programming tools directly to your vehicle's parking spot.",
      },
      es: {
        headline: 'Un carro varado en un estacionamiento de Manhattan acumula enormes cargos por hora mientras usted espera días por una cita en el dealer.',
        body: 'Manhattan presenta desafíos únicos: estacionamientos subterráneos sin señal de celular y techos bajos. Nuestros técnicos están entrenados para estos escenarios exactos. Llevamos equipo de diagnóstico especializado para programar marcas de lujo como BMW, Mercedes y Audi, muy comunes en Manhattan, ahorrándole el costo exorbitante de una grúa al dealer.',
        scamAlert: 'Muchos "cerrajeros de Manhattan" en realidad operan desde fuera de la ciudad y cobran enormes cargos por viaje. Nosotros somos locales y nuestro precio es el mismo en todos los condados.',
        localData: 'El cliente promedio de Manhattan ahorra más de $450 al elegir nuestro servicio móvil en vez de una grúa al dealer y el almacenamiento en un estacionamiento premium de Manhattan.',
        faqQuestion: '¿Su camioneta cabe en los estacionamientos subterráneos de Manhattan?',
        faqAnswer: 'Nuestro equipo es totalmente portátil. Aunque la camioneta no pase por un techo bajo, nuestros técnicos pueden llevar a pie las herramientas de corte y programación directamente hasta el lugar donde está su vehículo.',
      },
    },
  },
  {
    slug: 'bronx',
    neighborhoods: ['Riverdale', 'Co-op City', 'Fordham', 'Pelham Bay', 'Throggs Neck', 'Mott Haven', 'Parkchester', 'Kingsbridge'],
    copy: {
      en: {
        headline: 'When you rely on your vehicle to commute outside the Bronx for work, a lost key means lost wages.',
        body: 'The Bronx demands fast, reliable service. Our technicians are highly experienced with the most common commuter vehicles in the borough, including Honda, Toyota, and Nissan. From the massive complexes of Co-op City to the suburban streets of Riverdale, we arrive equipped to cut and program transponder and smart keys on the spot.',
        scamAlert: "Avoid locksmiths who claim they need to 'drill' your ignition to duplicate a key. Modern electronic keys never require drilling.",
        localData: "Commuters from the Bronx have the highest 'Second Key Priority' index in our data, as a single-key lifestyle is considered high-risk for work attendance.",
        faqQuestion: 'Do you charge extra for emergency calls in the Bronx?',
        faqAnswer: 'No. We believe in transparent, flat-rate pricing for all boroughs. You will always know the cost before we dispatch a technician.',
      },
      es: {
        headline: 'Cuando depende de su vehículo para ir a trabajar fuera del Bronx, una llave perdida significa salario perdido.',
        body: 'El Bronx exige un servicio rápido y confiable. Nuestros técnicos tienen amplia experiencia con los vehículos de trabajo más comunes del condado, incluidos Honda, Toyota y Nissan. Desde los enormes complejos de Co-op City hasta las calles suburbanas de Riverdale, llegamos equipados para cortar y programar llaves con chip e inteligentes en el momento.',
        scamAlert: 'Evite a los cerrajeros que dicen que necesitan "taladrar" su ignición para copiar una llave. Las llaves electrónicas modernas nunca requieren taladrar.',
        localData: 'Los trabajadores del Bronx tienen el índice más alto de "prioridad de segunda llave" en nuestros datos, ya que vivir con una sola llave se considera de alto riesgo para la asistencia al trabajo.',
        faqQuestion: '¿Cobran extra por llamadas de emergencia en el Bronx?',
        faqAnswer: 'No. Creemos en precios fijos y transparentes para todos los condados. Siempre sabrá el costo antes de que enviemos a un técnico.',
      },
    },
  },
  {
    slug: 'staten-island',
    neighborhoods: ['Tottenville', 'St. George', 'New Dorp', 'Great Kills', 'Eltingville', 'West New Brighton', 'Annadale', 'Bulls Head'],
    copy: {
      en: {
        headline: 'As the most car-dependent borough in NYC, a lost car key on Staten Island completely paralyzes your mobility.',
        body: 'With over 75% of households owning a vehicle, Staten Island requires dedicated automotive locksmith coverage. We specialize in rapidly generating spare and duplicate keys to ensure you are never left stranded. Our deep local knowledge means we reach you faster than out-of-borough companies.',
        scamAlert: 'Check for Staten Island business licenses. Many vendors pretend to be local but dispatch from New Jersey with hidden bridge toll surcharges.',
        localData: "Staten Island residents have the highest rate of 'Smart Key' adoption per capita, requiring specialized proximity programming equipment.",
        faqQuestion: 'What is the difference between key duplication and full replacement?',
        faqAnswer: 'Duplication means you have one working key and need a spare. If you have lost all keys, it requires key origination. If every key is lost we handle full key origination too; see our lost car key replacement page.',
      },
      es: {
        headline: 'Como el condado más dependiente del carro en NYC, una llave de carro perdida en Staten Island paraliza por completo su movilidad.',
        body: 'Con más del 75% de los hogares con vehículo propio, Staten Island requiere cobertura dedicada de cerrajería automotriz. Nos especializamos en generar rápidamente llaves de repuesto y copias para que nunca se quede varado. Nuestro profundo conocimiento local significa que llegamos más rápido que las empresas de otros condados.',
        scamAlert: 'Verifique las licencias comerciales de Staten Island. Muchos proveedores fingen ser locales pero despachan desde Nueva Jersey con recargos ocultos por peajes de puente.',
        localData: 'Los residentes de Staten Island tienen la tasa más alta de adopción de "llaves inteligentes" por habitante, lo que requiere equipo especializado de programación de proximidad.',
        faqQuestion: '¿Cuál es la diferencia entre copiar una llave y un reemplazo completo?',
        faqAnswer: 'Copiar significa que tiene una llave que funciona y necesita una de repuesto. Si perdió todas las llaves, se requiere originación de llave. Si perdió todas, también hacemos la originación completa; vea nuestra página de reemplazo de llaves perdidas.',
      },
    },
  },
]

export function getBoroughContent(slug: string): BoroughContent {
  const b = BOROUGH_CONTENT.find((x) => x.slug === slug)
  if (!b) throw new Error(`Unknown borough slug: ${slug}`)
  return b
}
