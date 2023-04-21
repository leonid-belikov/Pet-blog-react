import { MemoryRouter } from 'react-router-dom'
import RouterView from '../../router/RouterView'
import { render } from '@testing-library/react'

type Data = {
  component?: JSX.Element,
  route?: string
}

export const renderWithRouter = (data: Data = {}) => {
  const initialRoute = data?.route ?? '/'
  const content = data?.component ?? null

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <RouterView/>
      { content }
    </MemoryRouter>
  )
}
