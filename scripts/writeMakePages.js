const fs = require('fs');
const path = require('path');

const CAR_MAKES = [
  { slug: 'toyota-key-duplication', name: 'Toyota', tech: "Toyota's immobilizer systems are renowned for their reliability but require specific programming protocols. Models from roughly 2010 onwards transitioned to the highly secure H-chip (Texas Crypto 128-bit) and recent models use advanced smart proximity systems. Our mobile labs carry exact OEM-grade diagnostic scanners.", models: "Camry, Corolla, RAV4, Highlander, Prius, Tacoma, Tundra, Sienna, 4Runner, Sequoia, Avalon, Yaris, C-HR, Venza, Land Cruiser, Supra, bZ4X, FJ Cruiser, Matrix, Solara" },
  { slug: 'honda-key-duplication', name: 'Honda', tech: "Modern Hondas universally employ high-security laser-cut (sidewinder) blades paired with the Honda G chip or the advanced ID47 transponder. Precision CNC cutting is absolutely mandatory, as a poorly cut Honda key will permanently jam the ignition cylinder. We use factory-level cutters.", models: "Accord, Civic, CR-V, Pilot, Odyssey, HR-V, Fit, Ridgeline, Insight, Passport, Clarity, Element, Crosstour, S2000, Prelude" },
  { slug: 'ford-key-duplication', name: 'Ford', tech: "Ford utilizes the PATS (Passive Anti-Theft System), which has evolved into the robust Tiris DST+ (4D-63) system. Programming often requires a 10-minute security access delay to prevent unauthorized key generation. We handle this flawlessly.", models: "F-150, Explorer, Escape, Mustang, Edge, Fusion, Focus, Ranger, Expedition, Bronco, Taurus, Transit, E-Series, Flex, Fiesta, EcoSport, Maverick, Mach-E" },
  { slug: 'bmw-key-duplication', name: 'BMW', tech: "BMW key duplication is highly complex. They utilize CAS (Car Access System) and FEM/BDC modules with Hitag 2 encryption. Many locksmiths cannot handle BMWs. We possess the dealer-level engineering software required to safely extract the ISN and program new fobs.", models: "3 Series, 5 Series, 7 Series, X3, X5, X7, 4 Series, 2 Series, 8 Series, Z4, M3, M4, M5, i3, i8, i4, iX" },
  { slug: 'nissan-key-duplication', name: 'Nissan', tech: "Nissan's Intelligent Key system (utilizing PCF7936 / ID46 chips) is standard across their lineup. We carry the specific diagnostic software required to bypass the BCM (Body Control Module) PIN code to program new intelligent fobs on the spot.", models: "Altima, Rogue, Sentra, Maxima, Pathfinder, Murano, Titan, Frontier, Versa, Kicks, Armada, LEAF, 370Z, GT-R, NV, Juke" },
  { slug: 'hyundai-key-duplication', name: 'Hyundai', tech: "Hyundai keys utilize ID46 / 4D-60 transponders and increasingly feature advanced proximity fobs. We stock a massive inventory of Hyundai OEM-equivalent smart keys to ensure same-day service without dealership wait times.", models: "Elantra, Sonata, Tucson, Santa Fe, Kona, Palisade, Accent, Veloster, Ioniq, Venue, Azera, Genesis, Equus, Veracruz" },
  { slug: 'jeep-key-duplication', name: 'Jeep', tech: "Jeep vehicles use the Chrysler Y-4 / 4D-64 system. The unique Fobik style keys and newer proximity keys for models like the Grand Cherokee require a localized PIN code extraction from the vehicle's SKIM module, which we perform on-site.", models: "Wrangler, Grand Cherokee, Cherokee, Compass, Renegade, Gladiator, Patriot, Liberty, Commander, Wagoneer" },
  { slug: 'chevrolet-key-duplication', name: 'Chevrolet', tech: "Chevrolet moved from the classic GM VATS system to modern ID46 transponders and proximity fobs. We utilize specialized GM programming tools (SPS) to securely add new fobs and remote start capabilities.", models: "Silverado, Equinox, Malibu, Tahoe, Suburban, Colorado, Traverse, Cruze, Impala, Camaro, Corvette, Trailblazer, Trax, Sonic, Spark, Volt, Bolt" },
  { slug: 'kia-key-duplication', name: 'Kia', tech: "Sharing technology with Hyundai, Kia utilizes ID46 / 4D-60 chips. We handle everything from the standard bladed keys for older Optimas to the push-to-start smart fobs for the newest Telluride models.", models: "Optima, Sorento, Sportage, Soul, Telluride, Forte, Rio, Stinger, Sedona, Carnival, Niro, K5, Cadenza, Seltos" },
  { slug: 'mercedes-key-duplication', name: 'Mercedes', tech: "Mercedes relies on highly advanced Infrared (IR), NEC, and Hitag Pro systems. The EIS (Electronic Ignition Switch) must be carefully read to calculate a key password. We are among the few NYC mobile locksmiths equipped to safely handle Mercedes EIS programming.", models: "C-Class, E-Class, S-Class, GLC, GLE, GLS, A-Class, CLA, GLA, G-Class, SL, SLC, AMG GT, Sprinter, Metris" },
  { slug: 'subaru-key-duplication', name: 'Subaru', tech: "Subaru's G-chip (ID47) is standard across their rugged lineup. We provide precision laser cutting and secure programming for both standard transponder keys and the advanced proximity fobs used in the Outback and Forester.", models: "Outback, Forester, Crosstrek, Impreza, Ascent, Legacy, WRX, BRZ, Solterra, Tribeca, Baja" },
  { slug: 'volkswagen-key-duplication', name: 'Volkswagen', tech: "Volkswagen utilizes the Megamos Crypto 48 chip and the highly secure MQB platform. Duplication requires reading the instrument cluster data to extract the component security (CS) bytes. We have the specific VAG diagnostic tools to execute this flawlessly.", models: "Jetta, Passat, Tiguan, Golf, Atlas, Taos, ID.4, Arteon, Beetle, Touareg, CC, Eos, Routan, GTI" }
];

const BOROUGHS = [
  { slug: 'brooklyn', name: 'Brooklyn' },
  { slug: 'queens', name: 'Queens' },
  { slug: 'manhattan', name: 'Manhattan' },
  { slug: 'bronx', name: 'The Bronx' },
  { slug: 'staten-island', name: 'Staten Island' }
];

const getMakeTemplate = (m) => `
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, ShieldAlert, Cpu, ListChecks, Info, Wrench, Clock, Zap, MapPin } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: \`${m.name} Car Key Duplication NYC | Mobile Locksmith Service\`,
  description: \`Expert mobile ${m.name} car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.\`,
  slug: \`${m.slug}\`
})

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">${m.name} Car Key Duplication NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Specialized programming and cutting for ${m.name} vehicles. We bypass the dealership wait times by bringing the equipment directly to your location in all 5 boroughs.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">Get an Exact Quote</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro paragraph for semantic depth */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-16">
          <p className="lead text-2xl font-bold text-brand-primary mb-6">Your Premier ${m.name} Locksmith in New York City</p>
          <p>
            Losing a car key or needing a spare for your ${m.name} in New York City can be an incredibly stressful experience. 
            Between alternate side parking rules, expensive parking garages in Manhattan, and the fast-paced lifestyle of Brooklyn and Queens, 
            you do not have the time to tow your vehicle to a ${m.name} dealership and wait days for a replacement. That is exactly why our mobile 
            automotive locksmith service exists. We provide on-site ${m.name} car key duplication, transponder key programming, and smart key fob 
            replacements directly at your vehicle's location.
          </p>
          <p>
            Our certified technicians are equipped with advanced diagnostic tools capable of reading your vehicle's ECU and safely programming 
            a new key. Whether you need a standard metal blade duplicated or a complex push-to-start proximity fob synced to your car's computer, 
            we guarantee dealership-level quality at a fraction of the cost.
          </p>
        </article>

        {/* Security Architecture */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
          <div className="bg-brand-light border-b border-gray-200 px-8 py-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">${m.name} Security Architecture Explained</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">${m.tech}</p>
            <p className="text-gray-700">
              Modern ${m.name} vehicles utilize immobilizer systems designed to prevent theft. The key fob contains a microchip that transmits a specific 
              radio frequency signal to the receiver located near the ignition. If the cryptographic code matches, the Engine Control Unit (ECU) enables 
              the fuel injectors and ignition coils. Simple hardware store duplication cannot replicate this chip. We utilize factory-level OBD-II programmers 
              to securely extract the PIN code and pair the new key to your ${m.name}'s immobilizer system.
            </p>
          </div>
        </div>

        {/* Huge List of Supported Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2 underline decoration-brand-accent">
            <ListChecks className="w-6 h-6" /> Supported ${m.name} Models
          </h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 font-medium italic">We have blank keys, fobs, and transponders in stock for all years and trim levels for the following ${m.name} models in the US market:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              ${m.models.split(', ').map(model => `<span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">${model}</span>`).join('\n              ')}
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">* If your model is not listed here, please call us. We source rare and imported keys rapidly.</p>
          </div>
        </div>

        {/* Service Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">Comprehensive ${m.name} Key Services</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Smart Key & Proximity Fobs</h3>
              <p className="text-gray-700">
                If your ${m.name} features push-to-start ignition, it relies on a smart proximity key. These fobs constantly communicate with the car's Body Control Module (BCM). We program these advanced fobs to ensure all features—including remote start, trunk release, and panic alarm—function flawlessly.
              </p>
            </div>
            
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">2. Transponder Key Programming</h3>
              <p className="text-gray-700">
                For traditional turn-key ignitions that have a plastic head, there is a hidden RFID chip inside. We clone or program a brand new chip to your car's immobilizer. We ensure the key turns smoothly without damaging the ignition wafers.
              </p>
            </div>

            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">3. High-Security Laser Cutting</h3>
              <p className="text-gray-700">
                Many modern ${m.name} keys use sidewinder/laser-cut blades instead of traditional edge cuts. Our vans are equipped with automated CNC laser cutting machines. We digitally decode your current key and mill a factory-perfect duplicate, avoiding the "vibration cuts" that cheaper machines produce.
              </p>
            </div>
          </div>
        </div>

        {/* Dealer vs Locksmith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-600" /> The Dealership Hassle
            </h3>
            <ul className="space-y-3 text-sm text-red-800">
              <li>• Requires towing your car to the lot.</li>
              <li>• Waiting days for parts to arrive from the factory.</li>
              <li>• Paying premium dealership labor rates.</li>
              <li>• Wasting hours in a waiting room.</li>
            </ul>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-brand-accent">
            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" /> The NYC Keys Advantage
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• We come to you (Home, Office, or Street).</li>
              <li>• We carry stock on our vans for immediate service.</li>
              <li>• Upfront pricing over the phone.</li>
              <li>• Usually completed in under 45 minutes on-site.</li>
            </ul>
          </div>
        </div>

        {/* Emergency Origination CTA */}
        <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-300 flex flex-col justify-center mb-16 text-center">
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Lost All Keys?</h3>
            <p className="text-lg text-gray-700 mb-6">If you have zero working keys, you require an emergency Key Origination service. We don't just duplicate—we can generate a key from scratch by decoding your door locks and reprogramming the car's computer.</p>
            <Link href="/request-a-quote" className="inline-block mx-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">Request Emergency Service →</Link>
        </div>

        {/* Extensive FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">Frequently Asked Questions: ${m.name} Keys</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">How much does a ${m.name} key duplication cost?</h4>
              <p className="text-gray-600">The cost varies entirely depending on the year and model. A basic transponder key starts around $95, while a high-tech smart proximity fob can range from $175 to $350. We provide exact quotes over the phone based on your VIN.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Do you have to erase my old keys?</h4>
              <p className="text-gray-600">If you simply need a spare, we do not erase old keys. However, if your keys were stolen, we highly recommend erasing the vehicle's memory so the stolen key cannot start the engine.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Can you program a key I bought online?</h4>
              <p className="text-gray-600">Yes, we can cut and program customer-supplied keys. However, be warned: many online keys are counterfeit or have the wrong chip frequency. We cannot guarantee keys we do not supply, and the programming fee still applies.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">How long does the duplication take?</h4>
              <p className="text-gray-600">Once our technician arrives, standard duplication takes about 20-30 minutes. More complex systems or key origination may take up to an hour.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Are you licensed to work in NYC?</h4>
              <p className="text-gray-600">Yes, we are a fully licensed, bonded, and insured NYC automotive locksmith service. We comply with all Department of Consumer Affairs regulations.</p>
            </div>
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center gap-2 mb-2 font-bold text-yellow-800"><Info className="w-5 h-5" /> Important Note</div>
          <p className="text-yellow-700 text-sm italic">Newer ${m.name} models (2022+) may require cloud-based authorization through our secure server. We are one of the few NYC locksmiths with active OEM credentials to perform this. Beware of unverified locksmiths attempting to "hack" the module, which can void your warranty.</p>
        </div>

        {/* Borough Availability */}
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

const writePage = (dirPath, content) => {
  const fullPath = path.join(__dirname, '../src/app', dirPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), content.trim());
}

CAR_MAKES.forEach(m => {
  writePage(m.slug, getMakeTemplate(m));
  console.log('Generated content for', m.name);
});
