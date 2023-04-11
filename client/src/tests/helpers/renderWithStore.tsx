import { render } from '@testing-library/react'
import { AppStore, setupStore } from '../../store'
import { Provider } from 'react-redux'
import App from '../../App'


export const renderWithStore = (component: JSX.Element = <App/>, initialStore?: AppStore) => {
  const store = setupStore(initialStore)

  return render(
    <Provider store={store}>
      {component}
    </Provider>
  )
}
