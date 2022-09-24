import { useState } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';

function Form() {
  const [userName, setUserName] = useState("");

  return (
    <form>
      <label>UserName:
        <input type= "text">
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        </input>
      </label>
    </form>
  )
}

export default Form;
