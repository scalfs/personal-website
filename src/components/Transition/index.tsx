import { Transition as HUITransition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

interface Props {
  delay?: number
  isChild?: boolean
  children: React.ReactNode
  type: keyof typeof Transitions
}

export const Transitions = {
  popover: {
    enter: 'transition duration-50 ease-in-out-cubic',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'duration-100 ease-in-out-cubic',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
  },
  fadeup: {
    enter: `transition ease-in-out-cubic duration-250`,
    enterFrom: 'opacity-0 translate-y-4',
    enterTo: 'opacity-100 translate-y-0'
  },
  none: {}
}

const Transition: React.FC<Props> = ({ type, children, isChild, delay }) => {
  const [isMounted, setIsMounted] = useState(false)
  // const prefersReducedMotion = usePrefersReducedMotion()

  const calledOnce = useRef(false)

  useEffect(() => {
    if (calledOnce.current) {
      return
    }

    calledOnce.current = true

    setTimeout(() => setIsMounted(true), 100)
  }, [])

  // if (prefersReducedMotion) return <>{children}</>

  return isChild ? (
    <HUITransition.Child
      {...Transitions[type]}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </HUITransition.Child>
  ) : (
    <HUITransition as={Fragment} show={isMounted} {...Transitions[type]}>
      {children}
    </HUITransition>
  )
}

export default Transition
