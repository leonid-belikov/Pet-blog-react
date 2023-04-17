import { act, screen } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from './tests/helpers/renderWithRouter'
import Navbar from './components/Navbar/Navbar'

describe('ROUTER TEST', () => {

  test('Router test', async () => {
    const user = userEvent.setup()
    renderWithRouter({ component: <Navbar/> })
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    await act(async () => { await user.click(aboutLink) })
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    await act(async () => { await user.click(mainLink) })
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })

  test('Error page test', async () => {
    renderWithRouter({ route: '/dfdg' })
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
