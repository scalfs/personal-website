import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render correctly and have proper roles', () => {
    render(<Main />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
