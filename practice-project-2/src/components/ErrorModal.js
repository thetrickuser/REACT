import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return ReactDOM.createPortal(
      <div className={classes.backdrop} onClick={props.onConfirm} />,
      document.getElementById("modal-backdrop")
    );
  };

  const Overlay = (props) => {
    return ReactDOM.createPortal(
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>,
      document.getElementById("modal-overlay")
    );
  };
  return (
    <React.Fragment>
      <Backdrop onConfirm={props.onConfirm} />
      <Overlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />
    </React.Fragment>
  );
};

export default ErrorModal;
