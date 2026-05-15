import Link from 'next/link'
import { SITE, BOROUGHS, SERVICE_TYPES } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-24 md:pb-8 border-t-[6px] border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Business Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading font-bold text-xl tracking-tight text-white leading-tight">
                Car Keys<span className="text-brand-accent"> Duplication</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mobile car key duplication serving all 5 NYC boroughs. We come to your location for fast, on-site service.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">Call:</span>
                <a href={`tel:${SITE.phone}`} className="hover:text-brand-accent transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">Hours:</span>
                {SITE.hours}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">Area:</span>
                {SITE.address}
              </p>
            </div>
            {/* Trust Signals */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-brand-accent">
              <span className="bg-white/10 px-2 py-1 rounded">✓ Licensed & Insured</span>
              <span className="bg-white/10 px-2 py-1 rounded">✓ 24/7 Service</span>
            </div>
          </div>

          {/* Column 2: Boroughs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Service Areas</h3>
            <ul className="space-y-3">
              {BOROUGHS.map((borough) => (
                <li key={borough.slug}>
                  <Link 
                    href={`/${borough.slug}`}
                    className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                  >
                    {borough.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {SERVICE_TYPES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/${service.slug}`}
                    className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  Book Service Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
            
            {/* SEO Authority Link */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-400">
                Partnered with <a href={SITE.mainSite} className="hover:text-white underline decoration-white/30 underline-offset-2">car key replacement Staten Island</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
