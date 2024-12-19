// Importação das bibliotecas
import { configureStore } from '@reduxjs/toolkit'

// Importação da api
import api from '../services/api'

// importação do cartSlice
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
