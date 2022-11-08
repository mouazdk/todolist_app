import React from "react";
import Todo from "../model";
import ItemTodo from "./ItemTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //define it from App.tsx by hovering on setTodos from line 8
}

const TodoList: React.FunctionComponent<Props> = ({todos,setTodos}: Props) => {
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <ItemTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
