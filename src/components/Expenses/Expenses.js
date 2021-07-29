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
        <ExpenseItem
          title={props.data[0].title}
          date={props.data[0].date}
          amount={props.data[0].amount}
        />
        <ExpenseItem
          title={props.data[1].title}
          date={props.data[1].date}
          amount={props.data[1].amount}
        />
        <ExpenseItem
          title={props.data[2].title}
          date={props.data[2].date}
          amount={props.data[2].amount}
        />
        <ExpenseItem
          title={props.data[3].title}
          date={props.data[3].date}
          amount={props.data[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
