import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart'


export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear.toString());
  };

  const yearFilter = (value) => {
    return value.date.getFullYear().toString() === selectedYear;
  };

  const filteredExpenses = props.expenses.filter(yearFilter);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={ filteredExpenses }/>
        <ExpensesList items={ filteredExpenses }/>
      </Card>
    </div>
  );
}
