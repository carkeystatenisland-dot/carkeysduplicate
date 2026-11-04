'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE, BOROUGHS, SERVICE_TYPES } from '@/lib/constants'
import { ES_NAV, getLocaleFromPath } from '@/lib/i18n'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname() || '/'
  const es = getLocaleFromPath(pathname) === 'es'

  const t = es
    ? {
        blurb: 'Cerrajero automotriz móvil que atiende los 5 condados de Nueva York. Vamos a su ubicación para copiar y programar llaves de carro en el momento.',
        call: 'Teléfono:', hours: 'Horario:', area: 'Base:',
        licensed: '✓ Con licencia y seguro', service247: '✓ Emergencias 24/7', spanish: '✓ Hablamos español',
        areas: 'Zonas de servicio', services: 'Nuestros servicios', quick: 'Enlaces rápidos',
        blog: 'Blog y guías (inglés)', quote: 'Pedir cotización', book: 'Reservar servicio', about: 'Sobre nosotros',
        sameDay: 'Servicio el mismo día (inglés)', emergency: 'Emergencias 24 horas (inglés)', mobile: 'Cerrajero automotriz móvil',
        rights: 'Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos',
        hoursText: 'Lun–Dom 9AM–5PM (emergencias 24/7)',
      }
    : {
        blurb: 'Mobile car key duplication serving all 5 NYC boroughs. We come to your location for fast, on-site cutting and programming.',
        call: 'Call:', hours: 'Hours:', area: 'Base:',
        licensed: '✓ Licensed & Insured', service247: '✓ 24/7 Emergency Dispatch', spanish: '✓ Se habla español',
        areas: 'Service Areas', services: 'Our Services', quick: 'Quick Links',
        blog: 'Blog & Guides', quote: 'Request a Quote', book: 'Book Service Now', about: 'About Us',
        sameDay: 'Same-Day Duplication', emergency: '24-Hour Emergency Copy', mobile: 'Mobile Roadside Dispatch',
        rights: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service',
        hoursText: SITE.hours,
      }

  const serviceLinks = es
    ? ES_NAV.services
    : SERVICE_TYPES.map((s) => ({ name: s.name, href: `/${s.slug}` }))
  const boroughLinks = es
    ? ES_NAV.boroughs
    : BOROUGHS.map((b) => ({ name: b.name, href: `/${b.slug}` }))

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-24 md:pb-8 border-t-[6px] border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Business Info (NAP kept identical to structured data) */}
          <div className="space-y-6">
            <Link href={es ? '/es' : '/'} className="inline-block">
              <span className="font-heading font-bold text-xl tracking-tight text-white leading-tight">
                Car Key<span className="text-brand-accent"> Duplicate</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">{t.blurb}</p>
            <address className="not-italic space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">{t.call}</span>
                <a href={`tel:${SITE.phone}`} className="hover:text-brand-accent transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">{t.hours}</span>
                {t.hoursText}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">{t.area}</span>
                {SITE.address}
              </p>
            </address>
            {/* Trust Signals */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-brand-accent">
              <span className="bg-white/10 px-2 py-1 rounded">{t.licensed}</span>
              <span className="bg-white/10 px-2 py-1 rounded">{t.service247}</span>
              <span className="bg-white/10 px-2 py-1 rounded">{t.spanish}</span>
            </div>
          </div>

          {/* Column 2: Boroughs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">{t.areas}</h3>
            <ul className="space-y-3">
              {boroughLinks.map((b) => (
                <li key={b.href}>
                  <Link href={b.href} className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">{t.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
              {!es && (
                <li>
                  <Link href="/lost-car-key-replacement-nyc" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                    Lost Car Key Replacement
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">{t.quick}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.blog}</Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.quote}</Link>
              </li>
              <li>
                <Link href="/book-now" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.book}</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.about}</Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link href="/same-day-car-key-duplicate-nyc" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.sameDay}</Link>
              </li>
              <li>
                <Link href="/24-hour-car-key-duplicate-nyc" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.emergency}</Link>
              </li>
              <li>
                <Link href={es ? '/es/cerrajero-automotriz-movil-nyc' : '/mobile-car-key-duplicate-nyc'} className="text-gray-300 hover:text-brand-accent transition-colors text-sm">{t.mobile}</Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link href={es ? '/' : '/es'} hrefLang={es ? 'en-US' : 'es-US'} className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  {es ? 'English version' : 'Versión en español'}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} {SITE.name}. {t.rights}
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
