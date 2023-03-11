import Expenses from "./components/UI/Expenses";

const expenses = [
    {
      title: 'New Tv',
      amount: 345.65,
      date: new Date('2020, 01, 31'),
    },
    {
      title: 'New Radio Set',
      amount: 123.65,
      date: new Date('2020, 03, 8'),
    },
    {
      title: 'Some Cusions',
      amount: 500.45,
      date: new Date(),
    },
  ];

function App() {
  const onAddExpenses = (expenseData) => {
    expenses.push(expenseData);
  }
  return (
    <div className="App">
      <Expenses items={expenses} onAddExpenses={onAddExpenses}/> 
    </div>
  );
}

export default App;
