import { render, screen } from '@testing-library/react'
import SocNetLinks from './index'

describe('Soc-net-links component', () => {
  it ('should render github, linkedin, leetcode, gmail logo', () => {
    render(<SocNetLinks/>)
    expect(screen.getByTestId('github-logo')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-logo')).toBeInTheDocument()
    expect(screen.getByTestId('leetcode-logo')).toBeInTheDocument()
    expect(screen.getByTestId('gmail-logo')).toBeInTheDocument()
  })
})
