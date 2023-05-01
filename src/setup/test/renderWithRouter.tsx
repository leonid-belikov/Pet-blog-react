import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Router from '../../router'


type Data = {
  component?: JSX.Element,
  route?: string
}

export const renderWithRouter = (data: Data = {}) => {
  const initialRoute = data?.route ?? '/'
  const content = data?.component ?? 'null'

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Router/>
      { content }
    </MemoryRouter>
  )
}
