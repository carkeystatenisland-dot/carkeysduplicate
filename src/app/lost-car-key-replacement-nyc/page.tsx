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
import { AlertTriangle, DollarSign, Wrench, ClipboardCheck, ShieldCheck, Clock, Car } from 'lucide-react'

const PATH = '/lost-car-key-replacement-nyc'

export const metadata = generatePageMetadata({
  title: 'Lost Car Key Replacement NYC | All Keys Lost, No Towing',
  description:
    'Lost every car key in NYC? A mobile locksmith makes a new key from your VIN at your location in 45-90 min and erases the lost key. From $150, no tow.',
  slug: PATH,
  keywords: ['lost car key replacement nyc', 'all keys lost nyc', 'lost car keys no spare nyc', 'car key replacement nyc', 'replace lost car key fob nyc', 'locksmith lost car key'],
})

const faqItems = [
  {
    question: 'I lost my only car key in NYC. What should I do first?',
    answer:
      'Confirm the key is really gone (check the last three places you were), then call a licensed mobile automotive locksmith rather than the dealer. Have your photo ID and registration or title ready and know exactly where the car is parked. A mobile locksmith can make a new key at the car in 45-90 minutes, while a dealer typically needs the car towed in and 2-5 business days for a key.',
  },
  {
    question: 'How much does it cost to replace a lost car key in NYC?',
    answer:
      'In 2026 an all-keys-lost replacement by mobile locksmith costs $150-$260 for a transponder key, $220-$350 for a remote key fob, and $260-$450 for a smart or push-to-start key, including travel in the five boroughs. Dealers typically charge $300-$900 for the key plus a $100-$250 tow. Luxury European models cost more because of manufacturer server access.',
  },
  {
    question: 'Can a locksmith make a car key with no original key at all?',
    answer:
      'Yes. The locksmith either decodes the door lock cylinder to read the key cuts or retrieves the factory key code using your VIN and proof of ownership, cuts the blade by code, and programs a new transponder or fob through the OBD-II port. This is called key origination and is routine for every mainstream make.',
  },
  {
    question: 'Do I need to tow my car to the dealer if I lost all keys?',
    answer:
      'No. Towing is only necessary if you go to a dealership. A mobile locksmith brings cutting and programming equipment to the car, so it never moves. That alone saves $100-$250 and a day of waiting.',
  },
  {
    question: 'How long does an all-keys-lost replacement take?',
    answer:
      'Most Toyota, Honda, Nissan, Hyundai, Kia, Ford, GM and Chrysler vehicles take 45-60 minutes once the technician arrives. Vehicles with encrypted European immobilizers (BMW, Mercedes-Benz, Audi, Volkswagen) can take 60-120 minutes because the module may need to be read on the bench or authorized online. Arrival in NYC is usually 30-60 minutes.',
  },
  {
    question: 'Can the lost key still start my car? Should I worry about theft?',
    answer:
      'Until it is erased, yes. During an all-keys-lost job we delete every previously registered key from the vehicle\'s memory and register only the new one, so a found or stolen key becomes useless. This is included at no extra charge.',
  },
  {
    question: 'What documents do I need to replace a lost car key?',
    answer:
      'A government-issued photo ID and proof of ownership: the registration, title, or an insurance card in your name. If the car is leased, financed or belongs to your employer, bring the lease or a letter from the registered owner. NYC-licensed locksmiths must verify ownership before originating a key.',
  },
  {
    question: 'Does car insurance or roadside assistance cover lost key replacement?',
    answer:
      'Some comprehensive policies and roadside plans (AAA Plus, certain credit cards, new-car programs) reimburse part of a lost-key replacement. We provide an itemized receipt you can submit. Dealer towing is usually not reimbursed, which is another reason the mobile route is cheaper.',
  },
  {
    question: 'Will the new key have all the remote buttons and push-to-start functions?',
    answer:
      'Yes. We replace like with like: a lost smart key is replaced with a smart key, a remote-head key with a remote-head key, and every function is programmed and tested. If you prefer to save money, we can also make a basic transponder key that starts the car and a separate remote.',
  },
  {
    question: 'Can you replace a lost key for a leased or financed car?',
    answer:
      'Yes. You are the registered keeper and are responsible for the keys. Bring the registration or lease agreement and your ID. We do not need permission from the leasing company to make a key for a car registered to you.',
  },
]

export default function LostCarKeyPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Lost Car Key Replacement in NYC"
        description="All-keys-lost car key replacement by a licensed mobile locksmith: key generated from VIN, cut and programmed at the vehicle anywhere in the five NYC boroughs."
        path={PATH}
        minPrice={150}
        maxPrice={450}
        serviceType="Lost car key replacement (all keys lost)"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Lost Car Key Replacement', path: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="All keys lost · 24/7 dispatch"
        title="Lost Car Key Replacement in NYC — New Key Made at Your Car, No Towing"
        subtitle="Lost every key? We generate a new key from your VIN, cut it, program it and erase the lost one — right where the car is parked in Brooklyn, Queens, Manhattan, The Bronx or Staten Island."
        primaryCta={{ label: 'Dispatch a Technician', href: '/book-now' }}
        secondaryCta={{ label: 'Get a Flat Quote', href: '/request-a-quote' }}
        callLabel="Call"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Lost Car Key Replacement', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Quick answer">
          <p>
            <strong>Lost all your car keys in NYC? You do not need the dealer or a tow truck.</strong> {SITE.name} sends a
            licensed mobile locksmith who makes a new key from your VIN at the vehicle in <strong>45-90 minutes</strong>, programs
            it and deletes the lost key so it can no longer start the car. Cost: <strong>$150-$260</strong> for a chip key,
            <strong> $220-$350</strong> for a remote fob, <strong>$260-$450</strong> for a smart key. Have photo ID and your registration ready.
          </p>
        </QuickAnswer>

        <Section id="first-steps" title="Lost your only car key? Do these three things" icon={AlertTriangle}>
          <ol>
            <li><strong>Secure the car.</strong> If it is unlocked, lock it with the interior switch if you can reach it, or stay nearby. If the key may have been stolen with your address, prioritize the erase step below.</li>
            <li><strong>Gather your documents.</strong> Photo ID plus registration, title or insurance card in your name. Take a photo of the VIN plate at the base of the windshield.</li>
            <li><strong>Call a licensed mobile locksmith, not the dealer.</strong> The dealer route means a tow, a 2-5 day wait for the key to ship, and a bill that is usually double. A mobile technician comes to the car and finishes the same day.</li>
          </ol>
        </Section>

        <Section id="how" title="How we make a key when there is nothing to copy" icon={Wrench}>
          <p>Replacing a lost key is called <strong>key origination</strong>. It has three parts, all done from the van:</p>
          <StepList
            steps={[
              { title: 'Get the key cuts', text: 'We decode the driver\'s door lock with a lock reader, or retrieve the factory key code from the manufacturer database using your VIN and proof of ownership.' },
              { title: 'Cut the blade', text: 'The new blade (edge-cut or laser-cut) is milled by code on the van\'s machine, so it fits the ignition and doors like a factory key.' },
              { title: 'Program the chip or fob', text: 'We connect to the OBD-II port, put the immobilizer in learn mode and register the new transponder or smart fob. Encrypted European systems are handled with online authorization or bench reading.' },
              { title: 'Erase the lost key, test everything', text: 'All old keys are deleted from memory, the new key is tested for start, locks and remote functions, and you receive an itemized receipt for insurance.' },
            ]}
          />
        </Section>

        <Section id="pricing" title="Lost car key replacement cost in NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="All-keys-lost car key replacement prices in New York City"
            columns={['Key type lost', 'Our mobile price (travel included)', 'Dealer + tow (typical)', 'Time at the car']}
            rows={[
              ['Basic metal key (pre-1998)', '$95 - $150', '$150 + $100-$250 tow', '20-30 min'],
              ['Transponder (chip) key', '$150 - $260', '$300 - $500 + tow', '45-60 min'],
              ['Laser-cut transponder key', '$200 - $300', '$350 - $550 + tow', '45-60 min'],
              ['Remote-head or flip key fob', '$220 - $350', '$400 - $650 + tow', '45-75 min'],
              ['Smart / push-to-start key', '$260 - $450', '$500 - $900 + tow', '60-90 min'],
              ['European luxury smart key (BMW, Mercedes, Audi)', '$350 - $650', '$700 - $1,500 + tow', '60-120 min'],
              ['Erase lost keys from the vehicle', 'Included', '$100 - $150', '5 min'],
            ]}
            note="Flat quote by year, make and model before dispatch. Scheduled daytime calls have no surcharge; after-hours emergency dispatch fee is stated up front."
          />
        </Section>

        <Section id="makes" title="Lost keys for every make, including European systems" icon={Car}>
          <p>
            All-keys-lost on Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, Jeep, Chrysler, Subaru and Mazda is a
            standard OBD-II procedure we perform daily. BMW (CAS3/CAS4/FEM/BDC), Mercedes-Benz (FBS3, select FBS4),
            Volkswagen and Audi (Immo 4/5 and MQB) require reading the security module or an online manufacturer
            calculation; our vans carry that equipment, so these jobs stay mobile too. If your model is one of the very
            few that are dealer-only in 2026 (some brand-new model years), we will tell you up front rather than waste your time.
          </p>
        </Section>

        <Section id="documents" title="Documents we must see (NYC law)" icon={ClipboardCheck}>
          <ul>
            <li><strong>Photo ID</strong>: driver's license, state ID or passport.</li>
            <li><strong>Proof of ownership</strong>: registration, title or insurance card in your name; lease or finance agreement for leased cars; authorization letter for company vehicles.</li>
            <li><strong>VIN</strong>: visible at the base of the windshield, on the door jamb sticker or on the registration.</li>
          </ul>
          <p>
            NYC's Department of Consumer and Worker Protection requires licensed locksmiths to verify identity and ownership
            and to log every car key they originate. A provider that skips this step is operating illegally.
          </p>
        </Section>

        <Section id="theft" title="Stolen keys: erase first, then replace" icon={ShieldCheck}>
          <p>
            If your keys were stolen with your wallet or bag, assume the thief knows where you live and park. We make
            the erase step the priority: within minutes of arriving we can delete every key from the immobilizer so the
            stolen fob is dead, then program your replacement. For smart-key vehicles we also recommend a steering lock or
            Faraday pouch for your new fob to prevent relay attacks. File a police report; it helps with insurance reimbursement.
          </p>
        </Section>

        <Section id="speed" title="24/7 emergency dispatch across NYC" icon={Clock}>
          <p>
            Lost keys rarely happen during business hours. Our <Link href="/24-hour-car-key-duplicate-nyc">24-hour emergency key service</Link> dispatches
            around the clock, and daytime response anywhere in the five boroughs is typically 30-60 minutes. If you still have
            one working key, you need the much cheaper <Link href="/spare-key-copy">spare key copy</Link> instead of a lost-key replacement.
          </p>
        </Section>

        <LinkGrid
          title="Lost key replacement by make"
          links={CAR_MAKES.map((m) => ({ label: `${m.name} lost key replacement`, href: `/${m.slug}` }))}
        />

        <LinkGrid
          title="Lost car key service near you"
          links={BOROUGHS.map((b) => ({ label: `Lost car key replacement in ${b.name}`, href: `/${b.slug}` }))}
        />

        <FAQSection title="Lost car key FAQs" items={faqItems} />

        <Section id="related" title="Related services and guides">
          <ul>
            <li><Link href="/transponder-key-duplicate">Transponder key duplication and programming</Link></li>
            <li><Link href="/key-fob-duplicate">Key fob copy and programming</Link></li>
            <li><Link href="/mobile-car-key-duplicate-nyc">How mobile car key service works</Link></li>
            <li><Link href="/blog/what-happens-with-only-one-car-key">Why you should never be down to one key</Link></li>
            <li><Link href="/blog/avoid-locksmith-scams-nyc">How to avoid locksmith scams in NYC</Link></li>
            <li><Link href="/es/reemplazo-de-llaves-de-carro-perdidas-nyc" hrefLang="es-US">Esta página en español: reemplazo de llaves de carro perdidas en NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="Lost every key? We'll make a new one where your car is parked."
          subtitle="Licensed mobile technicians across all five boroughs. Flat quote, lost key erased, no tow truck."
        />
      </div>
    </div>
  )
}
