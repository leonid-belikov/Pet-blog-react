import { render, screen } from '@testing-library/react'
import SkillSet from './index'

describe('Skill-set component', () => {
  it ('should render js, ts, jest, react, vue, html, redux, vuex, css logo', () => {
    render(<SkillSet/>)
    expect(screen.getByTestId('js-logo')).toBeInTheDocument()
    expect(screen.getByTestId('ts-logo')).toBeInTheDocument()
    expect(screen.getByTestId('jest-logo')).toBeInTheDocument()
    expect(screen.getByTestId('react-logo')).toBeInTheDocument()
    expect(screen.getByTestId('vue-logo')).toBeInTheDocument()
    expect(screen.getByTestId('html-logo')).toBeInTheDocument()
    expect(screen.getByTestId('redux-logo')).toBeInTheDocument()
    expect(screen.getByTestId('vuex-logo')).toBeInTheDocument()
    expect(screen.getByTestId('css-logo')).toBeInTheDocument()
  })
})
