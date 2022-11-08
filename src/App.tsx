import "./App.css";
import React, { useState } from "react";
import InputFeild from "./components/InputFeild";

let userName = "Mouaz";

const App: React.FunctionComponent = () => {

  const [todo, setTodo] = useState("");

  console.log(todo + " ADDED WORKS!");


  return (
    <div className="App">
      <h3>Hello {userName}</h3>
      <span className="header">
        ToDo List App
      </span>

      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
