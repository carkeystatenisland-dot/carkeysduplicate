import { generatePageMetadata } from '@/lib/metadata'
import MakePage from '@/components/pages/MakePage'
import { getMakeContent } from '@/lib/makeData'

const make = getMakeContent('honda-key-duplicate')

export const metadata = generatePageMetadata({
  title: `Honda Car Key Duplication NYC | Mobile Locksmith`,
  description: `Expert mobile Honda car key duplication across NYC. We cut and program OEM-grade transponders, smart keys, and fobs on-site.`,
  slug: `honda-key-duplicate`,
})

export default function Page() {
  return <MakePage locale="en" make={make} />
}
