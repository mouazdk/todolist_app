import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import Todo from "./model";
import "./App.css";

let userName = "Mouaz";



const App: React.FunctionComponent = () => { // ? https://javascript.plainenglish.io/react-typescript-813b02ff3672

  const [value, setTodo] = useState<string>("");
  const [todos, onComplete] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      onComplete([...todos, { id: Date.now(), value, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  // console.log(value + " ADDED WORKS!");

  return (
    <div className="app">
      <h3>Hello {userName}</h3>
      <span className="header">ToDo List App</span>

      <InputFeild value={value} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} onComplete={onComplete} />
    </div>
  );
};

export default App;
