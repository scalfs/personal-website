import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render all the nav options', async () => {
    const { container } = render(<Header />)

    expect(
      await screen.findByRole('button', { name: /Menu/i })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /Home/i })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /About/i })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /Experien/i })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /Resume/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
