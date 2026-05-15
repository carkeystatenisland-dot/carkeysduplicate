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
        
        <CTABanner title="Stranded in Queens? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}