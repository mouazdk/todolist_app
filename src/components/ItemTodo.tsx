import React from "react";
import Todo from "../model";
import { MdDone, MdDeleteForever } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ItemTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id===id? {...todo, isDone: !todo.isDone}:todo))
    }
  return (
    <form action="" className="todos_single">
        {todo.isDone ? (
            <span className="todo_done">
                {todo.todo}
            </span>
        ) :( 
      <span className="todo_list_item">{todo.todo}</span>
        )}
      <div>
        <span className="icon" onClick={() =>handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default ItemTodo;
