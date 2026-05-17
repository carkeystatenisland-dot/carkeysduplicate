import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/ui/CTABanner'
import { SERVICE_TYPES, BOROUGHS } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { BLOG_POSTS_DATA } from '@/lib/blogData'

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA[resolvedParams.slug]
  
  if (!post) {
    return generatePageMetadata({
      title: 'Blog Post Not Found',
      description: 'The requested automotive locksmith blog post was not found.',
      slug: `/blog/${resolvedParams.slug}`
    })
  }

  return generatePageMetadata({
    title: `${post.title} | NYC Keys Blog`,
    description: post.description,
    slug: `/blog/${resolvedParams.slug}`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carkeysduplication.com'}/blog/${resolvedParams.slug}.jpg`
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA[resolvedParams.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <article className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img src={`/blog/${resolvedParams.slug}.jpg`} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-4 text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
              <span>By NYC Keys Specialist</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-primary prose-a:text-brand-accent">
              {post.content}
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-brand-primary mb-4">Get a Free Quote</h3>
              <p className="text-sm text-gray-600 mb-6">Need a key duplicated or replaced? We come to you.</p>
              <Link 
                href="/request-a-quote" 
                className="block w-full text-center bg-brand-accent text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Request Quote Now
              </Link>
              
              <div className="mt-8">
                <h4 className="font-bold text-brand-primary mb-3">Our Services</h4>
                <ul className="space-y-2 text-sm">
                  {SERVICE_TYPES.map(s => (
                    <li key={s.slug}><Link href={`/${s.slug}`} className="text-gray-600 hover:text-brand-accent">{s.name}</Link></li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-brand-primary mb-3">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {BOROUGHS.map(b => (
                    <Link key={b.slug} href={`/${b.slug}`} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-brand-accent">
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-16">
          <CTABanner />
        </div>
      </div>
    </div>
  )
}
