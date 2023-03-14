import React, { useState, useRef } from 'react';

import './LoginAndCreateAccount.css';

const CreateAccount = (props) => {
  const [emailErrP, setEmailErrP] = useState('');
  const [passwordErrP, setPasswordErrP] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if(email === ''){
      setEmailErrP('Email field cannot be empty')
      return;
    }
    if(email === ''){
       setPasswordErrP('Password field cannot be empty')
      return;
    }

    const userData = {
      email:email,
      password:password,
      id: Math.round(Math.random() * 10000)
    }

    const response = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json');
    const usersList = await response.json();
    for(const key in usersList){
      if(usersList[key].email === email){
         alert('Email already in database. Try logging in.');
         return;
      }
    }

    const createAccResponse = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json',{
       method: 'POST',
       body: JSON.stringify(userData),
     });
    const data = await createAccResponse.json();

    props.onLogin(email);
  }

  return(
    <div className='container loginAndCreateAccount'>
      <h1>Create Account</h1>
      <form onSubmit={formSubmitHandler}>
       <label htmlFor='email'>Email: </label>
       <input id='email' type='email' ref={emailRef}/>
       { emailErrP && <p className='errP'>{emailErrP}</p> }
       <label htmlFor='password'>Password: </label>
       <input id='password' type='password' ref={passwordRef}/>
       { passwordErrP && <p className='errP'>{passwordErrP}</p> }
       <div className='form-actions'>
         <button type='submit' className='active'>Create Account</button>
         <button type='button' onClick={() => props.onloginButtonClick('createAccount')}>Log In</button>
       </div>
      </form>
    </div>
  );
}
export default CreateAccount;
