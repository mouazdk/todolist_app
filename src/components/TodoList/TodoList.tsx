import React from "react";
import Todo from "../../model";
import ItemTodo from "../ItemTodo/ItemTodo";
import "./style.css";

type TodoListProps = {
  todos: Todo[];
  onComplete: React.ComponentProps<typeof ItemTodo>["onComplete"];
};

export default function TodoList({ todos, onComplete }: TodoListProps) {
  return (
    <div className="todo--list">
      {todos.map((todo) => (
        <ItemTodo todo={todo} key={todo.id} onComplete={onComplete} />
      ))}
    </div>
  );
}
