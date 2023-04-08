import axios from 'axios'
import { render, screen } from '@testing-library/react'
import Users from './Users'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'

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
    render(
      <MemoryRouter>
        <Users/>
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
})
