import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'
import { CheckCircle2, Zap, Clock, ShieldCheck, MapPin, Truck, Award, UserCheck, Lock } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: `24 Hour Car Key Duplication NYC | Fast On-Site Service`,
  description: `Our dispatchers and technicians are on-call 24/7, 365 days a year. Whether it's New Year's Eve or a Sunday morning, we are the only ones answering the phone. Professional automotive locksmiths serving all NYC boroughs.`,
  slug: `24-hour-car-key-duplication-nyc`
})

export default function IntentPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">24 Hour Car Key Duplication NYC</h1>
          <p className="text-xl text-gray-300 font-medium mb-8">Lost your keys at 3 AM in a parking garage?</p>
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
          <h2 className="text-4xl font-heading text-brand-primary font-bold text-center mb-10">Why Choose Us for 24 Hour Car Key Duplication NYC?</h2>
          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-inner">
            <p className="text-xl leading-relaxed text-gray-800 text-center">Our dispatchers and technicians are on-call 24/7, 365 days a year. Whether it's New Year's Eve or a Sunday morning, we are the only ones answering the phone.</p>
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
              <Link href="/brooklyn" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Brooklyn</Link>
              <Link href="/queens" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Queens</Link>
              <Link href="/manhattan" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Manhattan</Link>
              <Link href="/bronx" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> The Bronx</Link>
              <Link href="/staten-island" className="flex items-center gap-2 hover:text-brand-accent transition-colors"><MapPin className="w-4 h-4 text-brand-accent" /> Staten Island</Link>
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </div>
  )
}