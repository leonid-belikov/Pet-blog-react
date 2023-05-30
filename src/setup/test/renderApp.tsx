import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes from '../../router/routes'
import { DEFAULT_PATH } from '../../common/utils/constants'


export const renderApp = (route: string | undefined = undefined) => {
  const  router = createMemoryRouter(routes, {
    initialEntries: [route || DEFAULT_PATH]
  })
  render(<RouterProvider router={router}/>)
}
