import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const setupStore = (preloadedState = {}) => configureStore({
  reducer: rootReducer,
  preloadedState
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
