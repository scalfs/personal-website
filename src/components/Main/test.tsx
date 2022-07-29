import { render } from '@testing-library/react'

import Main from '.'

describe('', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveClass('bg-gray-50')
  })
})
