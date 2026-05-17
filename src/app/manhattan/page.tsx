import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, ShieldCheck, Clock, MapPin, Wrench, ShieldAlert, BarChart3, AlertTriangle } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: `Car Key Duplication Manhattan NYC | Mobile Service, We Come To You`,
  description: `Expert mobile car key duplication in Manhattan. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.`,
  slug: `manhattan`
})

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
            Local Manhattan Mobile Locksmith
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Mobile Car Key Duplication in Manhattan, NYC
          </h1>
          <p className="text-xl text-gray-300 font-medium mb-8">
            Fast, professional, on-site programming. Don't tow your car to the dealer—we bring the dealership to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/book-now" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Book Mobile Service
            </Link>
            <a href="tel:9298287009" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
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
            <p className="text-gray-600 text-sm">We navigate Manhattan traffic efficiently, arriving at your exact location usually within 30-60 minutes.</p>
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
          <h2 className="text-3xl font-heading text-brand-primary font-bold underline decoration-brand-accent underline-offset-8">Why Mobile Locksmith Service Matters in Manhattan</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-10">
            <p className="text-lg leading-relaxed mb-6">A car stranded in a Manhattan parking garage accrues massive hourly fees while you wait days for a dealership appointment.</p>
            <p className="text-lg leading-relaxed">Manhattan presents unique challenges: underground garages with no cell service and tight clearances. Our technicians are trained to handle these exact scenarios. We carry specialized diagnostic equipment to program luxury makes like BMW, Mercedes, and Audi, which are highly prevalent in Manhattan, saving you the exorbitant cost of a dealership tow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" /> Manhattan Locksmith Scam Alert
            </h3>
            <p className="text-red-800 leading-relaxed">Many 'Manhattan Locksmiths' actually operate from outside the city and charge huge travel fees. We are local and our pricing is borough-blind.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" /> Local Service Data
            </h3>
            <p className="text-blue-800 leading-relaxed">The average Manhattan customer saves over $450 by choosing our mobile service over a dealership tow and premium Manhattan garage storage.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-accent" /> Neighborhoods We Serve in Manhattan
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm font-medium text-gray-700">
            <div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Upper East Side</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Upper West Side</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Midtown</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Financial District</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Chelsea</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Harlem</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Washington Heights</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-center hover:bg-brand-light transition-colors">Greenwich Village</div>
          </div>
        </div>

        <div className="bg-gray-100 p-10 rounded-3xl mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">Comprehensive Key Solutions in Manhattan</h2>
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
            <h3 className="font-bold text-lg text-brand-primary mt-0 mb-3">Can your mobile van fit into underground Manhattan parking garages?</h3>
            <p className="text-gray-600 mb-0 leading-relaxed">Our equipment is fully portable. Even if our van cannot clear a low ceiling, our technicians can walk the cutting and programming tools directly to your vehicle's parking spot.</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Explore Our Services in Manhattan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/transponder-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Transponder Key Duplication in Manhattan</Link>
            <Link href="/key-fob-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Key Fob Duplication in Manhattan</Link>
            <Link href="/smart-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Smart Key Duplication in Manhattan</Link>
            <Link href="/push-to-start-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in Manhattan</Link>
            <Link href="/laser-cut-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Laser-Cut Key Duplication in Manhattan</Link>
            <Link href="/spare-key-copy" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Spare Key Copy in Manhattan</Link>
          </div>
        </div>

        <CTABanner title="Stranded in Manhattan? We're on our way." subtitle="Book online or call us now for immediate, professional dispatch." />
      </div>
    </div>
  )
}