import { generatePageMetadata } from '@/lib/metadata'
import ServiceTemplatePage from '@/components/pages/ServiceTemplatePage'
import { getServiceTemplate } from '@/lib/serviceTemplateData'

const service = getServiceTemplate('push-to-start-key-duplicate')

export const metadata = generatePageMetadata({
  title: service.copy.es.title,
  description: service.copy.es.description,
  slug: '/es/copia-de-llave-push-to-start-nyc',
})

export default function Page() {
  return <ServiceTemplatePage locale="es" service={service} />
}
