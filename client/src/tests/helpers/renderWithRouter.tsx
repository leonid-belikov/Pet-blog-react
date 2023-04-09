import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { render } from '@testing-library/react'

type Data = {
  component?: JSX.Element,
  route?: string
}

export const renderWithRouter = (data: Data = {}): void => {
  const initialRoute = data?.route ?? '/'
  const content = data?.component ?? null

  render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter/>
      { content }
    </MemoryRouter>
  )
}
