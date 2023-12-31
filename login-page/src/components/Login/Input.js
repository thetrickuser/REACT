import React from "react";

import classes from "./Input.module.css";

const Input = ({ isInputValid, label, id, type, value, onChange, onBlur }) => {
  return (
    <div
      className={`${classes.control} ${
        isInputValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
