import React from "react";
import "./style.css";

interface Props {
  value: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // ? setTodo type i got it from "App.tsx" by hovering on setTodo
  handleAdd: (e: React.FormEvent) => void; // ? https://stackoverflow.com/a/48176960
}

const InputFeild: React.FunctionComponent<Props> = ({
  value,
  setTodo,
  handleAdd,
}: Props) => {
  return (
    <form action="" className="input--form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="What do you want to do?"
        className="input--box"
        value={value}
        onChange={(temp) => setTodo(temp.target.value)}
      />

      <button className="input--submit-button" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
