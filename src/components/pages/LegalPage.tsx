import type { LucideIcon } from 'lucide-react'
import { Calendar } from 'lucide-react'
import ScrollSpyTOC from '@/components/ui/ScrollSpyTOC'
import CTABanner from '@/components/ui/CTABanner'
import { type Locale, localizePath } from '@/lib/i18n'

export interface LegalSection {
  id: string
  icon: LucideIcon
  title: string
  body: React.ReactNode
}

export interface LegalDoc {
  badgeIcon: LucideIcon
  badge: string
  h1: string
  intro: string
  dateLine: string
  toc: { id: string; label: string }[]
  sections: LegalSection[]
  ctaTitle: string
  ctaSubtitle: string
}

/** Callout box used inside legal sections. */
export function LegalCallout({ icon: Icon, title, children, tone = 'accent' }: { icon: LucideIcon; title: string; children: React.ReactNode; tone?: 'accent' | 'danger' }) {
  const wrap = tone === 'danger' ? 'bg-red-50 border-red-400' : 'bg-brand-accent/5 border-brand-accent'
  const chip = tone === 'danger' ? 'bg-red-100 text-red-700' : 'bg-brand-accent/15 text-brand-primary'
  return (
    <div className={`${wrap} border-l-4 p-6 rounded-r-xl my-6`}>
      <div className="flex items-start gap-4">
        <div className={`p-2 ${chip} rounded-lg shrink-0`}><Icon className="w-5 h-5" aria-hidden="true" /></div>
        <div>
          <h4 className="font-heading font-bold text-brand-primary text-base m-0 mb-1">{title}</h4>
          <div className="text-sm text-gray-700 leading-relaxed m-0 [&_p]:m-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

/** Contact card grid used at the end of legal documents. */
export function LegalContacts({ items }: { items: { icon: LucideIcon; label: string; value: React.ReactNode }[] }) {
  return (
    <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0"><it.icon className="w-5 h-5 text-brand-primary" aria-hidden="true" /></div>
          <div>
            <h5 className="font-bold text-brand-primary mb-0.5">{it.label}</h5>
            <div className="text-gray-600 font-medium [&_a]:hover:text-brand-accent [&_a]:transition-colors">{it.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LegalPage({ locale, doc }: { locale: Locale; doc: LegalDoc }) {
  const Badge = doc.badgeIcon
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-brand-primary to-brand-dark text-white py-16 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-brand-accent text-sm font-semibold tracking-wider uppercase mb-3">
            <Badge className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{doc.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-white">{doc.h1}</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{doc.intro}</p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-brand-accent" aria-hidden="true" />
            <span>{doc.dateLine}</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-1/4 shrink-0">
              <ScrollSpyTOC items={doc.toc} />
            </aside>
            <div className="lg:w-3/4">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-primary prose-a:text-brand-accent prose-strong:text-brand-primary">
                {doc.sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24 mb-16">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                      <s.icon className="w-6 h-6 text-brand-accent shrink-0" aria-hidden="true" />
                      <h2 className="m-0 text-2xl">{s.title}</h2>
                    </div>
                    {s.body}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner title={doc.ctaTitle} subtitle={doc.ctaSubtitle} bookHref={localizePath('/book-now', locale)} {...(locale === 'es' ? { bookLabel: 'Reservar servicio móvil', callLabel: 'Llamar al' } : {})} />
      </div>
    </div>
  )
}
