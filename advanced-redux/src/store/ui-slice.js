import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isCartVisible: false, notification: null };
const uiSlice = createSlice({
  name: "showCart",
  initialState: initialCartState,
  reducers: {
    toggleCartVisible(state, action) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
