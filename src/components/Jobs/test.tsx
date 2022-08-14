import { render } from '@testing-library/react'

import Jobs from '.'

describe('<Jobs />', () => {
  it('should render the heading', () => {
    const { container } = render(<Jobs />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
