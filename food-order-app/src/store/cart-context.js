import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
  removeAllItems: () => {},
});

export default CartContext;
