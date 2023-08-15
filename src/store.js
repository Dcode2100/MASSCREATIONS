import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginAuthReducer from "../features/authentication/loginAuthSlice";
import cartReducer from "../features/cart/cartSlice"; // Import your cart reducer

const persistConfig = {
  key: "root",
  storage,
};

const persistedLoginAuthReducer = persistReducer(persistConfig, loginAuthReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer); // Create a persisted reducer for cart

const store = configureStore({
  reducer: {
    loginAuth: persistedLoginAuthReducer,
    cart: persistedCartReducer, // Use the persisted cart reducer
    // ... other reducers if you have
  },
});

const persistor = persistStore(store);

export { store, persistor };
