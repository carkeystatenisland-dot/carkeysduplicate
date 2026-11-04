'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown, Globe } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { getAlternates, getLocaleFromPath, getNav, localizePath } from '@/lib/i18n'
import clsx from 'clsx'

type NavItem = { name: string; href: string }

/** Header language switcher. Links to the SAME page in the other language on every route. */
function LanguageSwitch({ pathname, compact = false }: { pathname: string; compact?: boolean }) {
  const locale = getLocaleFromPath(pathname)
  const alternates = getAlternates(pathname)
  const enHref = alternates?.en ?? '/'
  const esHref = alternates?.es ?? '/es'
  return (
    <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-0.5 text-xs font-bold" role="group" aria-label={locale === 'es' ? 'Idioma' : 'Language'}>
      <Globe className="w-3.5 h-3.5 text-gray-500 ml-1.5 mr-1" aria-hidden="true" />
      <Link
        href={enHref}
        hrefLang="en-US"
        lang="en"
        aria-current={locale === 'en' ? 'page' : undefined}
        className={clsx('px-2 py-1 rounded-full transition-colors', locale === 'en' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:text-brand-primary')}
      >
        {compact ? 'EN' : 'English'}
      </Link>
      <Link
        href={esHref}
        hrefLang="es-US"
        lang="es"
        aria-current={locale === 'es' ? 'page' : undefined}
        className={clsx('px-2 py-1 rounded-full transition-colors', locale === 'es' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:text-brand-primary')}
      >
        {compact ? 'ES' : 'Español'}
      </Link>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || '/'
  const locale = getLocaleFromPath(pathname)
  const es = locale === 'es'
  const nav = getNav(locale)
  const l = (p: string) => localizePath(p, locale)

  const t = es
    ? { services: 'Servicios', boroughs: 'Zonas', makes: 'Marcas', blog: 'Blog', quote: 'Cotización', freeQuote: 'Cotización gratis', call: 'Llamar', menu: 'Abrir menú', nav: 'Navegación principal' }
    : { services: 'Services', boroughs: 'Boroughs', makes: 'Makes', blog: 'Blog', quote: 'Get a Quote', freeQuote: 'Get a Free Quote', call: 'Call', menu: 'Toggle menu', nav: 'Main navigation' }

  const serviceItems: NavItem[] = nav.services.map((s) => ({ name: s.name || s.enPath, href: s.href }))
  const boroughItems: NavItem[] = nav.boroughs
  const makeItems: NavItem[] = nav.makes

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
      <Link href={href} className={clsx('font-medium transition-colors hover:text-brand-accent', isActive ? 'text-brand-accent' : 'text-brand-primary')}>
        {children}
      </Link>
    )
  }

  const Dropdown = ({ title, items, columns = 1 }: { title: string, items: NavItem[], columns?: 1 | 2 }) => {
    const isActive = items.some(item => pathname === item.href)
    return (
      <div className="relative group">
        <button className={clsx('flex items-center gap-1 font-medium transition-colors group-hover:text-brand-accent', isActive ? 'text-brand-accent' : 'text-brand-primary')} aria-haspopup="true">
          {title} <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </button>
        <div className="absolute top-full left-0 hidden group-hover:block pt-4">
          <div className={clsx('bg-white shadow-xl rounded-lg border border-gray-100 py-2 max-h-[60vh] overflow-y-auto', columns === 2 ? 'min-w-[360px] grid grid-cols-2' : 'min-w-[260px]')}>
            {items.map((item) => (
              <Link key={item.href} href={item.href} className={clsx('block px-4 py-2 text-sm hover:bg-brand-light hover:text-brand-accent transition-colors', pathname === item.href ? 'text-brand-accent bg-brand-light' : 'text-gray-700')}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <nav className={clsx('fixed top-0 w-full z-40 transition-all duration-300', scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4')} aria-label={t.nav}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={l('/')} className="flex items-center gap-2" aria-label={SITE.name}>
            <span className="font-heading font-bold text-xl tracking-tight text-brand-primary leading-tight">
              Car Key<span className="text-brand-accent"> Duplicate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            <Dropdown title={t.services} items={serviceItems} />
            <Dropdown title={t.boroughs} items={boroughItems} />
            <Dropdown title={t.makes} items={makeItems} columns={2} />
            <NavLink href={l('/blog')}>{t.blog}</NavLink>
            <LanguageSwitch pathname={pathname} />
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-accent transition-colors">
              <Phone className="w-5 h-5 text-brand-accent" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <Link href={l('/request-a-quote')} className="bg-brand-accent text-brand-primary font-bold px-6 py-2.5 rounded-md hover:bg-yellow-400 transition-colors shadow-sm">
              {t.quote}
            </Link>
          </div>

          {/* Mobile / tablet header: language switch always visible next to the menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitch pathname={pathname} compact />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-primary hover:text-brand-accent focus:outline-none" aria-label={t.menu} aria-expanded={isOpen}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-50 overflow-y-auto lg:hidden">
          <div className="px-4 py-6 space-y-6 flex flex-col">
            <div className="flex justify-center"><LanguageSwitch pathname={pathname} /></div>

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

            <div className="space-y-4">
              <div className="font-heading font-bold text-lg text-gray-400 uppercase tracking-wider">{t.makes}</div>
              <div className="grid grid-cols-3 gap-2 pl-4 border-l-2 border-brand-light">
                {makeItems.map(item => (
                  <Link key={item.href} href={item.href} className="block py-2 text-brand-primary font-medium text-sm">{item.name}</Link>
                ))}
              </div>
            </div>
            
            <Link href={l('/blog')} className="font-heading font-bold text-xl text-brand-primary py-2 border-b border-gray-100">{t.blog}</Link>

            <div className="pt-6 flex flex-col gap-4">
              <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-4 rounded-lg w-full">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {t.call} {SITE.phoneDisplay}
              </a>
              <Link href={l('/request-a-quote')} className="flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-bold px-6 py-4 rounded-lg w-full">
                {t.freeQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
