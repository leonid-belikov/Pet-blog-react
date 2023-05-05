import { render, screen } from '@testing-library/react'
import MainLayout from './index'
import AboutPage from '../../../pages/about'

describe('Main layout', () => {
  it('should render given component wrapped by header and footer', () => {
    render(<MainLayout><AboutPage/></MainLayout>)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
