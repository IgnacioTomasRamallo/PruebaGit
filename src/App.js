import Expenses from './components/ExpenseItem/Expenses/Expenses';

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
      title: "Car 1",
      amount: 294.343,
      date: new Date(2022, 12, 8),
    },
    {
      id: "e3",
      title: "Car 2",
      amount: 294.343,
      date: new Date(2022, 12, 8),
    },
    {
      id: "e4",
      title: "Car 3",
      amount: 294.343,
      date: new Date(2022, 12, 8),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
