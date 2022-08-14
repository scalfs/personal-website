import { render } from '@testing-library/react'

import LayoutBlur from '.'

describe('<LayoutBlur />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<LayoutBlur type="top" />)

    expect(container.firstChild).toHaveClass(
      'shadow-[20px_250px_300px_#4586e2]'
    )
  })

  it('should render the lines correctly', () => {
    const { container } = render(<LayoutBlur type="lines" />)

    expect(container.firstChild?.childNodes).toHaveLength(3)
  })

  it('should not render without specifying a type', () => {
    const { container } = render(<LayoutBlur />)

    expect(container.firstChild).toBeNull()
  })
})
