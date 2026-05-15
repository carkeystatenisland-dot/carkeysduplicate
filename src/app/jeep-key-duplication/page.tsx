import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, ShieldAlert, Cpu, ListChecks, Info, Wrench, Clock, Zap, MapPin } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: `Jeep Car Key Duplication NYC | Mobile Locksmith Service`,
  description: `Expert mobile Jeep car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.`,
  slug: `jeep-key-duplication`
})

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">Jeep Car Key Duplication NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Specialized programming and cutting for Jeep vehicles. We bypass the dealership wait times by bringing the equipment directly to your location in all 5 boroughs.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">Get an Exact Quote</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro paragraph for semantic depth */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-16">
          <p className="lead text-2xl font-bold text-brand-primary mb-6">Your Premier Jeep Locksmith in New York City</p>
          <p>
            Losing a car key or needing a spare for your Jeep in New York City can be an incredibly stressful experience. 
            Between alternate side parking rules, expensive parking garages in Manhattan, and the fast-paced lifestyle of Brooklyn and Queens, 
            you do not have the time to tow your vehicle to a Jeep dealership and wait days for a replacement. That is exactly why our mobile 
            automotive locksmith service exists. We provide on-site Jeep car key duplication, transponder key programming, and smart key fob 
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
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">Jeep Security Architecture Explained</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Jeep vehicles use the Chrysler Y-4 / 4D-64 system. The unique Fobik style keys and newer proximity keys for models like the Grand Cherokee require a localized PIN code extraction from the vehicle's SKIM module, which we perform on-site.</p>
            <p className="text-gray-700">
              Modern Jeep vehicles utilize immobilizer systems designed to prevent theft. The key fob contains a microchip that transmits a specific 
              radio frequency signal to the receiver located near the ignition. If the cryptographic code matches, the Engine Control Unit (ECU) enables 
              the fuel injectors and ignition coils. Simple hardware store duplication cannot replicate this chip. We utilize factory-level OBD-II programmers 
              to securely extract the PIN code and pair the new key to your Jeep's immobilizer system.
            </p>
          </div>
        </div>

        {/* Huge List of Supported Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2 underline decoration-brand-accent">
            <ListChecks className="w-6 h-6" /> Supported Jeep Models
          </h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 font-medium italic">We have blank keys, fobs, and transponders in stock for all years and trim levels for the following Jeep models in the US market:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Wrangler</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Grand Cherokee</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Cherokee</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Compass</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Renegade</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Gladiator</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Patriot</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Liberty</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Commander</span>
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Wagoneer</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">* If your model is not listed here, please call us. We source rare and imported keys rapidly.</p>
          </div>
        </div>

        {/* Service Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">Comprehensive Jeep Key Services</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-brand-accent pl-6 py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Smart Key & Proximity Fobs</h3>
              <p className="text-gray-700">
                If your Jeep features push-to-start ignition, it relies on a smart proximity key. These fobs constantly communicate with the car's Body Control Module (BCM). We program these advanced fobs to ensure all features—including remote start, trunk release, and panic alarm—function flawlessly.
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
                Many modern Jeep keys use sidewinder/laser-cut blades instead of traditional edge cuts. Our vans are equipped with automated CNC laser cutting machines. We digitally decode your current key and mill a factory-perfect duplicate, avoiding the "vibration cuts" that cheaper machines produce.
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
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8">Frequently Asked Questions: Jeep Keys</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">How much does a Jeep key duplication cost?</h4>
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
          <p className="text-yellow-700 text-sm italic">Newer Jeep models (2022+) may require cloud-based authorization through our secure server. We are one of the few NYC locksmiths with active OEM credentials to perform this. Beware of unverified locksmiths attempting to "hack" the module, which can void your warranty.</p>
        </div>

        {/* Borough Availability */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Jeep Service Available In:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/brooklyn" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Jeep keys in Brooklyn</Link>
            <Link href="/queens" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Jeep keys in Queens</Link>
            <Link href="/manhattan" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Jeep keys in Manhattan</Link>
            <Link href="/bronx" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Jeep keys in The Bronx</Link>
            <Link href="/staten-island" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Jeep keys in Staten Island</Link>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}