import { generatePageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/pages/LegalPage'
import { TERMS } from '@/content/legal/terms'

export const metadata = generatePageMetadata({
  title: 'Términos de servicio | Car Key Duplicate NYC',
  description: 'Términos de servicio de nuestra cerrajería automotriz: verificación de propiedad, condiciones de pago, garantías y políticas de visita de servicio móvil.',
  slug: '/es/terminos-de-servicio',
})

export default function Page() {
  return <LegalPage locale="es" doc={TERMS.es} />
}
