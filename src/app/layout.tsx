import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileCTA from '@/components/layout/MobileCTA'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import { SITE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Car Keys Duplication NYC | Mobile Service All 5 Boroughs',
    template: '%s | Car Keys Duplication NYC',
  },
  description: 'Mobile car key duplication across all NYC boroughs. We come to you — Brooklyn, Queens, Manhattan, Bronx & Staten Island. Transponder keys, smart keys, key fobs. Call 24/7.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Car Keys Duplication NYC — Mobile Locksmith Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@carkeysduplication',
    images: [`${SITE.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Navbar />
        {/* Added padding top to account for fixed navbar */}
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}
