import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // setTodo type i got it from "App.tsx" by hovering on setTodo
}

const InputFeild: React.FunctionComponent<Props> = ({todo, setTodo,}: Props) => {
  return (
    <form action="" className="input">
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
