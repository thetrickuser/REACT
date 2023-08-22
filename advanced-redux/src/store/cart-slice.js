import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  products: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      } else {
        state.products.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      }
      state.totalQuantity++;
      state.changed = true;
      console.log(state.products);
    },
    removeFromCart(state, action) {
      const newProductId = action.payload.id;

      const existingProduct = state.products.find(
        (product) => product.id === newProductId
      );
      if (existingProduct.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.id !== newProductId
        );
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.totalPrice - existingProduct.price;
      }
      state.changed = true;
      state.totalQuantity--;
      console.log(state.products);
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.products = action.payload.products;
      state.changed = false;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
