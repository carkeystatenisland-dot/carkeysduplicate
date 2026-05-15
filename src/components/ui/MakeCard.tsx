import Link from 'next/link'

export default function MakeCard({ make }: { make: any }) {
  return (
    <Link href={`/${make.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:border-brand-accent hover:bg-brand-light">
        <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{make.name}</h3>
      </div>
    </Link>
  )
}
