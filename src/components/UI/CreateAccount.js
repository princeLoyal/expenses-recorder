import React, { useRef, useState } from 'react';

const CreateAccount = (props) => {
  

  return(
    <form onsubmit={submitHandler}>
       <input type='email' ref='emailRef' />
       <input type='password' ref='passwordRef' />
       <button type='submit'>Login</button>
    </form>
  );
}
export default CreateAccount;
