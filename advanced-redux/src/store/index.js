import { configureStore } from "@reduxjs/toolkit";
import cartVisibileSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cartVisible: cartVisibileSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
