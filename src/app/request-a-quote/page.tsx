import { generatePageMetadata } from '@/lib/metadata'
import QuotePage from '@/components/pages/QuotePage'

export const metadata = generatePageMetadata({
  title: 'Get a Free Car Key Duplication Quote | NYC Mobile Service',
  description: 'Get a free, no-obligation quote for car key duplication in NYC. No hidden fees. We serve all 5 boroughs. Response within 15 minutes.',
  slug: '/request-a-quote',
})

export default function Page() {
  return <QuotePage locale="en" />
}
