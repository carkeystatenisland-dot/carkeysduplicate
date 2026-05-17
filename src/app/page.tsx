import Link from 'next/link'
import { ArrowRight, Clock, CheckCircle2, ShieldCheck, MapPin, Phone } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES, CAR_MAKES } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import TrustBadges from '@/components/ui/TrustBadges'
import BoroughCard from '@/components/ui/BoroughCard'
import ServiceCard from '@/components/ui/ServiceCard'
import MakeCard from '@/components/ui/MakeCard'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata = generatePageMetadata({
  title: 'Mobile Car Key Duplication NYC | All 5 Boroughs — We Come To You',
  description: 'Mobile car key duplication across Brooklyn, Queens, Manhattan, Bronx & Staten Island. We copy transponder keys, fobs & smart keys on-site. Same-day service.',
  slug: '/'
})

export default function Home() {
  const faqItems = [
    {
      question: "How much does car key duplication cost in NYC?",
      answer: "Car key duplication typically starts at $95 for basic transponder keys and can go up to $175+ for smart keys or push-to-start fobs. The exact price depends on your vehicle's make, model, year, and the type of key technology it uses. We always provide a clear, upfront quote before starting any work."
    },
    {
      question: "Can you duplicate a key without the original?",
      answer: "Yes! While having an original key makes the process faster (key cloning), our mobile locksmiths can generate a completely new key from scratch using your vehicle's VIN and specialized programming equipment. This is known as key origination."
    },
    {
      question: "What's the difference between key duplication and key replacement?",
      answer: "Duplication means you have at least one working key, and we make a copy of it. This is usually faster and cheaper. Replacement means you have lost all working keys, and we must cut and program a brand new key from scratch, which requires more advanced programming steps."
    },
    {
      question: "Do you come to my location or do I need to go somewhere?",
      answer: "We are a 100% mobile service. We come directly to your location anywhere in the 5 boroughs of NYC. Whether you're at home, at work, or stranded in a parking garage, our fully equipped vans arrive ready to cut and program your key on-site."
    },
    {
      question: "How long does mobile car key duplication take?",
      answer: "Once our technician arrives, the actual key cutting and programming process typically takes 15 to 30 minutes, depending on the complexity of your vehicle's security system. Same-day service is our standard."
    },
    {
      question: "Do you service all car makes and models?",
      answer: "We service over 95% of vehicles on the road today, including major brands like Toyota, Honda, Ford, Nissan, BMW, Mercedes, and many more. We handle standard transponders, laser-cut keys, and advanced smart fobs."
    },
    {
      question: "Is your service available 24/7?",
      answer: "Yes, our mobile dispatch operates 24 hours a day, 7 days a week. Car key emergencies don't happen on a schedule, so we're always ready to respond across all NYC boroughs."
    }
  ]

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
            24/7 Mobile Locksmith Service
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Mobile Car Key Duplication — We Come To You, Anywhere in NYC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Serving all 5 boroughs. Transponder keys, smart keys, key fobs — duplicated on-site.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link 
              href="/book-now"
              className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg flex items-center justify-center gap-2"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/request-a-quote"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg"
            >
              Get a Free Quote
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 max-w-3xl mx-auto">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* 2. BOROUGH GRID */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">We Serve All 5 NYC Boroughs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mobile units are stationed across the city for rapid response. Select your borough to see coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {BOROUGHS.map((borough) => (
              <BoroughCard key={borough.slug} borough={borough} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Car Key Duplication Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From basic transponder chips to advanced proximity smart keys, we have the technology to program them all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_TYPES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          
          {/* Internal links to resolve orphan pages (0 href inlinks) */}
          <div className="mt-12 text-center border-t border-gray-100 pt-8">
            <p className="text-sm md:text-base font-medium text-gray-500">
              Need specialized response? We offer rapid{' '}
              <Link href="/same-day-car-key-duplication-nyc" className="text-brand-primary hover:text-brand-accent font-bold underline transition-colors">
                Same-Day Service
              </Link>
              ,{' '}
              <Link href="/24-hour-car-key-duplication-nyc" className="text-brand-primary hover:text-brand-accent font-bold underline transition-colors">
                24-Hour Emergency Dispatches
              </Link>
              , and full{' '}
              <Link href="/mobile-car-key-duplication-nyc" className="text-brand-primary hover:text-brand-accent font-bold underline transition-colors">
                Mobile Car Key Duplication
              </Link>{' '}
              anywhere in NYC.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Our Mobile Service Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We've completely eliminated the need for towing or waiting at a dealership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-brand-accent/30 z-0"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-brand-accent rounded-full flex items-center justify-center shadow-lg border-4 border-brand-primary">
                <Phone className="w-10 h-10 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">1. Call or Book Online</h3>
                <p className="text-gray-300">Tell us your car's year, make, and model, and your exact location in NYC.</p>
              </div>
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-brand-accent rounded-full flex items-center justify-center shadow-lg border-4 border-brand-primary">
                <MapPin className="w-10 h-10 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. We Drive to You</h3>
                <p className="text-gray-300">Our fully-equipped mobile van arrives at your location, whether you're at home or stranded.</p>
              </div>
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-brand-accent rounded-full flex items-center justify-center shadow-lg border-4 border-brand-primary">
                <CheckCircle2 className="w-10 h-10 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Key Duplicated On-Site</h3>
                <p className="text-gray-300">We cut the blade and program the chip to your vehicle's computer in minutes. You're done!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAR MAKES SECTION */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">We Duplicate Keys For All Makes</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our technicians carry specialized programming equipment for domestic, Asian, and European vehicles.
              </p>
            </div>
            <Link href="/request-a-quote" className="text-brand-accent font-bold hover:text-yellow-600 transition-colors whitespace-nowrap">
              Don't see your make? Contact us →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CAR_MAKES.map((make) => (
              <MakeCard key={make.slug} make={make} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US vs DEALER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Why NYC Drivers Choose Us Over the Dealer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save time, money, and a huge headache. Here is the honest comparison.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 font-bold text-gray-600">Factor</th>
                  <th className="py-4 px-6 font-bold text-gray-600 bg-red-50 text-red-800">The Dealership</th>
                  <th className="py-4 px-6 font-bold text-brand-primary bg-brand-accent/20">NYC Keys (Us)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-800">Transponder Key Cost</td>
                  <td className="py-4 px-6 text-gray-600 bg-red-50/50">$250 – $400+</td>
                  <td className="py-4 px-6 font-bold text-brand-primary bg-brand-light">From $95</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-800">Wait Time</td>
                  <td className="py-4 px-6 text-gray-600 bg-red-50/50">2–5 business days</td>
                  <td className="py-4 px-6 font-bold text-brand-primary bg-brand-light">Same day (often under 2 hrs)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-800">Towing Required?</td>
                  <td className="py-4 px-6 text-gray-600 bg-red-50/50">Often Yes (if all keys lost)</td>
                  <td className="py-4 px-6 font-bold text-brand-primary bg-brand-light">Never — We come to you</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-800">Convenience</td>
                  <td className="py-4 px-6 text-gray-600 bg-red-50/50">You take time off work</td>
                  <td className="py-4 px-6 font-bold text-brand-primary bg-brand-light">We meet you anywhere</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Common Questions About Car Key Duplication</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our mobile service in NYC.
            </p>
          </div>
          
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* 8. INLINE CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>

      {/* 9. BLOG PREVIEW (Static for now, dynamic later) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">From Our Blog</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Expert tips and guides from our NYC automotive locksmith specialists.
              </p>
            </div>
            <Link href="/blog" className="text-brand-accent font-bold hover:text-yellow-600 transition-colors whitespace-nowrap">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dummy Blog Cards based on briefs */}
            <Link href="/blog/car-key-duplication-cost-nyc" className="block group">
              <div className="bg-brand-light rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors"></div>
                  {/* Placeholder image representation */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">Article Image</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                    How Much Does Car Key Duplication Cost in NYC? (2025 Guide)
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    Real price ranges by service type and make. Discover why NYC prices differ and what red flags to avoid.
                  </p>
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Read Article</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/dealer-vs-locksmith-key-duplication-nyc" className="block group">
              <div className="bg-brand-light rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">Article Image</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                    Dealer vs. Mobile Locksmith for Key Duplication
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    An honest comparison of speed, cost, quality, and convenience between NYC dealerships and mobile locksmiths.
                  </p>
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Read Article</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/can-you-duplicate-transponder-key" className="block group">
              <div className="bg-brand-light rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">Article Image</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                    Can You Duplicate a Transponder Key?
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    What NYC drivers need to know about chip keys, cloning vs. programming, and when you need the original key.
                  </p>
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Read Article</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
