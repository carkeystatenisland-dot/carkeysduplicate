import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Laser-Cut Key Duplication in NYC | Mobile, All Makes & Models',
  description: 'Professional laser-cut key duplication across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Laser-Cut Key Duplication in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>What is Laser-Cut Key Duplication?</h2>
          <p>Laser-cut keys, also known as sidewinder keys, feature a distinctive side-milling pattern rather than traditional jagged cuts on the edge. Common on European vehicles like BMW, Mercedes, Audi, and VW, as well as newer Fords and Hondas, these keys require an expensive, specialized laser cutting machine to duplicate. Standard hardware store machines cannot cut these blades. In almost all cases, laser-cut keys also contain a transponder chip that must be programmed.</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>You Call or Book:</strong> Provide your vehicle details and location in NYC.</li>
            <li><strong>We Dispatch:</strong> A fully equipped mobile technician arrives at your vehicle.</li>
            <li><strong>On-Site Programming:</strong> We cut the blade and connect our diagnostic tools to your OBD-II port to program the chip.</li>
          </ol>
          
          <h2>Available In All NYC Boroughs</h2>
          <p>We provide laser-cut key duplication in <Link href="/brooklyn">Brooklyn</Link>, <Link href="/queens">Queens</Link>, <Link href="/manhattan">Manhattan</Link>, <Link href="/bronx">The Bronx</Link>, and <Link href="/staten-island">Staten Island</Link>.</p>
        </div>
        
        
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Available in All NYC Boroughs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/brooklyn" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in Brooklyn</Link>\n              <Link href="/queens" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in Queens</Link>\n              <Link href="/manhattan" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in Manhattan</Link>\n              <Link href="/bronx" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in The Bronx</Link>\n              <Link href="/staten-island" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in Staten Island</Link>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Supported Vehicle Brands for Laser-Cut Key Duplication</h3>
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