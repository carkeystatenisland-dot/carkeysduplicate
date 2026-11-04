import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { BLOG_POSTS_DATA } from '@/lib/blogData'
import BlogPostLayout, { DEFAULT_PUBLISHED, DEFAULT_MODIFIED } from '@/components/pages/BlogPostLayout'

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS_DATA[slug]
  if (!post) {
    return generatePageMetadata({ title: 'Blog Post Not Found', description: 'The requested automotive locksmith blog post was not found.', slug: `/blog/${slug}` })
  }
  return generatePageMetadata({
    title: `${post.title} | ${SITE.name}`.length <= 60 ? `${post.title} | ${SITE.name}` : post.title,
    description: post.description,
    slug: `/blog/${slug}`,
    image: `${SITE.url}/blog/${slug}.jpg`,
    type: 'article',
    publishedTime: post.datePublished ?? DEFAULT_PUBLISHED,
    modifiedTime: post.dateModified ?? DEFAULT_MODIFIED,
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS_DATA[slug]
  if (!post) notFound()
  return <BlogPostLayout locale="en" post={post} enSlug={slug} path={`/blog/${slug}`} />
}
