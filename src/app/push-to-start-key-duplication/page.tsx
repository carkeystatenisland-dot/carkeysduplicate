import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Cpu, Wrench, ShieldCheck, MapPin, ShieldAlert, Zap, Lock } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: `Push-to-Start Key Duplication NYC | Mobile, On-Site Programming`,
  description: `Expert push-to-start key duplication across all NYC boroughs. We come to your location with OEM-grade diagnostic tools to program your vehicle securely.`,
  slug: `push-to-start-key-duplication`
})

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">Push-to-Start Key Duplication in NYC</h1>
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
            <p className="mb-6">Push-to-start ignition systems eliminate the mechanical ignition cylinder entirely. The vehicle relies 100% on the electronic handshake between the key fob and the push-button module (often integrated into the steering column lock or body control module).</p>
            <p className="font-semibold text-brand-primary">Many people don't realize that push-to-start fobs still contain a 'hidden' emergency mechanical blade. We cut this blade for you as part of the service, so you can still enter the car if the battery dies.</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-brand-accent" />
            <h2 className="text-3xl font-heading text-brand-primary font-bold m-0">Our Professional Mobile Lab Solution</h2>
          </div>
          <div className="bg-brand-light p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-700">
            <p>Because there is no mechanical backup, precision programming is critical. We use specialized diagnostic software to securely pair your new push-to-start fob. We also demonstrate how to use the emergency backup start method (usually holding the fob against the start button) before we leave your location.</p>
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
            <Link href="/brooklyn" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in Brooklyn</Link>
            <Link href="/queens" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in Queens</Link>
            <Link href="/manhattan" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in Manhattan</Link>
            <Link href="/bronx" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in The Bronx</Link>
            <Link href="/staten-island" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in Staten Island</Link>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}