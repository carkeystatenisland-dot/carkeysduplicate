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
import { Cpu, DollarSign, Wrench, AlertTriangle, ShieldCheck, ClipboardCheck, Search } from 'lucide-react'

const PATH = '/transponder-key-duplicate'

export const metadata = generatePageMetadata({
  title: 'Transponder Key Duplication & Programming NYC | Mobile',
  description:
    'Transponder (chip) key copy, programming and replacement anywhere in NYC. Lost or broken chip key? Programmed on-site in 20 min. From $95.',
  slug: PATH,
  keywords: ['transponder key duplication nyc', 'transponder key programming nyc', 'transponder chip key nyc', 'transponder key lost nyc', 'broken transponder key nyc', 'chip key copy nyc'],
})

const faqItems = [
  {
    question: 'What is a transponder key and how do I know if I have one?',
    answer:
      'A transponder key has a small glass or carbon chip inside the plastic head. When you turn the ignition, the car\'s immobilizer sends a radio signal, the chip answers with a coded ID, and only a matching answer lets the engine run. Almost every car sold in the US since about 1998 has one. If your key head is thick plastic (not a plain metal key) or your dashboard shows a key or padlock security light at startup, you have a transponder key.',
  },
  {
    question: 'How much does it cost to duplicate a transponder key in NYC?',
    answer:
      'With our mobile service a transponder key copy costs $95-$180 when you have a working key, and $150-$260 when every key is lost and the key must be generated from the VIN. Laser-cut (high-security) transponder keys run $150-$220. Dealers in New York typically charge $200-$400 plus a towing fee if the car cannot start.',
  },
  {
    question: 'Can a locksmith duplicate a transponder key if I lost the original?',
    answer:
      'Yes. We decode the door lock or look up the key code by VIN, cut a new blade, then program the new chip to the immobilizer through the OBD-II port. We also erase the lost key from the vehicle so it can no longer start the car. You will need photo ID and proof of ownership.',
  },
  {
    question: 'My transponder key broke. Can it be repaired instead of replaced?',
    answer:
      'Often yes. If the blade snapped but the chip is intact we can move the original chip into a new key shell and cut a fresh blade, which avoids programming entirely. If the chip itself cracked (common after being dropped or run through a washing machine) we program a new chip. We also extract broken blades stuck in ignitions and door locks.',
  },
  {
    question: 'Why won\'t a hardware-store copy of my key start the car?',
    answer:
      'A hardware store copies the metal cut only. The key will open the door and turn the ignition cylinder, but the immobilizer never receives a valid chip response, so the engine starts and stalls within a second or will not crank at all. The chip must be cloned or programmed to the car.',
  },
  {
    question: 'How long does transponder key programming take?',
    answer:
      'Cloning a fixed-code chip takes about 10 minutes. OBD-II programming on most Toyota, Honda, Nissan, Hyundai, Kia, Ford and GM vehicles takes 15-30 minutes. All-keys-lost jobs or encrypted European systems take 45-90 minutes. Response time anywhere in NYC is usually 30-60 minutes.',
  },
  {
    question: 'What is the difference between cloning and programming a transponder key?',
    answer:
      'Cloning copies the data from a working chip onto a new one so the car sees two identical keys; it requires the original and works on older fixed-code chips. Programming registers a brand-new chip ID into the car\'s computer through the diagnostic port; it works on every modern encrypted system and is the only option when no key exists. We choose the method that is cheapest and safest for your vehicle.',
  },
  {
    question: 'Can you program transponder keys for BMW, Mercedes-Benz, Audi and Volkswagen?',
    answer:
      'Yes. European makes use encrypted immobilizers (BMW CAS/FEM/BDC, Mercedes FBS3/FBS4, VW/Audi Immo 4/5 and MQB) that require online security calculations or bench programming. Our vans carry the equipment for these systems, so we can duplicate or replace keys that general locksmiths send to the dealer.',
  },
  {
    question: 'Will a new transponder key damage my car or affect my existing keys?',
    answer:
      'No. Professional programming adds a key to the immobilizer\'s memory using the manufacturer\'s own procedure. Your existing keys keep working unless you ask us to delete a lost one. We never cut wires or bypass the immobilizer, which would compromise your car\'s theft protection.',
  },
  {
    question: 'Do you need the car present to copy a transponder key?',
    answer:
      'For cloning an older fixed-code chip from a working key, no; we can clone from the key alone. For OBD-II programming (all rolling-code and encrypted systems), yes, because the new chip is registered inside the vehicle\'s computer. Since we are mobile, we come to wherever the car is parked.',
  },
]

export default function TransponderKeyPage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Transponder Key Duplication & Programming in NYC"
        description="Mobile cloning, programming and replacement of transponder (chip) car keys for all makes across the five NYC boroughs."
        path={PATH}
        minPrice={95}
        maxPrice={260}
        serviceType="Transponder key duplication and programming"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Transponder Key Duplication', path: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Chip keys · cloned or programmed on-site"
        title="Transponder Key Duplication & Programming in NYC"
        subtitle="Copy, replace or repair your chip key at your location in Brooklyn, Queens, Manhattan, The Bronx or Staten Island. Lost keys, broken keys and 'security light' problems solved in one visit."
        primaryCta={{ label: 'Get a Free Quote', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Book Mobile Service', href: '/book-now' }}
        callLabel="Call"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Transponder Key Duplication', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Quick answer">
          <p>
            <strong>A transponder key can be duplicated in NYC without the dealer.</strong> A mobile locksmith from {SITE.name} clones
            or programs the chip at your car in <strong>15-30 minutes</strong>. A copy from a working key costs <strong>$95-$180</strong>;
            a replacement when all keys are lost costs <strong>$150-$260</strong>. Bring photo ID and your registration or title.
          </p>
        </QuickAnswer>

        <Section id="what-is-a-transponder-key" title="What a transponder key is and why a plain copy won't start your car" icon={Cpu}>
          <p>
            Since 1998 nearly every vehicle has an <strong>immobilizer</strong>. The plastic head of your key hides a
            passive RFID chip (the <em>transponder</em>). When you turn the ignition or press start, an antenna ring around
            the ignition energizes the chip at 125 kHz, the chip replies with its coded identity, and the engine control
            unit compares it with the keys stored in memory. If the answer matches, the fuel pump and ignition are
            enabled. If it does not, the car cranks and stalls or never starts, and the <strong>security light</strong>
            (a key or padlock icon) flashes on the dashboard.
          </p>
          <p>
            That is why a hardware-store copy opens the door but refuses to start the engine, and why "transponder key
            duplication" is really two jobs: cutting the blade <em>and</em> getting the car to accept a new chip.
          </p>
        </Section>

        <Section id="chip-types" title="Transponder chip types we clone and program" icon={Search}
          intro="Different manufacturers use different chip families. Knowing which one your car uses determines whether it can be cloned from the original or must be programmed through the diagnostic port.">
          <PriceTable
            caption="Common transponder chip families by manufacturer"
            columns={['Chip family', 'Typical makes', 'Clone from original?', 'OBD-II programming?']}
            rows={[
              ['Texas 4C / 4D (fixed code, DST)', 'Toyota, Lexus, Ford (pre-2011), Subaru, Mitsubishi', 'Yes', 'Yes'],
              ['Texas DST-80 / 8A (H-chip, 128-bit)', 'Toyota & Lexus 2013+, Subaru 2015+', 'Partial (8A clone)', 'Yes'],
              ['Philips ID46 (Hitag 2)', 'Nissan, Hyundai, Kia, GM, Honda (older), Chrysler, Mitsubishi', 'Yes', 'Yes'],
              ['ID47 / Honda G / Hitag 3', 'Honda, Acura 2014+, Subaru, Hyundai/Kia 2017+', 'Limited', 'Yes'],
              ['Megamos 48 / AES (MQB)', 'Volkswagen, Audi, Seat, Skoda', 'Older 48 only', 'Yes (online calc)'],
              ['Hitag 2 / Hitag Pro (CAS, FEM/BDC)', 'BMW, Mini, Mercedes-Benz', 'No', 'Yes (bench or online)'],
              ['Ford Tiris 4D-63 / 128-bit', 'Ford, Lincoln, Mazda', 'Yes (4D-63)', 'Yes'],
              ['GM Circle Plus / 46E', 'Chevrolet, GMC, Buick, Cadillac', 'Yes', 'Yes'],
            ]}
            note="Our technicians carry chip-identification readers, so you never need to know the chip type yourself. Visit a make page (Toyota, Honda, Ford, BMW and more below) for model-year specifics."
          />
        </Section>

        <Section id="pricing" title="Transponder key duplication cost in NYC (2026)" icon={DollarSign}>
          <PriceTable
            caption="Transponder key prices in New York City"
            columns={['Situation', 'Our mobile price', 'Typical NYC dealer', 'Time']}
            rows={[
              ['Clone or program a spare from a working key', '$95 - $180', '$200 - $350 + wait', '15-30 min'],
              ['Laser-cut (sidewinder) transponder key', '$150 - $220', '$250 - $400', '30 min'],
              ['All keys lost: generate from VIN + program', '$150 - $260', '$300 - $500 + $100-$250 tow', '45-90 min'],
              ['Move your working chip into a new shell + new blade', '$60 - $120', 'Not offered', '20 min'],
              ['Extract a broken key from ignition or door', '$75 - $150', 'Not offered', '15-30 min'],
              ['Transponder key with remote buttons (remote-head)', '$120 - $220', '$250 - $450', '30 min'],
            ]}
            note="Flat quote by year, make and model before dispatch. Includes travel within the five boroughs. See our full pricing guide for luxury and European makes."
          />
        </Section>

        <Section id="lost-or-broken" title="Lost or broken transponder key? Here is what happens" icon={AlertTriangle}>
          <ul>
            <li>
              <strong>Lost your only transponder key:</strong> we read the key code from the door lock or retrieve it by VIN,
              cut a new blade on the van, program a new chip through the OBD-II port and <strong>erase the lost key</strong> from
              the car so it can never be used. No towing required. Full details on our{' '}
              <Link href="/lost-car-key-replacement-nyc">lost car key replacement</Link> page.
            </li>
            <li>
              <strong>Blade snapped, chip intact:</strong> we transplant your original chip into a new key head and cut a fresh blade.
              Because the chip is unchanged, no programming is needed and the price is lower.
            </li>
            <li>
              <strong>Key stuck or broken inside the ignition:</strong> we extract the fragment without damaging the cylinder, then duplicate the key.
            </li>
            <li>
              <strong>Security light flashing, key in good shape:</strong> the immobilizer may have dropped the key from memory after a dead battery or jump start. We re-register the key on-site.
            </li>
            <li>
              <strong>Key works intermittently:</strong> a cracked chip or a weak antenna ring. We test the chip response and replace only what is faulty.
            </li>
          </ul>
        </Section>

        <Section id="process" title="How our mobile transponder key service works" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Identify the key', text: 'Send us the year, make and model (or a photo). We confirm the chip type, blade and whether cloning or programming applies, then quote a flat price.' },
              { title: 'We drive to you', text: 'A licensed technician arrives in 30-60 minutes with blanks, a cutting machine, chip cloners and OBD-II programmers for your make.' },
              { title: 'Cut and program', text: 'After checking ID and ownership we cut the blade by code or by decoding the original, then clone the chip or program it to the immobilizer.' },
              { title: 'Test every function', text: 'The engine must start three times in a row and all existing keys must still work before we consider the job done.' },
            ]}
          />
        </Section>

        <Section id="what-to-bring" title="What to have ready" icon={ClipboardCheck}>
          <ul>
            <li>Government-issued photo ID.</li>
            <li>Registration, title or insurance card showing you own or are authorized to use the vehicle (required for NYC-licensed locksmiths).</li>
            <li>The vehicle itself, since programming happens inside the car's computer.</li>
            <li>Any working key you still have, which makes cloning possible and lowers the price.</li>
          </ul>
        </Section>

        <Section id="security" title="Security: no bypasses, no copied ownership" icon={ShieldCheck}>
          <p>
            We never bypass or disable an immobilizer. Every key we program is registered through the manufacturer's own
            key-learning procedure, we offer to delete lost or stolen keys at no extra charge, and we record each
            transaction as NYC Department of Consumer and Worker Protection rules require. If someone offers to make a chip
            key for your car without checking ownership, that is a red flag; read our guide on{' '}
            <Link href="/blog/avoid-locksmith-scams-nyc">avoiding locksmith scams in NYC</Link>.
          </p>
        </Section>

        <LinkGrid
          title="Transponder key programming by make"
          links={CAR_MAKES.map((m) => ({ label: `${m.name} transponder key (${m.chipType})`, href: `/${m.slug}` }))}
        />

        <LinkGrid
          title="Transponder key service near you"
          links={BOROUGHS.map((b) => ({ label: `Transponder key duplication in ${b.name}`, href: `/${b.slug}` }))}
        />

        <FAQSection
          title="Transponder key FAQs"
          subtitle="Answers from the technicians who program chip keys across New York City."
          items={faqItems}
        />

        <Section id="related" title="Related services and guides">
          <ul>
            <li><Link href="/blog/can-you-duplicate-transponder-key">In depth: can you duplicate a transponder key?</Link></li>
            <li><Link href="/key-fob-duplicate">Car key fob copy and programming</Link></li>
            <li><Link href="/smart-key-duplicate">Smart key duplication</Link></li>
            <li><Link href="/spare-key-copy">Spare car key copy</Link></li>
            <li><Link href="/blog/car-key-duplicate-cost-nyc">Car key duplication cost in NYC</Link></li>
            <li><Link href="/es/copia-de-llave-con-chip-nyc" hrefLang="es-US">Esta página en español: copia de llave con chip en NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="Chip key lost, broken or not starting the car?"
          subtitle="A mobile technician can be at your vehicle in about an hour anywhere in NYC. Flat quote before we roll."
        />
      </div>
    </div>
  )
}
