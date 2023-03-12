import React, { useRef, useState } from 'react';

const Login = (props) => {
  const [validEmail, setValidEmail] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
     event.preventDefault();

     const email = email.current.value;
     const password = password.current.value;

     const response = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json');
     const usersList = await response.json();
     for(const key in usersList){
       if(usersList[key].email === email){
         setValidEmail(true);
alert('Email is valid')
         if(usersList[key].password === password){
            props.onLogin(email);
            return;
         }
       }
     }
     
     if(validEmail){
        alert('Wrong password! Check and try again');
     }else{
alert('Email isnt valid')
       setValidEmail(false);
       alert('Your email is not registered in the database. Kindly create an account or check form imputs');
     }
  }; 

  return(
    <form onsubmit={submitHandler}>
       <label htmlFor='email'>Email: </label>
       <input id='email' type='email' ref={emailRef} />
       <label htmlFor='password'>Password: </label>
       <input id='password' type='password' ref={passwordRef} />
       <div className='form-actions'>
         <button type='submit'>Login</button>
         <button type='button' onClick={() => props.oncreateAccButtonClick('login')}>Create Account</button>
       </div>
    </form>
  );
}
export default Login;
