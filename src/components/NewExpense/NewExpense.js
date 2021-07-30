import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setToggleForm(!toggleForm);
  };

  const handleCancelForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="new-expense">
      {!toggleForm && (
        <button type="button" onClick={handleToggleForm}>
          Add new expense
        </button>
      )}

      {toggleForm && (
        <ExpenseForm
          onCancel={handleCancelForm}
          onSaveExpenseData={handleSaveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
