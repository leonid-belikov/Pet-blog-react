import GradientBorderButton from './index'
import { render, screen } from '@testing-library/react'


describe('Gradient border button', () => {
  it('should render button with given text', () => {
    render(<GradientBorderButton text='test'/>)
    const button = screen.getByTestId('gradient-border-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('test')
  })
})
