import { generatePageMetadata } from '@/lib/metadata'
import IntentPage from '@/components/pages/IntentPage'
import { getIntentContent } from '@/lib/serviceTemplateData'

const intent = getIntentContent('same-day-car-key-duplicate-nyc')

export const metadata = generatePageMetadata({
  title: intent.copy.es.title,
  description: intent.copy.es.description,
  slug: '/es/copia-de-llaves-de-carro-mismo-dia-nyc',
})

export default function Page() {
  return <IntentPage locale="es" intent={intent} />
}
