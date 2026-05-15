import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication Queens NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in Queens. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in Queens, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in Queens. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Car Key Services in Queens</h2>
          <p>We provide full mobile service throughout Queens. Instead of towing your vehicle or waiting at a dealership, our fully-equipped vans come directly to your location to cut and program your key.</p>
        </div>
        
        <CTABanner title="Stranded in Queens? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}