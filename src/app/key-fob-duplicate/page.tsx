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
import { KeyRound, DollarSign, Cpu, ClipboardCheck, Building2, ShoppingCart, Wrench, ShieldCheck, Clock } from 'lucide-react'

const PATH = '/key-fob-duplicate'

export const metadata = generatePageMetadata({
  title: 'Car Key Fob Copy & Programming NYC | Mobile, Same-Day',
  description:
    'Copy or replace your car key fob anywhere in NYC. Mobile locksmith programs remote, smart and push-to-start fobs on-site in 20-30 min. From $120.',
  slug: PATH,
  keywords: ['key fob copy nyc', 'car key fob copy', 'key fob duplication nyc', 'key fob programming nyc', 'copy key fob nyc', 'duplicate key fob', 'key fob replacement nyc'],
})

const faqItems = [
  {
    question: 'Can you copy a car key fob in NYC without going to the dealer?',
    answer:
      'Yes. A licensed mobile automotive locksmith can cut and program a new key fob at your location anywhere in the five boroughs. We connect to your car\'s OBD-II port, register the new fob with the immobilizer and body control module, and test every button before we leave. The dealer typically needs 2-5 business days and often requires the car to be towed in; we finish in 20-30 minutes on-site.',
  },
  {
    question: 'How much does it cost to copy a key fob in NYC?',
    answer:
      'In 2026, a copied remote key fob (remote-head or flip key) costs $120-$220 with our mobile service, a smart proximity or push-to-start fob costs $175-$395, and programming a compatible fob you already own costs $80-$150. Dealers in NYC usually charge $250-$600 for the same job plus towing if you have no working key. We quote a flat price by year, make and model before dispatching.',
  },
  {
    question: 'Do I need my original key fob to make a copy?',
    answer:
      'No. If you still have one working fob we can add a second one quickly (duplication). If every fob is lost we generate a new key from your VIN, cut the emergency blade, program the fob and erase the lost one from the vehicle so it can no longer start the car. See our lost car key replacement page for all-keys-lost pricing.',
  },
  {
    question: 'How long does key fob duplication take?',
    answer:
      'Most vehicles take 20-30 minutes once the technician arrives. Some European models (BMW, Mercedes-Benz, Audi, Volkswagen MQB) need an online manufacturer authorization or bench programming and can take 45-90 minutes. Response time in NYC is typically 30-60 minutes.',
  },
  {
    question: 'Can you program a key fob I bought online (Amazon, eBay)?',
    answer:
      'Usually yes, as long as the FCC ID and part number match your vehicle and the fob is new or correctly unlocked. We check the fob before we program it. Be aware that many online fobs are used, locked to a previous car, or counterfeit; if a fob fails verification we can supply a tested OEM or FCC-approved aftermarket fob on the spot.',
  },
  {
    question: 'What is the difference between a key fob, a transponder key and a smart key?',
    answer:
      'A transponder key is a metal key with a chip in the head that only starts the engine. A key fob (remote-head key or flip key) adds lock, unlock, trunk and panic buttons that talk to the car with a rolling code. A smart key (proximity or push-to-start fob) stays in your pocket and lets you unlock and start the car without inserting anything. We copy and program all three.',
  },
  {
    question: 'My key fob stopped working. Do I need a new one?',
    answer:
      'Not always. If the buttons stopped responding but the car still starts, try a fresh CR2032 or CR2025 battery first. If the car will not start and the security light flashes, the transponder may have lost its pairing or the fob has physical damage; a locksmith can re-sync or rebuild it. We diagnose first and only replace the fob if it is actually faulty.',
  },
  {
    question: 'Do you copy apartment or building RFID key fobs?',
    answer:
      'No. This page covers automotive key fobs only (remote, smart and push-to-start). Building access fobs (HID, Keri, AWID, Rosslare) are a different technology that is cloned at an RFID kiosk or hardware store, not programmed to a vehicle.',
  },
  {
    question: 'What do I need to show to get a key fob copied?',
    answer:
      'A government-issued photo ID and proof that the vehicle is yours: registration, title or an insurance card in your name. NYC-licensed locksmiths are required to verify ownership before cutting or programming any car key.',
  },
  {
    question: 'Will a copied fob affect my car\'s warranty or existing keys?',
    answer:
      'No. Programming adds a new key to the vehicle\'s memory alongside your existing keys; it does not overwrite them unless you ask us to erase a lost key. We use OEM-level diagnostic equipment, which does not void manufacturer warranties.',
  },
]

export default function KeyFobDuplicatePage() {
  return (
    <div className="pb-16 bg-white">
      <ServiceSchema
        name="Car Key Fob Copy & Programming in NYC"
        description="Mobile duplication, replacement and programming of remote key fobs, smart keys and push-to-start fobs across all five NYC boroughs."
        path={PATH}
        minPrice={120}
        maxPrice={395}
        serviceType="Car key fob duplication and programming"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Key Fob Duplication', path: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Mobile automotive locksmith · All 5 boroughs"
        title="Car Key Fob Copy & Programming in NYC — We Come to You"
        subtitle="Remote key fobs, flip keys, smart keys and push-to-start fobs copied, replaced and programmed at your location in about 30 minutes. Flat quote before dispatch."
        primaryCta={{ label: 'Get a Free Fob Quote', href: '/request-a-quote' }}
        secondaryCta={{ label: 'Book Mobile Service', href: '/book-now' }}
        callLabel="Call"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Key Fob Duplication', href: PATH },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickAnswer label="Quick answer">
          <p>
            <strong>Yes, you can copy a car key fob in NYC without the dealer.</strong> {SITE.name} sends a licensed mobile
            locksmith to your home, office, garage or curb anywhere in Brooklyn, Queens, Manhattan, The Bronx and Staten
            Island. A copied remote fob costs <strong>$120-$220</strong>, a smart or push-to-start fob <strong>$175-$395</strong>,
            and programming takes <strong>20-30 minutes</strong>. Bring a photo ID and your registration, title or insurance card.
          </p>
        </QuickAnswer>

        <Section id="what-we-copy" title="Which car key fobs we copy and program" icon={KeyRound}
          intro="Almost every car built after the late 1990s uses some form of electronic key. We carry the blanks, the cutting equipment and the programming software for all of these fob types:">
          <ul>
            <li><strong>Remote-head keys</strong> — a transponder key with lock/unlock/trunk buttons built into the head (common on Toyota, Honda, Nissan, Hyundai, Kia, Ford and GM).</li>
            <li><strong>Flip keys (switchblade keys)</strong> — the blade folds into the remote (Volkswagen, Audi, Chrysler, Dodge, Jeep, Mazda, Kia).</li>
            <li><strong>Smart keys / proximity fobs</strong> — keyless entry fobs that unlock the doors when you touch the handle and start the car with a push button (Toyota, Lexus, Honda, Nissan, Hyundai, Kia, Subaru, Mercedes-Benz, BMW).</li>
            <li><strong>Push-to-start fobs</strong> — the same proximity technology on vehicles with a start button; see our dedicated <Link href="/push-to-start-key-duplicate">push-to-start key duplication</Link> page.</li>
            <li><strong>Fobik keys</strong> — Chrysler, Dodge, Jeep and Ram fobs that insert into the dash (a fob with no visible blade).</li>
            <li><strong>Separate remote + chip key</strong> — older vehicles where the remote is a separate plastic fob and the key has its own transponder chip. We handle both parts.</li>
            <li><strong>Laser-cut (sidewinder) fob blades</strong> — high-security blades inside remote heads are milled on our mobile <Link href="/laser-cut-key-duplicate">laser-cut key</Link> machine.</li>
          </ul>
          <p>
            Not sure which one you have? Send a photo of your key through the <Link href="/request-a-quote">quote form</Link> and we will identify it and price it within minutes.
          </p>
        </Section>

        <Section id="pricing" title="Key fob copy cost in NYC (2026 prices)" icon={DollarSign}
          intro="Fob prices depend on three things: the fob technology, whether you still have a working key, and the make. Here is what NYC drivers actually pay with our mobile service compared with a dealership.">
          <PriceTable
            caption="Car key fob duplication and programming prices in New York City"
            columns={['Service', 'Our mobile price', 'Typical NYC dealer', 'Time on-site']}
            rows={[
              ['Copy a remote-head or flip key fob (you have a working key)', '$120 - $220', '$250 - $450 + 2-5 day wait', '20-30 min'],
              ['Copy a smart / proximity / push-to-start fob', '$175 - $395', '$350 - $600+', '30-45 min'],
              ['Program a fob you already bought (compatible, unlocked)', '$80 - $150', 'Often refused or $150+', '15-20 min'],
              ['Replace all lost fobs (all keys lost, by VIN)', '$220 - $450', '$400 - $900 + tow ($100-$250)', '45-90 min'],
              ['Fob battery, shell or button repair', '$25 - $85', 'Usually not offered', '10 min'],
              ['Erase a lost or stolen fob from the car', 'Included with any programming', '$100 - $150', '5 min'],
            ]}
            note="Prices include travel inside the five boroughs, cutting, programming and testing. European luxury models (BMW, Mercedes-Benz, Audi, Porsche, Land Rover) may fall at the top of each range because they require manufacturer server access or bench programming. No night or weekend surcharge for scheduled jobs."
          />
          <p>
            Want the full breakdown by make and key type? Read our guide to <Link href="/blog/car-key-duplicate-cost-nyc">car key duplication cost in NYC</Link>.
          </p>
        </Section>

        <Section id="how-it-works" title="How key fob programming works (cloning vs. programming)" icon={Cpu}>
          <p>
            A hardware store can copy the metal blade of a fob, but it cannot make the fob start your car. Every modern fob
            carries two radios: a <strong>transponder chip</strong> that answers the immobilizer when you turn the key or
            press start, and a <strong>remote transmitter</strong> that sends the lock/unlock commands. The remote uses a
            <strong> rolling code</strong>: the code changes on every press, so a recording cannot be replayed and a fob
            cannot simply be "cloned" with a kiosk.
          </p>
          <p>There are two ways a professional adds a fob to a car:</p>
          <ul>
            <li><strong>Transponder cloning</strong> — for older fixed-code chips (4C, 4D, some ID46) we read the chip in your working key and write the same data to a new chip. Fast, and the car never has to be opened. The remote buttons are then paired separately.</li>
            <li><strong>OBD-II programming</strong> — for rolling-code and encrypted systems (Toyota H-chip, Honda G and ID47, Hyundai/Kia ID46 and 8A, Ford 128-bit, GM, Nissan 4A) we connect a diagnostic programmer to the port under your dash, put the car in key-learning mode and register the new fob's unique serial number. This is the same method the dealer uses.</li>
          </ul>
          <p>
            Certain European platforms (BMW CAS4/FEM/BDC, Mercedes FBS3/FBS4, Volkswagen MQB) require either an online
            security calculation or reading the vehicle module on a bench. We do both from the van, which is why we can
            program fobs that many general locksmiths turn away.
          </p>
        </Section>

        <Section id="process" title="Our 4-step mobile key fob service" icon={Wrench}>
          <StepList
            steps={[
              { title: 'Quote in minutes', text: 'Tell us the year, make, model, whether you have a working fob and where the car is. You get a flat price by text or phone — no "starting at" bait pricing.' },
              { title: 'Technician dispatched', text: 'A licensed technician drives a fully equipped van to your location. Typical arrival is 30-60 minutes anywhere in the five boroughs; same-day is standard.' },
              { title: 'Cut, program, verify', text: 'We verify your ID and ownership, cut the emergency blade, program the fob through the OBD-II port and confirm the immobilizer accepts it.' },
              { title: 'Every button tested', text: 'Lock, unlock, trunk, panic, remote start and proximity functions are tested, and we check your original fobs still work. You pay only when the job is done.' },
            ]}
          />
        </Section>

        <Section id="what-to-bring" title="What you need to have ready" icon={ClipboardCheck}>
          <p>New York City requires licensed locksmiths to confirm the person requesting a car key is the owner or an authorized driver. Please have:</p>
          <ul>
            <li>A <strong>government-issued photo ID</strong> (driver's license, state ID or passport).</li>
            <li><strong>Proof of ownership</strong>: the vehicle registration, title, or insurance card in your name. For a company car, a letter from the registered owner is fine.</li>
            <li>The <strong>vehicle in reach</strong> — the car itself must be present because the fob is programmed to its computer.</li>
            <li>Your <strong>existing fob</strong> if you still have one (it makes the job faster and cheaper).</li>
          </ul>
        </Section>

        <Section id="car-vs-building-fob" title="Car key fob vs. apartment / building key fob" icon={Building2}>
          <p>
            A lot of New Yorkers search for "key fob copy NYC" when they mean the small RFID fob that opens their building
            door. That is a different product. Building fobs (HID, Keri, AWID, Rosslare, Indala) hold a fixed ID that a
            kiosk can clone in minutes; a <strong>car key fob</strong> is encrypted and must be programmed to one specific
            vehicle through its diagnostic port. We specialize exclusively in automotive fobs, which is why we carry
            vehicle programmers, blade cutters and OEM blanks on every van. If you need a building fob copied, a
            hardware-store or RFID kiosk is the right place; if you need a fob that starts your car, you are in the right place.
          </p>
        </Section>

        <Section id="online-fobs" title="Buying a key fob online: OEM vs. aftermarket" icon={ShoppingCart}>
          <p>
            We stock genuine OEM fobs and FCC-approved aftermarket fobs for most makes, and we are happy to program a fob
            you bought yourself. Before you order online, check three things or risk paying for a fob that cannot be used:
          </p>
          <ul>
            <li><strong>FCC ID and part number</strong> must match your exact year and trim (two fobs can look identical and use different frequencies: 315 MHz vs 433 MHz).</li>
            <li><strong>Never buy a "used" smart key</strong> for most Asian and European brands. Once paired, the chip is locked to the first vehicle and cannot be reused unless professionally unlocked.</li>
            <li><strong>Counterfeits</strong> are common on marketplaces. A cheap fob with a weak transponder may program successfully and then drop out after a few weeks. We test every customer-supplied fob before we charge for programming.</li>
          </ul>
        </Section>

        <Section id="repair-or-replace" title="Repair, re-program or replace? Diagnosing a fob that stopped working" icon={ShieldCheck}>
          <ul>
            <li><strong>Buttons dead, car still starts:</strong> replace the coin battery (CR2032, CR2025 or CR1620 depending on the fob). If it still does not work, the button contacts or antenna may be broken — we can swap the shell or the board.</li>
            <li><strong>Car won't start and the security light blinks:</strong> the transponder is not being recognized. This can be a damaged chip, a dropped fob, or an immobilizer that lost its key memory. We re-sync or program a new fob.</li>
            <li><strong>Only one key left:</strong> this is the cheapest moment to get a spare — see <Link href="/spare-key-copy">spare car key copy</Link> and our article on <Link href="/blog/what-happens-with-only-one-car-key">what happens when you only have one car key</Link>.</li>
            <li><strong>All fobs lost or stolen:</strong> we create a new key from the VIN and remove the missing fob from the vehicle's memory — read <Link href="/lost-car-key-replacement-nyc">lost car key replacement in NYC</Link>.</li>
          </ul>
        </Section>

        <Section id="same-day" title="Same-day and 24-hour key fob replacement in NYC" icon={Clock}>
          <p>
            Every fob job we book is same-day. Our vans are stationed across Queens, Brooklyn and Manhattan so a technician
            can usually reach you in 30-60 minutes, even in Midtown traffic or on Staten Island. For a fob lost at night or
            on a holiday, our <Link href="/24-hour-car-key-duplicate-nyc">24-hour emergency key service</Link> dispatches
            around the clock. Learn more about our <Link href="/same-day-car-key-duplicate-nyc">same-day car key service</Link>
            and <Link href="/mobile-car-key-duplicate-nyc">mobile car key duplication</Link>.
          </p>
        </Section>

        <LinkGrid
          title="Key fob programming by make"
          links={CAR_MAKES.map((m) => ({ label: `${m.name} key fob copy`, href: `/${m.slug}` }))}
        />

        <LinkGrid
          title="Key fob copy near you"
          links={BOROUGHS.map((b) => ({ label: `Key fob copy in ${b.name}`, href: `/${b.slug}` }))}
        />

        <FAQSection
          title="Key fob copy & programming FAQs"
          subtitle="Straight answers from the technicians who program fobs in NYC every day."
          items={faqItems}
        />

        <Section id="related" title="Related services and guides">
          <ul>
            <li><Link href="/transponder-key-duplicate">Transponder (chip) key duplication in NYC</Link></li>
            <li><Link href="/smart-key-duplicate">Smart key duplication in NYC</Link></li>
            <li><Link href="/blog/dealer-vs-locksmith-key-duplicate-nyc">Dealer vs. locksmith for car keys in NYC</Link></li>
            <li><Link href="/blog/avoid-locksmith-scams-nyc">How to avoid "$15 locksmith" scams in NYC</Link></li>
            <li><Link href="/es/copia-de-control-de-carro-nyc" hrefLang="es-US">Esta página en español: copia de control de carro en NYC</Link></li>
          </ul>
        </Section>

        <CTABanner
          title="Need a key fob copied today? We're already on the road."
          subtitle="Flat-rate quote, licensed technicians, every button tested before you pay. Serving all five NYC boroughs."
        />
      </div>
    </div>
  )
}
