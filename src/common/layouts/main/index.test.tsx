import { screen, within } from '@testing-library/react'
import { renderApp } from '../../../setup/test/renderApp'
import { ABOUT_PATH } from '../../../router/routes'

describe('Main layout', () => {
  it('should render given component wrapped by header and footer', () => {
    renderApp(ABOUT_PATH)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should render logo, page title and soc-net icons in header', async () => {
    renderApp(ABOUT_PATH)
    const header = screen.getByTestId('header')
    expect(within(header).getByTestId('logo-short')).toBeInTheDocument()
    expect(within(header).getByTestId('page-title')).toBeInTheDocument()
    expect(within(header).getByTestId('github-logo')).toBeInTheDocument()
    expect(within(header).getByTestId('linkedin-logo')).toBeInTheDocument()
    expect(within(header).getByTestId('leetcode-logo')).toBeInTheDocument()
    expect(within(header).getByTestId('gmail-logo')).toBeInTheDocument()
  })

  it('should render full logo and soc-net icons in footer', () => {
    renderApp(ABOUT_PATH)
    const footer = screen.getByTestId('footer')
    expect(within(footer).getByTestId('logo-full')).toBeInTheDocument()
    expect(within(footer).getByTestId('github-logo')).toBeInTheDocument()
    expect(within(footer).getByTestId('linkedin-logo')).toBeInTheDocument()
    expect(within(footer).getByTestId('leetcode-logo')).toBeInTheDocument()
    expect(within(footer).getByTestId('gmail-logo')).toBeInTheDocument()
  })
})
