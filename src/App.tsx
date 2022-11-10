// ? https://javascript.plainenglish.io/react-typescript-813b02ff3672
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList";
import "./App.css";
import useTodos from "./hooks/useTodos";

const userName = "Mouaz";

// ! topics of interest
// react context
// test
// linter
// usecallback
// usememo

export default function App() {
  const { handleAdd, handleTotoComplete, setTodo, todo, todos } = useTodos();

  // * example for useMemo
  // const openTodos = useMemo(() => todos.filter((t) => !t.isDone), [todos]);

  return (
    <div className="app">
      <h3>Hello {userName}</h3>
      <span className="header">ToDo List App</span>

      <InputField value={todo} onChange={setTodo} onSubmit={handleAdd} />
      <TodoList todos={todos} onComplete={handleTotoComplete} />
    </div>
  );
}
