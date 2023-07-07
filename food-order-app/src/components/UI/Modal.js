import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} />,
    portalElement
  );
};

const ModalOverlay = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>,
    portalElement
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
