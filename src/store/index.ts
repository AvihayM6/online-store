import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { productsReducer } from './Products'

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})

export type Store = typeof store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  void,
  Action<string>
>
