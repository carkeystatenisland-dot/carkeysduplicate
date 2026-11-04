import { generatePageMetadata } from '@/lib/metadata'
import MakePage from '@/components/pages/MakePage'
import { getMakeContent } from '@/lib/makeData'

const make = getMakeContent('kia-key-duplicate')

export const metadata = generatePageMetadata({
  title: `Kia Car Key Duplication NYC | Mobile Locksmith`,
  description: `Expert mobile Kia car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.`,
  slug: `kia-key-duplicate`,
})

export default function Page() {
  return <MakePage locale="en" make={make} />
}
