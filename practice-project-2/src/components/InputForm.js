import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import Card from "./Card";

import styles from "./InputForm.module.css";
import Button from "../UI/Button";

const InputForm = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim().length === 0) {
      setError({
        message: "Username cannot be empty",
        title: "error",
      });
      return;
    } else if (age.trim().length === 0) {
      setError({
        message: "Age cannot be empty",
        title: "error",
      });
      return;
    } else if (+age < 1) {
      setError({
        message: "Please enter a valid age",
        title: "error",
      });
      return;
    }

    onAddUser({ username: username, age: age });
    setAge("");
    setUsername("");
  };

  const handleConfirmClick = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleConfirmClick}
        />
      )}
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles["input-group"]}>
            <label>Age (Years)</label>
            <input type="number" value={age} onChange={handleAgeChange} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default InputForm;
