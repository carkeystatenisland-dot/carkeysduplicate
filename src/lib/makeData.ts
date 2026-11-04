import type { Locale } from './i18n'

export interface MakeContent {
  slug: string
  name: string
  intro: Record<Locale, string>
  models: string[]
}

/** Per-make editorial content shared by the English and Spanish make pages. */
export const MAKE_CONTENT: MakeContent[] = [
  {
    slug: 'toyota-key-duplicate', name: 'Toyota',
    intro: {
      en: "Toyota's immobilizer systems are renowned for their reliability but require specific programming protocols. Models from roughly 2010 onwards transitioned to the highly secure H-chip (Texas Crypto 128-bit) and recent models use advanced smart proximity systems. Our mobile labs carry exact OEM-grade diagnostic scanners.",
      es: 'Los sistemas inmovilizadores de Toyota son famosos por su confiabilidad, pero requieren protocolos de programación específicos. Los modelos desde aproximadamente 2010 pasaron al chip H de alta seguridad (Texas Crypto de 128 bits) y los modelos recientes usan sistemas inteligentes de proximidad avanzados. Nuestros laboratorios móviles llevan escáneres de diagnóstico de nivel original (OEM).',
    },
    models: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tacoma', 'Tundra', 'Sienna', '4Runner', 'Sequoia', 'Avalon', 'Yaris', 'C-HR', 'Venza', 'Land Cruiser', 'Supra', 'bZ4X', 'FJ Cruiser', 'Matrix', 'Solara'],
  },
  {
    slug: 'honda-key-duplicate', name: 'Honda',
    intro: {
      en: 'Modern Hondas universally employ high-security laser-cut (sidewinder) blades paired with the Honda G chip or the advanced ID47 transponder. Precision CNC cutting is absolutely mandatory, as a poorly cut Honda key will permanently jam the ignition cylinder. We use factory-level cutters.',
      es: 'Los Honda modernos usan universalmente hojas de corte láser (sidewinder) de alta seguridad combinadas con el chip Honda G o el transponder avanzado ID47. El corte CNC de precisión es absolutamente obligatorio, ya que una llave Honda mal cortada atascará permanentemente el cilindro de la ignición. Usamos cortadoras de nivel de fábrica.',
    },
    models: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Fit', 'Ridgeline', 'Insight', 'Passport', 'Clarity', 'Element', 'Crosstour', 'S2000', 'Prelude'],
  },
  {
    slug: 'ford-key-duplicate', name: 'Ford',
    intro: {
      en: 'Ford utilizes the PATS (Passive Anti-Theft System), which has evolved into the robust Tiris DST+ (4D-63) system. Programming often requires a 10-minute security access delay to prevent unauthorized key generation. We handle this flawlessly.',
      es: 'Ford utiliza el sistema PATS (Passive Anti-Theft System), que ha evolucionado al robusto sistema Tiris DST+ (4D-63). La programación suele requerir una espera de seguridad de 10 minutos para evitar la generación no autorizada de llaves. Lo manejamos sin problemas.',
    },
    models: ['F-150', 'Explorer', 'Escape', 'Mustang', 'Edge', 'Fusion', 'Focus', 'Ranger', 'Expedition', 'Bronco', 'Taurus', 'Transit', 'E-Series', 'Flex', 'Fiesta', 'EcoSport', 'Maverick', 'Mach-E'],
  },
  {
    slug: 'bmw-key-duplicate', name: 'BMW',
    intro: {
      en: 'BMW key duplication is highly complex. They utilize CAS (Car Access System) and FEM/BDC modules with Hitag 2 encryption. Many locksmiths cannot handle BMWs. We possess the dealer-level engineering software required to safely extract the ISN and program new fobs.',
      es: 'La copia de llaves BMW es muy compleja. Usan módulos CAS (Car Access System) y FEM/BDC con encriptación Hitag 2. Muchos cerrajeros no pueden trabajar con BMW. Contamos con el software de ingeniería de nivel dealer necesario para extraer de forma segura el ISN y programar controles nuevos.',
    },
    models: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', '4 Series', '2 Series', '8 Series', 'Z4', 'M3', 'M4', 'M5', 'i3', 'i8', 'i4', 'iX'],
  },
  {
    slug: 'nissan-key-duplicate', name: 'Nissan',
    intro: {
      en: "Nissan's Intelligent Key system (utilizing PCF7936 / ID46 chips) is standard across their lineup. We carry the specific diagnostic software required to bypass the BCM (Body Control Module) PIN code to program new intelligent fobs on the spot.",
      es: 'El sistema Intelligent Key de Nissan (con chips PCF7936 / ID46) es estándar en toda su gama. Llevamos el software de diagnóstico específico para obtener el código PIN del BCM (módulo de control de carrocería) y programar controles inteligentes nuevos en el momento.',
    },
    models: ['Altima', 'Rogue', 'Sentra', 'Maxima', 'Pathfinder', 'Murano', 'Titan', 'Frontier', 'Versa', 'Kicks', 'Armada', 'LEAF', '370Z', 'GT-R', 'NV', 'Juke'],
  },
  {
    slug: 'hyundai-key-duplicate', name: 'Hyundai',
    intro: {
      en: 'Hyundai keys utilize ID46 / 4D-60 transponders and increasingly feature advanced proximity fobs. We stock a massive inventory of Hyundai OEM-equivalent smart keys to ensure same-day service without dealership wait times.',
      es: 'Las llaves Hyundai usan transponders ID46 / 4D-60 y cada vez más incorporan controles de proximidad avanzados. Tenemos un gran inventario de llaves inteligentes equivalentes a las originales de Hyundai para garantizar servicio el mismo día sin las esperas del dealer.',
    },
    models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Accent', 'Veloster', 'Ioniq', 'Venue', 'Azera', 'Genesis', 'Equus', 'Veracruz'],
  },
  {
    slug: 'jeep-key-duplicate', name: 'Jeep',
    intro: {
      en: "Jeep vehicles use the Chrysler Y-4 / 4D-64 system. The unique Fobik style keys and newer proximity keys for models like the Grand Cherokee require a localized PIN code extraction from the vehicle's SKIM module, which we perform on-site.",
      es: 'Los vehículos Jeep usan el sistema Chrysler Y-4 / 4D-64. Las llaves tipo Fobik y las llaves de proximidad más nuevas de modelos como el Grand Cherokee requieren extraer el código PIN del módulo SKIM del vehículo, lo que hacemos en el lugar.',
    },
    models: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Renegade', 'Gladiator', 'Patriot', 'Liberty', 'Commander', 'Wagoneer'],
  },
  {
    slug: 'chevrolet-key-duplicate', name: 'Chevrolet',
    intro: {
      en: 'Chevrolet moved from the classic GM VATS system to modern ID46 transponders and proximity fobs. We utilize specialized GM programming tools (SPS) to securely add new fobs and remote start capabilities.',
      es: 'Chevrolet pasó del clásico sistema GM VATS a transponders ID46 modernos y controles de proximidad. Usamos herramientas de programación especializadas de GM (SPS) para agregar de forma segura controles nuevos y funciones de arranque remoto.',
    },
    models: ['Silverado', 'Equinox', 'Malibu', 'Tahoe', 'Suburban', 'Colorado', 'Traverse', 'Cruze', 'Impala', 'Camaro', 'Corvette', 'Trailblazer', 'Trax', 'Sonic', 'Spark', 'Volt', 'Bolt'],
  },
  {
    slug: 'kia-key-duplicate', name: 'Kia',
    intro: {
      en: 'Sharing technology with Hyundai, Kia utilizes ID46 / 4D-60 chips. We handle everything from the standard bladed keys for older Optimas to the push-to-start smart fobs for the newest Telluride models.',
      es: 'Compartiendo tecnología con Hyundai, Kia usa chips ID46 / 4D-60. Trabajamos desde las llaves con hoja estándar de los Optima antiguos hasta los controles inteligentes de botón de encendido de los Telluride más nuevos.',
    },
    models: ['Optima', 'Sorento', 'Sportage', 'Soul', 'Telluride', 'Forte', 'Rio', 'Stinger', 'Sedona', 'Carnival', 'Niro', 'K5', 'Cadenza', 'Seltos'],
  },
  {
    slug: 'mercedes-key-duplicate', name: 'Mercedes',
    intro: {
      en: 'Mercedes relies on highly advanced Infrared (IR), NEC, and Hitag Pro systems. The EIS (Electronic Ignition Switch) must be carefully read to calculate a key password. We are among the few NYC mobile locksmiths equipped to safely handle Mercedes EIS programming.',
      es: 'Mercedes usa sistemas muy avanzados de infrarrojo (IR), NEC y Hitag Pro. El EIS (interruptor de ignición electrónico) debe leerse con cuidado para calcular la contraseña de la llave. Somos de los pocos cerrajeros móviles de NYC equipados para programar el EIS de Mercedes de forma segura.',
    },
    models: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'A-Class', 'CLA', 'GLA', 'G-Class', 'SL', 'SLC', 'AMG GT', 'Sprinter', 'Metris'],
  },
  {
    slug: 'subaru-key-duplicate', name: 'Subaru',
    intro: {
      en: "Subaru's G-chip (ID47) is standard across their rugged lineup. We provide precision laser cutting and secure programming for both standard transponder keys and the advanced proximity fobs used in the Outback and Forester.",
      es: 'El chip G (ID47) de Subaru es estándar en toda su robusta gama. Ofrecemos corte láser de precisión y programación segura tanto para llaves con chip estándar como para los controles de proximidad avanzados que usan el Outback y el Forester.',
    },
    models: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Ascent', 'Legacy', 'WRX', 'BRZ', 'Solterra', 'Tribeca', 'Baja'],
  },
  {
    slug: 'volkswagen-key-duplicate', name: 'Volkswagen',
    intro: {
      en: 'Volkswagen utilizes the Megamos Crypto 48 chip and the highly secure MQB platform. Duplication requires reading the instrument cluster data to extract the component security (CS) bytes. We have the specific VAG diagnostic tools to execute this flawlessly.',
      es: 'Volkswagen usa el chip Megamos Crypto 48 y la plataforma MQB de alta seguridad. La copia requiere leer los datos del tablero de instrumentos para extraer los bytes de seguridad de componente (CS). Tenemos las herramientas de diagnóstico VAG específicas para hacerlo sin errores.',
    },
    models: ['Jetta', 'Passat', 'Tiguan', 'Golf', 'Atlas', 'Taos', 'ID.4', 'Arteon', 'Beetle', 'Touareg', 'CC', 'Eos', 'Routan', 'GTI'],
  },
]

export function getMakeContent(slug: string): MakeContent {
  const m = MAKE_CONTENT.find((x) => x.slug === slug)
  if (!m) throw new Error(`Unknown make slug: ${slug}`)
  return m
}
