import { generatePageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/pages/LegalPage'
import { PRIVACY } from '@/content/legal/privacy'

export const metadata = generatePageMetadata({
  title: 'Política de privacidad | Car Key Duplicate NYC',
  description: 'Conozca cómo Car Key Duplicate NYC recopila, protege y administra de forma segura su información personal y de verificación del vehículo.',
  slug: '/es/politica-de-privacidad',
})

export default function Page() {
  return <LegalPage locale="es" doc={PRIVACY.es} />
}
