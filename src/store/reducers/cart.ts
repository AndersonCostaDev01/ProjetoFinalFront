import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Pages/Home'

type initialState = {
  itens: Game[]
}

const initialState: initialState = {
  itens: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
