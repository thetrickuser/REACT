import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onAddNewExpense, onCancel }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleTitleChange = (event) => {
    setExpenseTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const addNewExpense = (event) => {
    event.preventDefault();

    const newExpense = {
      desc: expenseTitle,
      price: Number(expenseAmount),
      date: new Date(expenseDate),
    };

    onAddNewExpense(newExpense);

    setExpenseAmount("");
    setExpenseTitle("");
    setExpenseDate("");
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={addNewExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={expenseDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
