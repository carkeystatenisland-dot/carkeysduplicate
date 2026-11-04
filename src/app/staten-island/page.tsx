import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('staten-island')

export const metadata = generatePageMetadata({
  title: `Car Key Duplication in Staten Island | Mobile Service`,
  description: `Expert mobile car key duplication in Staten Island. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.`,
  slug: `staten-island`,
})

export default function Page() {
  return <BoroughPage locale="en" borough={borough} />
}
