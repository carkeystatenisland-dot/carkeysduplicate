import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { BLOG_SLUG_EN } from '@/lib/i18n'
import { BLOG_POSTS_DATA_ES } from '@/lib/blogDataEs'
import BlogPostLayout, { DEFAULT_PUBLISHED, DEFAULT_MODIFIED } from '@/components/pages/BlogPostLayout'

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA_ES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS_DATA_ES[slug]
  if (!post) {
    return generatePageMetadata({ title: 'Artículo no encontrado', description: 'El artículo solicitado no fue encontrado.', slug: `/es/blog/${slug}` })
  }
  return generatePageMetadata({
    title: `${post.title} | ${SITE.name}`.length <= 60 ? `${post.title} | ${SITE.name}` : post.title,
    description: post.description,
    slug: `/es/blog/${slug}`,
    image: `${SITE.url}/blog/${BLOG_SLUG_EN[slug]}.jpg`,
    type: 'article',
    publishedTime: post.datePublished ?? DEFAULT_PUBLISHED,
    modifiedTime: post.dateModified ?? DEFAULT_MODIFIED,
  })
}

export default async function BlogPostEs({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS_DATA_ES[slug]
  if (!post) notFound()
  return <BlogPostLayout locale="es" post={post} enSlug={BLOG_SLUG_EN[slug]} path={`/es/blog/${slug}`} />
}
