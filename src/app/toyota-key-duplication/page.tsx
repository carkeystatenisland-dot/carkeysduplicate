import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Toyota Car Key Duplication NYC | Mobile Service',
  description: 'Mobile Toyota car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Toyota Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for Toyota vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Toyota Key Technology</h2>
          <p>Toyota vehicles utilize a range of chip systems, notably transitioning to the highly secure H-chip (Texas Crypto 128-bit) around 2010. Generic key cutters lack the software to program H-chips. We cover all popular models including Camry, Corolla, RAV4, Highlander, Prius, Tacoma, and Tundra.</p>
          
          <h2>What You'll Need</h2>
          <ul>
            <li>Your Vehicle Identification Number (VIN)</li>
            <li>Proof of ownership (Registration or Title)</li>
            <li>A valid photo ID</li>
            <li>Your existing working key (if you have one)</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-brand-accent p-6 my-8">
            <h3 className="mt-0">Need full key replacement for your Toyota?</h3>
            <p className="mb-0">Our Staten Island specialists offer complete Toyota key replacement services. Visit <a href="https://www.carkeyreplacementstatenisland.com/toyota-keys" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline font-bold">Toyota key replacement Staten Island</a>.</p>
          </div>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}