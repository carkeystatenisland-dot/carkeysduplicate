const fs = require('fs');
const path = require('path');

const BOROUGHS = [
  { slug: 'brooklyn', name: 'Brooklyn' },
  { slug: 'queens', name: 'Queens' },
  { slug: 'manhattan', name: 'Manhattan' },
  { slug: 'bronx', name: 'The Bronx' },
  { slug: 'staten-island', name: 'Staten Island' }
];

const SERVICE_TYPES = [
  { slug: 'transponder-key-duplication', name: 'Transponder Key Duplication' },
  { slug: 'key-fob-duplication', name: 'Key Fob Duplication' },
  { slug: 'smart-key-duplication', name: 'Smart Key Duplication' },
  { slug: 'push-to-start-key-duplication', name: 'Push-to-Start Key Duplication' },
  { slug: 'laser-cut-key-duplication', name: 'Laser-Cut Key Duplication' },
  { slug: 'spare-key-copy', name: 'Spare Key Copy' }
];

const CAR_MAKES = [
  { slug: 'toyota-key-duplication', name: 'Toyota' },
  { slug: 'honda-key-duplication', name: 'Honda' },
  { slug: 'ford-key-duplication', name: 'Ford' },
  { slug: 'bmw-key-duplication', name: 'BMW' },
  { slug: 'nissan-key-duplication', name: 'Nissan' },
  { slug: 'hyundai-key-duplication', name: 'Hyundai' },
  { slug: 'jeep-key-duplication', name: 'Jeep' },
  { slug: 'chevrolet-key-duplication', name: 'Chevrolet' },
  { slug: 'kia-key-duplication', name: 'Kia' },
  { slug: 'mercedes-key-duplication', name: 'Mercedes' },
  { slug: 'subaru-key-duplication', name: 'Subaru' },
  { slug: 'volkswagen-key-duplication', name: 'Volkswagen' }
];

const INTENT_PAGES = [
  { slug: 'mobile-car-key-duplication-nyc', title: 'Mobile Car Key Duplication NYC' },
  { slug: 'same-day-car-key-duplication-nyc', title: 'Same Day Car Key Duplication NYC' },
  { slug: '24-hour-car-key-duplication-nyc', title: '24 Hour Car Key Duplication NYC' }
];

const getBoroughTemplate = (b) => `
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: 'Car Key Duplication ${b.name} NYC | Mobile Service, We Come To You',
  description: 'Mobile car key duplication in ${b.name}. All neighborhoods covered. Transponder keys, smart keys, fobs. 30-60 min response. No towing needed — we come to you.'
}

export default function BoroughPage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Mobile Car Key Duplication in ${b.name}, NYC</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Fast, on-site service everywhere in ${b.name}. We come to you.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>Car Key Services in ${b.name}</h2>
          <p>We provide full mobile service throughout ${b.name}. Instead of towing your vehicle or waiting at a dealership, our fully-equipped vans come directly to your location to cut and program your key.</p>
        </div>
        
        <CTABanner title="Stranded in ${b.name}? We're on our way." subtitle="Call us now for immediate dispatch." />
      </div>
    </div>
  )
}
`;

const getServiceTemplate = (s) => `
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: '${s.name} NYC | Mobile, All Makes & Models',
  description: 'Professional ${s.name.toLowerCase()} across all NYC boroughs. We come to you.'
}

export default function ServicePage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">${s.name} in NYC — Mobile, On-Site Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>About Our ${s.name} Service</h2>
          <p>We utilize OEM-grade programming equipment to ensure your new key works flawlessly with your vehicle's immobilizer system.</p>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}
`;

const getMakeTemplate = (m) => `
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: '${m.name} Car Key Duplication NYC | Mobile Service',
  description: 'Mobile ${m.name} car key duplication across NYC. Transponders and smart keys programmed on-site.'
}

export default function MakePage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">${m.name} Car Key Duplication NYC — Mobile Service</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Specialized programming for ${m.name} vehicles.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2>${m.name} Key Technology</h2>
          <p>Our technicians carry specialized programming equipment required for ${m.name} vehicles, ensuring your new key is correctly synced with the immobilizer.</p>
        </div>
        
        <CTABanner />
      </div>
    </div>
  )
}
`;

const getIntentTemplate = (i) => `
import CTABanner from '@/components/ui/CTABanner'
import TrustBadges from '@/components/ui/TrustBadges'

export const metadata = {
  title: '${i.title}',
  description: '${i.title} across all 5 boroughs. We come to you.'
}

export default function IntentPage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-primary text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">${i.title}</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">Expert on-site programming and cutting.</p>
        <div className="mt-8"><TrustBadges /></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <CTABanner />
      </div>
    </div>
  )
}
`;

const writePage = (dirPath, content) => {
  const fullPath = path.join(__dirname, '../src/app', dirPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), content.trim());
}

BOROUGHS.forEach(b => writePage(b.slug, getBoroughTemplate(b)));
SERVICE_TYPES.forEach(s => writePage(s.slug, getServiceTemplate(s)));
CAR_MAKES.forEach(m => writePage(m.slug, getMakeTemplate(m)));
INTENT_PAGES.forEach(i => writePage(i.slug, getIntentTemplate(i)));

console.log('All 42 route pages generated successfully.');
