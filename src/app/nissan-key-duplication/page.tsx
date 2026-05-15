import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, ShieldAlert, Cpu, ListChecks, Info } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: `Nissan Car Key Duplication NYC | Mobile Locksmith Service`,
  description: `Expert mobile Nissan car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.`,
  slug: `nissan-key-duplication`
})

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">Nissan Car Key Duplication NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Specialized programming and cutting for Nissan vehicles. We bypass the dealership wait times.</p>
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
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">Nissan Security Architecture</h2>
          </div>
          <div className="p-8 text-lg text-gray-700 leading-relaxed">Nissan's Intelligent Key system (utilizing PCF7936 / ID46 chips) is standard across their lineup. We carry the specific diagnostic software required to bypass the BCM (Body Control Module) PIN code to program new intelligent fobs on the spot.</div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-2 underline decoration-brand-accent">
            <ListChecks className="w-6 h-6" /> Supported Nissan Models
          </h3>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4 font-medium italic">We service all years and trim levels for the following Nissan models:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Altima</span><span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Rogue</span><span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Sentra</span><span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Maxima</span><span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Pathfinder</span><span className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm text-brand-primary font-bold">Murano</span>
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
            <a href="https://www.carkeyreplacementstatenisland.com/nissan-keys" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">Nissan key replacement Staten Island →</a>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center gap-2 mb-2 font-bold text-yellow-800"><Info className="w-5 h-5" /> Important Note</div>
          <p className="text-yellow-700 text-sm italic">Newer Nissan models (2022+) may require cloud-based authorization through our secure server. We are one of the few NYC locksmiths with active OEM credentials to perform this.</p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Nissan Service Available In:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/brooklyn" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Nissan keys in Brooklyn</Link>
            <Link href="/queens" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Nissan keys in Queens</Link>
            <Link href="/manhattan" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Nissan keys in Manhattan</Link>
            <Link href="/bronx" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Nissan keys in The Bronx</Link>
            <Link href="/staten-island" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Nissan keys in Staten Island</Link>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}