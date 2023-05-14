import GradientBorderButton from './index'
import { render, screen } from '@testing-library/react'


describe('Gradient border button', () => {
  it('should render button with given text', () => {
    const text = 'test'
    render(<GradientBorderButton text={text}/>)
    const button = screen.getByTestId('gradient-border-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
  })
})
