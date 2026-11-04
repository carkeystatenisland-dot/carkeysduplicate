import { generatePageMetadata } from '@/lib/metadata'
import BlogIndexPage from '@/components/pages/BlogIndexPage'

export const metadata = generatePageMetadata({
  title: 'Blog | Car Key Duplicate NYC',
  description: 'Read expert tips, pricing guides, and automotive security advice from our certified NYC car key duplication specialists. Learn how to save on replacement fobs.',
  slug: '/blog',
})

export default function Page() {
  return <BlogIndexPage locale="en" />
}
