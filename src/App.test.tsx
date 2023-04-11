import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRouter } from './tests/helpers/renderWithRouter'


describe('APP TEST', () => {
  test('renders main page', () => {
    renderWithRouter()
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
})

/*
describe('APP TEST', () => {
  test('renders learn react link', () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)

    expect(btn).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  })

  test('other', async () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
/!*
    const helloElement = screen.queryByText(/hello2/i)
    expect(helloElement).toBeNull()
*!/
    const dataElement = await screen.findByText(/data/i)
    expect(dataElement).toBeInTheDocument()
    expect(dataElement).toHaveClass('color-red')
  })

  test('CLICK EVENT', () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test('INPUT EVENT', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    await act(async () => { await user.type(input, 'test1') })
    expect(screen.queryByTestId('value-elem')).toContainHTML('test1')
  })
})
*/
