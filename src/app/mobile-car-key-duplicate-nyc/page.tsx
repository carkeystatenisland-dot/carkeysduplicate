import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE, BOROUGHS, SERVICE_TYPES } from '@/lib/constants'
import ServiceSchema from '@/components/seo/ServiceSchema'
import ServiceHero from '@/components/content/ServiceHero'
import QuickAnswer from '@/components/content/QuickAnswer'
import Section from '@/components/content/Section'
import PriceTable from '@/components/content/PriceTable'
import StepList from '@/components/content/StepList'
import FAQSection from '@/components/content/FAQSection'
import LinkGrid from '@/components/content/LinkGrid'
import CTABanner from '@/components/ui/CTABanner'
import { Truck, MapPin, DollarSign, Wrench, Clock, ShieldCheck, ClipboardCheck } from 'lucide-react'

const PATH = '/mobile-car-key-duplicate-nyc'

export const metadata = generatePageMetadata({
  title: 'Mobile Car Key Maker NYC | We Come to You, 30-60 Min',
  description:
    'Mobile car key duplication in NYC: a licensed locksmith drives to you and cuts and programs your key on-site. No towing, no dealer wait, flat price.',
  slug: PATH,
  keywords: ['mobile car key maker', 'mobile key maker nyc', 'mobile car key duplication nyc', 'mobile key duplication service', 'mobile automotive locksmith nyc', 'car key made at home nyc'],
})

const faqItems = [
  {
    question: 'What does a mobile car key maker do?',
    answer:
      'A mobile car key maker is a licensed automotive locksmith whose van carries a key-cutting machine, laser-cut (sidewinder) mill, transponder cloners, OBD-II programmers and a stock of key blanks and fobs. Instead of you towing the car to a dealership, the technician drives to the vehicle and cuts and programs the key where it sits.',
  },
  {
    question: 'How much extra does mobile service cost?',
    answer:
      'Nothing extra within the five boroughs. Our quoted price covers travel, cutting, programming and testing. Scheduled daytime jobs have no surcharge; only true after-hours emergency dispatch (9 PM to 7 AM) carries an emergency fee that we state before we roll.',
  },
  {
    question: 'How fast can you get to me?',
    answer:
      'Typical arrival is 30-60 minutes anywhere in Brooklyn, Queens, Manhattan, The Bronx and Staten Island. Our vans are based in Queens and Brooklyn and work routes across the city, so most calls are reached within the hour even in Midtown traffic.',
  },
  {
    question: 'Where can you meet me?',
    answer:
      'Anywhere the car is legally parked and accessible: your driveway or street, an office or apartment parking garage, a shopping-center lot, a body shop, an airport long-term lot, or a dealership lot if you prefer a locksmith over the dealer. We only need the vehicle and your ID and ownership documents.',
  },
  {
    question: 'Do you need a power outlet or Wi-Fi?',
    answer:
      'No. The vans are self-contained with inverters for the cutting machines and cellular data for manufacturer security servers. We can work in an underground garage or on a street with no services.',
  },
  {
    question: 'Can a mobile locksmith program every kind of key?',
    answer:
      'Yes: basic keys, transponder chip keys, remote key fobs, smart and push-to-start keys, laser-cut keys and Chrysler Fobiks. We also handle encrypted European systems (BMW, Mercedes-Benz, Audi, Volkswagen) that require online calculations or bench programming.',
  },
  {
    question: 'Is mobile key duplication safe and legal?',
    answer:
      'Yes, when performed by a licensed locksmith. New York City requires locksmiths to be licensed by the Department of Consumer and Worker Protection, to verify the customer\'s identity and ownership of the vehicle, and to keep a record of each key made. We follow all three rules on every job.',
  },
  {
    question: 'Should I call the dealer or a mobile locksmith?',
    answer:
      'For most mainstream makes a mobile locksmith is faster (same day vs. several days), cheaper (typically 40-60% less), and avoids a tow because the work happens at the car. The dealer is the right call only for a few very new or exotic models whose key programming is still restricted to franchised dealers; we will tell you honestly if your car is one of them.',
  },
]

export default function MobileServicePage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Mobile Car Key Duplication in NYC"
        description="On-site cutting and programming of car keys and fobs by a licensed mobile automotive locksmith anywhere in the five boroughs of New York City."
        path={PATH}
        minPrice={75}
        maxPrice={450}
        serviceType="Mobile automotive locksmith"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Mobile Car Key Duplication', path: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="The key shop that drives to you"
        title="Mobile Car Key Maker in NYC — Keys Cut & Programmed at Your Location"
        subtitle="No towing, no dealership waiting room, no hidden travel fee. A licensed technician arrives in 30-60 minutes anywhere in the five boroughs with everything needed to make your key on the spot."
        primaryCta={{ label: 'Book Mobile Dispatch', href: '/book-now' }}
        secondaryCta={{ label: 'Get a Flat Quote', href: '/request-a-quote' }}
        callLabel="Call"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Mobile Car Key Duplication', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Quick answer">
          <p>
            <strong>A mobile car key maker brings the entire key shop to your car.</strong> {SITE.name} dispatches a licensed
            automotive locksmith to any address in Brooklyn, Queens, Manhattan, The Bronx or Staten Island, usually within
            <strong> 30-60 minutes</strong>. Keys and fobs are cut and programmed on-site in 15-45 minutes. Travel is included
            in the flat quote (from <strong>$75</strong> for a basic key, <strong>$95</strong> for a chip key, <strong>$120</strong> for a fob).
          </p>
        </QuickAnswer>

        <Section id="what-is-on-the-van" title="What's on the van: a complete mobile key lab" icon={Truck}>
          <ul>
            <li><strong>Key cutting machines</strong> for edge-cut and <strong>laser-cut (sidewinder)</strong> blades, with code-cutting so a key can be made with no original.</li>
            <li><strong>Transponder cloning tools</strong> for 4C, 4D, ID46, 8A and Megamos chips.</li>
            <li><strong>OBD-II key programmers</strong> with current software for Toyota, Honda, Nissan, Hyundai, Kia, Ford, GM, Chrysler, Subaru, Mazda, Volkswagen, Audi, BMW and Mercedes-Benz.</li>
            <li><strong>Lock decoders and extraction kits</strong> for lost-key jobs and broken keys stuck in ignitions.</li>
            <li><strong>Stock of OEM and FCC-approved blanks</strong>: transponder keys, remote-head keys, flip keys, smart keys, push-to-start fobs and Fobiks.</li>
            <li><strong>Power and connectivity</strong>: onboard inverters and cellular data for manufacturer security servers, so we never need your outlet or Wi-Fi.</li>
          </ul>
        </Section>

        <Section id="where" title="Where we meet you" icon={MapPin}>
          <p>Anywhere the vehicle is parked and we can legally access it:</p>
          <ul>
            <li>Your home, driveway or street parking in any borough.</li>
            <li>Office, apartment and public parking garages (we work underground, no power needed).</li>
            <li>Shopping centers, hospitals, schools and stadium lots.</li>
            <li>Body shops, mechanics and used-car lots that need keys for customers' vehicles.</li>
            <li>JFK and LaGuardia long-term parking — our base in East Elmhurst is minutes from both airports.</li>
            <li>Roadside, after a lockout or a key broken in the ignition.</li>
          </ul>
        </Section>

        <Section id="response-times" title="Typical response times by borough" icon={Clock}>
          <PriceTable
            caption="Average arrival time for mobile car key service by NYC borough"
            columns={['Borough', 'Typical arrival', 'Notes']}
            rows={[
              ['Queens', '20-45 min', 'Home base in East Elmhurst; fastest coverage from Astoria to Jamaica and Flushing.'],
              ['Brooklyn', '30-60 min', 'Vans route through Williamsburg, Downtown and Bay Ridge daily.'],
              ['Manhattan', '30-60 min', 'Midtown and Downtown reached via the Queensboro and Midtown Tunnel; no congestion surcharge.'],
              ['The Bronx', '30-60 min', 'Via the RFK and Whitestone bridges; Fordham, Riverdale and Co-op City covered.'],
              ['Staten Island', '45-75 min', 'Scheduled windows preferred; emergency dispatch available.'],
            ]}
            note="Times are typical for scheduled and same-day calls during business hours. Emergency dispatch runs 24/7."
          />
        </Section>

        <Section id="pricing" title="Mobile car key prices (travel included)" icon={DollarSign}>
          <PriceTable
            caption="Mobile car key duplication prices in NYC"
            columns={['Service', 'Price with travel', 'On-site time']}
            rows={[
              ['Basic spare key', 'From $75', '5-10 min'],
              ['Transponder chip key copy', '$95 - $180', '15-30 min'],
              ['Remote key fob copy', '$120 - $220', '20-30 min'],
              ['Laser-cut key', '$150 - $220', '30 min'],
              ['Smart / push-to-start key copy', '$175 - $395', '30-45 min'],
              ['All keys lost (generate by VIN)', '$150 - $450', '45-90 min'],
              ['Broken key extraction', '$75 - $150', '15-30 min'],
            ]}
            note="Flat quote before dispatch. No travel fee within the five boroughs; after-hours emergency fee disclosed up front."
          />
          <p>Links to detailed pricing: <Link href="/spare-key-copy">spare key copy</Link>, <Link href="/key-fob-duplicate">key fob copy</Link>, <Link href="/transponder-key-duplicate">transponder keys</Link>, <Link href="/lost-car-key-replacement-nyc">lost key replacement</Link>.</p>
        </Section>

        <Section id="process" title="How mobile dispatch works" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Call, text or book online', text: 'Give us the year, make, model, key type and the exact location of the car (cross streets, garage level, lot section).' },
              { title: 'Flat quote and ETA', text: 'You get the full price and a realistic arrival window before a van is dispatched. No "starting at" pricing.' },
              { title: 'Technician arrives', text: 'A licensed, uniformed technician checks your ID and ownership documents, then cuts and programs the key beside the car.' },
              { title: 'Tested, then paid', text: 'Engine start, locks and every remote function are tested, your original keys are verified, and you pay by card or cash when the key works.' },
            ]}
          />
        </Section>

        <Section id="licensed" title="Licensed, insured and local" icon={ShieldCheck}>
          <p>
            Our technicians operate under New York City locksmith licensing, carry liability insurance, and verify vehicle
            ownership on every job. We dispatch from Queens, not from a national call center, so the person who quotes you
            is the company that shows up. If a "locksmith" quotes $15-$35 online and then demands hundreds in cash on-site,
            that is a scam pattern we explain in our guide to{' '}
            <Link href="/blog/avoid-locksmith-scams-nyc">avoiding locksmith scams in NYC</Link>.
          </p>
        </Section>

        <Section id="what-to-bring" title="Have these ready when the van arrives" icon={ClipboardCheck}>
          <ul>
            <li>Photo ID.</li>
            <li>Registration, title or insurance card for the vehicle.</li>
            <li>Any working key you still have.</li>
            <li>Access to the car (garage gate, parking ticket, building security notified).</li>
          </ul>
        </Section>

        <LinkGrid
          title="Mobile services we perform on-site"
          links={[
            ...SERVICE_TYPES.map((s) => ({ label: s.name, href: `/${s.slug}` })),
            { label: 'Lost Car Key Replacement', href: '/lost-car-key-replacement-nyc' },
            { label: 'Same-Day Car Key Duplication', href: '/same-day-car-key-duplicate-nyc' },
            { label: '24-Hour Emergency Car Key Service', href: '/24-hour-car-key-duplicate-nyc' },
          ]}
        />

        <LinkGrid
          title="Mobile car key service by borough"
          links={BOROUGHS.map((b) => ({ label: `Mobile car key duplication in ${b.name}`, href: `/${b.slug}` }))}
        />

        <FAQSection title="Mobile car key service FAQs" items={faqItems} />

        <Section id="related" title="Related guides">
          <ul>
            <li><Link href="/blog/dealer-vs-locksmith-key-duplicate-nyc">Dealer vs. mobile locksmith in NYC</Link></li>
            <li><Link href="/blog/car-key-duplicate-cost-nyc">Car key duplication cost in NYC</Link></li>
            <li><Link href="/es/cerrajero-automotriz-movil-nyc" hrefLang="es-US">Esta página en español: cerrajero automotriz móvil en NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="Need a key made where your car is parked?"
          subtitle="Mobile dispatch across all five boroughs, usually within the hour. Travel included in your flat quote."
        />
      </div>
    </div>
  )
}
