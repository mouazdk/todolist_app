import Todo from "../../model";
import { MdDone } from "react-icons/md";
import "./ItemTodo.css"

type ItemTodoProps = {
  onComplete: (id: number) => void;
  todo: Todo;
};

export default function ItemTodo({ todo, onComplete }: ItemTodoProps) {
  return (
    <div>
      <span className={`todo_item ${todo.isDone ? "todo_item-done" : ""}`}>
        {todo.value}
      </span>
      <div>
        <span className="icon" onClick={() => onComplete(todo.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
}
