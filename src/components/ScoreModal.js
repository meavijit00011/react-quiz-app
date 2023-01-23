import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./ScoreModal.module.css";
const ScoreModal = (props) => {
  const ctx = useContext(AppContext);
  return (
    <div className={classes.score__modal__container}>
      <div className={classes.show__score}>
        <button onClick={ctx.setShowModal}>Close</button>
        <p>Your Current Score is : {props.score}</p>
      </div>
    </div>
  );
};

export default ScoreModal;
