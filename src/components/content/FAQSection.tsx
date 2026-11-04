import FAQAccordion, { type FAQItem } from '@/components/ui/FAQAccordion'

interface FAQSectionProps {
  id?: string
  title: string
  subtitle?: string
  items: FAQItem[]
}

/** FAQ block with FAQPage JSON-LD (emitted by FAQAccordion). */
export default function FAQSection({ id = 'faq', title, subtitle, items }: FAQSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 mb-14">
      <h2 className="text-2xl md:text-3xl font-heading text-brand-primary font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      <FAQAccordion items={items} />
    </section>
  )
}
