import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('queens')

export const metadata = generatePageMetadata({
  title: `Copia de Llaves de Carro en Queens | A Domicilio`,
  description: `Copia de llaves de carro a domicilio en Queens. Llaves con chip, inteligentes y controles programados en el lugar. Evite la grúa al dealer.`,
  slug: `/es/llaves-de-carro-queens`,
})

export default function Page() {
  return <BoroughPage locale="es" borough={borough} />
}
