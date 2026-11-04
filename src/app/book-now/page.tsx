import { generatePageMetadata } from '@/lib/metadata'
import BookPage from '@/components/pages/BookPage'

export const metadata = generatePageMetadata({
  title: 'Book Mobile Car Key Duplication in NYC',
  description: 'Book our mobile car key duplication service. We come to you anywhere in the 5 boroughs. 24/7 fast response.',
  slug: '/book-now',
})

export default function Page() {
  return <BookPage locale="en" />
}
