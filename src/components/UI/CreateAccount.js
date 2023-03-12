import React, { useRef, useState } from 'react';

const CreateAccount = (props) => {
  const emailRef = useRef();

  return(
    <form>
       <input type='email' ref={emailRef}/>
       <input type='password' />
       <button type='submit'>Login</button>
    </form>
  );
}
export default CreateAccount;
