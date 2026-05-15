'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import clsx from 'clsx'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Inline JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-inset transition-colors hover:bg-gray-50"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span className="font-heading font-semibold text-brand-primary pr-4">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
