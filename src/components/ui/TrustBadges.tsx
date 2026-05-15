import { CheckCircle2 } from 'lucide-react'

export default function TrustBadges() {
  const signals = [
    "Licensed & Insured",
    "24/7 Mobile Service",
    "All 5 NYC Boroughs",
    "We Come To You",
    "Same Day Service"
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 py-6">
      {signals.map((signal, index) => (
        <div key={index} className="flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" />
          <span className="text-sm font-medium text-brand-primary">{signal}</span>
        </div>
      ))}
    </div>
  )
}
