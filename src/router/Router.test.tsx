import { renderWithRouter } from '../setup/test/renderWithRouter'
import { screen } from '@testing-library/react'

describe('Router', () => {
  //this test must be deleted when another test is added
  it('should render the main page by default', () => {
    renderWithRouter({ route: '/' })
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
})
