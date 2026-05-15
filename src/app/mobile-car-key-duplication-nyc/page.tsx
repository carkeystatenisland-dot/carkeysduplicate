import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Mobile Car Key Duplication NYC',
  description: 'Mobile Car Key Duplication NYC across all 5 boroughs. We come to you.'
}

export default function IntentPage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <CTABanner />
      </div>
    </div>
  )
}