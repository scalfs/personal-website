import { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const Button = ({ children, className, ...props }: Props) => (
  <a
    {...props}
    target="_blank"
    className={`rounded-lg border border-slate-300 px-5 py-3 font-semibold text-blue-700 transition-colors duration-250 ease-in-out-cubic hover:border-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
  >
    {children}
  </a>
)

export default Button
