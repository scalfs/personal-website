import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the title', () => {
    const { container } = render(<Title>Heading</Title>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
