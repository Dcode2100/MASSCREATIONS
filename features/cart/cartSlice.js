import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: true,
    products: [],
  },
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { openCart, closeCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
