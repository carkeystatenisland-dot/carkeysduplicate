import { generatePageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/pages/LegalPage'
import { PRIVACY } from '@/content/legal/privacy'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy | Car Key Duplicate NYC',
  description: 'Learn how Car Key Duplicate NYC securely collects, protects, and manages your personal and vehicle verification information.',
  slug: '/privacy-policy',
})

export default function Page() {
  return <LegalPage locale="en" doc={PRIVACY.en} />
}
