import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./QuestionDetails.module.css";
const QuestionDetails = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [firstInput, setFirstInput] = useState(false);
  const [score, setScore] = useState(0);
  let ctx = useContext(AppContext);
  const buttonClickHandler = (id) => {
    setSelectedAnswer(id);
    if (props.question.rightAns == props.question.ans[id - 1] && !firstInput) {
      setScore((prev) => prev + 5);
      setFirstInput(true);
    } else if (!(props.question.rightAns == props.question.ans[id - 1])) {
      if (firstInput) {
        setScore((prev) => prev - 5);
        setFirstInput(false);
      }
    }
  };
  const scoreRef = useRef();
  scoreRef.current = score;
  // scoreRef will help to store latest score value which will be used inside the useEffect code.when the question id is 5 then useEffect code will run it will have the score value. but if the user change the option then useEffect code will not have the latest score value. so this approach..
  useEffect(() => {
    let timeout;
    if (props.question.id == 5) {
      timeout = setTimeout(() => {
        ctx.setScore(scoreRef.current);
      }, 9950);
    }
    return () => clearTimeout(timeout);
  }, [props.question]);

  useEffect(() => {
    setSelectedAnswer(null);
    setFirstInput(false);
  }, [props.question]);
  let classList = {};
  if (selectedAnswer) {
    classList[`button${selectedAnswer}`] = classes.active;
  } else {
    classList = {};
  }
  return (
    <div className={classes.question__details__container}>
      <p className={ctx.appTheme ? classes.p__dark : null}>
        {props.question.id}. {props.question.question}
      </p>
      <div className={classes.select__answer}>
        <div className={classes.row1}>
          <button
            onClick={buttonClickHandler.bind(false, 1)}
            className={classList.button1}
          >
            {props.question.ans[0]}
          </button>
          <button
            onClick={buttonClickHandler.bind(false, 2)}
            className={classList.button2}
          >
            {props.question.ans[1]}
          </button>
        </div>
        <div className={classes.row2}>
          <button
            onClick={buttonClickHandler.bind(false, 3)}
            className={classList.button3}
          >
            {props.question.ans[2]}
          </button>
          <button
            onClick={buttonClickHandler.bind(false, 4)}
            className={classList.button4}
          >
            {props.question.ans[3]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
