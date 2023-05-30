import { renderApp } from '../../setup/test/renderApp'
import { screen } from '@testing-library/react'
import { DEMO_MENU_PATH } from '../../common/utils/constants'

describe('Demo page component', () => {
  it('should render the menu', () => {
    renderApp(DEMO_MENU_PATH)
    const demoPage = screen.getByTestId('demo-menu-page')
    expect(demoPage).toBeInTheDocument()
  })
})
