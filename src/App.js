import Expenses from './components/ExpenseItem/Expenses/Expenses';
import NewExpense from './components/ExpenseItem/NewExpenses/NewExpenses';

function App() {
  const expenses = [
    {
      id: "e1 ",
      title: "Car insurance",
      amount: 294.343,
      date: new Date(2022, 12, 8),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2020, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
