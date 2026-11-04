interface Step { title: string; text: string }

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="!list-none !pl-0 grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {steps.map((s, i) => (
        <li key={s.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex gap-4">
          <span className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-primary text-brand-accent font-heading font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
          <div>
            <h3 className="font-bold text-brand-primary mb-1">{s.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
