import Timeline from './index'
import { screen, render, within } from '@testing-library/react'


describe('Timeline component', () => {
  it('should render timeline', () => {
    render(<Timeline/>)
    const timeline = screen.getByTestId('timeline')
    expect(timeline).toBeInTheDocument()
    expect(within(timeline).getByText('Add new twist')).toBeInTheDocument()
  })
})
