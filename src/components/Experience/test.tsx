import { render, screen } from '@testing-library/react'

import Experience from '.'

describe('<Experience />', () => {
  it('should render the section', () => {
    const { container } = render(<Experience />)

    expect(
      screen.getByRole('heading', { name: /Experience/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
