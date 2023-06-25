import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem desc={item.desc} price={item.price} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
