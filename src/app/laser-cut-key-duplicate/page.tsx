import { generatePageMetadata } from '@/lib/metadata'
import ServiceTemplatePage from '@/components/pages/ServiceTemplatePage'
import { getServiceTemplate } from '@/lib/serviceTemplateData'

const service = getServiceTemplate('laser-cut-key-duplicate')

export const metadata = generatePageMetadata({
  title: service.copy.en.title,
  description: service.copy.en.description,
  slug: '/laser-cut-key-duplicate',
})

export default function Page() {
  return <ServiceTemplatePage locale="en" service={service} />
}
