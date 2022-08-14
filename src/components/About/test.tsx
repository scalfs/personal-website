import { render, screen } from '@testing-library/react'

import About from '.'

describe('<About />', () => {
  it('should render the section', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Picture/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
