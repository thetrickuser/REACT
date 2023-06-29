import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const addNewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: (Math.random().toFixed(5) * 100000).toString(),
    };
    onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const handleShowExpenseForm = () => {
    setShowExpenseForm((showExpenseForm) => {
      if (showExpenseForm) {
        setShowExpenseForm(false);
      } else {
        setShowExpenseForm(true);
      }
    });
  };

  if (!showExpenseForm) {
    return (
      <div className="new-expense">
        <button onClick={handleShowExpenseForm}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onAddNewExpense={addNewExpenseHandler}
        onCancel={handleShowExpenseForm}
      />
    </div>
  );
};

export default NewExpense;
