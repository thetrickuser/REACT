import { useState } from "react";

const useInput = (checkValidity) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (inputValue) => {
    setValue(inputValue);
  };

  const inputTouchHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const isValid = checkValidity(value);
  const hasError = isTouched && !isValid;
  return {
    value,
    hasError,
    isValid,
    inputChangeHandler,
    inputTouchHandler,
    reset,
  };
};

export default useInput;
