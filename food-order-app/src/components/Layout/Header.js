import React, { Fragment } from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/header-image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table food of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;