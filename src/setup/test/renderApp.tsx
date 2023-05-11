import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes, { DEFAULT_PATH } from '../../router/routes'


export const renderApp = (route: string | undefined = undefined) => {
  const  router = createMemoryRouter(routes, {
    initialEntries: [route || DEFAULT_PATH]
  })
  render(<RouterProvider router={router}/>)
}
