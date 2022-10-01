import { useState } from 'react';
// import React from 'react';
// import ReactDOM, { render } from 'react-dom';
// import React, { Component } from 'react';




function LoginForm() {
  const [userName, setUserName] = useState("");
  
  return (
    <form className='login'>
      <label>UserName:
        <input type= "text">
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        </input>
      </label>
    </form>
  )
}




export default LoginForm;
