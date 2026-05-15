import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Car, ShieldAlert, Cpu } from 'lucide-react'

export const metadata = {
  title: 'Volkswagen Car Key Duplication NYC | Mobile Locksmith Service',
  description: 'Expert mobile Volkswagen car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Volkswagen Car Key Duplication NYC
          </h1>
          <p className="text-xl text-gray-300 font-medium mb-8">
            Specialized programming and cutting for Volkswagen vehicles. We bypass the dealership wait times.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Get an Exact Quote
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* E-E-A-T Technical Explanation for Make */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
          <div className="bg-brand-light border-b border-gray-200 px-8 py-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-heading text-brand-primary font-bold m-0">Understanding Volkswagen Key Technology</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed m-0">
              Volkswagen utilizes the Megamos Crypto 48 chip and the highly secure MQB platform. Duplication requires reading the instrument cluster data to extract the component security (CS) bytes. We have the specific VAG diagnostic tools to execute this flawlessly.
            </p>
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-brand-accent" /> What You'll Need
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span className="text-gray-700">Your Vehicle Identification Number (VIN)</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span className="text-gray-700">Proof of ownership (Registration or Title)</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span className="text-gray-700">A valid photo ID</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span className="text-gray-700">Your existing working key (for duplication)</span></li>
            </ul>
          </div>
          
          <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-accent flex flex-col justify-center">
            <h3 className="text-xl font-bold text-brand-primary mb-3">Lost All Your Volkswagen Keys?</h3>
            <p className="text-gray-700 mb-6">
              If you have zero working keys, you require an emergency Key Origination service rather than a simple duplication. Our sister service handles full replacements.
            </p>
            <a href="https://www.carkeyreplacementstatenisland.com/volkswagen-keys" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              Volkswagen key replacement Staten Island →
            </a>
          </div>
        </div>

        {/* Internal Linking Phase 6 block */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Volkswagen Service Available In:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/brooklyn" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Volkswagen keys in Brooklyn</Link>
            <Link href="/queens" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Volkswagen keys in Queens</Link>
            <Link href="/manhattan" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Volkswagen keys in Manhattan</Link>
            <Link href="/bronx" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Volkswagen keys in The Bronx</Link>
            <Link href="/staten-island" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><Car className="w-4 h-4 text-brand-accent" /> Volkswagen keys in Staten Island</Link>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/transponder-key-duplication" className="bg-gray-100 text-brand-primary font-bold px-6 py-3 rounded hover:bg-gray-200 transition-colors text-sm">
              View Transponder Technology
            </Link>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}