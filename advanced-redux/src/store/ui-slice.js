import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isCartVisible: false };
const cartVisibileSlice = createSlice({
  name: "showCart",
  initialState: initialCartState,
  reducers: {
    toggleCartVisible(state, action) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartVisibileActions = cartVisibileSlice.actions;
export default cartVisibileSlice;
