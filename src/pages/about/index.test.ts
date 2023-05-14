import { renderApp } from '../../setup/test/renderApp'
import { screen, within } from '@testing-library/react'
import { ABOUT_PATH } from '../../router/routes'


describe('About page component', () => {
  it('should render the portrait', () => {
    renderApp(ABOUT_PATH)
    const aboutPage = screen.getByTestId('about-page')
    expect(within(aboutPage).getByTestId('portrait')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('tech-stack')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('experience')).toBeInTheDocument()
  })
})
