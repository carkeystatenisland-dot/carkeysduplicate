import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'BMW Car Key Duplication NYC | Mobile Service',
  description: 'Mobile BMW car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">BMW Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for BMW vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>BMW Key Technology</h2>
          <p>BMW utilizes complex CAS and FEM/BDC systems with Hitag 2 encryption. Duplicating a BMW key requires dealer-level diagnostic equipment. We service the 3 Series, 5 Series, X3, X5, and more.</p>
          
          <h2>What You'll Need</h2>
          <ul>
            <li>Your Vehicle Identification Number (VIN)</li>
            <li>Proof of ownership (Registration or Title)</li>
            <li>A valid photo ID</li>
            <li>Your existing working key (if you have one)</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-brand-accent p-6 my-8">
            <h3 className="mt-0">Need full key replacement for your BMW?</h3>
            <p className="mb-0">Our Staten Island specialists offer complete BMW key replacement services. Visit <a href="https://www.carkeyreplacementstatenisland.com/bmw-keys" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline font-bold">BMW key replacement Staten Island</a>.</p>
          </div>
        </div>
        
        
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">BMW Key Duplication Available In:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/brooklyn" className="text-brand-accent hover:underline">BMW key duplication in Brooklyn</Link>\n              <Link href="/queens" className="text-brand-accent hover:underline">BMW key duplication in Queens</Link>\n              <Link href="/manhattan" className="text-brand-accent hover:underline">BMW key duplication in Manhattan</Link>\n              <Link href="/bronx" className="text-brand-accent hover:underline">BMW key duplication in The Bronx</Link>\n              <Link href="/staten-island" className="text-brand-accent hover:underline">BMW key duplication in Staten Island</Link>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/transponder-key-duplication" className="btn-secondary">View Transponder Key Services</Link>
            </div>
          </div>
  
        <CTABanner />
      </div>
    </div>
  )
}