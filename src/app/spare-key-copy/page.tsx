import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Spare Key Copy in NYC | Mobile, All Makes & Models',
  description: 'Professional spare key copy across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Spare Key Copy in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>What is Spare Key Copy?</h2>
          <p>Getting a spare key copy made before you lose your original is the smartest, most cost-effective decision you can make as a car owner. Emergency key replacement when all keys are lost can cost 3 to 5 times more than a simple proactive duplication. Even basic 'spare keys' for modern cars require chip programming. We can cut and program your spare on-site in about 15 to 30 minutes.</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>You Call or Book:</strong> Provide your vehicle details and location in NYC.</li>
            <li><strong>We Dispatch:</strong> A fully equipped mobile technician arrives at your vehicle.</li>
            <li><strong>On-Site Programming:</strong> We cut the blade and connect our diagnostic tools to your OBD-II port to program the chip.</li>
          </ol>
          
          <h2>Available In All NYC Boroughs</h2>
          <p>We provide spare key copy in <Link href="/brooklyn">Brooklyn</Link>, <Link href="/queens">Queens</Link>, <Link href="/manhattan">Manhattan</Link>, <Link href="/bronx">The Bronx</Link>, and <Link href="/staten-island">Staten Island</Link>.</p>
        </div>
        
        
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Available in All NYC Boroughs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/brooklyn" className="text-brand-accent hover:underline">Spare Key Copy in Brooklyn</Link>\n              <Link href="/queens" className="text-brand-accent hover:underline">Spare Key Copy in Queens</Link>\n              <Link href="/manhattan" className="text-brand-accent hover:underline">Spare Key Copy in Manhattan</Link>\n              <Link href="/bronx" className="text-brand-accent hover:underline">Spare Key Copy in The Bronx</Link>\n              <Link href="/staten-island" className="text-brand-accent hover:underline">Spare Key Copy in Staten Island</Link>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Supported Vehicle Brands for Spare Key Copy</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/toyota-key-duplication" className="text-brand-accent hover:underline">Toyota Key Duplication</Link>\n              <Link href="/honda-key-duplication" className="text-brand-accent hover:underline">Honda Key Duplication</Link>\n              <Link href="/ford-key-duplication" className="text-brand-accent hover:underline">Ford Key Duplication</Link>\n              <Link href="/bmw-key-duplication" className="text-brand-accent hover:underline">BMW Key Duplication</Link>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/book-now" className="btn-secondary">Book Mobile Service</Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p>Related Services:</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/transponder-key-duplication" className="hover:text-brand-accent">Transponder Key Duplication</Link>\n                <Link href="/key-fob-duplication" className="hover:text-brand-accent">Key Fob Duplication</Link>
              </div>
            </div>
          </div>
  
        <CTABanner />
      </div>
    </div>
  )
}