import React, { useState } from 'react';
import Expenses from "./components/UI/Expenses";
import CreateAccount from "./components/UI/CreateAccount" ;

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(true);

  return (
    <div className="App">
    { creatingAccount && <CreateAccount /> }
    { loggedIn && <Expenses items={expenses}/> }
    </div>
  );
}

export default App;
