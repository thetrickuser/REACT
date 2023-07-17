import React from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label>Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label>Contact Number</label>
        <input type="number" id="phone" />
      </div>
      <div className={styles.control}>
        <label>Address</label>
        <input type="text" id="address" />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Confirm</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default Checkout;
