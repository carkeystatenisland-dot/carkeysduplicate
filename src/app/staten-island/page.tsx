import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication Staten Island NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in Staten Island. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in Staten Island, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in Staten Island. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Why Mobile Matters in Staten Island</h2>
          <p dangerouslySetInnerHTML={{ __html: "As the most car-dependent borough in New York City, over 75% of Staten Island households own a vehicle. Having a reliable spare key isn't a luxury here—it's a necessity for daily life." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "We specialize in mobile car key duplication across all Staten Island neighborhoods, from Tottenville to St. George." }}></p>
          <p dangerouslySetInnerHTML={{ __html: "If you need a complete key replacement rather than a simple duplication, please visit our sister service. For full car key replacement services on Staten Island, visit <a href='https://www.carkeyreplacementstatenisland.com' target='_blank' rel='noopener noreferrer' className='text-brand-accent underline'>car key replacement Staten Island</a>." }}></p>

          <h2>Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-bold text-lg mt-0">What's the difference between this service and your sister site?</h3>
            <p className="mb-0">We specialize purely in duplication and spare keys here, while our sister site handles complete key origination when all keys are lost.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
             <Link href="/transponder-key-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Transponder Keys in Staten Island</Link>
             <Link href="/key-fob-duplication" className="bg-brand-light p-4 rounded text-center hover:bg-brand-accent transition-colors font-bold text-brand-primary">Key Fobs in Staten Island</Link>
          </div>
        </div>
        
        <CTABanner title="Stranded in Staten Island? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}