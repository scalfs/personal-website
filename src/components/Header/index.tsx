import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' }
]

const Header = () => (
  <Popover>
    <div className="relative pt-6 ">
      <nav
        className="relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <div className="flex shrink-0 grow items-center lg:grow-0">
          <div className="flex w-full items-center justify-between sm:w-auto">
            <a
              href="#"
              className="rounded-md py-2 px-3  hover:bg-gray-100  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Home</span>
              <span className="text-2xl font-semibold ">~/</span>
            </a>
            <div className="-mr-2 flex items-center sm:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        <div className="hidden space-x-4 sm:block">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md p-2 font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="rounded-md border px-4 py-3 font-medium text-blue-500 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            Resume
          </a>
        </div>
      </nav>
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
        className="absolute inset-x-0 top-0 z-10 origin-top-right p-2 transition sm:hidden"
      >
        <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md ring-1 ring-black/5 ">
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="-ml-3">
              <Popover.Button className="rounded-md py-2 px-3 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Go to home</span>
                <span
                  className="text-2xl font-semibold hover:text-gray-900"
                  aria-hidden="true"
                >
                  ~/
                </span>
              </Popover.Button>
            </div>
            <div className="-mr-2">
              <Popover.Button className="rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className=" block w-full bg-gray-100 px-5 py-3 text-center text-lg font-medium text-blue-500 hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            Resume
          </a>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
)
export default Header
