import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderApp } from '../setup/test/renderApp'

describe('Router', () => {
  it('should redirect to the about-page by clicking the about-link', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    const aboutLink = screen.getByTestId('about-link')
    await act(() => user.click(aboutLink))
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  })

  it('should redirect to the demo-page by clicking the demo-link', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    const aboutLink = screen.getByTestId('demo-link')
    await act(() => user.click(aboutLink))
    expect(screen.getByTestId('demo-menu-page')).toBeInTheDocument()
  })
})
