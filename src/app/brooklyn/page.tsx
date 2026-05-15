import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication Brooklyn NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in Brooklyn. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in Brooklyn, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in Brooklyn. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in Brooklyn</h2>
          <p dangerouslySetInnerHTML={{ __html: "Brooklyn's unique parking culture—complete with alternate side parking rules and tight street spots—means getting stranded without a key is incredibly stressful. Many Brooklyn drivers rely on their vehicles for daily work commutes into Manhattan or other boroughs." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "We frequently serve neighborhoods like Bay Ridge, Bensonhurst, Flatbush, and Canarsie. Whether you drive a Jeep, Honda, or Toyota—the most common makes in Brooklyn—our mobile units are equipped to handle your specific key system." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "Response Time: Typically 30–60 minutes anywhere in Brooklyn." }}></p>

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">Can you come to a parking garage in Brooklyn?</h3>
            <p className="mb-0">Yes, our mobile vans are equipped to handle services inside parking garages or tight street spots.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in Brooklyn</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in Brooklyn</Link>
          </div>
        </div>
        
        <CTABanner title="Stranded in Brooklyn? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}