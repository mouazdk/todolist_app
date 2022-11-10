import { useState } from "react";
import Todo from "../model";

export default function useTodos() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), value: todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleTotoComplete = (id: number) =>
    setTodos(
      todos.map((value) =>
        value.id === id ? { ...value, isDone: !value.isDone } : value
      )
    );

  return {
    handleAdd,
    handleTotoComplete,
    todos,
    todo,
    setTodo,
  };
}
