import React from "react";
import styles from "./ErrorPage.module.css";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <div className={styles.content}>
        <h1>An error occured</h1>
        <p>Could not find this page.</p>
      </div>
    </>
  );
};

export default ErrorPage;
