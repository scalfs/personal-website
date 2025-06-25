import type { Metadata } from 'next'
import Main from 'components/Main'

export const metadata: Metadata = {
  title: 'Vitor Escalfoni - Product-Minded Software Engineer',
  description:
    'Product-minded software engineer combining technical expertise with AI-driven innovation to build transformative solutions from 0 to 1 that users love and businesses scale.'
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vitor Escalfoni',
            jobTitle: 'Product-Minded Software Engineer',
            description:
              'Product-minded software engineer who combines technical expertise with AI-driven innovation to take products from 0 to 1 and beyond, building transformative solutions that users love and businesses scale',
            url: 'https://vitorescalfoni.com',
            sameAs: [
              'https://twitter.com/vscalfs',
              'https://github.com/scalfs',
              'https://linkedin.com/in/vitorescalfoni'
            ],
            knowsAbout: [
              'Full-Stack Development',
              'Product Engineering',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'NestJS',
              'Laravel',
              'Python',
              'Django',
              'AI Integration',
              'Product Strategy',
              'User Experience'
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'APX StepChange'
            }
          })
        }}
      />
      <Main />
    </>
  )
}
