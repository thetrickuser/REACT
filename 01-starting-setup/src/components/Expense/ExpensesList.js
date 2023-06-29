import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className=".expenses-list__fallback">
        No expenses found for this year!
      </h2>
    );
  }
  return (
    <ul className=".expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          desc={item.desc}
          price={item.price}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
