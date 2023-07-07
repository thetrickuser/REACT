import React, { useContext, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (event) => {
    event.preventDefault();
    props.onAdd(quantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(+newQuantity);
  };

  return (
    <form className={styles.form} onSubmit={handleAddToCart}>
      <Input
        label="Quantity"
        input={{ type: "number", min: 1, max: 5, step: 1 }}
        onQuantityChange={handleQuantityChange}
        quantity={quantity}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
