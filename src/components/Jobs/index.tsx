import Transition from 'components/Transition'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'

const experiences = [
  {
    title: 'CTO & Co-founder',
    company: 'Speach',
    companyUrl: '',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/icon-speach.png',
    range: 'Nov, 2024 - Feb, 2026',
    years: '1y 4m',
    highlights: [
      'Co-founded and solo developed Speach, an AI-powered SaaS for voice professionals and brand communication.',
      'Engineered low-latency voice AI inference through streaming APIs, enabling real-time audio processing for commercial spots, video narrations, audiobooks, and podcasts.',
      'Managed full product lifecycle including business model, UX design, technical architecture, and go-to-market.'
    ]
  },
  {
    title: 'Senior Full-Stack Product Engineer',
    company: 'APX StepChange',
    companyUrl: 'https://www.tryapx.com',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/apx-icon.svg',
    range: 'Apr, 2025 - Aug, 2025',
    years: '5m',
    highlights: [
      'Building agentic observability tools that detect, diagnose, and resolve performance, reliability, and cost issues in modern applications.',
      'Architected developer-centric interfaces, improving platform adoption and user engagement.',
      'Redesigned and rebuilt marketing website and invitation flow, driving measurable increase in conversion rates.',
      'Integrated critical third-party services (MongoDB, Linear, Plane.so) expanding platform capabilities.',
      'Implemented multimedia support for issues and comments, enhancing team collaboration features.',
      'Optimized API interactions and state management with React Query, reducing load times.',
      'Established data-driven decision making through Posthog analytics implementation and pipeline development.',
      'Built end-to-end features, developing backend APIs while optimizing frontend data flow for AI insight delivery.'
    ]
  },
  {
    title: 'Staff Software Engineer',
    company: 'Praxent',
    companyUrl: 'https://www.praxent.com',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/praxent-icon.webp',
    range: 'Jan, 2023 - Apr, 2025',
    years: '2y 4m',
    highlights: [
      'At Praxent, a fintech-focused software development partner that helps financial companies excel with a track record of over 450 digital transformations.',
      'Helped a white-label banking SaaS application process $2B in transfers in the past year and support thousands of daily access. Cut 95% of costs in third-party API consumption without compromising user experience.',
      'Fully refactored a web application, implementing ADA and WCAG 2 compliant accessibility measures.',
      'Contributed to projects for insurance, banking, investments, and trading companies, successfully leading refactors, solving critical bugs and boosting performance.'
    ]
  },
  {
    title: 'Lead Software Engineer',
    company: 'PicPlants',
    companyUrl: 'https://www.picplants.com.br',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/picplants-icon.png',
    range: 'Mar, 2022 - Mar, 2023',
    years: '1y',
    highlights: [
      'Developed PicPlants, a cross-platform mobile app for houseplant enthusiasts with 10k+ downloads and 4-star rating, built with Expo and React Native.',
      'Implemented complete payment infrastructure including in-app purchases and subscriptions for both app stores.',
      'Integrated augmented reality features for plant visualization and AI-powered plant identification and health diagnosis through image analysis.'
    ]
  },
  {
    title: 'Mobile Tech Lead',
    company: 'SlabWare',
    companyUrl: 'https://www.slabware.com',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/icon-slab.svg',
    range: 'Jan, 2020 - Feb, 2022',
    years: '2y',
    highlights: [
      'Developed React Native enterprise apps from scratch for SlabWare, a global stone industry platform with hundreds of subscribers, enabling warehouse stock management and ordering with offline and camera capabilities.',
      'Led development architecture, release cycles, and mentored peers while collaborating with UI and backend teams.'
    ]
  },
  {
    title: 'Mobile Developer',
    company: 'Wine',
    companyUrl: 'https://www.wine.com.br',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/logo-wine.svg',
    range: 'Aug, 2018 - Dec, 2019',
    years: '1y 5m',
    highlights: [
      'Wine is Latin America\'s largest wine e-commerce platform with 400K subscribers. Joined the initial mobile team and built the foundation for Wine\'s mobile apps (4.8 star rating, 1M+ downloads) using React Native.',
      'Implemented core features such as native payment integrations and search while mentoring new team members.'
    ]
  }
]

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [focusedTab, setFocusedTab] = useState<number | null>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = () => {
    if (focusedTab === null) return

    if (tabs.current[focusedTab]) {
      tabs.current[focusedTab]?.focus()
      return
    }
    // If we're at the end, go to the start
    if (focusedTab >= tabs.current.length) {
      setFocusedTab(0)
    }
    // If we're at the start, move to the end
    if (focusedTab < 0) {
      setFocusedTab(tabs.current.length - 1)
    }
  }

  // Only re-run the effect if focusedTab changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => focusTab(), [focusedTab])

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault()
        setFocusedTab((focusedTab || 0) - 1)
        break
      }

      case 'ArrowDown': {
        e.preventDefault()
        setFocusedTab((focusedTab || 0) + 1)
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <div className="mt-4 flex min-h-64 flex-row rounded-lg bg-gradient-to-br from-slate-100 to-slate-200/60">
      <div
        role="tablist"
        aria-label="Job tabs"
        onKeyDown={(e) => onKeyDown(e)}
        className="m-2 w-20 space-y-4 rounded-lg bg-slate-50 p-4 text-base font-medium sm:w-48 md:w-52"
      >
        {experiences.map(({ icon, company, years }, i) => (
          <button
            key={icon}
            id={`tab-${i}`}
            role="tab"
            aria-label={`Tab ${company}`}
            aria-controls={`panel-${i}`}
            aria-selected={activeTabId === i}
            tabIndex={activeTabId === i ? 0 : -1}
            ref={(el) => void (tabs.current[i] = el)}
            onClick={() => setActiveTabId(i)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 outline-none transition-colors duration-250 ease-in-out-cubic hover:bg-slate-100 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-50 ${
              activeTabId === i ? 'bg-slate-100' : ''
            }`}
          >
            <div className="flex min-w-4 items-center gap-2">
              <img src={icon} aria-hidden width={16} height={16} />
              <span className="hidden sm:block">{company}</span>
            </div>
            <p className="hidden justify-center rounded bg-slate-200 px-1 py-0.5 text-center text-xs font-medium text-slate-500 md:block">
              {years}
            </p>
          </button>
        ))}
      </div>

      <div className="mx-auto items-start rounded-r-lg p-4">
        {experiences.map(
          ({ title, company, companyUrl, range, highlights }, i) => (
            <Transition key={company} show={activeTabId === i} type="fade">
              <div
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                hidden={activeTabId !== i}
                aria-hidden={activeTabId !== i}
                tabIndex={activeTabId === i ? 0 : -1}
                className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-100"
              >
                <h2 className="mt-1 text-2xl font-semibold">
                  {title} @
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline relative ml-1 rounded tracking-tight text-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-100"
                  >
                    {company}
                  </a>
                </h2>
                <p className="mb-4">{range}</p>
                <ul className="max-w-2xl list-inside list-disc space-y-2 leading-snug text-slate-700 ">
                  {highlights.map((txt) => (
                    <li key={txt}>{txt}</li>
                  ))}
                </ul>
              </div>
            </Transition>
          )
        )}
      </div>
    </div>
  )
}

export default Jobs
