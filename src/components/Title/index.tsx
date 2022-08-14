import { HTMLAttributes } from 'react'

const Title: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => (
  <h1
    {...props}
    className="mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
  >
    {children}
  </h1>
)

export default Title
