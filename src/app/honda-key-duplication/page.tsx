import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Honda Car Key Duplication NYC | Mobile Service',
  description: 'Mobile Honda car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Honda Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for Honda vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Honda Key Technology</h2>
          <p>Modern Hondas heavily rely on the Honda G chip (ID47) and high-security laser-cut blades. We expertly duplicate keys for the Accord, Civic, CR-V, Pilot, and Odyssey.</p>
          
          <h2>What You'll Need</h2>
          <ul>
            <li>Your Vehicle Identification Number (VIN)</li>
            <li>Proof of ownership (Registration or Title)</li>
            <li>A valid photo ID</li>
            <li>Your existing working key (if you have one)</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-brand-accent p-6 my-8">
            <h3 className="mt-0">Need full key replacement for your Honda?</h3>
            <p className="mb-0">Our Staten Island specialists offer complete Honda key replacement services. Visit <a href="https://www.carkeyreplacementstatenisland.com/honda-keys" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline font-bold">Honda key replacement Staten Island</a>.</p>
          </div>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}