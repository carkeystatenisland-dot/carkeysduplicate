import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function CTABanner({ title, subtitle }: { title?: string, subtitle?: string }) {
  return (
    <div className="bg-brand-primary rounded-2xl p-8 md:p-12 text-center shadow-xl border-t-4 border-brand-accent my-16 mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
        {title || "Need a spare key today? We're mobile across all NYC boroughs."}
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        {subtitle || "Don't wait until you lose your last key. Our mobile technicians can duplicate your transponder or smart key right at your location."}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link 
          href="/book-now"
          className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-md text-lg"
        >
          Book Mobile Service
        </Link>
        <a 
          href={`tel:${SITE.phone}`} 
          className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-md text-lg flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
