import QuoteForm from '@/components/ui/QuoteForm'
import TrustBadges from '@/components/ui/TrustBadges'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Get a Free Car Key Duplication Quote | NYC Mobile Service',
  description: 'Get a free, no-obligation quote for car key duplication in NYC. No hidden fees. We serve all 5 boroughs. Response within 15 minutes.',
  slug: '/request-a-quote'
})

export default function RequestQuotePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary tracking-tight mb-4">
            Get a Free Car Key Duplication Quote — NYC
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            No hidden fees. No dealer markup. Mobile service to your location.
          </p>
        </div>

        <div className="mb-12">
          <QuoteForm />
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">Price Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">What determines the price?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Vehicle Year, Make, and Model</li>
                <li>• Key Technology (Transponder, Smart, Laser-cut)</li>
                <li>• Whether you have a working key or lost all keys</li>
                <li>• Type of programming required</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Why we're cheaper than dealers</h3>
              <p className="text-gray-600 mb-2">
                Dealerships mark up key replacements by 200-300% and often charge a separate "programming fee" of $150+.
              </p>
              <p className="text-gray-600">
                We use the exact same OEM-grade equipment but pass the savings directly to you, and you save on towing fees.
              </p>
            </div>
          </div>
        </div>

        <TrustBadges />

      </div>
    </div>
  )
}
