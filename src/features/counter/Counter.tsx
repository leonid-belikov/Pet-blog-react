import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectStatus
} from '../../store/reducers/counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState<string>('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          data-testid='decrement-btn'
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span data-testid='count-value-span' className={styles.value}>{count}</span>
        <button
          data-testid='increment-btn'
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          data-testid='increment-input'
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          data-testid='increment-by-amount-btn'
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          data-testid='increment-async-btn'
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async ({ status })
        </button>
        <button
          data-testid='increment-if-odd-btn'
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
