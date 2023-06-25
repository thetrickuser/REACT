import Card from "../UI/Card";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
