import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Clock, DollarSign, ClipboardCheck, Cpu } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES, CAR_MAKES } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import TrustBadges from '@/components/ui/TrustBadges'
import BoroughCard from '@/components/ui/BoroughCard'
import ServiceCard from '@/components/ui/ServiceCard'
import MakeCard from '@/components/ui/MakeCard'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import PriceTable from '@/components/content/PriceTable'

export const metadata = generatePageMetadata({
  title: 'Car Key Duplication NYC | Mobile Locksmith, We Come to You',
  description:
    'Car key duplication in NYC at your location: transponder keys, key fobs, smart keys and lost keys programmed on-site in 15-45 min. 5 boroughs, same day.',
  slug: '/',
  keywords: ['car key duplication nyc', 'car key copy nyc', 'duplicate car key nyc', 'car key duplicate', 'mobile car key maker', 'car locksmith nyc'],
})

const faqItems = [
  {
    question: 'How much does car key duplication cost in NYC?',
    answer:
      'With our mobile service a basic spare key costs $75, a transponder chip key $95-$180, a remote key fob $120-$220, a laser-cut key $150-$220 and a smart or push-to-start key $175-$395, travel included. Replacing a key when every key is lost costs $150-$450 depending on the key type. Dealers in NYC typically charge 40-60% more and require the car at the dealership. We quote a flat price by year, make and model before dispatching.',
  },
  {
    question: 'Can you duplicate a car key without the original?',
    answer:
      'Yes. If you have no working key we generate a new one from your VIN or by decoding the door lock, cut it, program it to the vehicle and erase the lost key. This is called key origination and we do it at your location. You will need photo ID and your registration, title or insurance card.',
  },
  {
    question: 'What is the difference between key duplication and key replacement?',
    answer:
      'Duplication means you still have a working key and we make a copy of it, which is faster and cheaper because the chip can be cloned or added in minutes. Replacement (all keys lost) means we must create a key from nothing: decode the lock or pull the key code by VIN, cut the blade and program a new chip or fob with no reference key.',
  },
  {
    question: 'Do you come to my location or do I need to bring the car somewhere?',
    answer:
      'We are 100% mobile. A licensed technician drives to your home, workplace, parking garage or the street anywhere in Brooklyn, Queens, Manhattan, The Bronx and Staten Island, and cuts and programs the key beside the car. There is no shop to visit and no towing.',
  },
  {
    question: 'How long does mobile car key duplication take?',
    answer:
      'Arrival is typically 30-60 minutes. Once on-site, a basic key takes 5-10 minutes, a transponder key 15-30 minutes, a remote fob 20-30 minutes and a smart key 30-45 minutes. All-keys-lost jobs take 45-90 minutes.',
  },
  {
    question: 'Which car makes can you make keys for?',
    answer:
      'We program keys for over 95% of vehicles on NYC roads, including Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, Jeep, Chrysler, Dodge, Subaru, Mazda, Volkswagen, Audi, BMW, Mercedes-Benz, Lexus, Acura and Infiniti. We handle standard transponders, laser-cut keys, remote fobs, smart keys and Chrysler Fobiks.',
  },
  {
    question: 'What do I need to show to get a car key made?',
    answer:
      'A government-issued photo ID and proof of ownership: registration, title or an insurance card in your name. New York City requires licensed locksmiths to verify ownership before cutting or programming any vehicle key, and we record each job as the Department of Consumer and Worker Protection rules require.',
  },
  {
    question: 'Is your mobile car key service available 24/7?',
    answer:
      'Yes. Scheduled and same-day service runs daily, and emergency dispatch for lost keys and lockouts is available 24 hours a day, 7 days a week across all five boroughs. After-hours emergency calls carry a fee we state before dispatch.',
  },
  {
    question: 'Is a mobile locksmith cheaper than the dealer for a car key?',
    answer:
      'For most mainstream makes, yes, by 40-60%. The dealer orders the key, needs the car on its lot (often by tow if no key works) and takes 2-5 business days. A mobile locksmith programs an OEM or FCC-approved key on-site the same day. Only a few brand-new or exotic models remain dealer-only, and we will tell you if yours is one.',
  },
  {
    question: 'Can you copy an apartment or building key fob?',
    answer:
      'No. We work exclusively on automotive keys and fobs. Building RFID fobs are cloned at key kiosks or hardware stores; car fobs must be programmed to the vehicle through its diagnostic port, which is our specialty.',
  },
  {
    question: '¿Hablan español?',
    answer:
      'Sí. Atendemos en español e inglés en los cinco condados. Visite nuestra página en español para copia de llaves de carro con chip, controles y llaves inteligentes en Nueva York.',
  },
]

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Licensed mobile automotive locksmith · All 5 boroughs · Se habla español
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6 max-w-5xl mx-auto">
            Car Key Duplication in NYC — We Come to You and Program It On-Site
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Transponder keys, key fobs, smart keys, laser-cut keys and lost-key replacement, cut and programmed at your
            location in Brooklyn, Queens, Manhattan, The Bronx and Staten Island. Same day, flat price, no towing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/book-now" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/request-a-quote" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
              Get a Free Quote
            </Link>
            <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-4 text-lg hover:text-brand-accent transition-colors">
              <Phone className="w-5 h-5 text-brand-accent" /> {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="bg-brand-light border-l-4 border-brand-accent rounded-r-2xl p-6 md:p-8 shadow-sm" aria-label="Quick answer">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">Quick answer</p>
            <p className="text-lg leading-relaxed text-gray-800">
              <strong>{SITE.name} is a licensed mobile locksmith that duplicates and programs car keys at your location anywhere in New York City.</strong>{' '}
              A spare transponder key costs <strong>$95-$180</strong>, a remote key fob <strong>$120-$220</strong> and a smart key{' '}
              <strong>$175-$395</strong>, travel included. Typical arrival is <strong>30-60 minutes</strong> and most keys are finished in
              15-45 minutes. We also replace keys when every key is lost, starting at <strong>$150</strong>. Bring photo ID and your registration.
            </p>
          </aside>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="bg-gray-50 py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Car Key Duplication Services in NYC</h2>
            <p className="text-lg text-gray-600">
              From a basic spare to an encrypted European smart key, every service below is performed on-site from a fully equipped van.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_TYPES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <ServiceCard service={{ name: 'Lost Car Key Replacement', slug: 'lost-car-key-replacement-nyc', description: 'All keys lost? New key generated from your VIN, programmed at the car, lost key erased.', price: 'From $150' }} />
          </div>
          <p className="text-center text-gray-600 mt-10">
            Need it fast? We offer{' '}
            <Link href="/same-day-car-key-duplicate-nyc" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">same-day service</Link>,{' '}
            <Link href="/24-hour-car-key-duplicate-nyc" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">24-hour emergency dispatch</Link>{' '}
            and fully{' '}
            <Link href="/mobile-car-key-duplicate-nyc" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">mobile car key duplication</Link>{' '}
            anywhere in NYC.
          </p>
        </div>
      </section>

      {/* 4. PRICING */}
      <section id="pricing" className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">How much does car key duplication cost in NYC?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Transparent 2026 prices with travel inside the five boroughs included. Your exact quote depends on year, make, model and whether you still have a working key.
          </p>
          <PriceTable
            caption="Car key duplication prices in New York City by key type"
            columns={['Key type', 'Copy (you have a key)', 'All keys lost', 'Typical NYC dealer']}
            rows={[
              ['Basic metal key', '$75', '$95 - $150', '$40 - $80 + trip'],
              ['Transponder (chip) key', '$95 - $180', '$150 - $260', '$200 - $400 + tow'],
              ['Laser-cut (sidewinder) key', '$150 - $220', '$200 - $300', '$250 - $450 + tow'],
              ['Remote key fob / flip key', '$120 - $220', '$220 - $350', '$250 - $450 + tow'],
              ['Smart / push-to-start key', '$175 - $395', '$260 - $450', '$350 - $600 + tow'],
              ['European luxury smart key', '$250 - $450', '$350 - $650', '$600 - $1,500 + tow'],
            ]}
            note="Flat quote before dispatch. No travel fee within NYC. After-hours emergency dispatch fee is disclosed up front."
          />
          <p className="text-gray-600">
            Full breakdown by make and situation in our guide: <Link href="/blog/car-key-duplicate-cost-nyc" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">car key duplication cost in NYC</Link>.
          </p>
        </div>
      </section>

      {/* 5. BOROUGHS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Mobile Car Key Service in All 5 NYC Boroughs</h2>
            <p className="text-lg text-gray-600">
              Based in East Elmhurst, Queens, minutes from LaGuardia and JFK, with vans routing through every borough daily. Select yours for neighborhoods and response times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {BOROUGHS.map((borough) => (
              <BoroughCard key={borough.slug} borough={borough} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">How Mobile Car Key Duplication Works</h2>
            <p className="text-lg text-gray-600">No towing, no dealership waiting room. Four steps, usually under two hours door to door.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: '1. Quote in minutes', text: 'Tell us the year, make, model, key type and where the car is. You get a flat price by phone or text.' },
              { icon: MapPin, title: '2. We drive to you', text: 'A licensed technician arrives in 30-60 minutes with blanks, cutters and OBD-II programmers for your make.' },
              { icon: ClipboardCheck, title: '3. ID and ownership check', text: 'We verify your photo ID and registration, as NYC locksmith rules require, before any key is cut.' },
              { icon: CheckCircle2, title: '4. Cut, program, test', text: 'Blade cut, chip or fob programmed, every function tested with your existing keys. Pay when it works.' },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center mb-4">
                  <s.icon className="w-8 h-8 text-brand-accent" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KEY TYPES EXPLAINED */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">Which car key do you have?</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">Knowing the key type explains the price and the method. All of these are duplicated on-site.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Transponder (chip) key', text: 'A metal key with a chip in the plastic head. The immobilizer must recognize the chip or the engine will not run. Cloned from your original or programmed via OBD-II.', href: '/transponder-key-duplicate', link: 'Transponder key duplication' },
              { title: 'Remote key fob / flip key', text: 'A transponder key plus lock, unlock, trunk and panic buttons using a rolling code. Must be programmed to the car; cannot be cloned at a kiosk.', href: '/key-fob-duplicate', link: 'Key fob copy & programming' },
              { title: 'Smart / push-to-start key', text: 'Proximity fob that unlocks when you touch the handle and starts the car with a button. Encrypted; programmed on-site, including European systems.', href: '/smart-key-duplicate', link: 'Smart key duplication' },
              { title: 'Laser-cut (sidewinder) key', text: 'A thick blade with a winding groove milled down the center. Requires a laser-cut machine, which we carry on the van.', href: '/laser-cut-key-duplicate', link: 'Laser-cut key duplication' },
            ].map((k) => (
              <div key={k.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{k.title}</h3>
                <p className="text-gray-600 mb-4">{k.text}</p>
                <Link href={k.href} className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">{k.link} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MAKES */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">We Duplicate Keys for All Makes</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Programming software and OEM-compatible blanks for domestic, Asian and European vehicles, including encrypted BMW, Mercedes-Benz and Volkswagen systems.</p>
            </div>
            <Link href="/request-a-quote" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent whitespace-nowrap">
              Don't see your make? Ask us →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAR_MAKES.map((make) => (
              <MakeCard key={make.slug} make={make} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEALER COMPARISON */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Why NYC Drivers Choose a Mobile Locksmith Over the Dealer</h2>
            <p className="text-lg text-gray-600">An honest comparison. For a few brand-new or exotic models the dealer is still the only option, and we will tell you so.</p>
          </div>
          <PriceTable
            caption="Dealership versus mobile locksmith for car key duplication in NYC"
            columns={['Factor', 'The dealership', `${SITE.name}`]}
            rows={[
              ['Transponder key cost', '$200 - $400', 'From $95'],
              ['Smart key cost', '$350 - $600+', 'From $175'],
              ['Wait time', '2-5 business days for the key', 'Same day, often under 2 hours'],
              ['Towing if all keys are lost', 'Usually required ($100-$250)', 'Never, we come to the car'],
              ['Where', 'Dealer lot, business hours', 'Your location, 24/7 emergency'],
              ['Ownership verification', 'Yes', 'Yes (NYC licensed)'],
            ]}
          />
          <p className="text-gray-600 text-center">
            Read the full comparison: <Link href="/blog/dealer-vs-locksmith-key-duplicate-nyc" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">dealer vs. locksmith for car keys in NYC</Link>.
          </p>
        </div>
      </section>

      {/* 10. TRUST */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Licensed, insured, verified', text: 'NYC-licensed locksmiths who check ID and ownership on every job and log each key as the Department of Consumer and Worker Protection requires. No "$15 locksmith" bait pricing.' },
              { icon: Clock, title: 'Same day, 24/7 emergencies', text: 'Vans based in Queens and Brooklyn reach most of the city within the hour. Scheduled daytime work has no surcharge; emergency fees are stated before dispatch.' },
              { icon: CheckCircle2, title: 'Tested before you pay', text: 'Engine start, every lock and every remote button are verified, and your existing keys are checked. OEM-level equipment that never bypasses the immobilizer.' },
            ].map((t) => (
              <div key={t.title} className="bg-brand-light rounded-2xl p-8 border border-gray-100">
                <t.icon className="w-10 h-10 text-brand-accent mb-4" aria-hidden="true" />
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{t.title}</h3>
                <p className="text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Car Key Duplication FAQs</h2>
            <p className="text-lg text-gray-600">The questions NYC drivers ask us most, answered by the technicians who do the work.</p>
          </div>
          <FAQAccordion items={faqItems} />
          <p className="text-center text-gray-600 mt-8">
            <Link href="/es" hrefLang="es-US" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">Ver esta página en español →</Link>
          </p>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>

      {/* 13. BLOG */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">Guides From Our NYC Technicians</h2>
              <p className="text-lg text-gray-600">Pricing, security and buying advice for New York drivers.</p>
            </div>
            <Link href="/blog" className="text-brand-primary font-semibold underline decoration-brand-accent underline-offset-2 hover:text-brand-accent whitespace-nowrap">View all articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'car-key-duplicate-cost-nyc', title: 'How Much Does Car Key Duplication Cost in NYC? (2026 Guide)', text: 'Real price ranges by key type and make, why NYC prices differ, and the red flags to avoid.' },
              { slug: 'dealer-vs-locksmith-key-duplicate-nyc', title: 'Dealer vs. Mobile Locksmith for Car Keys', text: 'Speed, cost, quality and convenience compared honestly for New York drivers.' },
              { slug: 'can-you-duplicate-transponder-key', title: 'Can You Duplicate a Transponder Key?', text: 'Chip keys explained: cloning vs. programming and when you need the original.' },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={`/blog/${post.slug}.jpg`} alt="" width={640} height={360} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.text}</p>
                  <span className="text-sm font-semibold text-brand-accent">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
