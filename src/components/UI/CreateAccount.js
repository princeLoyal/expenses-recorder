import React, { useRef, useState } from 'react';

const CreateAccount = (props) => {
  

  return(
    <form onsubmit={submitHandler}>
       <input type='email' />
       <input type='password' />
       <button type='submit'>Login</button>
    </form>
  );
}
export default CreateAccount;
