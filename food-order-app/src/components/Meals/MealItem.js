import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = ({ mealItem }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = (qty) => {
    cartCtx.addCartItem({
      id: mealItem.id,
      name: mealItem.name,
      price: mealItem.price,
      amount: mealItem.price * qty,
      quantity: qty,
    });
  };

  return (
    <li className={styles.meal} key={mealItem.id}>
      <div>
        <h3>{mealItem.name}</h3>
        <p className={styles.description}>{mealItem.desc}</p>
        <p className={styles.price}>₹{mealItem.price}</p>
      </div>
      <div>
        <MealItemForm onAdd={handleAddItem} />
      </div>
    </li>
  );
};

export default MealItem;
