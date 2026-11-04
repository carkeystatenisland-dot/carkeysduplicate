interface PriceTableProps {
  caption: string
  columns: string[]
  rows: string[][]
  note?: string
}

export default function PriceTable({ caption, columns, rows, note }: PriceTableProps) {
  return (
    <div className="my-6">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-left text-sm md:text-base">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-brand-primary text-white">
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-heading font-semibold whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? 'bg-gray-50' : ''}>
                {r.map((cell, j) => (
                  j === 0
                    ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-brand-primary">{cell}</th>
                    : <td key={j} className="px-4 py-3 text-gray-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-sm text-gray-500 mt-3">{note}</p>}
    </div>
  )
}
