import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function BoroughCard({ borough }: { borough: any }) {
  return (
    <Link href={`/${borough.slug}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-brand-accent h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-accent transition-colors">
            <MapPin className="w-5 h-5 text-brand-primary" />
          </div>
          <h3 className="text-xl font-bold text-brand-primary">{borough.name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{borough.description}</p>
        <div className="text-sm font-medium text-brand-accent group-hover:text-yellow-600 flex items-center gap-1">
          Mobile service to your location <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  )
}
