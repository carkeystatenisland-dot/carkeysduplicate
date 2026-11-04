import { generatePageMetadata } from '@/lib/metadata'
import IntentPage from '@/components/pages/IntentPage'
import { getIntentContent } from '@/lib/serviceTemplateData'

const intent = getIntentContent('same-day-car-key-duplicate-nyc')

export const metadata = generatePageMetadata({
  title: intent.copy.en.title,
  description: intent.copy.en.description,
  slug: '/same-day-car-key-duplicate-nyc',
})

export default function Page() {
  return <IntentPage locale="en" intent={intent} />
}
