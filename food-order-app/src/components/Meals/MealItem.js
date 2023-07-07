import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ mealItem }) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{mealItem.title}</h3>
        <p className={styles.description}>{mealItem.desc}</p>
        <p className={styles.price}>₹{mealItem.price}</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
