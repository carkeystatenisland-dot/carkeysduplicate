import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface LinkGridProps {
  title: string
  links: { label: string; href: string; hrefLang?: string }[]
  columns?: 2 | 3
}

export default function LinkGrid({ title, links, columns = 3 }: LinkGridProps) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-heading font-bold text-brand-primary mb-5">{title}</h2>
      <ul className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-3 list-none pl-0`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} hrefLang={l.hrefLang} className="flex items-center gap-2 text-gray-700 hover:text-brand-accent transition-colors border border-gray-100 rounded-lg px-4 py-3 bg-white shadow-sm">
              <ArrowRight className="w-4 h-4 text-brand-accent flex-shrink-0" aria-hidden="true" /> {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
