const fs = require('fs');
const path = require('path');

const BOROUGHS = [
  { 
    slug: 'brooklyn', name: 'Brooklyn', 
    painPoint: "Brooklyn's alternate side parking rules mean a lost key isn't just an inconvenience—it's a race against a parking ticket.",
    expertise: "We understand that navigating tight Brooklyn streets requires a nimble mobile response. Whether you are stuck in a residential driveway in Bensonhurst or a pay-by-the-hour lot in Williamsburg, our mobile locksmith vans bring dealership-level programming equipment directly to your vehicle.",
    neighborhoods: ["Williamsburg", "Park Slope", "Bay Ridge", "Bensonhurst", "Flatbush", "Canarsie", "Crown Heights", "Bed-Stuy"],
    scamAdvice: "In Brooklyn, 'ghost locksmiths' often quote $15 on the phone and demand $500 on-site. We provide a firm quote based on your VIN before we even start our engine.",
    stats: "Brooklyn has the highest rate of 'locked out while running' incidents in NYC due to the high density of street parking and quick errands.",
    faq: { q: "Can you cut a key if my car is parked on a busy Brooklyn street?", a: "Absolutely. Our vans are fully self-contained with power and cutting machines. We simply park nearby and perform the programming right at your vehicle." }
  },
  { 
    slug: 'queens', name: 'Queens', 
    painPoint: "With limited subway access in eastern Queens, your car is your lifeline. A lost key brings your entire day to a halt.",
    expertise: "Queens has the highest number of registered vehicles in NYC. We've optimized our dispatch routes to reach deep into neighborhoods like Bayside, Jamaica, and Flushing in record time. We also specialize in rapid response for travelers stranded at JFK or LaGuardia airports who have lost their keys during transit.",
    neighborhoods: ["Astoria", "Long Island City", "Flushing", "Jamaica", "Bayside", "Forest Hills", "Jackson Heights", "Corona"],
    scamAdvice: "Queens residents are often targeted by bait-and-switch locksmiths near airport terminals. Always verify the van branding matches the company you called.",
    stats: "Queens accounts for nearly 35% of all car key duplication requests in NYC, primarily driven by multi-generational households needing spare keys.",
    faq: { q: "Do you service the parking garages at JFK and LaGuardia?", a: "Yes, we frequently dispatch technicians to airport parking facilities to assist returning travelers who have lost their car keys." }
  },
  { 
    slug: 'manhattan', name: 'Manhattan', 
    painPoint: "A car stranded in a Manhattan parking garage accrues massive hourly fees while you wait days for a dealership appointment.",
    expertise: "Manhattan presents unique challenges: underground garages with no cell service and tight clearances. Our technicians are trained to handle these exact scenarios. We carry specialized diagnostic equipment to program luxury makes like BMW, Mercedes, and Audi, which are highly prevalent in Manhattan, saving you the exorbitant cost of a dealership tow.",
    neighborhoods: ["Upper East Side", "Upper West Side", "Midtown", "Financial District", "Chelsea", "Harlem", "Washington Heights", "Greenwich Village"],
    scamAdvice: "Many 'Manhattan Locksmiths' actually operate from outside the city and charge huge travel fees. We are local and our pricing is borough-blind.",
    stats: "The average Manhattan customer saves over $450 by choosing our mobile service over a dealership tow and premium Manhattan garage storage.",
    faq: { q: "Can your mobile van fit into underground Manhattan parking garages?", a: "Our equipment is fully portable. Even if our van cannot clear a low ceiling, our technicians can walk the cutting and programming tools directly to your vehicle's parking spot." }
  },
  { 
    slug: 'bronx', name: 'The Bronx', 
    painPoint: "When you rely on your vehicle to commute outside the Bronx for work, a lost key means lost wages.",
    expertise: "The Bronx demands fast, reliable service. Our technicians are highly experienced with the most common commuter vehicles in the borough, including Honda, Toyota, and Nissan. From the massive complexes of Co-op City to the suburban streets of Riverdale, we arrive equipped to cut and program transponder and smart keys on the spot.",
    neighborhoods: ["Riverdale", "Co-op City", "Fordham", "Pelham Bay", "Throggs Neck", "Mott Haven", "Parkchester", "Kingsbridge"],
    scamAdvice: "Avoid locksmiths who claim they need to 'drill' your ignition to duplicate a key. Modern electronic keys never require drilling.",
    stats: "Commuters from the Bronx have the highest 'Second Key Priority' index in our data, as a single-key lifestyle is considered high-risk for work attendance.",
    faq: { q: "Do you charge extra for emergency calls in the Bronx?", a: "No. We believe in transparent, flat-rate pricing for all boroughs. You will always know the cost before we dispatch a technician." }
  },
  { 
    slug: 'staten-island', name: 'Staten Island', 
    painPoint: "As the most car-dependent borough in NYC, a lost car key on Staten Island completely paralyzes your mobility.",
    expertise: "With over 75% of households owning a vehicle, Staten Island requires dedicated automotive locksmith coverage. We specialize in rapidly generating spare and duplicate keys to ensure you are never left stranded. Our deep local knowledge means we reach you faster than out-of-borough companies.",
    neighborhoods: ["Tottenville", "St. George", "New Dorp", "Great Kills", "Eltingville", "West New Brighton", "Annadale", "Bulls Head"],
    scamAdvice: "Check for Staten Island business licenses. Many vendors pretend to be local but dispatch from New Jersey with hidden bridge toll surcharges.",
    stats: "Staten Island residents have the highest rate of 'Smart Key' adoption per capita, requiring specialized proximity programming equipment.",
    faq: { q: "What is the difference between key duplication and full replacement?", a: "Duplication means you have one working key and need a spare. If you have lost all keys, it requires key origination. For full origination on Staten Island, visit our sister site." }
  }
];

const SERVICE_TYPES = [
  { 
    slug: 'transponder-key-duplication', name: 'Transponder Key Duplication',
    techDetail: "Since 1998, nearly all vehicles utilize an immobilizer system. The plastic head of your key contains a microchip (transponder) that emits a specific radio frequency (typically 125 kHz or 433 MHz). When inserted, the vehicle's Engine Control Unit (ECU) reads this signal. If the cryptographic code matches, the fuel pump and ignition are enabled. A standard metal cut from a hardware store will turn the lock, but the engine will immediately stall.",
    ourSolution: "We don't just cut metal. We utilize OEM-grade diagnostic scanners to interface directly with your vehicle's OBD-II port. We securely read the immobilizer data and program a brand-new transponder chip to sync perfectly with your car's security system. This guarantees a 100% factory-level start every time.",
    deepDetail: "Modern transponders use rolling code encryption (like Megamos Crypto or Texas 128-bit). This means the code changes every time the car starts, preventing 'replay attacks' where a thief records your signal. Our machines support the latest encryption protocols for 2024 models."
  },
  { 
    slug: 'key-fob-duplication', name: 'Key Fob Duplication',
    techDetail: "Modern key fobs utilize 'rolling code' technology. Every time you press the unlock button, the remote generates a brand-new, cryptographically secure code. The vehicle's receiver anticipates this specific sequence. This prevents thieves from recording and replaying your unlock signal. Because of this, simple 'cloning' tools cannot copy a key fob.",
    ourSolution: "We supply high-quality, FCC-approved aftermarket and genuine OEM key fobs. Our technicians connect to your vehicle's computer to officially register the new fob's unique serial number into the vehicle's memory, ensuring flawless rolling code synchronization and avoiding any warranty issues.",
    deepDetail: "Incorrectly programmed fobs can 'desync' your existing keys or trigger alarm malfunctions. We perform a full system check after every programming session to ensure all remote functions (lock, unlock, trunk, panic) work perfectly."
  },
  { 
    slug: 'smart-key-duplication', name: 'Smart Key Duplication',
    techDetail: "Smart keys (or proximity keys) represent the height of modern vehicle convenience. These fobs constantly emit a low-frequency signal. When you touch the door handle or press the start button, the vehicle's internal antennas triangulate the key's exact position. If it detects the authorized key inside the cabin, it authenticates the start.",
    ourSolution: "Programming a proximity key requires advanced security clearances within the vehicle's software. We utilize state-of-the-art programmers capable of bypassing dealer lockouts to safely add a new smart key to your system. We also ensure that any lost smart keys are erased from the vehicle's memory to prevent theft.",
    deepDetail: "Smart key systems are integrated with your car's Body Control Module (BCM). A mistake here can immobilize the entire car. We carry redundant programming units to ensure a safe, 'read-only' diagnostic check before writing any data."
  },
  { 
    slug: 'push-to-start-key-duplication', name: 'Push-to-Start Key Duplication',
    techDetail: "Push-to-start ignition systems eliminate the mechanical ignition cylinder entirely. The vehicle relies 100% on the electronic handshake between the key fob and the push-button module (often integrated into the steering column lock or body control module).",
    ourSolution: "Because there is no mechanical backup, precision programming is critical. We use specialized diagnostic software to securely pair your new push-to-start fob. We also demonstrate how to use the emergency backup start method (usually holding the fob against the start button) before we leave your location.",
    deepDetail: "Many people don't realize that push-to-start fobs still contain a 'hidden' emergency mechanical blade. We cut this blade for you as part of the service, so you can still enter the car if the battery dies."
  },
  { 
    slug: 'laser-cut-key-duplication', name: 'Laser-Cut Key Duplication',
    techDetail: "Unlike traditional keys with jagged cuts on the top and bottom, laser-cut (or sidewinder) keys feature a continuous groove milled down the center of the blade. This design provides significantly higher physical security and is much harder to pick or duplicate. It is the standard for European luxury vehicles, Honda, and newer Ford models.",
    ourSolution: "We carry high-precision, automated CNC laser cutting machines inside our mobile vans. We decode your existing key's bitting using digital calipers and input the exact specifications into our machine, resulting in a factory-perfect laser cut that turns smoothly in your locks without causing internal wear.",
    deepDetail: "Standard hardware store machines produce 'vibration cuts' that wear down your ignition pins over time. Our laser-cut blades have a tolerance of 0.05mm, ensuring zero friction and maximum longevity for your ignition cylinder."
  },
  { 
    slug: 'spare-key-copy', name: 'Spare Key Copy',
    techDetail: "A 'spare key' is a proactive insurance policy. If you lose your only working key, the vehicle's computer must be reset, and lock cylinders may need to be mechanically decoded. This turns a simple duplication process into an emergency 'Key Origination', which is significantly more time-consuming and expensive.",
    ourSolution: "By getting a spare key duplicated while you still have a working original, we can simply clone the existing transponder data or quickly add a secondary key to the ECU. It takes less than 30 minutes and saves you hundreds of dollars compared to a complete key loss emergency.",
    deepDetail: "We offer 'valet keys' as a cost-effective spare option. These keys will start the car and open the doors, but won't open the trunk or glovebox, providing security when leaving your car with a parking attendant."
  }
];

const CAR_MAKES = [
  { slug: 'toyota-key-duplication', name: 'Toyota', tech: "Toyota's immobilizer systems are renowned for their reliability but require specific programming protocols. Models from roughly 2010 onwards transitioned to the highly secure H-chip (Texas Crypto 128-bit) and recent models use advanced smart proximity systems.", link: "https://www.carkeyreplacementstatenisland.com/toyota-keys", anchor: "Toyota key replacement Staten Island", models: "Camry, Corolla, RAV4, Highlander, Prius, Tacoma, Tundra" },
  { slug: 'honda-key-duplication', name: 'Honda', tech: "Modern Hondas universally employ high-security laser-cut (sidewinder) blades paired with the Honda G chip or the advanced ID47 transponder. Precision CNC cutting is absolutely mandatory, as a poorly cut Honda key will permanently jam the ignition cylinder.", link: "https://www.carkeyreplacementstatenisland.com/honda-keys", anchor: "Honda key replacement Staten Island", models: "Accord, Civic, CR-V, Pilot, Odyssey, HR-V" },
  { slug: 'ford-key-duplication', name: 'Ford', tech: "Ford utilizes the PATS (Passive Anti-Theft System), which has evolved into the robust Tiris DST+ (4D-63) system. Programming often requires a 10-minute security access delay to prevent unauthorized key generation.", link: "https://www.carkeyreplacementstatenisland.com/ford-keys", anchor: "Ford key replacement Staten Island", models: "F-150, Explorer, Escape, Mustang, Edge, Fusion" },
  { slug: 'bmw-key-duplication', name: 'BMW', tech: "BMW key duplication is highly complex. They utilize CAS (Car Access System) and FEM/BDC modules with Hitag 2 encryption. Many locksmiths cannot handle BMWs. We possess the dealer-level engineering software required to safely extract the ISN and program new fobs.", link: "https://www.carkeyreplacementstatenisland.com/bmw-keys", anchor: "BMW key replacement Staten Island", models: "3 Series, 5 Series, 7 Series, X3, X5, X7" },
  { slug: 'nissan-key-duplication', name: 'Nissan', tech: "Nissan's Intelligent Key system (utilizing PCF7936 / ID46 chips) is standard across their lineup. We carry the specific diagnostic software required to bypass the BCM (Body Control Module) PIN code to program new intelligent fobs on the spot.", link: "https://www.carkeyreplacementstatenisland.com/nissan-keys", anchor: "Nissan key replacement Staten Island", models: "Altima, Rogue, Sentra, Maxima, Pathfinder, Murano" },
  { slug: 'hyundai-key-duplication', name: 'Hyundai', tech: "Hyundai keys utilize ID46 / 4D-60 transponders and increasingly feature advanced proximity fobs. We stock a massive inventory of Hyundai OEM-equivalent smart keys to ensure same-day service without dealership wait times.", link: "https://www.carkeyreplacementstatenisland.com/hyundai-keys", anchor: "Hyundai key replacement Staten Island", models: "Elantra, Sonata, Tucson, Santa Fe, Kona, Palisade" },
  { slug: 'jeep-key-duplication', name: 'Jeep', tech: "Jeep vehicles use the Chrysler Y-4 / 4D-64 system. The unique Fobik style keys and newer proximity keys for models like the Grand Cherokee require a localized PIN code extraction from the vehicle's SKIM module, which we perform on-site.", link: "https://www.carkeyreplacementstatenisland.com/jeep-keys", anchor: "Jeep key replacement Staten Island", models: "Wrangler, Grand Cherokee, Cherokee, Compass, Renegade" },
  { slug: 'chevrolet-key-duplication', name: 'Chevrolet', tech: "Chevrolet moved from the classic GM VATS system to modern ID46 transponders and proximity fobs. We utilize specialized GM programming tools (SPS) to securely add new fobs and remote start capabilities.", link: "https://www.carkeyreplacementstatenisland.com/chevrolet-keys", anchor: "Chevrolet key replacement Staten Island", models: "Silverado, Equinox, Malibu, Tahoe, Suburban, Colorado" },
  { slug: 'kia-key-duplication', name: 'Kia', tech: "Sharing technology with Hyundai, Kia utilizes ID46 / 4D-60 chips. We handle everything from the standard bladed keys for older Optimas to the push-to-start smart fobs for the newest Telluride models.", link: "https://www.carkeyreplacementstatenisland.com/kia-keys", anchor: "Kia key replacement Staten Island", models: "Optima, Sorento, Sportage, Soul, Telluride, Forte" },
  { slug: 'mercedes-key-duplication', name: 'Mercedes', tech: "Mercedes relies on highly advanced Infrared (IR), NEC, and Hitag Pro systems. The EIS (Electronic Ignition Switch) must be carefully read to calculate a key password. We are among the few NYC mobile locksmiths equipped to safely handle Mercedes EIS programming.", link: "https://www.carkeyreplacementstatenisland.com/mercedes-keys", anchor: "Mercedes key replacement Staten Island", models: "C-Class, E-Class, S-Class, GLC, GLE, GLS" },
  { slug: 'subaru-key-duplication', name: 'Subaru', tech: "Subaru's G-chip (ID47) is standard across their rugged lineup. We provide precision laser cutting and secure programming for both standard transponder keys and the advanced proximity fobs used in the Outback and Forester.", link: "https://www.carkeyreplacementstatenisland.com/subaru-keys", anchor: "Subaru key replacement Staten Island", models: "Outback, Forester, Crosstrek, Impreza, Ascent" },
  { slug: 'volkswagen-key-duplication', name: 'Volkswagen', tech: "Volkswagen utilizes the Megamos Crypto 48 chip and the highly secure MQB platform. Duplication requires reading the instrument cluster data to extract the component security (CS) bytes. We have the specific VAG diagnostic tools to execute this flawlessly.", link: "https://www.carkeyreplacementstatenisland.com/volkswagen-keys", anchor: "Volkswagen key replacement Staten Island", models: "Jetta, Passat, Tiguan, Golf, Atlas" }
];

const INTENT_PAGES = [
  { slug: 'mobile-car-key-duplication-nyc', name: 'Mobile Car Key Duplication NYC', focus: "We bring the entire locksmith shop to your exact GPS coordinates.", benefit: "No towing, no waiting rooms, and no hidden travel fees. We serve all 5 boroughs with a fleet of mobile workshops." },
  { slug: 'same-day-car-key-duplication-nyc', name: 'Same Day Car Key Duplication NYC', focus: "Why wait for the dealer to order a key from the factory?", benefit: "We stock over 2,000 blank fobs and transponders in our mobile units. If you call before 2 PM, we guarantee a same-day appointment for any make or model." },
  { slug: '24-hour-car-key-duplication-nyc', name: '24 Hour Car Key Duplication NYC', focus: "Lost your keys at 3 AM in a parking garage?", benefit: "Our dispatchers and technicians are on-call 24/7, 365 days a year. Whether it's New Year's Eve or a Sunday morning, we are the only ones answering the phone." }
];

const getBoroughTemplate = (b) => `
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, ShieldCheck, Clock, MapPin, Wrench, ShieldAlert, BarChart3, AlertTriangle } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: \`Car Key Duplication ${b.name} NYC | Mobile Service, We Come To You\`,
  description: \`Expert mobile car key duplication in ${b.name}. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.\`,
  slug: \`${b.slug}\`
})

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
            Local ${b.name} Mobile Locksmith
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Mobile Car Key Duplication in ${b.name}, NYC
          </h1>
          <p className="text-xl text-gray-300 font-medium mb-8">
            Fast, professional, on-site programming. Don't tow your car to the dealer—we bring the dealership to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/book-now" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Book Mobile Service
            </Link>
            <a href="tel:718-555-5555" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
              Call Now
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary"><Clock className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Rapid Dispatch</h3>
            <p className="text-gray-600 text-sm">We navigate ${b.name} traffic efficiently, arriving at your exact location usually within 30-60 minutes.</p>
          </div>
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary"><Wrench className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">OEM-Grade Equipment</h3>
            <p className="text-gray-600 text-sm">We use the exact same diagnostic and laser-cutting tools as the major dealerships, guaranteeing perfect compatibility.</p>
          </div>
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary"><ShieldCheck className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Upfront Pricing</h3>
            <p className="text-gray-600 text-sm">No bait-and-switch. We quote based on your specific Year/Make/Model before we ever dispatch a technician.</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold underline decoration-brand-accent underline-offset-8">Why Mobile Locksmith Service Matters in ${b.name}</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-10">
            <p className="text-lg leading-relaxed mb-6">${b.painPoint}</p>
            <p className="text-lg leading-relaxed">${b.expertise}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" /> ${b.name} Locksmith Scam Alert
            </h3>
            <p className="text-red-800 leading-relaxed">${b.scamAdvice}</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" /> Local Service Data
            </h3>
            <p className="text-blue-800 leading-relaxed">${b.stats}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-accent" /> Neighborhoods We Serve in ${b.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm font-medium text-gray-700">
            ${b.neighborhoods.map(n => `<div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">${n}</div>`).join('')}
          </div>
        </div>

        <div className="bg-gray-100 p-10 rounded-3xl mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">Comprehensive Key Solutions in ${b.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold">On-Site Key Programming</h4>
                <p className="text-sm text-gray-600">We sync your new transponder or smart key directly with your car's computer.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold">Precision Laser Cutting</h4>
                <p className="text-sm text-gray-600">High-security blades cut with 0.05mm accuracy using CNC machinery.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold">Broken Key Extraction</h4>
                <p className="text-sm text-gray-600">Safely remove snapped blades from your ignition or door locks without damage.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold">Fob & Remote Replacement</h4>
                <p className="text-sm text-gray-600">OEM and high-quality aftermarket fobs for all makes and models.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6">Frequently Asked Questions</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-brand-primary mt-0 mb-3">${b.faq.q}</h3>
            <p className="text-gray-600 mb-0 leading-relaxed">${b.faq.a}</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Explore Our Services in ${b.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${SERVICE_TYPES.map(s => `<Link href="/${s.slug}" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> ${s.name} in ${b.name}</Link>`).join('\n            ')}
          </div>
        </div>

        <CTABanner title="Stranded in ${b.name}? We're on our way." subtitle="Book online or call us now for immediate, professional dispatch." />
      </div>
    </div>
  )
}
`;

const getServiceTemplate = (s) => `
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Cpu, Wrench, ShieldCheck, MapPin, ShieldAlert, Zap, Lock } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: \`${s.name} NYC | Mobile, On-Site Programming\`,
  description: \`Expert ${s.name.toLowerCase()} across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.\`,
  slug: \`${s.slug}\`
})

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">${s.name} in NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Precision cutting and OEM-grade electronic programming. 100% Mobile Service.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">Get a Free Quote</Link>
            <Link href="/book-now" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">Book Service</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-brand-accent" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0 italic underline decoration-brand-accent">The Engineering Behind the Key</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-700">
            <p className="mb-6">${s.techDetail}</p>
            <p className="font-semibold text-brand-primary">${s.deepDetail}</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-brand-accent" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0">Our Professional Mobile Lab Solution</h2>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-700">
            <p>${s.ourSolution}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-brand-accent mb-4" />
            <h3 className="font-bold text-xl mb-3">Why You Need a Professional</h3>
            <p className="text-sm text-gray-600">DIY programming tools found online can often 'brick' your car's security module, leading to thousands in repairs. We use licensed software that preserves your car's existing data.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center text-center">
            <Lock className="w-12 h-12 text-brand-accent mb-4" />
            <h3 className="font-bold text-xl mb-3">Security & Compliance</h3>
            <p className="text-sm text-gray-600">Every key we duplicate is officially registered with your vehicle's ECU. We also offer to erase old, lost keys from the memory to prevent unauthorized access.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-10 text-center">Fast 3-Step On-Site Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center relative pt-10">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">1</span>
              <h4 className="font-bold text-lg mb-2">Request Quote</h4>
              <p className="text-xs text-gray-600">Provide your VIN and location for an instant, guaranteed price.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center relative pt-10">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">2</span>
              <h4 className="font-bold text-lg mb-2">Mobile Dispatch</h4>
              <p className="text-xs text-gray-600">A technician arrives in a mobile workshop within 60 minutes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center relative pt-10">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white">3</span>
              <h4 className="font-bold text-lg mb-2">Sync & Verify</h4>
              <p className="text-xs text-gray-600">Key is cut, programmed, and tested for all lock/start functions.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Service Available in All NYC Boroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${BOROUGHS.map(b => `<Link href="/${b.slug}" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> ${s.name} in ${b.name}</Link>`).join('\n            ')}
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}
`;

const getMakeTemplate = (m) => `
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, ShieldAlert, Cpu, ListChecks, Info } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: \`${m.name} Car Key Duplication NYC | Mobile Locksmith Service\`,
  description: \`Expert mobile ${m.name} car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.\`,
  slug: \`${m.slug}\`
})

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">${m.name} Car Key Duplication NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Specialized programming and cutting for ${m.name} vehicles. We bypass the dealership wait times.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">Get an Exact Quote</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
          <div className="bg-brand-light border-b border-gray-200 px-8 py-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">${m.name} Security Architecture</h2>
          </div>
          <div className="p-8 text-lg text-gray-700 leading-relaxed">${m.tech}</div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2 underline decoration-brand-accent">
            <ListChecks className="w-6 h-6" /> Supported ${m.name} Models
          </h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 font-medium italic">We service all years and trim levels for the following ${m.name} models:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              ${m.models.split(', ').map(model => `<span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">${model}</span>`).join('')}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-brand-accent" /> What You'll Need
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Your VIN (Vehicle Identification Number)</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Proof of ownership (Registration/Title)</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> A valid photo ID</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Your working key (for duplication)</li>
            </ul>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-accent flex flex-col justify-center">
            <h3 className="text-xl font-bold text-brand-primary mb-3">Lost All Keys?</h3>
            <p className="text-sm text-gray-700 mb-6">If you have zero working keys, you require an emergency Key Origination service. Visit our sister service for full replacements.</p>
            <a href="${m.link}" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">${m.anchor} →</a>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center gap-2 mb-2 font-bold text-yellow-800"><Info className="w-5 h-5" /> Important Note</div>
          <p className="text-yellow-700 text-sm italic">Newer ${m.name} models (2022+) may require cloud-based authorization through our secure server. We are one of the few NYC locksmiths with active OEM credentials to perform this.</p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">${m.name} Service Available In:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${BOROUGHS.map(b => `<Link href="/${b.slug}" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> ${m.name} keys in ${b.name}</Link>`).join('\n            ')}
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}
`;

const getIntentTemplate = (i) => `
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Zap, Clock, ShieldCheck, MapPin, Truck, Award, UserCheck, Lock } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: \`${i.name} | Fast On-Site Service\`,
  description: \`${i.benefit} Professional automotive locksmiths serving all NYC boroughs.\`,
  slug: \`${i.slug}\`
})

export default function IntentPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">${i.name}</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">${i.focus}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link href="/book-now" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">Book Immediate Dispatch</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
            <Zap className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600">Our decentralized mobile units are stationed across all boroughs to reach you in record time.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
            <Award className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Expert Quality</h3>
            <p className="text-sm text-gray-600">Every technician is fully certified and equipped with the latest diagnostic technology.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
            <UserCheck className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Trust Verified</h3>
            <p className="text-sm text-gray-600">Fully licensed, bonded, and insured. We stand behind every key we cut and program.</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-4xl font-heading text-brand-primary font-bold text-center mb-10">Why Choose Us for ${i.name}?</h2>
          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-inner">
            <p className="text-xl leading-relaxed text-gray-800 text-center">${i.benefit}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-brand-primary mb-6 italic underline decoration-brand-accent underline-offset-4">Professional Standards</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center">
                <Truck className="w-10 h-10 text-brand-accent shrink-0 p-2 bg-brand-light rounded-lg" />
                <div>
                   <h4 className="font-bold">Fully Mobile Workshops</h4>
                   <p className="text-sm text-gray-600">We don't need external power. Our vans are self-contained labs.</p>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <Lock className="w-10 h-10 text-brand-accent shrink-0 p-2 bg-brand-light rounded-lg" />
                <div>
                   <h4 className="font-bold">No Damage Guarantee</h4>
                   <p className="text-sm text-gray-600">Non-destructive entry and surgical precision cutting.</p>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <ShieldCheck className="w-10 h-10 text-brand-accent shrink-0 p-2 bg-brand-light rounded-lg" />
                <div>
                   <h4 className="font-bold">Guaranteed Compatibility</h4>
                   <p className="text-sm text-gray-600">We use OEM-grade chips that will not interfere with your car's warranty.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-brand-primary text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold mb-4">Service Availability</h3>
            <p className="mb-8 text-gray-300 italic">We are standing by right now to assist you in any of the following locations:</p>
            <div className="grid grid-cols-2 gap-4">
              ${BOROUGHS.map(b => `<Link href="/${b.slug}" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> ${b.name}</Link>`).join('\n              ')}
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}
`;

const writePage = (dirPath, content) => {
  const fullPath = path.join(__dirname, '../src/app', dirPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), content.trim());
}

BOROUGHS.forEach(b => writePage(b.slug, getBoroughTemplate(b)));
SERVICE_TYPES.forEach(s => writePage(s.slug, getServiceTemplate(s)));
CAR_MAKES.forEach(m => writePage(m.slug, getMakeTemplate(m)));
INTENT_PAGES.forEach(i => writePage(i.slug, getIntentTemplate(i)));

console.log('Phase 5 E-E-A-T Conversion Content written to 26 route pages.');
