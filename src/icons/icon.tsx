import { IconGitHub, IconLinkedIn, IconMail, IconMenu, IconX } from './'

export type IconName = 'GitHub' | 'LinkedIn' | 'Mail' | 'Menu' | 'X'

const Icon = ({ name }: { name: IconName }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />
    case 'LinkedIn':
      return <IconLinkedIn />
    case 'Mail':
      return <IconMail />
    case 'Menu':
      return <IconMenu />
    case 'X':
      return <IconX />
    default:
      return null
  }
}

export default Icon
