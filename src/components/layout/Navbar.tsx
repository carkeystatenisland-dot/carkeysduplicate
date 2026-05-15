'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES, CAR_MAKES } from '@/lib/constants'
import clsx from 'clsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href
    return (
      <Link 
        href={href} 
        className={clsx(
          "font-medium transition-colors hover:text-brand-accent",
          isActive ? "text-brand-accent" : "text-brand-primary"
        )}
      >
        {children}
      </Link>
    )
  }

  const Dropdown = ({ title, items }: { title: string, items: { name: string, slug: string }[] }) => {
    const isActive = items.some(item => pathname === `/${item.slug}`)
    return (
      <div className="relative group">
        <button className={clsx(
          "flex items-center gap-1 font-medium transition-colors group-hover:text-brand-accent",
          isActive ? "text-brand-accent" : "text-brand-primary"
        )}>
          {title} <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 hidden group-hover:block pt-4">
          <div className="bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[240px] max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={clsx(
                  "block px-4 py-2 text-sm hover:bg-brand-light hover:text-brand-accent transition-colors",
                  pathname === `/${item.slug}` ? "text-brand-accent bg-brand-light" : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-40 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl tracking-tight text-brand-primary leading-tight">
              Car Keys<span className="text-brand-accent"> Duplication</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Dropdown title="Services" items={SERVICE_TYPES} />
            <Dropdown title="Boroughs" items={BOROUGHS} />
            <Dropdown title="Makes" items={CAR_MAKES} />
            <NavLink href="/blog">Blog</NavLink>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-accent transition-colors">
              <Phone className="w-5 h-5 text-brand-accent" />
              {SITE.phoneDisplay}
            </a>
            <Link 
              href="/request-a-quote"
              className="bg-brand-accent text-brand-primary font-bold px-6 py-2.5 rounded-md hover:bg-yellow-400 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-primary hover:text-brand-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-50 overflow-y-auto lg:hidden">
          <div className="px-4 py-6 space-y-6 flex flex-col">
            <div className="space-y-4">
              <div className="font-heading font-bold text-lg text-gray-400 uppercase tracking-wider">Services</div>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-light">
                {SERVICE_TYPES.map(item => (
                  <Link key={item.slug} href={`/${item.slug}`} className="block py-2 text-brand-primary font-medium">{item.name}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-heading font-bold text-lg text-gray-400 uppercase tracking-wider">Boroughs</div>
              <div className="grid grid-cols-2 gap-2 pl-4 border-l-2 border-brand-light">
                {BOROUGHS.map(item => (
                  <Link key={item.slug} href={`/${item.slug}`} className="block py-2 text-brand-primary font-medium">{item.name}</Link>
                ))}
              </div>
            </div>
            
            <Link href="/blog" className="font-heading font-bold text-xl text-brand-primary py-2 border-b border-gray-100">
              Blog
            </Link>

            <div className="pt-6 flex flex-col gap-4">
              <a 
                href={`tel:${SITE.phone}`} 
                className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-4 rounded-lg w-full"
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phoneDisplay}
              </a>
              <Link 
                href="/request-a-quote"
                className="flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-6 py-4 rounded-lg w-full"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
