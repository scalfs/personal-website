import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = render(<Button href="">Text</Button>)

    expect(screen.getByRole('link', { name: /Text/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
