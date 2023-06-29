import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ desc, price, date }) {
  const [title, setTitle] = useState(desc);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <Card className="expense-item__price">${price}</Card>
          <button
            onClick={() => {
              setTitle("Updated");
            }}
          >
            Change Title
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
