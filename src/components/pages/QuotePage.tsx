import QuoteForm from '@/components/ui/QuoteForm'
import TrustBadges from '@/components/ui/TrustBadges'
import type { Locale } from '@/lib/i18n'

const T = {
  en: {
    h1: 'Get a Free Car Key Duplication Quote — NYC',
    sub: 'No hidden fees. No dealer markup. Mobile service to your location.',
    priceH: 'Price Transparency',
    factorsH: 'What determines the price?',
    factors: ['Vehicle Year, Make, and Model', 'Key Technology (Transponder, Smart, Laser-cut)', 'Whether you have a working key or lost all keys', 'Type of programming required'],
    cheaperH: "Why we're cheaper than dealers",
    cheaper1: 'Dealerships mark up key replacements by 200-300% and often charge a separate "programming fee" of $150+.',
    cheaper2: 'We use the exact same OEM-grade equipment but pass the savings directly to you, and you save on towing fees.',
  },
  es: {
    h1: 'Cotización gratis para copia de llaves de carro — NYC',
    sub: 'Sin cargos ocultos. Sin sobreprecio de dealer. Servicio móvil en su ubicación.',
    priceH: 'Transparencia de precios',
    factorsH: '¿Qué determina el precio?',
    factors: ['Año, marca y modelo del vehículo', 'Tecnología de la llave (chip, inteligente, corte láser)', 'Si tiene una llave que funciona o perdió todas', 'Tipo de programación requerida'],
    cheaperH: 'Por qué somos más baratos que los dealers',
    cheaper1: 'Los dealers cobran entre 200% y 300% más por los reemplazos de llaves y a menudo agregan un "cargo de programación" aparte de $150 o más.',
    cheaper2: 'Usamos exactamente el mismo equipo de nivel original pero le trasladamos el ahorro directamente a usted, y además se ahorra la grúa.',
  },
}

export default function QuotePage({ locale }: { locale: Locale }) {
  const t = T[locale]
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary tracking-tight mb-4">{t.h1}</h1>
          <p className="text-xl text-gray-600 font-medium">{t.sub}</p>
        </div>

        <div className="mb-12">
          <QuoteForm locale={locale} />
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">{t.priceH}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">{t.factorsH}</h3>
              <ul className="space-y-2 text-gray-600">
                {t.factors.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">{t.cheaperH}</h3>
              <p className="text-gray-600 mb-2">{t.cheaper1}</p>
              <p className="text-gray-600">{t.cheaper2}</p>
            </div>
          </div>
        </div>

        <TrustBadges locale={locale} />
      </div>
    </div>
  )
}
