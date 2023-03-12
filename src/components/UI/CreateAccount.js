import React, { useRef, useState } from 'react';

const CreateAccount = (props) => {
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
          alert('Email exist in database. Try logging in');
       }
     }
     
     const loginInfo = {
        email:email,
        password:password,
        id: Math.round(Math.random() * 1000000),
     };
     const createAccountResponse = await fetch('https://expenses-recorder-f372f-default-rtdb.firebaseio.com/users.json',{
       method: 'POST',
       body: JSON.stringify(loginInfo),
     });

     const data = await createAccountResponse();
     props.onLogIn(email);
     
  }; 

  return(
    <form onsubmit={submitHandler}>
       <input type='email' ref='emailRef' />
       <input type='password' ref='passwordRef' />
       <button type='submit'>Login</button>
    </form>
  );
}
export default CreateAccount;
