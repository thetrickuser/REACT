import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "../Meals/Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = (item) => {
    cartCtx.addCartItem(item);
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeCartItem(id);
  };

  const cartItemsList = (
    <ul className={styles["cart-items"]}>
      {cartCtx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          cartItem={item}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      ))}
    </ul>
  );

  const totalAmount = cartCtx.totalAmount;
  return (
    <Modal>
      {cartItemsList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <Checkout />
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {totalAmount > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
