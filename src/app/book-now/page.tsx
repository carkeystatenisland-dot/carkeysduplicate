import BookingForm from '@/components/ui/BookingForm'
import TrustBadges from '@/components/ui/TrustBadges'
import { SITE } from '@/lib/constants'

export const metadata = {
  title: 'Book Mobile Car Key Duplication in NYC',
  description: 'Book our mobile car key duplication service. We come to you anywhere in the 5 boroughs. 24/7 fast response.',
}

export default function BookNowPage() {
  return (
    <div className="bg-brand-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary tracking-tight mb-4">
            Book Mobile Car Key Duplication in NYC
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            We come to you — anywhere in all 5 boroughs
          </p>
        </div>

        <TrustBadges />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          <div className="lg:col-span-8">
            <BookingForm />
            <div className="mt-8 text-center text-gray-600 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="font-medium text-lg">Need it faster? Call us directly:</p>
              <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-brand-accent mt-2 block hover:text-yellow-500 transition-colors">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-brand-primary mb-4">What to have ready:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Vehicle Identification Number (VIN)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Valid Photo ID or Driver's License</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Proof of Vehicle Ownership</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>The vehicle must be present</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-primary text-white p-6 rounded-xl shadow-md border-t-4 border-brand-accent">
              <h3 className="text-lg font-bold text-brand-accent mb-2">Our Promise</h3>
              <p className="font-medium">
                We confirm your booking within 15 minutes of submission and dispatch a technician to your exact location.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
