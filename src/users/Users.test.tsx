import axios from 'axios'
import { act, screen } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../tests/helpers/renderWithRouter'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('USERS TEST', () => {
  let response: { data: Array<{ id: number, name: string }> }

  beforeEach(() => {
    response = {
      data: [
        {
          'id': 1,
          'name': 'Leanne Graham'
        },
        {
          'id': 2,
          'name': 'Ervin Howell'
        },
        {
          'id': 3,
          'name': 'Clementine Bauch'
        }
      ]
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders user list', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve(response))
    renderWithRouter({ route: '/users' })
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })

  test('redirect to details page', async () => {
    const user = userEvent.setup()
    mockedAxios.get.mockReturnValue(Promise.resolve(response))
    renderWithRouter({ route: '/users'} )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    await act(async () => { await user.click(users[0]) })
    expect(screen.getByTestId('user-details-page')).toBeInTheDocument()
  })
})
