import { generatePageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/pages/LegalPage'
import { TERMS } from '@/content/legal/terms'

export const metadata = generatePageMetadata({
  title: 'Terms of Service | Car Key Duplicate NYC',
  description: 'Review our professional locksmith terms of service, ownership verification rules, payment terms, and mobile service call policies.',
  slug: '/terms',
})

export default function Page() {
  return <LegalPage locale="en" doc={TERMS.en} />
}
