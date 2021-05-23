import "./Expenses.css";
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear.toString());
  };
  
  const yearFilter = (value) => {
    return value.date.getFullYear().toString() === selectedYear;
  }

  const filteredExpenses = props.expenses.filter(yearFilter);

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onFilterChange={ filterChangeHandler }/>
        { filteredExpenses.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          }
        )}
      </Card>
    </div>
  );
}
