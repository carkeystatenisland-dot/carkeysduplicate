import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Cpu, Wrench, ShieldCheck, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Spare Key Copy NYC | Mobile, On-Site Programming',
  description: 'Expert spare key copy across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.'
}

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Spare Key Copy in NYC
          </h1>
          <p className="text-xl text-gray-300 font-medium mb-8">
            Precision cutting and OEM-grade electronic programming. 100% Mobile Service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
              Get a Free Quote
            </Link>
            <Link href="/book-now" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Book Service
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10"><TrustBadges /></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* E-E-A-T Technical Explanation */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-brand-accent" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0">The Technology Behind It</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed m-0">
              A 'spare key' is a proactive insurance policy. If you lose your only working key, the vehicle's computer must be reset, and lock cylinders may need to be mechanically decoded. This turns a simple duplication process into an emergency 'Key Origination', which is significantly more time-consuming and expensive.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-brand-accent" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0">Our Professional Solution</h2>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed m-0">
              By getting a spare key duplicated while you still have a working original, we can simply clone the existing transponder data or quickly add a secondary key to the ECU. It takes less than 30 minutes and saves you hundreds of dollars compared to a complete key loss emergency.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold mb-8 text-center">How Our Mobile Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-white">1</div>
              <h3 className="font-bold text-lg mt-4 mb-2">Request Service</h3>
              <p className="text-gray-600 text-sm">Provide your vehicle's Year, Make, and Model for an accurate, upfront quote.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-white">2</div>
              <h3 className="font-bold text-lg mt-4 mb-2">We Dispatch</h3>
              <p className="text-gray-600 text-sm">Our fully equipped mobile unit arrives directly at your location anywhere in NYC.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-white">3</div>
              <h3 className="font-bold text-lg mt-4 mb-2">On-Site Programming</h3>
              <p className="text-gray-600 text-sm">We cut the blade and connect our diagnostic tools to your OBD-II port to sync the chip.</p>
            </div>
          </div>
        </div>

        {/* Internal Linking Phase 6 block */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Available in All NYC Boroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/brooklyn" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Spare Key Copy in Brooklyn</Link>
            <Link href="/queens" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Spare Key Copy in Queens</Link>
            <Link href="/manhattan" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Spare Key Copy in Manhattan</Link>
            <Link href="/bronx" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Spare Key Copy in The Bronx</Link>
            <Link href="/staten-island" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Spare Key Copy in Staten Island</Link>
          </div>

          <h3 className="text-xl font-bold text-brand-primary mt-10 mb-4">Supported Vehicle Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/toyota-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Toyota Key Duplication</Link>
            <Link href="/honda-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Honda Key Duplication</Link>
            <Link href="/ford-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Ford Key Duplication</Link>
            <Link href="/bmw-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">BMW Key Duplication</Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p className="font-semibold mb-3">Related Services:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/transponder-key-duplication" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Transponder Key Duplication</Link>
              <Link href="/key-fob-duplication" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Key Fob Duplication</Link>
              <Link href="/smart-key-duplication" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Smart Key Duplication</Link>
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}