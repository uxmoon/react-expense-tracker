import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const handleFilterYear = (enteredFilterYear) => {
    setFilterYear(enteredFilterYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={filterYear}
          onSaveFilterYear={handleFilterYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
