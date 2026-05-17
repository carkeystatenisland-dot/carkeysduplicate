import { generatePageMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import ScrollSpyTOC from '@/components/ui/ScrollSpyTOC'
import CTABanner from '@/components/ui/CTABanner'
import { 
  Shield, 
  Lock, 
  UserCheck, 
  MessageSquare, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText,
  LockKeyhole,
  Database,
  Users,
  CheckCircle2
} from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy | Car Keys Duplication NYC',
  description: 'Learn how Car Keys Duplication NYC securely collects, protects, and manages your personal and vehicle verification information.',
  slug: '/privacy-policy'
})

const tocItems = [
  { id: 'introduction', label: '1. Introduction & Scope' },
  { id: 'information-collected', label: '2. Information We Collect' },
  { id: 'cookies-analytics', label: '3. Cookies & Tracking Technologies' },
  { id: 'how-we-use', label: '4. How We Use Information' },
  { id: 'verification-security', label: '5. Verification & Anti-Theft Policy' },
  { id: 'sms-policy', label: '6. SMS & Mobile Privacy' },
  { id: 'data-retention', label: '7. Data Retention & Deletion' },
  { id: 'third-party-sharing', label: '8. Third-Party Disclosures' },
  { id: 'your-rights', label: '9. Your Privacy Rights' },
  { id: 'contact-us', label: '10. Contact Information' }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-dark text-white py-16 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-brand-accent text-sm font-semibold tracking-wider uppercase mb-3">
            <Shield className="w-5 h-5 shrink-0" />
            <span>Security & Trust</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            How Car Keys Duplication NYC collects, protects, and handles your personal and vehicle verification data.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-brand-accent" />
            <span>Effective Date: May 17, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Interactive Table of Contents */}
            <aside className="lg:w-1/4 shrink-0">
              <ScrollSpyTOC items={tocItems} />
            </aside>
            
            {/* Right Column: Policy Document */}
            <div className="lg:w-3/4">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-primary prose-a:text-brand-accent prose-strong:text-brand-primary">
                
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Eye className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">1. Introduction & Scope</h2>
                  </div>
                  <p>
                    At <strong>{SITE.name}</strong>, we are committed to protecting the privacy, confidentiality, and security of our clients, website users, and service requesters. This Privacy Policy describes how we collect, use, store, process, and protect your personal information when you visit our website (
                    <a href={SITE.url} target="_blank" rel="noopener noreferrer">{SITE.url.replace('https://', '')}</a>) or hire our mobile automotive locksmith services in the New York City metropolitan area.
                  </p>
                  <p>
                    By accessing our website or requesting our mobile key duplication and automotive lock services, you agree to the collection and use of information in accordance with this policy. If you do not agree with any terms in this policy, please do not use our website or request our services.
                  </p>
                </section>

                {/* 2. Information We Collect */}
                <section id="information-collected" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <FileText className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">2. Information We Collect</h2>
                  </div>
                  <p>
                    We collect personal information that you voluntarily provide to us when you request a service quote, book a technician, contact us, or interact with our online booking system. The types of personal information we collect include:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Contact Information:</strong> Name, phone number, email address, and billing/mailing address.</li>
                    <li><strong>Service Location Details:</strong> The physical address, GPS coordinates, or cross streets where you require mobile roadside or residential key duplication.</li>
                    <li><strong>Vehicle Information:</strong> Year, make, model, trim, and Vehicle Identification Number (VIN) of the automobile requiring service. This is necessary to ensure we cut and program the correct transponder, remote fob, or smart key blank.</li>
                    <li><strong>Identity Verification Records:</strong> Digital photos or physical copies of government-issued identification (e.g., driver's license) and proof of vehicle ownership/registration. (See Section 5).</li>
                    <li><strong>Billing and Transaction Details:</strong> Payment card details (processed securely via PCI-compliant payment gateways; we never store your full credit card details on our local servers), billing history, and payment status.</li>
                  </ul>
                </section>

                {/* 3. Cookies & Tracking Technologies */}
                <section id="cookies-analytics" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Database className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">3. Cookies & Tracking Technologies</h2>
                  </div>
                  <p>
                    Like most modern web platforms, our site uses cookies, web beacons, and other tracking technologies to automatically collect specific technical and behavioral details about your visit. This includes:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Technical Data:</strong> Your IP address, browser type and version, operating system, internet service provider, and device type.</li>
                    <li><strong>Site Usage Data:</strong> The pages you visit, time spent on pages, buttons clicked, forms submitted, and traffic sources that led you to our site.</li>
                    <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic, help optimize page layouts, and monitor marketing campaigns. Google Analytics collects anonymized tracking data.</li>
                    <li><strong>Microsoft Clarity:</strong> We utilize Microsoft Clarity to understand how you interact with our website through heatmaps, session recordings, and click-tracking. This information helps us resolve user experience issues and bugs in real-time.</li>
                  </ul>
                  <p>
                    You can manage or disable cookies through your web browser settings. However, disabling cookies may impact your ability to utilize our instant online booking and quote forms.
                  </p>
                </section>

                {/* 4. How We Use Information */}
                <section id="how-we-use" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">4. How We Use Your Information</h2>
                  </div>
                  <p>
                    We process your personal information to fulfill our service commitments, secure our business, and comply with state and local laws. Specifically, your data is used to:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Deliver Locksmith Services:</strong> Schedule, dispatch, and coordinate mobile locksmith technicians to your exact location to perform key cutting, transponder programming, lockouts, or fobs cloning.</li>
                    <li><strong>Formulate Quotes:</strong> Calculate exact, transparent quotes based on your specific car make, model, year, location, and key type.</li>
                    <li><strong>Verify Customer Authority:</strong> Confirm you are the legal owner or authorized operator of the vehicle or property being accessed (crucial to prevent car theft and trespassing).</li>
                    <li><strong>Process Payments:</strong> Finalize invoice charges securely using licensed credit/debit card processing terminals.</li>
                    <li><strong>Customer Support:</strong> Address service inquiries, follow up on feedback, send booking confirmations, and provide warranty/technical support for programmed keys.</li>
                    <li><strong>Website Maintenance:</strong> Diagnose server problems, fix bugs, and continuously improve site navigation and responsiveness.</li>
                  </ul>
                </section>

                {/* 5. Verification & Anti-Theft Policy */}
                <section id="verification-security" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <UserCheck className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">5. Verification & Anti-Theft Policy</h2>
                  </div>
                  <p>
                    To prevent vehicle theft, fraudulent key duplication, and criminal trespassing, <strong>{SITE.name}</strong> operates a strict verification standard. Before any mobile key cutting or transponder programming can begin, the on-site client must present:
                  </p>
                  <ol className="space-y-2">
                    <li>A valid, government-issued photo identification (e.g., Driver's License or Passport).</li>
                    <li>A current vehicle registration, title, lease, or notarized power of attorney establishing legal ownership or authorization to operate the vehicle.</li>
                  </ol>

                  {/* Anti-Theft Verification Callout */}
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 rounded-r-xl my-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-accent/15 rounded-lg text-brand-primary shrink-0">
                        <LockKeyhole className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-brand-primary text-base m-0 mb-1">
                          Mandatory Locksmith Anti-Theft Verification
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed m-0">
                          To protect the community, we do not duplicate keys for individuals who cannot prove legal ownership or authorized access to a vehicle. Our technicians are trained to check vehicle registrations against photo IDs. We reserve the absolute right to refuse dispatch or service on-site if ownership cannot be clearly established.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Photos or records of these verification documents may be temporarily stored by our systems to prove compliance with local security laws and insurance requirements, and are strictly purged as described in Section 7.
                  </p>
                </section>

                {/* 6. SMS & Mobile Privacy */}
                <section id="sms-policy" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <MessageSquare className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">6. SMS & Mobile Privacy</h2>
                  </div>
                  <p>
                    By providing your mobile telephone number on our forms, when booking a service, or calling our dispatch center, you explicitly consent to receive transactional and operational SMS text messages from us. These messages are critical for updating you on booking requests, confirming job slots, sending technician ETA tracking links, and issuing digital invoices.
                  </p>
                  
                  {/* SMS Privacy Protection Callout */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700 shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-emerald-800 text-base m-0 mb-1">
                          A2P 10DLC Mobile Privacy Guarantee
                        </h4>
                        <p className="text-sm text-emerald-800 leading-relaxed m-0">
                          <strong>No Sharing for Marketing:</strong> Your mobile phone number, SMS consent data, and opt-in status are treated with absolute confidentiality. We will <strong>NEVER</strong> share, sell, lease, or rent your mobile numbers or SMS consent information to third parties, partners, affiliates, or advertising networks for marketing or promotional purposes under any circumstances.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    <strong>Opt-Out Options:</strong> You may opt-out of SMS communications at any time. To unsubscribe from text updates, simply reply <strong>"STOP"</strong> to any SMS message sent by our system. After replying "STOP", you will receive a single final confirmation text, and no further text messages will be sent unless you re-initiate booking services.
                  </p>
                </section>

                {/* 7. Data Retention & Deletion */}
                <section id="data-retention" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Lock className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">7. Data Retention & Deletion</h2>
                  </div>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, tax, or reporting requirements.
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Service Records:</strong> Standard invoicing data, including name, car make/model, services performed, and total paid, are retained in our accounting records for tax and warranty compliance (e.g., to honor our 90-day key warranty).</li>
                    <li><strong>Identity Verification Records:</strong> Digital photos of driver's licenses and vehicle registrations captured by our dispatch or on-site technicians are stored in an encrypted, access-restricted database and are **automatically and permanently deleted after thirty (30) days** from the service date.</li>
                  </ul>
                </section>

                {/* 8. Third-Party Disclosures */}
                <section id="third-party-sharing" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Users className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">8. Third-Party Disclosures</h2>
                  </div>
                  <p>
                    We do not sell, trade, rent, or lease your personal information to third parties. We only share your data with trusted third parties in the following limited scenarios:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Authorized Contractors & Technicians:</strong> We share your name, phone number, car model, and address with the specific mobile locksmith technician or trusted sub-contractor dispatched to cut and program your key. These parties are strictly bound to keep your data confidential.</li>
                    <li><strong>Payment Gateways:</strong> We securely transmit payment details to licensed merchant service providers (e.g., Stripe, Square, or PayPal) to complete your transaction in real-time.</li>
                    <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law, court order, search warrant, or subpoena, or if we believe in good faith that such action is necessary to protect the life, safety, or property of our staff or the public.</li>
                  </ul>
                </section>

                {/* 9. Your Privacy Rights */}
                <section id="your-rights" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Shield className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">9. Your Privacy Rights</h2>
                  </div>
                  <p>
                    Depending on your location and regional laws (such as consumer protection standards), you may hold the following rights regarding the personal data we maintain:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Right to Access:</strong> You can request a copy of the specific personal data we hold about you.</li>
                    <li><strong>Right to Correction:</strong> You can request that we update or correct inaccurate or incomplete contact details.</li>
                    <li><strong>Right to Deletion:</strong> You can request that we delete your personal information from our databases (subject to certain legal, auditing, and outstanding invoice exceptions).</li>
                    <li><strong>Right to Opt-Out:</strong> You can withdraw consent for any non-essential cookies, email newsletters, or text dispatch messages.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact our privacy compliance team using the contact channels listed below.
                  </p>
                </section>

                {/* 10. Contact Us */}
                <section id="contact-us" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Mail className="w-6 h-6 text-brand-accent shrink-0" />
                    <h2 className="text-2xl font-bold text-brand-primary m-0">10. Contact Information</h2>
                  </div>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy, our data handling procedures, or your rights, please reach out to us directly:
                  </p>
                  
                  <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                        <Phone className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-primary mb-0.5">Phone</h5>
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
                        <h5 className="font-bold text-brand-primary mb-0.5">Email</h5>
                        <a href={`mailto:${SITE.email}`} className="text-gray-600 hover:text-brand-accent transition-colors font-medium">
                          {SITE.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                        <MapPin className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-primary mb-0.5">Headquarters</h5>
                        <span className="text-gray-600 font-medium">
                          {SITE.address.split(',')[0]}, NYC
                        </span>
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
          title="Lost your keys? Keep a secure backup copy."
          subtitle="Get a second car key cut and programmed today to avoid emergency towing costs. We come directly to you anywhere in NYC." 
        />
      </div>
    </div>
  )
}
