import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // setTodo type i got it from "App.tsx" by hovering on setTodo
  handleAdd: (e: React.FormEvent) => void; // https://stackoverflow.com/a/48176960
}

const InputFeild: React.FunctionComponent<Props> = ({todo, setTodo, handleAdd}: Props) => {
  
  return (
    <form action="" className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        placeholder="What do you want to do?"
        className="input_box"
        value={todo}
        onChange= {(temp) => setTodo(temp.target.value)} 
      />

      <button className="input_submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
