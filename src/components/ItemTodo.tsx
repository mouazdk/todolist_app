import Todo from "../model";
import { MdDone } from "react-icons/md";

type ItemTodoProps = {
  onComplete: (id: number) => void;
  todo: Todo;
};

export default function ItemTodo({ todo, onComplete }: ItemTodoProps) {
  return (
    <div>
      <span className={`todo--list-item${todo.isDone ? " todo--done" : ""}`}>
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
