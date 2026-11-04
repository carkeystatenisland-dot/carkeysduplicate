import { generatePageMetadata } from '@/lib/metadata'
import ServiceTemplatePage from '@/components/pages/ServiceTemplatePage'
import { getServiceTemplate } from '@/lib/serviceTemplateData'

const service = getServiceTemplate('smart-key-duplicate')

export const metadata = generatePageMetadata({
  title: service.copy.en.title,
  description: service.copy.en.description,
  slug: '/smart-key-duplicate',
})

export default function Page() {
  return <ServiceTemplatePage locale="en" service={service} />
}
