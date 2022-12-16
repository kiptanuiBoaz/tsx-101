import React from 'react';
import UserInterface from "../src/UserInterface";

function App(props:UserInterface) {
   props={
    name:"bob",
    age:12, 
    address 1133133,
    dob:22-12-2000
  }
  return (
    <div>
      <h1>User Component</h1>
      Hello, <b>{props.name}</b>
      <br />
      You are <b>{props.age} years old</b>
      <br />
      You live at: <b>{props.address}</b>
      <br />
      You were born: <b>{props.dob.toDateString()}</b>
    </div>

  )
}

export default App
