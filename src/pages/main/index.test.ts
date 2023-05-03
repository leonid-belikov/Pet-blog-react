import { renderApp } from '../../setup/test/renderApp'
import { screen } from '@testing-library/react'


describe('Main page component', () => {
  it('should render the logo', () => {
    renderApp()
    expect(screen.getByTestId('logo-short')).toBeInTheDocument()
  })

  it('should render the name', () => {
    renderApp()
    expect(screen.getByTestId('name')).toBeInTheDocument()
    expect(screen.getByTestId('surname')).toBeInTheDocument()
  })
})
