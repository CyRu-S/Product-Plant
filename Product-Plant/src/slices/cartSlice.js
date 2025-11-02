import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {}, // { [id]: { id, name, price, image, category, qty } }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, qty: 1 }
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].qty += 1
    },
    decreaseQty: (state, action) => {
      const id = action.payload
      if (!state.items[id]) return
      state.items[id].qty -= 1
      if (state.items[id].qty <= 0) delete state.items[id]
    },
    removeItem: (state, action) => {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions

export const selectItemsObject = (state) => state.cart.items
export const selectItemsArray = (state) => Object.values(state.cart.items)
export const selectTotalCount = (state) => Object.values(state.cart.items).reduce((sum, i) => sum + i.qty, 0)
export const selectTotalCost = (state) => Object.values(state.cart.items).reduce((sum, i) => sum + i.qty * i.price, 0)
export const selectIsInCart = (state, id) => Boolean(state.cart.items[id])

export default cartSlice.reducer
