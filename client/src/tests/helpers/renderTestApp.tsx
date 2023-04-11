import { RootState, setupStore } from '../../store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import RouterView from '../../router/RouterView'
import { MemoryRouter } from 'react-router-dom'


type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type Data = {
  store?: DeepPartial<RootState>,
  route?: string
}

export const renderTestApp = (component?: JSX.Element, options?: Data = {}) => {
  const store = setupStore(options.store)
  const initialRoute = options?.route ?? '/'
  const content = component ?? null

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <RouterView/>
        {content}
      </MemoryRouter>
    </Provider>
  )
}
