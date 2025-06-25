import Transition from 'components/Transition'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'

const experiences = [
  {
    title: 'Senior Full-Stack Design Engineer',
    company: 'APX StepChange',
    companyUrl: 'https://www.tryapx.com',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/apx-icon.svg',
    range: 'Apr, 2025 - Present',
    years: '3m',
    highlights: [
      'Developing user-centric interfaces with Next.js, React, and Tailwind CSS for an exceptional developer experience.',
      'Implementing efficient API interactions and state management using React Query.',
      'Collaborating with backend engineers to optimize data flow and system performance.',
      'Enhancing the UX of AI-generated insights to make them actionable for developers.',
      'Rebuilt the marketing website with a modern, vibrant look, increasing conversion rates.',
      'Connected main integrations to APX, including MongoDB, Linear, and Plane.so.',
      'Added media upload capabilities for images and videos on Issues and Comments.',
      'Driving growth with Posthog analytics events and data pipelines.'
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
    years: '2y',
    highlights: [
      'Led optimization initiatives for a white-label banking SaaS platform processing $2B in transfers annually',
      'Spearheaded complete web application refactoring with ADA and WCAG 2 compliance implementation',
      'Engineered custom authentication flow with biometrics integration for mobile and web applications',
      'Reduced third-party API costs by 95% while maintaining optimal user experience',
      'Built apps for insurance, banking, investments, and trading companies',
      'Successfully led refactors, solving critical bugs, boosting performance.',
      'Architected a custom auth flow, syncing both mobile and web apps.',
      'Implemented ADA and WCAG 2 compliant accessibility measures.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'PicPlants',
    companyUrl: 'https://www.picplants.com.br',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/picplants-icon.png',
    range: 'Sep, 2022 - Mar, 2023',
    years: '6m',
    highlights: [
      'Developed apps from end-to-end using Expo and React Native.',
      'Implemented payments, in-app purchases, and subscriptions.',
      'Provided consultancy on AR/VR projects for mobile apps.'
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
      'Built the app from scratch, collaborating with design and API teams.',
      'Responsible for the development and release processes of 3 apps.',
      'Guided coworkers on adopting Git workflows and Scrum.',
      'Provided training and mentorship to junior developers.'
    ]
  },
  {
    title: 'Mobile Developer',
    company: 'Wine',
    companyUrl: 'https://www.wine.com.br',
    androidUrl: '',
    iosUrl: '',
    icon: 'img/logo-wine.svg',
    range: 'Ago, 2018 - Dez, 2019',
    years: '1y',
    highlights: [
      'Started as an intern in the founding app team, building from the ground up.',
      'Implemented several features, including native payment integration.',
      'Onboarded new colleagues, instructing them on project standards.'
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
