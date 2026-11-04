import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import TrustBadges from '@/components/ui/TrustBadges'

export interface Crumb { name: string; href: string }

interface ServiceHeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  callLabel: string
  breadcrumbs: Crumb[]
  breadcrumbLabel?: string
  locale?: 'en' | 'es'
}

export default function ServiceHero({ eyebrow, title, subtitle, primaryCta, secondaryCta, callLabel, breadcrumbs, breadcrumbLabel = 'Breadcrumb', locale = 'en' }: ServiceHeroProps) {
  return (
    <header className="bg-brand-primary text-white py-14 md:py-20 px-4 border-b-4 border-brand-accent">
      <div className="max-w-4xl mx-auto">
        <nav aria-label={breadcrumbLabel} className="text-xs md:text-sm text-gray-400 mb-6">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-gray-200" aria-current="page">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-brand-accent">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="text-center">
          {eyebrow && (
            <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-5 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={primaryCta.href} className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors shadow-lg text-lg">
                {secondaryCta.label}
              </Link>
            )}
            <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold px-6 py-4 text-lg hover:text-brand-accent transition-colors">
              <Phone className="w-5 h-5 text-brand-accent" /> {callLabel} {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10"><TrustBadges locale={locale} /></div>
        </div>
      </div>
    </header>
  )
}
