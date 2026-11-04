import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { BUSINESS_ID } from '@/components/seo/LocalBusinessSchema'
import { SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { BLOG_POSTS_DATA } from '@/lib/blogData'

export const dynamicParams = false;

// Editorial dates come from the content repository history. Never render the
// build date as "Updated" — Google treats inaccurate freshness signals as spam.
const DEFAULT_PUBLISHED = '2026-05-17'
const DEFAULT_MODIFIED = '2026-08-05'

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

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
    title: `${post.title} | ${SITE.name}`,
    description: post.description,
    slug: `/blog/${resolvedParams.slug}`,
    image: `${SITE.url}/blog/${resolvedParams.slug}.jpg`,
    type: 'article',
    publishedTime: post.datePublished ?? DEFAULT_PUBLISHED,
    modifiedTime: post.dateModified ?? DEFAULT_MODIFIED,
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA[resolvedParams.slug]

  if (!post) {
    notFound()
  }

  const published = post.datePublished ?? DEFAULT_PUBLISHED
  const modified = post.dateModified ?? DEFAULT_MODIFIED
  const url = `${SITE.url}/blog/${resolvedParams.slug}`
  const imageUrl = `${SITE.url}/blog/${resolvedParams.slug}.jpg`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        image: imageUrl,
        datePublished: published,
        dateModified: modified,
        inLanguage: 'en-US',
        author: { '@id': BUSINESS_ID },
        publisher: { '@id': BUSINESS_ID },
        about: ['Car key duplication', 'Automotive locksmith', 'New York City'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <div className="bg-white min-h-screen py-12 border-t border-gray-100">
      <JsonLd data={schema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-brand-accent">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-brand-accent">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-700 truncate max-w-[60vw]" aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <article className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img src={`/blog/${resolvedParams.slug}.jpg`} alt={post.title} width={1280} height={720} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
              <span>By the {SITE.name} technician team</span>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Published <time dateTime={published}>{formatDate(published)}</time></span>
              {modified !== published && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>Updated <time dateTime={modified}>{formatDate(modified)}</time></span>
                </>
              )}
            </div>
            
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-primary prose-a:text-brand-accent">
              {post.content}
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-brand-primary mb-4">Get a Free Quote</h3>
              <p className="text-sm text-gray-600 mb-6">Need a key duplicated or replaced? We come to you anywhere in NYC.</p>
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
                  <li><Link href="/lost-car-key-replacement-nyc" className="text-gray-600 hover:text-brand-accent">Lost Car Key Replacement</Link></li>
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
