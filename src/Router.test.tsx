import { act, render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe('TEST APP', () => {

  test('Router test', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    await act(async () => { await user.click(aboutLink) })
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    await act(async () => { await user.click(mainLink) })
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })

  test('Error page test', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/khgjf']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
