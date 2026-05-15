import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Push-to-Start Key Duplication in NYC | Mobile, All Makes & Models',
  description: 'Professional push-to-start key duplication across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16 bg-white">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Push-to-Start Key Duplication in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>What is Push-to-Start Key Duplication?</h2>
          <p>Often confused with smart keys, push-to-start fobs communicate directly with a push-button ignition module. Because this involves deeper integration with the vehicle's starting mechanism, programming is highly complex and requires specialized diagnostic tools. The vehicle must be present during the service. If you only have one push-to-start fob left, we highly recommend getting a spare before an emergency replacement is needed.</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>You Call or Book:</strong> Provide your vehicle details and location in NYC.</li>
            <li><strong>We Dispatch:</strong> A fully equipped mobile technician arrives at your vehicle.</li>
            <li><strong>On-Site Programming:</strong> We cut the blade and connect our diagnostic tools to your OBD-II port to program the chip.</li>
          </ol>
          
          <h2>Available In All NYC Boroughs</h2>
          <p>We provide push-to-start key duplication in <Link href="/brooklyn">Brooklyn</Link>, <Link href="/queens">Queens</Link>, <Link href="/manhattan">Manhattan</Link>, <Link href="/bronx">The Bronx</Link>, and <Link href="/staten-island">Staten Island</Link>.</p>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}