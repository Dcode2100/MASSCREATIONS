import { createSlice } from "@reduxjs/toolkit";
// import the localstorage

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cartlist: [],
  },
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action) => {
      const cartitem = state.cartlist.find(
        (item) => item.id === action.payload.id
      );
      if (cartitem) {
        cartitem.quantity++;
      } else {
        state.cartlist.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartlist.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartlist.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.cartlist = state.cartlist.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cartlist = state.cartlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    total: (state) => {
      let total = 0;
      state.cartlist.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.total = total;
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  total,
} = cartSlice.actions;
export default cartSlice.reducer;
