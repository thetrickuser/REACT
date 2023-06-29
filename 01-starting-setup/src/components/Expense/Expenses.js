import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  const currentYearExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearChange={filterChangeHandler}
        selectedYear={currentYear}
      />
      <ExpensesChart values={currentYearExpenses} />
      <ExpensesList items={currentYearExpenses} />
    </Card>
  );
}

export default Expenses;
