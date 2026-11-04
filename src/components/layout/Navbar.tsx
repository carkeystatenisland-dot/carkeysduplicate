'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown, Globe } from 'lucide-react'
import { SITE, BOROUGHS, SERVICE_TYPES, CAR_MAKES } from '@/lib/constants'
import { ES_NAV, getAlternates, getLocaleFromPath } from '@/lib/i18n'
import clsx from 'clsx'

type NavItem = { name: string; href: string }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || '/'
  const locale = getLocaleFromPath(pathname)
  const es = locale === 'es'

  // Language switcher target: the translated page when one exists, otherwise the other home page.
  const alternates = getAlternates(pathname)
  const switchHref = es ? (alternates?.en ?? '/') : (alternates?.es ?? '/es')
  const switchLabel = es ? 'English' : 'Español'

  const t = es
    ? { services: 'Servicios', boroughs: 'Zonas', makes: 'Marcas', blog: 'Blog', quote: 'Cotización', freeQuote: 'Cotización gratis', call: 'Llamar', menu: 'Abrir menú' }
    : { services: 'Services', boroughs: 'Boroughs', makes: 'Makes', blog: 'Blog', quote: 'Get a Quote', freeQuote: 'Get a Free Quote', call: 'Call', menu: 'Toggle menu' }

  const serviceItems: NavItem[] = es
    ? ES_NAV.services
    : SERVICE_TYPES.map((s) => ({ name: s.name, href: `/${s.slug}` }))
  const boroughItems: NavItem[] = es
    ? ES_NAV.boroughs
    : BOROUGHS.map((b) => ({ name: b.name, href: `/${b.slug}` }))
  const makeItems: NavItem[] = CAR_MAKES.map((m) => ({ name: m.name, href: `/${m.slug}` }))

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

  const Dropdown = ({ title, items }: { title: string, items: NavItem[] }) => {
    const isActive = items.some(item => pathname === item.href)
    return (
      <div className="relative group">
        <button className={clsx(
          "flex items-center gap-1 font-medium transition-colors group-hover:text-brand-accent",
          isActive ? "text-brand-accent" : "text-brand-primary"
        )} aria-haspopup="true">
          {title} <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 hidden group-hover:block pt-4">
          <div className="bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[240px] max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "block px-4 py-2 text-sm hover:bg-brand-light hover:text-brand-accent transition-colors",
                  pathname === item.href ? "text-brand-accent bg-brand-light" : "text-gray-700"
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
    )} aria-label={es ? 'Navegación principal' : 'Main navigation'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href={es ? '/es' : '/'} className="flex items-center gap-2" aria-label={SITE.name}>
            <span className="font-heading font-bold text-xl tracking-tight text-brand-primary leading-tight">
              Car Key<span className="text-brand-accent"> Duplicate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Dropdown title={t.services} items={serviceItems} />
            <Dropdown title={t.boroughs} items={boroughItems} />
            {!es && <Dropdown title={t.makes} items={makeItems} />}
            <NavLink href="/blog">{t.blog}</NavLink>
            <Link
              href={switchHref}
              hrefLang={es ? 'en-US' : 'es-US'}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-accent transition-colors"
            >
              <Globe className="w-4 h-4" /> {switchLabel}
            </Link>
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
              {t.quote}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href={switchHref} hrefLang={es ? 'en-US' : 'es-US'} className="flex items-center gap-1 text-sm font-medium text-gray-600">
              <Globe className="w-4 h-4" /> {es ? 'EN' : 'ES'}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-primary hover:text-brand-accent focus:outline-none"
              aria-label={t.menu}
              aria-expanded={isOpen}
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
              <div className="font-heading font-bold text-lg text-gray-400 uppercase tracking-wider">{t.services}</div>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-light">
                {serviceItems.map(item => (
                  <Link key={item.href} href={item.href} className="block py-2 text-brand-primary font-medium">{item.name}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-heading font-bold text-lg text-gray-400 uppercase tracking-wider">{t.boroughs}</div>
              <div className="grid grid-cols-2 gap-2 pl-4 border-l-2 border-brand-light">
                {boroughItems.map(item => (
                  <Link key={item.href} href={item.href} className="block py-2 text-brand-primary font-medium">{item.name}</Link>
                ))}
              </div>
            </div>
            
            <Link href="/blog" className="font-heading font-bold text-xl text-brand-primary py-2 border-b border-gray-100">
              {t.blog}
            </Link>

            <Link href={switchHref} className="flex items-center gap-2 font-medium text-gray-600 py-2">
              <Globe className="w-4 h-4" /> {switchLabel}
            </Link>

            <div className="pt-6 flex flex-col gap-4">
              <a 
                href={`tel:${SITE.phone}`} 
                className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-4 rounded-lg w-full"
              >
                <Phone className="w-5 h-5" />
                {t.call} {SITE.phoneDisplay}
              </a>
              <Link 
                href="/request-a-quote"
                className="flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-6 py-4 rounded-lg w-full"
              >
                {t.freeQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
