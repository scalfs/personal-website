import { render, screen } from '@testing-library/react'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the section', () => {
    const { container } = render(<Contact />)

    expect(
      screen.getByRole('heading', { name: /Get in Touch/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Say Hello/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
