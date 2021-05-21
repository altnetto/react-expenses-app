import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
    const amount = `$ ${props.amount.toFixed(2)}`;

  return (
    <Card className="expense-item">
      <ExpenseDate date={ props.date } />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{ amount }</div>
      </div>
    </Card>
  );
}
