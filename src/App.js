import React, { useState, useEffect } from 'react';
import Expenses from "./components/UI/Expenses";
import CreateAccount from "./components/LoginAndCreateAccount/CreateAccount" ;
import Login from './components/LoginAndCreateAccount/Login';

function App() {
  const [loggingIn, setLoggingIn] = useState(true);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('LoggedIn');
    if(loggedIn){
      setLoggingIn(false);
      setCreatingAccount(false);
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email) => {
     localStorage.setItem('LoggedIn', true);
     localStorage.setItem('Email', email);
     setIsLoggedIn(true);
     setCreatingAccount(false);
     setLoggingIn(false);
  }

  const loginAndCreateAccountSwitchingHandler = (state) => {
    if(state === 'login'){
      setLoggingIn(false);
      setCreatingAccount(true);
    }
    if(state === 'createAccount'){
      setLoggingIn(true);
      setCreatingAccount(false);
    }
  }
  return (
    <div className="App">
    { creatingAccount && <CreateAccount onLogin={loginHandler} onloginButtonClick={loginAndCreateAccountSwitchingHandler}/> }
    { loggingIn && <Login onLogin={loginHandler} oncreateAccButtonClick={loginAndCreateAccountSwitchingHandler}/> }
    { isLoggedIn && <Expenses/> }
    </div>
  );
}

export default App;