import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Push-to-Start Key Duplication NYC | Mobile, All Makes & Models',
  description: 'Professional push-to-start key duplication across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Push-to-Start Key Duplication in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>About Our Push-to-Start Key Duplication Service</h2>
          <p>We utilize OEM-grade programming equipment to ensure your new key works flawlessly with your vehicle's immobilizer system.</p>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}