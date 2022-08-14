import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the section', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /mail/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)

    expect(container.firstChild).toMatchSnapshot()
  })
})
