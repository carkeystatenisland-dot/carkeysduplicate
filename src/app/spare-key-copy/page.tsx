import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE, CAR_MAKES, BOROUGHS } from '@/lib/constants'
import ServiceSchema from '@/components/seo/ServiceSchema'
import ServiceHero from '@/components/content/ServiceHero'
import QuickAnswer from '@/components/content/QuickAnswer'
import Section from '@/components/content/Section'
import PriceTable from '@/components/content/PriceTable'
import StepList from '@/components/content/StepList'
import FAQSection from '@/components/content/FAQSection'
import LinkGrid from '@/components/content/LinkGrid'
import CTABanner from '@/components/ui/CTABanner'
import { KeyRound, DollarSign, Scale, Wrench, ClipboardCheck, Lightbulb } from 'lucide-react'

const PATH = '/spare-key-copy'

export const metadata = generatePageMetadata({
  title: 'Spare Car Key Copy NYC | Mobile Key Duplication From $75',
  description:
    'Spare car key made at your door anywhere in NYC. Basic, transponder, remote and smart key copies in 15-30 min. Cheaper than the dealer, no towing.',
  slug: PATH,
  keywords: ['spare car key copy nyc', 'spare key copy nyc', 'car key copy nyc', 'nyc key copy', 'same day key copy', 'duplicate car key nyc', 'spare key for car'],
})

const faqItems = [
  {
    question: 'How much does a spare car key cost in NYC?',
    answer:
      'A basic non-chip spare key costs $75 (includes the service visit), a transponder chip spare $95-$180, a remote key fob spare $120-$220, and a smart or push-to-start spare $175-$395. Dealers typically charge double and need the car at the dealership for 2-5 days. We cut and program the spare at your location in 15-30 minutes.',
  },
  {
    question: 'Is it cheaper to get a spare key now or wait until I lose my only key?',
    answer:
      'Making a spare while you still have a working key is roughly half the price of an all-keys-lost replacement, because we can clone or add the new key without decoding locks or generating a key by VIN. It also avoids a tow and the risk of being stranded. If you are down to one key, this is the cheapest moment to act.',
  },
  {
    question: 'Can I get a spare car key made without the original?',
    answer:
      'Yes. We can generate a key from your VIN or by decoding the door lock, cut it, and program it to the vehicle. It costs more than copying from a working key, and you must show photo ID and proof of ownership. See our lost car key replacement page.',
  },
  {
    question: 'Where is the best place to get a spare car key copied in NYC: dealer, kiosk, hardware store or locksmith?',
    answer:
      'A hardware store or kiosk can copy a plain metal key and a few older transponder chips, but cannot program remotes, smart keys or most post-2010 chips. The dealer can do everything but is slower and more expensive and usually needs the car on-site. A licensed mobile automotive locksmith programs any key type at your location the same day, typically for 40-60% less than the dealer.',
  },
  {
    question: 'How long does it take to make a spare key?',
    answer:
      'Basic keys take 5 minutes, transponder keys 15-30 minutes, and smart keys 30-45 minutes once the technician arrives. Response time across the five boroughs is usually 30-60 minutes.',
  },
  {
    question: 'What is a valet key and is it a good spare?',
    answer:
      'A valet key starts the car and opens the doors but will not open the trunk or glove box. It is a lower-cost spare that is ideal for parking attendants, teen drivers or keeping in a lockbox. We can cut and program valet keys for most makes.',
  },
  {
    question: 'Do I have to be present to get a spare key made?',
    answer:
      'The vehicle must be present for programming, and the owner (or an authorized driver with the owner\'s documents) needs to show photo ID and registration, title or insurance card. We can meet you at home, work, a parking garage or on the street.',
  },
  {
    question: 'Will the spare key work exactly like my original?',
    answer:
      'Yes. A properly programmed spare starts the car, operates every lock and, if it is a remote or smart key, all buttons and proximity functions. We test the spare and your original before we leave to make sure both work.',
  },
  {
    question: 'How many spare keys can a car have?',
    answer:
      'Most vehicles store 4-8 keys in the immobilizer memory. We can program several spares in one visit, which is useful for families and company fleets, and each additional key in the same visit is discounted.',
  },
]

export default function SpareKeyCopyPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Spare Car Key Copy in NYC"
        description="Mobile duplication of basic, transponder, remote and smart spare car keys at the customer's location across all five NYC boroughs."
        path={PATH}
        minPrice={75}
        maxPrice={395}
        serviceType="Spare car key duplication"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Spare Key Copy', path: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Spare keys made at your door"
        title="Spare Car Key Copy in NYC — Same Day, We Come to You"
        subtitle="Basic keys, chip keys, remote fobs and smart keys duplicated at your home, office or curb anywhere in the five boroughs. Flat price before dispatch."
        primaryCta={{ label: 'Get a Spare Key Quote', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Book Mobile Service', href: '/book-now' }}
        callLabel="Call"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Spare Key Copy', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Quick answer">
          <p>
            <strong>A spare car key in NYC costs $75-$395 depending on the key type</strong>, and {SITE.name} makes it at your
            location in <strong>15-30 minutes</strong>. Copying a spare while you still have a working key is about half the
            price of replacing a lost key, and avoids a tow to the dealership. Bring photo ID and your registration.
          </p>
        </QuickAnswer>

        <Section id="types" title="Spare key types we copy" icon={KeyRound}>
          <ul>
            <li><strong>Basic metal keys</strong> for pre-1998 cars and many work vans — cut on the spot.</li>
            <li><strong>Transponder (chip) keys</strong> — cloned from your original or programmed to the car; see <Link href="/transponder-key-duplicate">transponder key duplication</Link>.</li>
            <li><strong>Remote-head and flip key fobs</strong> with lock/unlock/trunk buttons — see <Link href="/key-fob-duplicate">key fob copy and programming</Link>.</li>
            <li><strong>Smart keys and push-to-start fobs</strong> — proximity keys for keyless entry and start; see <Link href="/smart-key-duplicate">smart key duplication</Link>.</li>
            <li><strong>Laser-cut (sidewinder) keys</strong> — high-security blades milled on our mobile machine; see <Link href="/laser-cut-key-duplicate">laser-cut key duplication</Link>.</li>
            <li><strong>Valet keys</strong> — start the car and open the doors but not the trunk or glove box; a cheaper, safer spare.</li>
          </ul>
        </Section>

        <Section id="pricing" title="Spare car key cost in NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="Spare car key copy prices in New York City by key type"
            columns={['Spare key type', 'Our mobile price', 'Dealer (typical)', 'Hardware store / kiosk']}
            rows={[
              ['Basic metal key (no chip)', '$75 incl. visit', '$40 - $80 + trip to dealer', '$5 - $15 (blade only)'],
              ['Transponder chip key', '$95 - $180', '$200 - $350', '$50 - $90, older chips only'],
              ['Laser-cut transponder key', '$150 - $220', '$250 - $400', 'Not available'],
              ['Remote key fob / flip key', '$120 - $220', '$250 - $450', 'Not available'],
              ['Smart / push-to-start key', '$175 - $395', '$350 - $600+', 'Not available'],
              ['Valet key', '$75 - $140', '$120 - $250', 'Not available'],
              ['Each additional spare in the same visit', '15% off', 'Full price', 'n/a'],
            ]}
            note="Prices include travel within the five boroughs, cutting, programming and testing. Full breakdown by make in our car key duplication cost guide."
          />
        </Section>

        <Section id="why-now" title="Why one key is a risk, and why a spare is cheap insurance" icon={Lightbulb}>
          <p>
            When you lose your only key, the job changes from a <strong>duplicate</strong> to an <strong>origination</strong>:
            the locksmith must decode the lock or pull the key code by VIN, generate a blade from scratch and program a chip
            into an immobilizer with no reference key. That takes longer, costs roughly twice as much, and if it happens at
            night or far from home may also mean a tow. A spare made today while your key still works is cloned or added
            in minutes, and it also protects you if a fob gets damaged, a battery dies at the worst moment, or a family
            member needs their own key. Read{' '}
            <Link href="/blog/what-happens-with-only-one-car-key">what happens when you only have one car key</Link>.
          </p>
        </Section>

        <Section id="compare" title="Dealer vs. kiosk vs. hardware store vs. mobile locksmith" icon={Scale}>
          <PriceTable
            caption="Comparison of places to get a spare car key in NYC"
            columns={['', 'Mobile locksmith (us)', 'Dealership', 'Key kiosk / hardware store']}
            rows={[
              ['Key types', 'All: basic, chip, remote, smart, laser-cut', 'All, for its own brand', 'Basic + some older chips'],
              ['Where', 'Your location, any borough', 'Dealer lot (car must be present)', 'Store or kiosk (car not needed, chip clone only)'],
              ['Wait', 'Same day, 30-60 min arrival', '2-5 business days for the key to arrive', 'Minutes, if compatible'],
              ['Programming', 'Included, on-site', 'Included', 'Not available for remotes/smart keys'],
              ['Ownership check', 'Yes (NYC licensed)', 'Yes', 'Varies'],
              ['Typical cost', '$75 - $395', '$150 - $600+', '$5 - $90'],
            ]}
          />
          <p>
            For an honest side-by-side, read <Link href="/blog/dealer-vs-locksmith-key-duplicate-nyc">dealer vs. locksmith for car keys in NYC</Link>.
          </p>
        </Section>

        <Section id="process" title="How it works" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Quote', text: 'Year, make, model and key type. We give you a flat price for the spare, and a discount for extra copies.' },
              { title: 'We come to you', text: 'A licensed technician arrives at your home, office or garage in 30-60 minutes with blanks for your make.' },
              { title: 'Cut and clone or program', text: 'We decode your working key, cut the blade and clone the chip or add the new key through the OBD-II port.' },
              { title: 'Test both keys', text: 'Spare and original are tested in the ignition, doors and remote functions before you pay.' },
            ]}
          />
        </Section>

        <Section id="what-to-bring" title="What to have ready" icon={ClipboardCheck}>
          <ul>
            <li>Photo ID and registration, title or insurance card (NYC locksmith law requires an ownership check).</li>
            <li>Your working key, so we can clone or decode it.</li>
            <li>The vehicle, if the key has a chip or remote that must be programmed.</li>
          </ul>
        </Section>

        <LinkGrid
          title="Spare keys by make"
          links={CAR_MAKES.map((m) => ({ label: `${m.name} spare key`, href: `/${m.slug}` }))}
        />

        <LinkGrid
          title="Spare key copy near you"
          links={BOROUGHS.map((b) => ({ label: `Spare car key copy in ${b.name}`, href: `/${b.slug}` }))}
        />

        <FAQSection title="Spare car key FAQs" items={faqItems} />

        <Section id="related" title="Related services and guides">
          <ul>
            <li><Link href="/same-day-car-key-duplicate-nyc">Same-day car key duplication</Link></li>
            <li><Link href="/mobile-car-key-duplicate-nyc">Mobile car key duplication — how it works</Link></li>
            <li><Link href="/lost-car-key-replacement-nyc">Lost all your keys? Lost car key replacement</Link></li>
            <li><Link href="/blog/car-key-duplicate-cost-nyc">Car key duplication cost in NYC</Link></li>
            <li><Link href="/es/copia-de-llave-de-repuesto-nyc" hrefLang="es-US">Esta página en español: copia de llave de repuesto en NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="Down to one key? Get a spare made today."
          subtitle="Mobile across all five boroughs. Flat-rate pricing, licensed technicians, both keys tested before you pay."
        />
      </div>
    </div>
  )
}
