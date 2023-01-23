import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./Actions.module.css";
const Actions = () => {
  const ctx = useContext(AppContext);
  const startHandler = () => {
    ctx.quizstartHandler();
  };
  return (
    <div className={classes.actions__container}>
      <button
        onClick={ctx.setShowBestScore}
        className={ctx.appTheme ? classes.dark__action__btn : null}
      >
        Best Score
      </button>
      <button
        onClick={startHandler}
        className={ctx.appTheme ? classes.dark__action__btn : null}
      >
        {ctx.quizstart ? "Stop" : "Start"}
      </button>
      <button
        onClick={ctx.setAppTheme}
        className={ctx.appTheme ? classes.dark__action__btn : null}
      >
        Theme {ctx.appTheme ? "Dark" : "White"}
      </button>
    </div>
  );
};

export default Actions;
