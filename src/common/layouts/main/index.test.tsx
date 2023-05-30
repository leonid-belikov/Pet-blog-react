import { screen, within } from '@testing-library/react'
import { renderApp } from '../../../setup/test/renderApp'
import { ABOUT_PATH } from '../../utils/constants'

describe('Main layout', () => {
  it('should render given component wrapped by header and footer', () => {
    renderApp(ABOUT_PATH)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should render logo, page title and soc-net links in header', async () => {
    renderApp(ABOUT_PATH)
    const header = screen.getByTestId('header')
    expect(within(header).getByTestId('logo-short')).toBeInTheDocument()
    expect(within(header).getByTestId('page-title')).toBeInTheDocument()
    expect(within(header).getByTestId('soc-net-links')).toBeInTheDocument()
  })

  it('should render full logo and soc-net links in footer', () => {
    renderApp(ABOUT_PATH)
    const footer = screen.getByTestId('footer')
    expect(within(footer).getByTestId('logo-full')).toBeInTheDocument()
    expect(within(footer).getByTestId('soc-net-links')).toBeInTheDocument()
  })
})
