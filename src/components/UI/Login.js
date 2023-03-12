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
     for(key in usersList){
       if(userList[key].email === email){
         if(userList[key].password === password){
            props.onLogin(email);
         }
       }
     }
     
     if(validEmail){
        alert('Wrong password! Check and try again');
     }else{
       alert('Your email is not registered in the database. Kindly create an account or check form imputs');
     }
  }; 

  return(
    <form onsubmit={submitHandler}>
       <input type='email' ref='emailRef' />
       <input type='password' ref='passwordRef' />
       <button type='submit'>Login</button>
    </form>
  );
}
export default Login;
