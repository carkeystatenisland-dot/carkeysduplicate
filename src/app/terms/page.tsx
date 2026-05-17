import { generatePageMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import ScrollSpyTOC from '@/components/ui/ScrollSpyTOC'
import CTABanner from '@/components/ui/CTABanner'
import { 
  Scale, 
  UserCheck, 
  CreditCard, 
  Clock, 
  Wrench, 
  AlertTriangle, 
  BadgeCheck, 
  ShieldAlert, 
  Mail, 
  Calendar,
  HelpCircle,
  ShieldCheck,
  Ban,
  Phone
} from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Terms of Service | Car Keys Duplication NYC',
  description: 'Review our professional locksmith terms of service, ownership verification rules, payment terms, and mobile service call policies.',
  slug: '/terms'
})

const tocItems = [
  { id: 'agreement', label: '1. Service Agreement' },
  { id: 'eligibility', label: '2. Customer Eligibility' },
  { id: 'identity-verification', label: '3. Mandatory Ownership Verification' },
  { id: 'mobile-services', label: '4. Mobile Dispatches & Service Rates' },
  { id: 'cancellation', label: '5. Cancellation Policy' },
  { id: 'payments', label: '6. Payment Terms' },
  { id: 'limitations', label: '7. Pre-Existing Damage & Liability' },
  { id: 'warranties', label: '8. Key Warranties & Exclusions' },
  { id: 'indemnification', label: '9. Indemnification' },
  { id: 'governing-law', label: '10. Governing Law' }
]

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-dark text-white py-16 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-brand-accent text-sm font-semibold tracking-wider uppercase mb-3">
            <Scale className="w-5 h-5 shrink-0" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-white">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Please read these terms carefully before requesting mobile locksmith services or key duplication in New York City.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-brand-accent" />
            <span>Last Updated: May 17, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Table of Contents */}
            <aside className="lg:w-1/4 shrink-0">
              <ScrollSpyTOC items={tocItems} />
            </aside>
            
            {/* Right Column: Terms Document */}
            <div className="lg:w-3/4">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-primary prose-a:text-brand-accent prose-strong:text-brand-primary">
                
                {/* 1. Service Agreement */}
                <section id="agreement" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Scale className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">1. Service Agreement</h2>
                  </div>
                  <p>
                    These Terms of Service (the "Terms", "Agreement") constitute a legally binding agreement between you ("Customer", "User", "you") and <strong>{SITE.name}</strong> ("Company", "we", "us", "our"), governing your access to and use of our website (
                    <a href={SITE.url} target="_blank" rel="noopener noreferrer">{SITE.url.replace('https://', '')}</a>) and any dispatch or physical mobile locksmith, key duplication, key programming, lock rekeying, or vehicle lockout emergency services we provide.
                  </p>
                  <p>
                    By browsing our site, filling out a contact, quote, or booking form, calling our dispatch phone numbers, or authorizing our technicians to perform work, you agree to comply with and be bound by these Terms. If you do not accept these Terms in their entirety, you are strictly prohibited from utilizing our site and requesting our services.
                  </p>
                </section>

                {/* 2. Customer Eligibility */}
                <section id="eligibility" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <ShieldCheck className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">2. Customer Eligibility & Authority</h2>
                  </div>
                  <p>
                    To request our mobile services or hire a technician, you must:
                  </p>
                  <ul className="space-y-2">
                    <li>Be at least eighteen (18) years of age or older.</li>
                    <li>Possess the legal capacity and authority to enter into a binding contractual agreement.</li>
                    <li>Be the absolute registered owner of the vehicle or property for which services are requested, OR be a fully authorized agent of the registered owner (possessing signed, notarized written authorization along with a copy of the owner's valid ID).</li>
                  </ul>
                  <p>
                    You agree that all information you provide to us (including your name, contact phone number, vehicle location, vehicle make/model/year/VIN, and ownership documents) is completely accurate, current, and truthful.
                  </p>
                </section>

                {/* 3. Mandatory Ownership Verification */}
                <section id="identity-verification" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <UserCheck className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">3. Mandatory Ownership Verification</h2>
                  </div>
                  <p>
                    Because locksmith and key duplication services involve granting access to high-value personal property, <strong>{SITE.name}</strong> operates in strict compliance with public safety standards to prevent grand theft auto, unlawful entry, and criminal activity.
                  </p>
                  
                  {/* Strict Ownership Verification Alert */}
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 rounded-r-xl my-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-accent/15 rounded-lg text-brand-primary shrink-0">
                        <ShieldAlert className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-brand-primary text-base m-0 mb-1">
                          No Identification, No Key — No Exceptions
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed m-0">
                          Before our technicians will cut a key blade, connect a programming diagnostic computer to your vehicle's OBD-II port, or unlock a door, you MUST present:
                          <br />
                          <strong>1. A valid, government-issued photo ID</strong> (e.g., state driver's license, passport, military ID).
                          <br />
                          <strong>2. Proof of ownership</strong> matching the ID presented (e.g., current active vehicle registration, vehicle title, official rental car contract under your name, or insurance card).
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    If the vehicle registration is locked inside the car, the technician will first unlock the vehicle to retrieve the document. If, upon opening the vehicle, the registration name does not match your photo ID or you cannot present a valid registration, the technician will immediately stop work, secure the vehicle, and charge a standard <strong>Service Call / Dispatch Fee</strong> as outlined in Section 5. We also reserve the right to report suspicious lock or key requests to local law enforcement.
                  </p>
                </section>

                {/* 4. Mobile Dispatches & Service Rates */}
                <section id="mobile-services" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Wrench className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">4. Mobile Dispatches & Service Rates</h2>
                  </div>
                  <p>
                    We operate entirely as a mobile locksmith service. This means our technicians drive fully stocked, self-contained workshop vehicles directly to your requested location across Brooklyn, Queens, Manhattan, the Bronx, and Staten Island.
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Service Call / Dispatch Fee:</strong> A base dispatch fee (varying depending on the borough, traffic conditions, time of day, and weather) is charged to cover transit, gas, and the technician's time to travel to your exact GPS coordinates. This dispatch fee is earned once our technician is en route.</li>
                    <li><strong>Service Estimates vs. Final Price:</strong> Quotes provided over the phone, email, or chat are initial estimates based entirely on the information provided by the customer. The final cost of service is calculated on-site by our technician after evaluating the condition of your vehicle's lock cylinders, ignition switch, on-board computer module (ECU/immobilizer), and security system.</li>
                    <li><strong>Additional On-site Complexities:</strong> If a vehicle has a damaged lock cylinder, aftermarket alarm systems, corrupted computer modules, or a pre-existing broken key inside the cylinder, extra labor fees may apply. The technician will present a finalized written or verbal quote on-site before commencing any work.</li>
                  </ul>
                </section>

                {/* 5. Cancellation Policy */}
                <section id="cancellation" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Clock className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">5. Cancellation Policy</h2>
                  </div>
                  <p>
                    Because we dispatch mobile technicians immediately to ensure prompt roadside response, cancellation fees apply to protect our overhead and team schedule:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Grace Window:</strong> You may cancel your booking request without penalty within ten (10) minutes of initial dispatch confirmation by calling our dispatch center directly.</li>
                    <li><strong>Late Cancellations:</strong> If you cancel your request more than 10 minutes after confirmation, or if you cancel after the technician has already arrived at your location, you agree to pay the standard <strong>Service Call / Dispatch Fee (starting at $49)</strong> to cover travel overhead.</li>
                    <li><strong>Failed Verification Cancellations:</strong> If the technician arrives and you are unable to provide the mandatory government ID and vehicle ownership/registration documentation, or if you refuse to show them, the job will be cancelled, and you will be held liable for the standard Service Call/Dispatch Fee.</li>
                  </ul>
                </section>

                {/* 6. Payment Terms */}
                <section id="payments" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <CreditCard className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">6. Payment Terms & Security</h2>
                  </div>
                  <p>
                    All billing charges and invoice sums are due immediately upon the completion of locksmith services.
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Accepted Payment Methods:</strong> We accept major credit cards (Visa, MasterCard, American Express, Discover), secure debit cards, cash, and authorized digital mobile payments. We do not accept personal checks.</li>
                    <li><strong>Payment Security:</strong> Credit card transactions are processed securely through licensed, PCI-DSS compliant point-of-sale systems. We do not store cardholder credentials on our systems or share them with unauthorized parties.</li>
                    <li><strong>Unpaid Invoices & Refusal of Payment:</strong> If a customer refuses to pay upon service completion, or if a credit card transaction is declined and alternative payment cannot be provided immediately, the customer agrees that we reserve the right to retain possession of any newly cut/programmed keys or fobs until payment is cleared in full. Unpaid balances will be sent to collections, and we reserve all legal rights to file mechanic's liens or civil claims to recover costs.</li>
                  </ul>
                </section>

                {/* 7. Pre-Existing Damage & Liability */}
                <section id="limitations" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <AlertTriangle className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">7. Pre-Existing Damage & Liability Waivers</h2>
                  </div>
                  <p>
                    Vehicle lockouts, transponder programming, and key extractions are technical procedures that require interacting with delicate mechanical parts, automotive electronics, and weathered components.
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Pre-Existing Conditions:</strong> We are not responsible for any damage caused by pre-existing conditions of your vehicle. This includes worn door linkages, rusted lock cylinders, brittle door trim, failing ignition switches, already damaged wiring, or corrupted vehicle computer modules (ECUs/BCMs/immobilizers).</li>
                    <li><strong>Lockout Procedures:</strong> In emergency lockouts, we utilize professional tools (e.g., air wedges, lock picks, reach tools). While our technicians use extreme care, minor cosmetic paint scuffs, weatherstripping compression, or lock cylinder scratches can occur, especially on older or previously damaged doors. By requesting service, you waive any liability against the Company for minor wear-and-tear or cosmetic anomalies occurring during emergency access.</li>
                    <li><strong>Limitation of Liability:</strong> To the absolute maximum extent permitted by New York State law, the total collective liability of <strong>{SITE.name}</strong>, its directors, officers, employees, contractors, and affiliates for any claims, damages, losses, or expenses arising from our services is strictly limited to <strong>the actual dollar amount paid by you to us</strong> for the specific service call in question. We shall not be liable for any indirect, incidental, special, exemplary, or consequential damages, including but not limited to loss of business, alternate transportation expenses, towing charges, or lost wages.</li>
                  </ul>
                </section>

                {/* 8. Key Warranties & Exclusions */}
                <section id="warranties" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <BadgeCheck className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">8. Key Warranties & Exclusions</h2>
                  </div>
                  <p>
                    We take pride in our workmanship. We stand behind our keys and fobs with a standard <strong>90-day limited functional warranty</strong> starting from the service date.
                  </p>
                  <p><strong>What is Covered:</strong> If a key blade we cut fails to turn, or a transponder chip/fob remote we provided and programmed stops communicating with your vehicle due to normal wear and tear or manufacturing defect, we will repair, reprogram, or replace it free of charge.</p>
                  
                  {/* Warranty Exclusions & Customer-Supplied Keys Alert */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-red-100 rounded-lg text-red-700 shrink-0">
                        <Ban className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-red-800 text-base m-0 mb-1">
                          Strict Exclusions to Key Warranties
                        </h4>
                        <p className="text-sm text-red-800 leading-relaxed m-0">
                          <strong>1. Customer-Supplied Key Blanks & Fobs:</strong> We do NOT warrant key blanks, remote fobs, or smart keys purchased online by the customer (e.g., from eBay, Amazon, or discount sites). While we will cut and attempt to program customer-provided keys, if the chip fails to program, stops working, or the key blade breaks, you are still fully responsible for the full labor and service call fee. No warranty is provided.
                          <br />
                          <strong>2. Physical & Environmental Abuse:</strong> The warranty is immediately voided if the key or fob shows signs of drop damage, cracked casing, heavy physical abuse, water submersion, or modifications.
                          <br />
                          <strong>3. Vehicle-Side Failure:</strong> If the key stops working because your vehicle's alternator died, battery is flat, computer module is corrupted, or receiver antenna failed, our warranty does not apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 9. Indemnification */}
                <section id="indemnification" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <ShieldAlert className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">9. Indemnification</h2>
                  </div>
                  <p>
                    You agree to indemnify, defend, and hold harmless <strong>{SITE.name}</strong>, its parent company, directors, officers, employees, independent contractors, and agents from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with:
                  </p>
                  <ul className="space-y-2">
                    <li>Your breach of this Agreement, or any violation of local, state, or federal laws.</li>
                    <li>Your request for locksmith services, lockout entry, or key programming for any vehicle or property that you do not own or are not fully authorized to access.</li>
                    <li>Any disputes regarding the true legal ownership or possession of the vehicle or property being serviced.</li>
                  </ul>
                </section>

                {/* 10. Governing Law */}
                <section id="governing-law" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <HelpCircle className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">10. Governing Law & Dispute Resolution</h2>
                  </div>
                  <p>
                    These Terms of Service and any service dispute or claim arising out of or related to our website or mobile locksmith actions shall be governed by, construed, and enforced in accordance with the laws of the <strong>State of New York</strong>, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any legal action, lawsuit, arbitration, or proceeding arising under or in relation to this Agreement shall be brought exclusively in the state or federal courts located in the City of New York (Queens County or Richmond County, depending on headquarters operations). You and the Company explicitly consent to the personal jurisdiction and venue of these courts.
                  </p>
                  <p>
                    If you have any questions or require clarification regarding these Terms of Service, please contact us prior to authorizing service:
                  </p>
                  
                  <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                        <Phone className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-primary mb-0.5">Customer Support Hotline</h5>
                        <a href={`tel:${SITE.phone}`} className="text-gray-600 hover:text-brand-accent transition-colors font-medium">
                          {SITE.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                        <Mail className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-primary mb-0.5">Legal Operations Email</h5>
                        <a href={`mailto:${SITE.email}`} className="text-gray-600 hover:text-brand-accent transition-colors font-medium">
                          {SITE.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner 
          title="Need professional automotive locksmith services?"
          subtitle="Our mobile technicians are licensed, bonded, insured, and fully equipped. Get a fast, accurate on-site quote now." 
        />
      </div>
    </div>
  )
}
