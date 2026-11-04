import { Zap } from 'lucide-react'

/**
 * A direct, extractable answer placed right under the H1. Written so that
 * search engines and AI assistants can quote it verbatim.
 */
export default function QuickAnswer({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <aside className="bg-brand-light border-l-4 border-brand-accent rounded-r-2xl p-6 md:p-8 shadow-sm my-10" aria-label={label}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
        <Zap className="w-4 h-4 text-brand-accent" /> {label}
      </p>
      <div className="text-lg leading-relaxed text-gray-800 space-y-3">{children}</div>
    </aside>
  )
}
