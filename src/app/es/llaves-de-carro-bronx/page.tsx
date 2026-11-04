import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('bronx')

export const metadata = generatePageMetadata({
  title: `Copia de Llaves de Carro en El Bronx | A Domicilio`,
  description: `Copia de llaves de carro a domicilio en El Bronx. Llaves con chip, inteligentes y controles programados en el lugar. Evite la grúa al dealer.`,
  slug: `/es/llaves-de-carro-bronx`,
})

export default function Page() {
  return <BoroughPage locale="es" borough={borough} />
}
