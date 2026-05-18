import Link from 'next/link'
import { KeyRound, Phone, Home, ArrowRight, MapPin } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES } from '@/lib/constants'

export const metadata = {
  title: 'Page Not Found | Car Keys Duplication NYC',
  description: 'The requested page was not found. Contact Car Keys Duplication NYC for mobile transponder key, smart key, and key fob duplication services across all 5 boroughs.',
}

export default function NotFound() {
  return (
    <div className="bg-brand-primary min-h-[80vh] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Sleek Icon Display */}
        <div className="inline-flex p-5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-inner animate-pulse">
          <KeyRound className="w-16 h-16 text-brand-accent" />
        </div>

        {/* 404 Status */}
        <h1 className="text-7xl md:text-8xl font-heading font-extrabold text-brand-accent mb-4 tracking-tighter">
          404
        </h1>

        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          It looks like the link you followed is broken, has been moved, or doesn't exist. Don't worry—getting lost in NYC happens to the best of us! 
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Link 
            href="/"
            className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-2 text-base duration-200 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" /> Back to Home Page
          </Link>
          <a 
            href={`tel:${SITE.phone}`}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 text-base duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 text-brand-accent" /> Call Dispatch {SITE.phoneDisplay}
          </a>
        </div>

        {/* Sitemap Helper Links */}
        <div className="border-t border-white/10 pt-10 text-left">
          <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-6 text-center">
            Or, let us help you find what you need:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm max-w-xl mx-auto">
            {/* Services */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                <KeyRound className="w-4 h-4 text-brand-accent" /> Locksmith Services
              </h4>
              <ul className="space-y-2.5">
                {SERVICE_TYPES.slice(0, 4).map(s => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="text-gray-300 hover:text-brand-accent flex items-center justify-between group">
                      <span>{s.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Areas */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                <MapPin className="w-4 h-4 text-brand-accent" /> Coverage Areas
              </h4>
              <ul className="space-y-2.5">
                {BOROUGHS.map(b => (
                  <li key={b.slug}>
                    <Link href={`/${b.slug}`} className="text-gray-300 hover:text-brand-accent flex items-center justify-between group">
                      <span>{b.name} Mobile Lab</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
