import ExpenseItem from './components/ExpenseItem'

function App() {
  
  // Imperative programming (clear and imperative instructions -> the old way of constructing javascript code)

  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Expenses</h2>
      {expenses.map((item) => {
        return ( <ExpenseItem  title={ item.title }
                      amount={ item.amount }
                      date={ item.date }
                      /> )
      })}
    </div>
  );
}

export default App;
