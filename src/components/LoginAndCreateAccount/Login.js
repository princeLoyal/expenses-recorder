import React, { useRef, useState} from 'react';

import './LoginAndCreateAccount.css';

const Login = (props) => {
  const [emailErrP, setEmailErrP] = useState('');
  const [passwordErrP, setPasswordErrP] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
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

     const response = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json');
     const usersList = await response.json();

     for(const key in usersList){
       if(usersList[key].email === email){
         if(usersList[key].password === password){
            props.onLogin(email);
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
       { emailErrP }
       <label htmlFor='password'>Password: </label>
       <input id='password' type='password' ref={passwordRef} />
       { passwordErrP }
       <div className='form-actions'>
         <button type='submit' className='active'>Login</button>
         <button type='button' onClick={() => props.oncreateAccButtonClick('login')}>Create Account</button>
       </div>
      </form>
    </div>
  );
}
export default Login;
