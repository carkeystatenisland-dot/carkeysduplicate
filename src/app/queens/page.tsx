import { generatePageMetadata } from '@/lib/metadata'
import BoroughPage from '@/components/pages/BoroughPage'
import { getBoroughContent } from '@/lib/boroughData'

const borough = getBoroughContent('queens')

export const metadata = generatePageMetadata({
  title: `Car Key Duplication in Queens | Mobile, We Come to You`,
  description: `Expert mobile car key duplication in Queens. We program transponders, smart keys, and fobs on-site. Save time and avoid dealership towing fees.`,
  slug: `queens`,
})

export default function Page() {
  return <BoroughPage locale="en" borough={borough} />
}
