import { generatePageMetadata } from '@/lib/metadata'
import QuotePage from '@/components/pages/QuotePage'

export const metadata = generatePageMetadata({
  title: 'Cotización gratis para copia de llaves de carro | NYC',
  description: 'Pida una cotización gratis y sin compromiso para copiar llaves de carro en NYC. Sin cargos ocultos. Atendemos los 5 condados. Respuesta en menos de 15 minutos.',
  slug: '/es/cotizacion',
})

export default function Page() {
  return <QuotePage locale="es" />
}
