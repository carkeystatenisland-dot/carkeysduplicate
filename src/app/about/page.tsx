import { generatePageMetadata } from '@/lib/metadata'
import AboutPage from '@/components/pages/AboutPage'

export const metadata = generatePageMetadata({
  title: 'About Us | Car Key Duplicate NYC',
  description: 'Learn about our expert mobile automotive locksmith team in NYC. Serving all 5 boroughs with licensed, fast, on-site car key duplication and programming.',
  slug: '/about',
})

export default function Page() {
  return <AboutPage locale="en" />
}
