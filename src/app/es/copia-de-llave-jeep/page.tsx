import { generatePageMetadata } from '@/lib/metadata'
import MakePage from '@/components/pages/MakePage'
import { getMakeContent } from '@/lib/makeData'

const make = getMakeContent('jeep-key-duplicate')

export const metadata = generatePageMetadata({
  title: `Copia de Llaves de Carro Jeep en NYC | Cerrajero Móvil`,
  description: `Copia a domicilio de llaves de carro Jeep en NYC. Cortamos y programamos llaves con chip, llaves inteligentes y controles en el lugar. Mismo día.`,
  slug: `/es/copia-de-llave-jeep`,
})

export default function Page() {
  return <MakePage locale="es" make={make} />
}
