import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication Queens NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in Queens. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in Queens, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in Queens. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in Queens</h2>
          <p dangerouslySetInnerHTML={{ __html: "Queens has the most registered vehicles of any NYC borough. Due to limited subway coverage in eastern Queens, heavy car dependency is a reality for many residents. Because of the high number of multi-family homes, creating a spare key for a family member is our most common request." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "We cover the entirety of the borough, including Flushing, Jamaica, Jackson Heights, and Astoria. We also frequently dispatch technicians to JFK and LaGuardia airports for travelers who have lost their keys." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "Response Time: Typically 30–60 minutes anywhere in Queens." }}></p>

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">Do you service vehicles stuck at JFK or LaGuardia?</h3>
            <p className="mb-0">Yes, we dispatch directly to airport parking lots to assist with lost or duplicated keys.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in Queens</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in Queens</Link>
          </div>
        </div>
        
        
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Our Services in Queens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/transponder-key-duplication" className="text-brand-accent hover:underline">Transponder Key Duplication in Queens</Link>\n              <Link href="/key-fob-duplication" className="text-brand-accent hover:underline">Key Fob Duplication in Queens</Link>\n              <Link href="/smart-key-duplication" className="text-brand-accent hover:underline">Smart Key Duplication in Queens</Link>\n              <Link href="/push-to-start-key-duplication" className="text-brand-accent hover:underline">Push-to-Start Key Duplication in Queens</Link>\n              <Link href="/laser-cut-key-duplication" className="text-brand-accent hover:underline">Laser-Cut Key Duplication in Queens</Link>\n              <Link href="/spare-key-copy" className="text-brand-accent hover:underline">Spare Key Copy in Queens</Link>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Popular Vehicle Makes Serviced in Queens</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/toyota-key-duplication" className="text-brand-accent hover:underline">Toyota Key Duplication</Link>\n              <Link href="/honda-key-duplication" className="text-brand-accent hover:underline">Honda Key Duplication</Link>\n              <Link href="/ford-key-duplication" className="text-brand-accent hover:underline">Ford Key Duplication</Link>\n              <Link href="/bmw-key-duplication" className="text-brand-accent hover:underline">BMW Key Duplication</Link>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/book-now" className="btn-secondary">Book Mobile Service Now</Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p>We also serve other boroughs:</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/brooklyn" className="hover:text-brand-accent">Also serving Brooklyn</Link>\n                <Link href="/manhattan" className="hover:text-brand-accent">Also serving Manhattan</Link>\n                <Link href="/bronx" className="hover:text-brand-accent">Also serving The Bronx</Link>\n                <Link href="/staten-island" className="hover:text-brand-accent">Also serving Staten Island</Link>
              </div>
              
            </div>
          </div>
  
        <CTABanner title="Stranded in Queens? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}