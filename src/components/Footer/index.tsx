import { Icon } from 'icons'
import { IconName } from 'icons/icon'

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/scalfs'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vitorescalfoni'
  },
  {
    name: 'Mail',
    href: 'mailto:hello@vitorescalfoni.com'
  }
] as { name: IconName; href: string }[]

const Footer = () => (
  <footer className="mt-16 border-t">
    <div className="mx-auto flex h-32 w-full max-w-5xl items-center justify-between px-4 text-base tracking-tight text-slate-500 md:px-12">
      <div>
        <p>
          © 2022, <span className="font-medium">Vitor Escalfoni.</span>
        </p>
        <p>Designed &amp; Built with 💙 </p>
      </div>

      <div className="flex gap-2">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            aria-label={`${name} link`}
            className="flex size-10 items-center justify-center rounded-lg border bg-slate-100 p-2 transition-colors duration-250 ease-in-out-cubic hover:border-slate-400 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <Icon name={name} />
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
