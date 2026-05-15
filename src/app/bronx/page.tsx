import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication The Bronx NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in The Bronx. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in The Bronx, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in The Bronx. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in The Bronx</h2>
          <p dangerouslySetInnerHTML={{ __html: "The Bronx boasts a high rate of car ownership, with many residents relying heavily on their vehicles for commuting outside the borough. We see high demand for key duplication on reliable daily drivers like the Toyota Camry, Honda Accord, and Nissan Altima." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "Our mobile technicians regularly service large residential areas including Co-op City, Riverdale, and Pelham Bay, bringing dealership-level key programming right to your driveway." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "Response Time: Typically 30–60 minutes anywhere in the Bronx." }}></p>

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">Can you program a key if I live in a large complex like Co-op City?</h3>
            <p className="mb-0">Yes, we can meet you at your designated parking spot or nearby street parking.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in The Bronx</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in The Bronx</Link>
          </div>
        </div>
        
        <CTABanner title="Stranded in The Bronx? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}