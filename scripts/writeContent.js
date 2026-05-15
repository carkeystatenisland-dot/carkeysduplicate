const fs = require('fs');
const path = require('path');

const BOROUGHS = [
  { 
    slug: 'brooklyn', name: 'Brooklyn', 
    paragraphs: [
      "Brooklyn's unique parking culture—complete with alternate side parking rules and tight street spots—means getting stranded without a key is incredibly stressful. Many Brooklyn drivers rely on their vehicles for daily work commutes into Manhattan or other boroughs.",
      "We frequently serve neighborhoods like Bay Ridge, Bensonhurst, Flatbush, and Canarsie. Whether you drive a Jeep, Honda, or Toyota—the most common makes in Brooklyn—our mobile units are equipped to handle your specific key system.",
      "Response Time: Typically 30–60 minutes anywhere in Brooklyn."
    ],
    faq: { q: "Can you come to a parking garage in Brooklyn?", a: "Yes, our mobile vans are equipped to handle services inside parking garages or tight street spots." }
  },
  { 
    slug: 'queens', name: 'Queens', 
    paragraphs: [
      "Queens has the most registered vehicles of any NYC borough. Due to limited subway coverage in eastern Queens, heavy car dependency is a reality for many residents. Because of the high number of multi-family homes, creating a spare key for a family member is our most common request.",
      "We cover the entirety of the borough, including Flushing, Jamaica, Jackson Heights, and Astoria. We also frequently dispatch technicians to JFK and LaGuardia airports for travelers who have lost their keys.",
      "Response Time: Typically 30–60 minutes anywhere in Queens."
    ],
    faq: { q: "Do you service vehicles stuck at JFK or LaGuardia?", a: "Yes, we dispatch directly to airport parking lots to assist with lost or duplicated keys." }
  },
  { 
    slug: 'manhattan', name: 'Manhattan', 
    paragraphs: [
      "Contrary to the stereotype, Manhattan is home to plenty of car owners. The most common situations we see involve keys locked inside or lost in parking garages, or drivers needing a quick spare for a valet.",
      "We service all vehicles, including the premium makes that are particularly common in Manhattan, such as BMW, Mercedes, and Lexus. Since we are fully mobile, we avoid the massive overhead of a Manhattan storefront, passing the savings on to you.",
      "Response Time: Typically 20–45 minutes in Manhattan, as our mobile service bypasses many traditional traffic and parking barriers."
    ],
    faq: { q: "Do you charge extra for Manhattan service?", a: "No, our base service call fee remains consistent across all boroughs." }
  },
  { 
    slug: 'bronx', name: 'The Bronx', 
    paragraphs: [
      "The Bronx boasts a high rate of car ownership, with many residents relying heavily on their vehicles for commuting outside the borough. We see high demand for key duplication on reliable daily drivers like the Toyota Camry, Honda Accord, and Nissan Altima.",
      "Our mobile technicians regularly service large residential areas including Co-op City, Riverdale, and Pelham Bay, bringing dealership-level key programming right to your driveway.",
      "Response Time: Typically 30–60 minutes anywhere in the Bronx."
    ],
    faq: { q: "Can you program a key if I live in a large complex like Co-op City?", a: "Yes, we can meet you at your designated parking spot or nearby street parking." }
  },
  { 
    slug: 'staten-island', name: 'Staten Island', 
    paragraphs: [
      "As the most car-dependent borough in New York City, over 75% of Staten Island households own a vehicle. Having a reliable spare key isn't a luxury here—it's a necessity for daily life.",
      "We specialize in mobile car key duplication across all Staten Island neighborhoods, from Tottenville to St. George.",
      "If you need a complete key replacement rather than a simple duplication, please visit our sister service. For full car key replacement services on Staten Island, visit <a href='https://www.carkeyreplacementstatenisland.com' target='_blank' rel='noopener noreferrer' className='text-brand-accent underline'>car key replacement Staten Island</a>."
    ],
    faq: { q: "What's the difference between this service and your sister site?", a: "We specialize purely in duplication and spare keys here, while our sister site handles complete key origination when all keys are lost." }
  }
];

const SERVICE_TYPES = [
  { 
    slug: 'transponder-key-duplication', name: 'Transponder Key Duplication',
    content: "Transponder keys use a microchip in the plastic head (often operating at 125 kHz or 433 MHz) that sends a radio frequency authentication signal to your car's immobilizer. If the code doesn't match, the engine won't start. A simple hardware store key cut will not work. We use specialized equipment to either 'clone' your existing key or program a brand new chip into your vehicle's ECU. Prices typically range from $95 to $200 depending on the make and year."
  },
  { 
    slug: 'key-fob-duplication', name: 'Key Fob Duplication',
    content: "A key fob is a separate remote or an integrated head key that controls your door locks and alarm. Unlike a simple gate remote, modern fobs use 'rolling code' technology that changes the signal every time you press a button, preventing thieves from copying the signal. We provide and program high-quality aftermarket and OEM fobs directly to your vehicle's immobilizer system, complete with fresh batteries."
  },
  { 
    slug: 'smart-key-duplication', name: 'Smart Key Duplication',
    content: "Smart keys (or proximity keys) allow for passive entry—the car detects the key in your pocket when you touch the door handle. This advanced technology is standard on modern BMW, Mercedes, and newer Toyota models. Duplicating a smart key requires the vehicle to be present so our computers can securely sync the new proximity sensor with the car's security module. Services for smart keys typically start at $175."
  },
  { 
    slug: 'push-to-start-key-duplication', name: 'Push-to-Start Key Duplication',
    content: "Often confused with smart keys, push-to-start fobs communicate directly with a push-button ignition module. Because this involves deeper integration with the vehicle's starting mechanism, programming is highly complex and requires specialized diagnostic tools. The vehicle must be present during the service. If you only have one push-to-start fob left, we highly recommend getting a spare before an emergency replacement is needed."
  },
  { 
    slug: 'laser-cut-key-duplication', name: 'Laser-Cut Key Duplication',
    content: "Laser-cut keys, also known as sidewinder keys, feature a distinctive side-milling pattern rather than traditional jagged cuts on the edge. Common on European vehicles like BMW, Mercedes, Audi, and VW, as well as newer Fords and Hondas, these keys require an expensive, specialized laser cutting machine to duplicate. Standard hardware store machines cannot cut these blades. In almost all cases, laser-cut keys also contain a transponder chip that must be programmed."
  },
  { 
    slug: 'spare-key-copy', name: 'Spare Key Copy',
    content: "Getting a spare key copy made before you lose your original is the smartest, most cost-effective decision you can make as a car owner. Emergency key replacement when all keys are lost can cost 3 to 5 times more than a simple proactive duplication. Even basic 'spare keys' for modern cars require chip programming. We can cut and program your spare on-site in about 15 to 30 minutes."
  }
];

const CAR_MAKES = [
  { slug: 'toyota-key-duplication', name: 'Toyota', tech: "Toyota vehicles utilize a range of chip systems, notably transitioning to the highly secure H-chip (Texas Crypto 128-bit) around 2010. Generic key cutters lack the software to program H-chips. We cover all popular models including Camry, Corolla, RAV4, Highlander, Prius, Tacoma, and Tundra.", link: "https://www.carkeyreplacementstatenisland.com/toyota-keys", anchor: "Toyota key replacement Staten Island" },
  { slug: 'honda-key-duplication', name: 'Honda', tech: "Modern Hondas heavily rely on the Honda G chip (ID47) and high-security laser-cut blades. We expertly duplicate keys for the Accord, Civic, CR-V, Pilot, and Odyssey.", link: "https://www.carkeyreplacementstatenisland.com/honda-keys", anchor: "Honda key replacement Staten Island" },
  { slug: 'ford-key-duplication', name: 'Ford', tech: "Ford's PATS (Passive Anti-Theft System) evolved into the Tiris DST+ (4D-63) system. We program keys for the F-150, Explorer, Escape, Mustang, and more.", link: "https://www.carkeyreplacementstatenisland.com/ford-keys", anchor: "Ford key replacement Staten Island" },
  { slug: 'bmw-key-duplication', name: 'BMW', tech: "BMW utilizes complex CAS and FEM/BDC systems with Hitag 2 encryption. Duplicating a BMW key requires dealer-level diagnostic equipment. We service the 3 Series, 5 Series, X3, X5, and more.", link: "https://www.carkeyreplacementstatenisland.com/bmw-keys", anchor: "BMW key replacement Staten Island" },
  { slug: 'nissan-key-duplication', name: 'Nissan', tech: "Nissan's Intelligent Key system (often using PCF7936 / ID46 chips) is standard on models like the Altima, Rogue, Sentra, and Maxima.", link: "https://www.carkeyreplacementstatenisland.com/nissan-keys", anchor: "Nissan key replacement Staten Island" },
  { slug: 'hyundai-key-duplication', name: 'Hyundai', tech: "Hyundai keys utilize ID46 / 4D-60 transponders and advanced proximity fobs. We service the Elantra, Sonata, Tucson, and Santa Fe.", link: "https://www.carkeyreplacementstatenisland.com/hyundai-keys", anchor: "Hyundai key replacement Staten Island" },
  { slug: 'jeep-key-duplication', name: 'Jeep', tech: "Jeep uses the Chrysler Y-4 / 4D-64 system, featuring Fobik and proximity keys for the Grand Cherokee, Wrangler, and Cherokee.", link: "https://www.carkeyreplacementstatenisland.com/jeep-keys", anchor: "Jeep key replacement Staten Island" },
  { slug: 'chevrolet-key-duplication', name: 'Chevrolet', tech: "Chevy's GM VATS and modern ID46 systems are common. We cut and program for the Silverado, Equinox, Malibu, and Tahoe.", link: "https://www.carkeyreplacementstatenisland.com/chevrolet-keys", anchor: "Chevrolet key replacement Staten Island" },
  { slug: 'kia-key-duplication', name: 'Kia', tech: "Similar to Hyundai, Kia uses ID46 / 4D-60 chips. We handle duplication for the Optima, Sorento, Sportage, and Soul.", link: "https://www.carkeyreplacementstatenisland.com/kia-keys", anchor: "Kia key replacement Staten Island" },
  { slug: 'mercedes-key-duplication', name: 'Mercedes', tech: "Mercedes relies on advanced Infrared, NEC, and Hitag Pro systems. Duplicating these requires specialized programming tools. We handle C-Class, E-Class, GLC, and more.", link: "https://www.carkeyreplacementstatenisland.com/mercedes-keys", anchor: "Mercedes key replacement Staten Island" },
  { slug: 'subaru-key-duplication', name: 'Subaru', tech: "Subaru's G-chip (ID47) is standard across their lineup. We duplicate laser-cut and proximity keys for the Outback, Forester, and Crosstrek.", link: "https://www.carkeyreplacementstatenisland.com/subaru-keys", anchor: "Subaru key replacement Staten Island" },
  { slug: 'volkswagen-key-duplication', name: 'Volkswagen', tech: "VW's highly secure Megamos Crypto 48 and MQB platforms make duplication complex. We service the Jetta, Passat, Tiguan, and Golf.", link: "https://www.carkeyreplacementstatenisland.com/volkswagen-keys", anchor: "Volkswagen key replacement Staten Island" }
];

const getBoroughTemplate = (b) => `
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication ${b.name} NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in ${b.name}. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in ${b.name}, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in ${b.name}. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in ${b.name}</h2>
          ${b.paragraphs.map(p => `<p dangerouslySetInnerHTML={{ __html: "${p.replace(/"/g, '\\"')}" }}></p>`).join('\n          ')}

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">${b.faq.q}</h3>
            <p className="mb-0">${b.faq.a}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in ${b.name}</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in ${b.name}</Link>
          </div>
        </div>
        
        <CTABanner title="Stranded in ${b.name}? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}
`;

const getServiceTemplate = (s) => `
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: '${s.name} in NYC | Mobile, All Makes & Models',
  description: 'Professional ${s.name.toLowerCase()} across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">${s.name} in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>What is ${s.name}?</h2>
          <p>${s.content}</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>You Call or Book:</strong> Provide your vehicle details and location in NYC.</li>
            <li><strong>We Dispatch:</strong> A fully equipped mobile technician arrives at your vehicle.</li>
            <li><strong>On-Site Programming:</strong> We cut the blade and connect our diagnostic tools to your OBD-II port to program the chip.</li>
          </ol>
          
          <h2>Available In All NYC Boroughs</h2>
          <p>We provide ${s.name.toLowerCase()} in <Link href="/brooklyn">Brooklyn</Link>, <Link href="/queens">Queens</Link>, <Link href="/manhattan">Manhattan</Link>, <Link href="/bronx">The Bronx</Link>, and <Link href="/staten-island">Staten Island</Link>.</p>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}
`;

const getMakeTemplate = (m) => `
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: '${m.name} Car Key Duplication NYC | Mobile Service',
  description: 'Mobile ${m.name} car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">${m.name} Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for ${m.name} vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>${m.name} Key Technology</h2>
          <p>${m.tech}</p>
          
          <h2>What You'll Need</h2>
          <ul>
            <li>Your Vehicle Identification Number (VIN)</li>
            <li>Proof of ownership (Registration or Title)</li>
            <li>A valid photo ID</li>
            <li>Your existing working key (if you have one)</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-brand-accent p-6 my-8">
            <h3 className="mt-0">Need full key replacement for your ${m.name}?</h3>
            <p className="mb-0">Our Staten Island specialists offer complete ${m.name} key replacement services. Visit <a href="${m.link}" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline font-bold">${m.anchor}</a>.</p>
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

console.log('Phase 5 content written to 23 route pages.');
