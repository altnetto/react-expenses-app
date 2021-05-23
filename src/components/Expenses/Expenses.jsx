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
  
  return (
    <div>
      <ExpensesFilter onFilterChange={ filterChangeHandler }/>
      <Card className="expenses">
        {props.expenses.map((item) => {
          if (item.date.getFullYear().toString() === selectedYear) {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          }
        })}
      </Card>
    </div>
  );
}
