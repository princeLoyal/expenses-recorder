import React, { useRef } from 'react';

const CreateAccount = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = async (event) = {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = emailRef.current.value;
    const userData = {
      email:email,
      password:password,
      id: Math.round(Math.random() * 10000)
    }

    

    props.onLogin(email);
  }

  return(
    <form onSubmit={formSubmitHandler}>
       <label htmlFor='email'>Email: </label>
       <input id='email' type='email' ref={emailRef}/>
       <label htmlFor='password'>Password: </label>
       <input id='password' type='password' ref={passwordRef}/>
       <div className='form-actions'>
         <button type='submit'>Create Account</button>
         <button type='button'>Log In</button>
       </div>
    </form>
  );
}
export default CreateAccount;
