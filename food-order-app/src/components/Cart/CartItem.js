import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const addItem = () => {
    props.onAdd({
      ...props.cartItem,
      quantity: 1,
      amount: +props.cartItem.price,
    });
  };

  const removeItem = () => {
    props.onRemove(props.cartItem.id);
  };
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.cartItem.name}</h2>
        <div className={styles.summary}>
          <span className={styles.quantity}>x {props.cartItem.quantity}</span>
          <span className={styles.price}>₹{props.cartItem.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={addItem}>+</button>
        <button onClick={removeItem}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
