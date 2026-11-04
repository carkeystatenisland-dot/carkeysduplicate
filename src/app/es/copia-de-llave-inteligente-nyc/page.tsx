import { generatePageMetadata } from '@/lib/metadata'
import ServiceTemplatePage from '@/components/pages/ServiceTemplatePage'
import { getServiceTemplate } from '@/lib/serviceTemplateData'

const service = getServiceTemplate('smart-key-duplicate')

export const metadata = generatePageMetadata({
  title: service.copy.es.title,
  description: service.copy.es.description,
  slug: '/es/copia-de-llave-inteligente-nyc',
})

export default function Page() {
  return <ServiceTemplatePage locale="es" service={service} />
}
