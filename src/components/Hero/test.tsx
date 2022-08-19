import { render, screen } from '@testing-library/react'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading', async () => {
    const { container } = render(<Hero />)

    expect(
      await screen.findByRole(
        'heading',
        { name: /Vitor Escalfoni/i },
        { timeout: 1500 }
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
