import type { LucideIcon } from 'lucide-react'

interface SectionProps {
  id: string
  title: string
  icon?: LucideIcon
  intro?: string
  children: React.ReactNode
}

export default function Section({ id, title, icon: Icon, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 mb-14">
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="w-7 h-7 text-brand-accent flex-shrink-0" aria-hidden="true" />}
        <h2 className="text-2xl md:text-3xl font-heading text-brand-primary font-bold m-0">{title}</h2>
      </div>
      {intro && <p className="text-lg text-gray-700 leading-relaxed mb-5">{intro}</p>}
      <div className="text-gray-700 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-brand-primary [&_a]:text-brand-primary [&_a]:underline [&_a]:decoration-brand-accent [&_a]:underline-offset-2 hover:[&_a]:text-brand-accent">
        {children}
      </div>
    </section>
  )
}
