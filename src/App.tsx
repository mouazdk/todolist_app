import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import Todo from "./model";
import "./App.css";
import TodoList from "./components/TodoList";

let userName = "Mouaz";

const App: React.FunctionComponent = () => {
  //https://javascript.plainenglish.io/react-typescript-813b02ff3672

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  // console.log(todo + " ADDED WORKS!");

  return (
    <div className="App">
      <h3>Hello {userName}</h3>
      <span className="header">ToDo List App</span>

      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
