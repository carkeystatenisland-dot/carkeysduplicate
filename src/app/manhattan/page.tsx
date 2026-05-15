import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication Manhattan NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in Manhattan. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in Manhattan, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in Manhattan. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in Manhattan</h2>
          <p dangerouslySetInnerHTML={{ __html: "Contrary to the stereotype, Manhattan is home to plenty of car owners. The most common situations we see involve keys locked inside or lost in parking garages, or drivers needing a quick spare for a valet." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "We service all vehicles, including the premium makes that are particularly common in Manhattan, such as BMW, Mercedes, and Lexus. Since we are fully mobile, we avoid the massive overhead of a Manhattan storefront, passing the savings on to you." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "Response Time: Typically 20–45 minutes in Manhattan, as our mobile service bypasses many traditional traffic and parking barriers." }}></p>

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">Do you charge extra for Manhattan service?</h3>
            <p className="mb-0">No, our base service call fee remains consistent across all boroughs.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in Manhattan</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in Manhattan</Link>
          </div>
        </div>
        
        <CTABanner title="Stranded in Manhattan? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}