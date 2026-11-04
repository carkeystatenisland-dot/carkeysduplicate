import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('brooklyn')

export const metadata = generatePageMetadata({
  title: `Car Key Duplication in Brooklyn | Mobile, We Come to You`,
  description: `Expert mobile car key duplication in Brooklyn. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.`,
  slug: `brooklyn`,
})

export default function Page() {
  return <BoroughPage locale="en" borough={borough} />
}
