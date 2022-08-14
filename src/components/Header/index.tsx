import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconMenu, IconX } from 'icons'
import Button from 'components/Button'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

const Header = () => (
  <header className="relative mx-auto max-w-5xl">
    <Popover
      as="nav"
      className="absolute w-full px-4 sm:px-6 sm:text-lg md:px-8"
    >
      <div className="flex items-center pt-6 text-base">
        <div className="-mx-1 flex grow justify-between">
          <a
            href="#"
            aria-label="Home"
            className="rounded-md py-1 px-2 text-2xl font-semibold transition-colors duration-250 ease-in-out-cubic hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            ~/
          </a>

          <Popover.Button
            title="Menu"
            className="h-10 w-10 rounded-md p-2 transition-colors duration-250 ease-in-out-cubic hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 sm:hidden"
          >
            <IconMenu />
          </Popover.Button>
        </div>

        <ol className="hidden space-x-6 sm:flex">
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="link-underline rounded-md py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <Button href="/resume.pdf">Resume</Button>
          </li>
        </ol>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right bg-slate-50 p-2 transition sm:hidden"
        >
          <div className="rounded-lg bg-slate-50 shadow-md ring-1 ring-black/5">
            <div className="mb-2 flex items-center justify-between px-5 pt-4">
              <Popover.Button
                aria-label="Home"
                className="-ml-3 rounded-md py-1 px-3 text-2xl font-semibold transition-colors duration-250 ease-in-out-cubic hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                ~/
              </Popover.Button>

              <Popover.Button
                aria-label="Close Menu"
                className="-mr-2 h-10 w-10 rounded-md p-2 transition-colors duration-250 ease-in-out-cubic hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                <IconX />
              </Popover.Button>
            </div>

            <ol className="mb-2 flex flex-col space-y-4 p-2">
              {navigation.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="rounded-md px-3 py-2 font-medium transition-colors duration-250 ease-in-out-cubic first-letter:text-lg hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              className="block bg-slate-100 px-5 py-3 text-center text-lg font-medium text-blue-700 transition-colors duration-250 ease-in-out-cubic hover:bg-blue-100 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
            >
              Resume
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </header>
)
export default Header
