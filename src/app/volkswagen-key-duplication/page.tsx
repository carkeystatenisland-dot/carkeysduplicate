import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Volkswagen Car Key Duplication NYC | Mobile Service',
  description: 'Mobile Volkswagen car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Volkswagen Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for Volkswagen vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Volkswagen Key Technology</h2>
          <p>VW's highly secure Megamos Crypto 48 and MQB platforms make duplication complex. We service the Jetta, Passat, Tiguan, and Golf.</p>
          
          <h2>What You'll Need</h2>
          <ul>
            <li>Your Vehicle Identification Number (VIN)</li>
            <li>Proof of ownership (Registration or Title)</li>
            <li>A valid photo ID</li>
            <li>Your existing working key (if you have one)</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-brand-accent p-6 my-8">
            <h3 className="mt-0">Need full key replacement for your Volkswagen?</h3>
            <p className="mb-0">Our Staten Island specialists offer complete Volkswagen key replacement services. Visit <a href="https://www.carkeyreplacementstatenisland.com/volkswagen-keys" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline font-bold">Volkswagen key replacement Staten Island</a>.</p>
          </div>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}