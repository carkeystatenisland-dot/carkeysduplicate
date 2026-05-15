import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Car Key Duplication The Bronx NYC | Mobile Service, We Come To You',
  description: 'Expert mobile car key duplication in The Bronx. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.',
  slug: 'bronx'
})

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
            Local The Bronx Mobile Locksmith
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Mobile Car Key Duplication in The Bronx, NYC
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
        
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-primary"><Clock className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Rapid Dispatch</h3>
            <p className="text-gray-600 text-sm">We navigate The Bronx traffic efficiently, arriving at your exact location usually within 30-60 minutes.</p>
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

        {/* E-E-A-T Content Block */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-3xl font-heading text-brand-primary font-bold">Why Mobile Locksmith Service Matters in The Bronx</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-6">
            <p className="text-lg leading-relaxed mb-6">
              When you rely on your vehicle to commute outside the Bronx for work, a lost key means lost wages.
            </p>
            <p className="text-lg leading-relaxed">
              The Bronx demands fast, reliable service. Our technicians are highly experienced with the most common commuter vehicles in the borough, including Honda, Toyota, and Nissan. From the massive complexes of Co-op City to the suburban streets of Riverdale, we arrive equipped to cut and program transponder and smart keys on the spot.
            </p>
          </div>
        </div>

        {/* Neighborhoods Served */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-accent" /> Neighborhoods We Serve in The Bronx
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Riverdale</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Co-op City</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Fordham</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Pelham Bay</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Throggs Neck</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Mott Haven</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Parkchester</div><div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg text-sm font-medium text-center text-gray-700">Kingsbridge</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading text-brand-primary font-bold mb-6">Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-brand-primary mt-0 mb-3">Do you charge extra for emergency calls in the Bronx?</h3>
            <p className="text-gray-600 mb-0 leading-relaxed">No. We believe in transparent, flat-rate pricing for all boroughs. You will always know the cost before we dispatch a technician.</p>
          </div>
        </div>

        {/* Internal Linking Phase 6 block */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Our Services in The Bronx</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/transponder-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Transponder Key Duplication in The Bronx</Link>
            <Link href="/key-fob-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Key Fob Duplication in The Bronx</Link>
            <Link href="/smart-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Smart Key Duplication in The Bronx</Link>
            <Link href="/push-to-start-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Push-to-Start Key Duplication in The Bronx</Link>
            <Link href="/laser-cut-key-duplication" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Laser-Cut Key Duplication in The Bronx</Link>
            <Link href="/spare-key-copy" className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Spare Key Copy in The Bronx</Link>
          </div>

          <h3 className="text-xl font-bold text-brand-primary mt-10 mb-4">Popular Vehicle Makes Serviced in The Bronx</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/toyota-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Toyota Key Duplication</Link>
            <Link href="/honda-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Honda Key Duplication</Link>
            <Link href="/ford-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">Ford Key Duplication</Link>
            <Link href="/bmw-key-duplication" className="text-gray-600 hover:text-brand-accent underline text-sm">BMW Key Duplication</Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p className="font-semibold mb-3">We also serve other boroughs:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/brooklyn" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Also serving Brooklyn</Link>
              <Link href="/queens" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Also serving Queens</Link>
              <Link href="/manhattan" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Also serving Manhattan</Link>
              <Link href="/staten-island" className="bg-gray-100 px-3 py-1 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs">Also serving Staten Island</Link>
            </div>
            
          </div>
        </div>

        <CTABanner title="Stranded in The Bronx? We're on our way." subtitle="Book online or call us now for immediate, professional dispatch." />
      </div>
    </div>
  )
}