import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./Header.module.css";
const Header = () => {
  const ctx = useContext(AppContext);
  return (
    <div className={classes.header__container}>
      <h2 className={ctx.appTheme ? classes.dark__h2 : null}>React Quiz App</h2>
    </div>
  );
};

export default Header;
