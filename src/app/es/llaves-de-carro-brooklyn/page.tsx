import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('brooklyn')

export const metadata = generatePageMetadata({
  title: `Copia de Llaves de Carro en Brooklyn | A Domicilio`,
  description: `Copia de llaves de carro a domicilio en Brooklyn. Llaves con chip, inteligentes y controles programados en el lugar. Evite la grúa al dealer.`,
  slug: `/es/llaves-de-carro-brooklyn`,
})

export default function Page() {
  return <BoroughPage locale="es" borough={borough} />
}
