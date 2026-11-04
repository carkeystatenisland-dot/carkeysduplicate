import { generatePageMetadata } from '@/lib/metadata'
import ServiceTemplatePage from '@/components/pages/ServiceTemplatePage'
import { getServiceTemplate } from '@/lib/serviceTemplateData'

const service = getServiceTemplate('laser-cut-key-duplicate')

export const metadata = generatePageMetadata({
  title: service.copy.es.title,
  description: service.copy.es.description,
  slug: '/es/copia-de-llave-de-corte-laser-nyc',
})

export default function Page() {
  return <ServiceTemplatePage locale="es" service={service} />
}
