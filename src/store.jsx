import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from './BasketSlicer'

export const store = configureStore({
  reducer: {
    basket : BasketReducer

  },
})