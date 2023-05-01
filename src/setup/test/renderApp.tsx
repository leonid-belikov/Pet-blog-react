import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'


export const renderApp = (route: string | undefined = undefined) => render(
  <MemoryRouter initialEntries={route ? [route] : undefined}>
    <App/>
  </MemoryRouter>
)
