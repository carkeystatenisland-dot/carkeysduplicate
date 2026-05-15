import Link from 'next/link'

export default function ServiceCard({ service }: { service: any }) {
  return (
    <Link href={`/${service.slug}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
        <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
          <span className="text-brand-primary font-bold">{service.price}</span>
          <span className="text-sm font-medium text-brand-accent group-hover:text-yellow-600">View Details →</span>
        </div>
      </div>
    </Link>
  )
}
