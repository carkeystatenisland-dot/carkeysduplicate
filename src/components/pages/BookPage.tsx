import BookingForm from '@/components/ui/BookingForm'
import TrustBadges from '@/components/ui/TrustBadges'
import { SITE } from '@/lib/constants'
import type { Locale } from '@/lib/i18n'

const T = {
  en: {
    h1: 'Book Mobile Car Key Duplication in NYC',
    sub: 'We come to you — anywhere in all 5 boroughs',
    faster: 'Need it faster? Call us directly:',
    readyH: 'What to have ready:',
    ready: ['Vehicle Identification Number (VIN)', "Valid Photo ID or Driver's License", 'Proof of Vehicle Ownership', 'The vehicle must be present'],
    promiseH: 'Our Promise',
    promise: 'We confirm your booking within 15 minutes of submission and dispatch a technician to your exact location.',
  },
  es: {
    h1: 'Reserve la copia de llaves de carro a domicilio en NYC',
    sub: 'Vamos hasta usted, en cualquier parte de los 5 condados',
    faster: '¿Lo necesita más rápido? Llámenos directamente:',
    readyH: 'Qué tener listo:',
    ready: ['Número de identificación del vehículo (VIN)', 'Identificación con foto o licencia de conducir vigente', 'Prueba de propiedad del vehículo', 'El vehículo debe estar presente'],
    promiseH: 'Nuestra promesa',
    promise: 'Confirmamos su reserva en menos de 15 minutos después de enviarla y despachamos un técnico a su ubicación exacta.',
  },
}

export default function BookPage({ locale }: { locale: Locale }) {
  const t = T[locale]
  return (
    <div className="bg-brand-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary tracking-tight mb-4">{t.h1}</h1>
          <p className="text-xl text-gray-600 font-medium">{t.sub}</p>
        </div>

        <TrustBadges locale={locale} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-8">
            <BookingForm locale={locale} />
            <div className="mt-8 text-center text-gray-600 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="font-medium text-lg">{t.faster}</p>
              <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-brand-accent mt-2 block hover:text-yellow-500 transition-colors">{SITE.phoneDisplay}</a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-brand-primary mb-4">{t.readyH}</h3>
              <ul className="space-y-3 text-gray-600">
                {t.ready.map((r) => (
                  <li key={r} className="flex gap-2"><span className="text-brand-accent font-bold" aria-hidden="true">✓</span><span>{r}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-primary text-white p-6 rounded-xl shadow-md border-t-4 border-brand-accent">
              <h3 className="text-lg font-bold text-brand-accent mb-2">{t.promiseH}</h3>
              <p className="font-medium">{t.promise}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
