import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "../Meals/Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleAddItem = (item) => {
    cartCtx.addCartItem(item);
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeCartItem(id);
  };

  const orderItems = cartCtx.cartItems;

  const cartItemsList = (
    <ul className={styles["cart-items"]}>
      {orderItems.map((item) => (
        <CartItem
          key={item.id}
          cartItem={item}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      ))}
    </ul>
  );

  const handleShowCheckout = () => {
    setShowCheckout(true);
  };

  const handleOrderCancel = () => {
    setShowCheckout(false);
    cartCtx.removeAllItems();
    props.onClose();
  };

  const handleCheckout = async (userDetails) => {
    const orderDetails = {
      orderItems,
      totalAmount,
    };

    try {
      const response = await fetch(
        "https://react-http-c3d55-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            userDetails: userDetails,
            orderDetails: orderDetails,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleBackdropClick = () => {
    props.onClose();
  };

  const totalAmount = cartCtx.totalAmount;
  return (
    <Modal onBackdropClick={handleBackdropClick}>
      {cartItemsList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout
          onConfirm={handleCheckout}
          onCancel={handleOrderCancel}
          onClose={handleBackdropClick}
        />
      )}
      {!showCheckout && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {totalAmount > 0 && (
            <button className={styles.button} onClick={handleShowCheckout}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
