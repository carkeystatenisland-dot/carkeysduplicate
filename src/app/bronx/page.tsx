import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('bronx')

export const metadata = generatePageMetadata({
  title: `Car Key Duplication in The Bronx | Mobile, We Come to You`,
  description: `Expert mobile car key duplication in The Bronx. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.`,
  slug: `bronx`,
})

export default function Page() {
  return <BoroughPage locale="en" borough={borough} />
}
