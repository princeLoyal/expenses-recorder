import React, { useRef, } from 'react';

import './LoginAndCreateAccount.css';

const Login = (props) => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
     event.preventDefault();

     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     const response = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json');
     const usersList = await response.json();
     for(const key in usersList){
       if(usersList[key].email === email){
         if(usersList[key].password === password){
            props.onLogin(email);
            return;
         } else {
            alert('Password does not match!');
            return;
         }
       }
     }
     
    alert('Email not in database. Try logging in');
  }; 

  return(
    <div className='container'>
      <h1>Log In</h1>
      <form onSubmit={submitHandler} className='loginAndCreateAccount'>
       <label htmlFor='email'>Email: </label>
       <input id='email' type='email' ref={emailRef} />
       <label htmlFor='password'>Password: </label>
       <input id='password' type='password' ref={passwordRef} />
       <div className='form-actions'>
         <button type='submit' className='active'>Login</button>
         <button type='button' onClick={() => props.oncreateAccButtonClick('login')}>Create Account</button>
       </div>
      </form>
    </div>
  );
}
export default Login;
