import React from "react";
import Todo from "../model";
import { MdDone, MdDeleteForever } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
  value: Todo;
  todos: Todo[];
  onComplete: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ItemTodo = ({ value, todos, onComplete }: Props) => {
  const handleDone = (id: number) => {
    onComplete(
      todos.map((value) =>
        value.id === id ? { ...value, isDone: !value.isDone } : value
      )
    );
  };
  return (
    <div>
      {value.isDone ? (
        <span className="todo--done">{value.value}</span>
      ) : (
        <span className="todo--list-item">{value.value}</span>
      )}
      <div>
        <span className="icon" onClick={() => handleDone(value.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default ItemTodo;
