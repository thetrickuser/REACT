import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const firebase_url =
  "https://react-http-c3d55-default-rtdb.firebaseio.com/cart.json";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    try {
      await fetch(firebase_url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
    } catch (ex) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error in sending cart data",
        })
      );
      throw new Error(ex.getMessage());
    }
    dispatch(
      uiActions.showNotification({
        status: "complete",
        title: "Sent",
        message: "Cart data added",
      })
    );
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "fetching",
        title: "Fetching",
        message: "Getting your cart data",
      })
    );
    try {
      const res = await fetch(firebase_url);
      const cartData = await res.json();
      dispatch(
        cartActions.replaceCart({
          products: cartData.products || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (ex) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error in sending cart data",
        })
      );
      throw new Error(ex.getMessage());
    }
    dispatch(
      uiActions.showNotification({
        status: "complete",
        title: "Fetched",
        message: "Cart data fetched successfully",
      })
    );
  };
};

export default cartSlice;
export const cartActions = cartSlice.actions;
