import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Blog | Car Keys Duplication NYC',
  description: 'Expert tips and guides from our NYC automotive locksmith specialists.',
  slug: '/blog'
})

const POSTS = [
  { slug: 'car-key-duplication-cost-nyc', title: 'How Much Does Car Key Duplication Cost in NYC?' },
  { slug: 'dealer-vs-locksmith-key-duplication-nyc', title: 'Dealer vs. Mobile Locksmith for Key Duplication' },
  { slug: 'can-you-duplicate-transponder-key', title: 'Can You Duplicate a Transponder Key?' },
  { slug: 'avoid-locksmith-scams-nyc', title: 'How to Avoid Locksmith Scams in NYC' },
  { slug: 'what-happens-with-only-one-car-key', title: 'What Happens When You Only Have One Car Key Left' }
]

export default function BlogIndex() {
  return (
    <div className="bg-brand-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-4">NYC Locksmith Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert tips and guides from our NYC automotive locksmith specialists.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="aspect-video relative bg-gray-200">
                  <img src={`/blog/${post.slug}.jpg`} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider mt-auto">Read Article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
