import userEvent from '@testing-library/user-event'
import { act, screen } from '@testing-library/react'
import React from 'react'
import Navbar from './Navbar'
import { renderWithRouter } from '../../tests/helpers/renderWithRouter'

describe('NAVBAR TEST', () => {
  let user

  beforeEach(() => {
    user = userEvent.setup()
  })

  test('test about link', async () => {
    renderWithRouter({ component: <Navbar/> })
    const aboutLink = screen.getByTestId('about-link')
    await act(async () => { await user.click(aboutLink)})
    expect(screen.getByTestId('about-page'))
  })

  test('test users link', async () => {
    renderWithRouter({ component: <Navbar/> })
    const usersLink = screen.getByTestId('users-link')
    await act(async () => { await user.click(usersLink)})
    expect(screen.getByTestId('users-page'))
  })

  test('test main link', async () => {
    renderWithRouter({ component: <Navbar/>, route: '/about' })
    const mainLink = screen.getByTestId('main-link')
    await act(async () => { await user.click(mainLink)})
    expect(screen.getByTestId('main-page'))
  })
})
