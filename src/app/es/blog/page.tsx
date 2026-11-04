import { generatePageMetadata } from '@/lib/metadata'
import BlogIndexPage from '@/components/pages/BlogIndexPage'

export const metadata = generatePageMetadata({
  title: 'Blog | Car Key Duplicate NYC',
  description: 'Consejos expertos, guías de precios y seguridad automotriz de nuestros especialistas en copia de llaves de carro en NYC. Ahorre en controles de reemplazo.',
  slug: '/es/blog',
})

export default function Page() {
  return <BlogIndexPage locale="es" />
}
