import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react';

// React Hooks: useState, useEffect ...

export default function ExpenseItem(props) {
  const amount = `$ ${parseFloat(props.amount).toFixed(2)}`;
  const [title, setTitle] = useState(props.title);
  // we can asign the state hook as const because, when it it
  // called, the page renders again

  const clickHandler = () => {
    setTitle("Xablau");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={ props.date } />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{ amount }</div>
      </div>
      {/* don't use the clickHandler() syntax, because that
          triggers the function when the component is loaded */}
      <button onClick={ clickHandler }>Change Title</button>
    </Card>
  );
}
