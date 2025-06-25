import type { Metadata } from 'next'
import Analytics from 'components/Analytics'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Vitor Escalfoni - Product-Minded Software Engineer',
  description:
    'Product-minded software engineer combining technical expertise with AI-driven innovation to build transformative solutions from 0 to 1 that users love and businesses scale.',
  metadataBase: new URL('https://vitorescalfoni.com'),
  keywords: [
    'Vitor Escalfoni',
    'Product Engineer',
    'Full-Stack Engineer',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'AI Innovation',
    'Product Development',
    'User Experience'
  ],
  authors: [{ name: 'Vitor Escalfoni' }],
  creator: 'Vitor Escalfoni',
  publisher: 'Vitor Escalfoni',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vitorescalfoni.com/',
    siteName: 'Vitor Escalfoni',
    title: 'Vitor Escalfoni - Product-Minded Software Engineer',
    description:
      'Product-minded software engineer combining technical expertise with AI-driven innovation to build transformative solutions from 0 to 1 that users love and businesses scale.',
    images: [
      {
        url: '/og.png',
        width: 2050,
        height: 1392,
        alt: 'Vitor Escalfoni - Product-Minded Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vscalfs',
    creator: '@vscalfs',
    title: 'Vitor Escalfoni - Product-Minded Software Engineer',
    description:
      'Product-minded software engineer combining technical expertise with AI-driven innovation to build transformative solutions.',
    images: ['/og.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://vitorescalfoni.com'
  }
  // verification: {
  //   google: 'your-google-verification-code' // Replace with actual verification code
  // }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
