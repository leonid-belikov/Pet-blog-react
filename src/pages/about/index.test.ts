import { renderApp } from '../../setup/test/renderApp'
import { screen, within } from '@testing-library/react'
import { ABOUT_PATH } from '../../common/utils/constants'


describe('About page component', () => {
  it('should render the portrait, description, tech-stack, experience, timeline', () => {
    renderApp(ABOUT_PATH)
    const aboutPage = screen.getByTestId('about-page')
    expect(within(aboutPage).getByTestId('portrait')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description-card-hello')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description-card-1')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description-card-2')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description-card-3')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('description-card-4')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('skill-set')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('experience')).toBeInTheDocument()
    expect(within(aboutPage).getByTestId('timeline')).toBeInTheDocument()
  })
})
