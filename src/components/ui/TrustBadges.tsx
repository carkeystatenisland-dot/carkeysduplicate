import { CheckCircle2 } from 'lucide-react'

const SIGNALS = {
  en: ['Licensed & Insured', '24/7 Emergency Dispatch', 'All 5 NYC Boroughs', 'We Come To You', 'Same-Day Service', 'Se habla español'],
  es: ['Con licencia y seguro', 'Emergencias 24/7', 'Los 5 condados de NYC', 'Vamos a su ubicación', 'Servicio el mismo día', 'Hablamos español'],
}

export default function TrustBadges({ locale = 'en' }: { locale?: 'en' | 'es' }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-6 py-6 list-none pl-0">
      {SIGNALS[locale].map((signal) => (
        <li key={signal} className="flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" aria-hidden="true" />
          <span className="text-sm font-medium text-brand-primary">{signal}</span>
        </li>
      ))}
    </ul>
  )
}
