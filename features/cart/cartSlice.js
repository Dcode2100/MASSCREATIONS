import { createSlice } from "@reduxjs/toolkit";
// import the localstorage

const initialState = {
  isOpen: false,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = updatedCart;
    },
  },
});

export const { openCart, closeCart, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
// function to add the product to the local storage

