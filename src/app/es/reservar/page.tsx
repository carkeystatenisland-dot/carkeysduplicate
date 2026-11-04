import { generatePageMetadata } from '@/lib/metadata'
import BookPage from '@/components/pages/BookPage'

export const metadata = generatePageMetadata({
  title: 'Reservar copia de llaves de carro a domicilio en NYC',
  description: 'Reserve nuestro servicio móvil de copia de llaves de carro. Vamos hasta usted en cualquier parte de los 5 condados. Respuesta rápida 24/7.',
  slug: '/es/reservar',
})

export default function Page() {
  return <BookPage locale="es" />
}
