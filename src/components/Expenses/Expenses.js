import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterData, setFilterData] = useState("2020");

  const handleFilterData = (enteredFilterData) => {
    // console.log("Inside expenses.js");
    // console.log(enteredFilterData);
    setFilterData(enteredFilterData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedFilter={filterData} onSaveFilterData={handleFilterData} />
        {props.data.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)}

      </Card>
    </div>
  );
};

export default Expenses;
