import React, { useState } from 'react';
import Expenses from "./components/UI/Expenses";
import CreateAccount from "./components/UI/CreateAccount';

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
  const logginIn, setLogginIn] = useState(true);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expensesList, setExpensesList] = useState(expenses);

  const onAddExpenses = (expenseData) => {
    setExpensesList(prevExpensesList => {
       const updatedExpensesList = [expenseData, ...prevExpensesList];
       return updatedExpensesList;
    });
  }
  const createAccountHandler = (email) => {
     setUserEmail(email);
     setIsLoggedIn(true);
  }
  return (
    <div className="App">
     { creatingAccount && <CreateAccount onCreateAccount={createAccountHandler} /> }
     { isLoggedIn &&  <Expenses items={expensesList} onAddExpenses={onAddExpenses}/> } 
    </div>
  );
}

export default App;
