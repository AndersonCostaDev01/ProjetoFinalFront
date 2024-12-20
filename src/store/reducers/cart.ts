import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Pages/Home'

type initialState = {
  itens: Game[]
  isOpen: boolean
}

const initialState: initialState = {
  itens: [],
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Game>) => {
      const game = state.itens.find((item) => item.id === action.payload.id)
      if (!game) {
        state.itens.push(action.payload)
      } else {
        alert('Jogo ja adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
