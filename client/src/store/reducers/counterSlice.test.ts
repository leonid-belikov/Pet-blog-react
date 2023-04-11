import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
  selectCount
} from './counterSlice'

const initialState: CounterState = {
  value: 3,
  status: 'idle'
}

describe('counter reducer', () => {
  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle'
    })
  })

  test('should handle increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(4)
  })

  test('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement())
    expect(actual.value).toEqual(2)
  })

  test('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(4))
    expect(actual.value).toEqual(7)
  })
})

describe('counter selectors', () => {
  test('should work with empty state', () => {
    expect(selectCount()).toBe(0)
  })

  test('should work with initial state', () => {
    expect(selectCount({ counter: initialState })).toBe(3)
  })

  test('should work with filled state', () => {
    expect(selectCount({
      counter: {
        value: 100,
        status: 'idle'
      }
    })).toBe(100)
  })
})
