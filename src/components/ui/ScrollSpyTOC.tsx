'use client'

import { useState, useEffect } from 'react'
import { Menu, ChevronDown, List } from 'lucide-react'

interface TOCItem {
  id: string
  label: string
}

interface ScrollSpyTOCProps {
  items: TOCItem[]
}

export default function ScrollSpyTOC({ items }: ScrollSpyTOCProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    // Set initial active state to the first item if none is in view yet
    if (items.length > 0) {
      setActiveId(items[0].id)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find entries that are intersecting
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting)
      
      if (intersectingEntries.length > 0) {
        // Sort by how close they are to the top of the viewport
        intersectingEntries.sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top
        })
        
        // Set the active section
        setActiveId(intersectingEntries[0].target.id)
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-100px 0px -60% 0px', // Trigger when section occupies the upper-middle of viewport
      threshold: 0,
    })

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [items])

  const handleLinkClick = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeLabel = items.find((item) => item.id === activeId)?.label || 'Navigate Page'

  return (
    <div className="w-full">
      {/* Mobile Selector Dropdown (visible only on mobile/tablet) */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-brand-primary text-white px-5 py-4 rounded-xl shadow-md border border-brand-primary/10 hover:bg-brand-primary/95 transition-all duration-200"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents Menu"
        >
          <div className="flex items-center gap-2.5">
            <List className="w-4 h-4 text-brand-accent" />
            <span className="font-heading font-semibold text-sm tracking-wide">
              {activeLabel}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-brand-accent transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Mobile Dropdown Panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] mt-2 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="bg-white border border-gray-100 rounded-xl shadow-lg py-2 divide-y divide-gray-50 max-h-[350px] overflow-y-auto">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? 'text-brand-accent bg-brand-primary/5 font-semibold border-l-4 border-brand-accent'
                      : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Sticky Sidebar (visible on LG and above) */}
      <div className="hidden lg:block bg-brand-light p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-28">
        <h3 className="font-heading font-bold text-brand-primary text-xs uppercase tracking-wider mb-5 flex items-center gap-2 border-b border-gray-200 pb-3">
          <List className="w-4 h-4 text-brand-accent" />
          <span>Table of Contents</span>
        </h3>
        <nav className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-2 ${
                  isActive
                    ? 'text-brand-primary bg-white border-brand-accent font-semibold shadow-sm translate-x-1'
                    : 'text-gray-500 hover:text-brand-primary border-transparent hover:border-gray-300'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
