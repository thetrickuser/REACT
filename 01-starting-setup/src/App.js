import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    desc: "Car Insurance",
    price: 294.76,
    date: new Date(2020, 3, 28),
  },
  {
    id: "e2",
    desc: "Health Insurance",
    price: 345.76,
    date: new Date(2020, 3, 29),
  },
  {
    id: "e3",
    desc: "Credit Card Bill",
    price: 3376.23,
    date: new Date(2019, 3, 28),
  },
  {
    id: "e4",
    desc: "House Loan EMI",
    price: 4590.45,
    date: new Date(2021, 3, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
