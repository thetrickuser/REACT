import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const handleQuantityChange = (event) => {
    props.onQuantityChange(event.target.value);
  };
  return (
    <div className={styles.input}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        {...props.input}
        onChange={handleQuantityChange}
        value={props.quantity}
      ></input>
    </div>
  );
};

export default Input;
