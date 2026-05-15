import { generatePageMetadata } from '@/lib/metadata'
import CTABanner from '@/components/ui/CTABanner'
import { ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'About Us | Car Keys Duplication NYC',
  description: 'Learn about our mobile automotive locksmith team serving all 5 boroughs of New York City.',
  slug: '/about'
})

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-6">
          About Car Keys Duplication
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          New York City's premier mobile automotive locksmith service. We bring the dealership directly to you.
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2>Our Mission</h2>
          <p>
            We founded Car Keys Duplication with one simple goal: to eliminate the stress, cost, and waiting times associated with replacing or duplicating car keys at a traditional dealership. In a fast-paced city like New York, you don't have days to wait for a new key, and you certainly don't want to pay exorbitant towing fees just to get your vehicle to a service center.
          </p>
          <p>
            Our fully equipped mobile workshops act as self-contained laboratories. We carry the exact same OEM-grade diagnostic scanners, key cutting machines, and programming software that the dealerships use. The only difference? We come to your exact GPS coordinates, whether you're parked in a tight Brooklyn driveway, a Manhattan parking garage, or stranded at JFK airport.
          </p>

          <h2>Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex gap-4">
            <Clock className="w-8 h-8 text-brand-accent shrink-0" />
            <div>
              <h3 className="font-bold text-brand-primary text-lg mb-2">Rapid Response</h3>
              <p className="text-sm text-gray-600">Our technicians are strategically positioned across the 5 boroughs to ensure industry-leading response times.</p>
            </div>
          </div>
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex gap-4">
            <Wrench className="w-8 h-8 text-brand-accent shrink-0" />
            <div>
              <h3 className="font-bold text-brand-primary text-lg mb-2">OEM-Level Technology</h3>
              <p className="text-sm text-gray-600">We utilize licensed software to securely program advanced transponders, smart keys, and push-to-start fobs.</p>
            </div>
          </div>
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-accent shrink-0" />
            <div>
              <h3 className="font-bold text-brand-primary text-lg mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">Fully licensed to operate in NYC. We are bonded and insured, ensuring you are protected at all times.</p>
            </div>
          </div>
          <div className="bg-brand-light p-6 rounded-xl border border-gray-100 flex gap-4">
            <MapPin className="w-8 h-8 text-brand-accent shrink-0" />
            <div>
              <h3 className="font-bold text-brand-primary text-lg mb-2">All 5 Boroughs</h3>
              <p className="text-sm text-gray-600">We proudly serve Brooklyn, Queens, Manhattan, The Bronx, and Staten Island without hidden travel fees.</p>
            </div>
          </div>
        </div>

        <CTABanner title="Ready to get back on the road?" subtitle="Our mobile technicians are standing by." />
      </div>
    </div>
  )
}
