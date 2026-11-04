import { generatePageMetadata } from '@/lib/metadata'
import AboutPage from '@/components/pages/AboutPage'

export const metadata = generatePageMetadata({
  title: 'Sobre nosotros | Car Key Duplicate NYC',
  description: 'Conozca a nuestro equipo de cerrajería automotriz móvil en NYC. Atendemos los 5 condados con copia y programación de llaves de carro a domicilio, con licencia.',
  slug: '/es/sobre-nosotros',
})

export default function Page() {
  return <AboutPage locale="es" />
}
