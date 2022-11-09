import React from "react";
import "./style.css";

interface Props {
  value: string;
  onSubmit: React.Dispatch<React.SetStateAction<string>>; // ? onSubmit type i got it from "App.tsx" by hovering on onSubmit
  handleAdd: (e: React.FormEvent) => void; // ? https://stackoverflow.com/a/48176960
}

const InputFeild: React.FunctionComponent<Props> = ({
  value,
  onSubmit,
  handleAdd,
}: Props) => {
  return (
    <form action="" className="input--form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="What do you want to do?"
        className="input--box"
        value={value}
        onChange={(temp) => onSubmit(temp.target.value)}
      />

      <button className="input--submit-button" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
