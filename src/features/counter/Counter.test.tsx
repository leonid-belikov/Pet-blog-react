import { act, screen } from '@testing-library/react'
import { Counter } from './Counter'
import userEvent from '@testing-library/user-event'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('Counter component', () => {
  test('should handle increment button click', async () => {
    const user = userEvent.setup()
    const { getByTestId } = renderTestApp(<Counter/>, { store: { counter: { value: 99 } } })
    const incrementBtn = getByTestId('increment-btn')
    expect(getByTestId('count-value-span')).toHaveTextContent('99')
    await act(async () => { await user.click(incrementBtn) })
    expect(getByTestId('count-value-span')).toHaveTextContent('100')
    screen.debug()
  })
})
