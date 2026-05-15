import Link from 'next/link'
import { Phone, FileText } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex">
        <a 
          href={`tel:${SITE.phone}`} 
          className="flex-1 flex flex-col items-center justify-center py-3 bg-brand-primary text-white active:bg-brand-primary/90 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <Link 
          href="/request-a-quote" 
          className="flex-1 flex flex-col items-center justify-center py-3 bg-brand-accent text-brand-primary active:bg-brand-accent/90 transition-colors"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Get a Quote</span>
        </Link>
      </div>
    </div>
  )
}
