import React from "react";
import Todo from "../model";
import ItemTodo from "./ItemTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  onComplete: React.Dispatch<React.SetStateAction<Todo[]>>; // * define it from App.tsx by hovering on onComplete
}

const TodoList: React.FunctionComponent<Props> = ({
  todos,
  onComplete,
}: Props) => {
  return (
    <div className="todo--list">
      {todos.map((value) => (
        <ItemTodo
          value={value}
          key={value.id}
          todos={todos}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
