import React from "react";
import classes from "./InputField.module.css";

type InputFieldProps = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value: string;
};

export default function InputField({
  onChange,
  onSubmit,
  value,
}: InputFieldProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What do you want to do?"
        className={classes.field}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className={classes.submitButton} onClick={onSubmit}>
        ADD
      </button>
    </div>
  );
}
