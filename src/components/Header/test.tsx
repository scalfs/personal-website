import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render all the nav options', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('button', { name: /Menu/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Experien/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
