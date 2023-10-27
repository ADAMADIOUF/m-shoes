import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import { productsApiSlice } from './slices/productsApiSlice'
import cartSliceReducer from './slices/cartSlice'
import filterSliceReducer from './slices/filterSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    cart: cartSliceReducer,
    filter:filterSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
