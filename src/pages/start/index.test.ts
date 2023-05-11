import { renderApp } from '../../setup/test/renderApp'
import { screen, within } from '@testing-library/react'


describe('Main page component', () => {
  it('should render the logo', () => {
    renderApp()
    const startPage = screen.getByTestId('start-page')
    expect(within(startPage).getByTestId('logo-short')).toBeInTheDocument()
  })

  it('should render the name', () => {
    renderApp()
    const startPage = screen.getByTestId('start-page')
    expect(within(startPage).getByTestId('name')).toBeInTheDocument()
    expect(within(startPage).getByTestId('surname')).toBeInTheDocument()
  })
})
