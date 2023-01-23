import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./Question.module.css";
import QuestionDetails from "./QuestionDetails";
import Timer from "./Timer";
const Question = () => {
  const ctx = useContext(AppContext);
  const [question, setQuestion] = useState(ctx.questions[0]);
  useEffect(() => {
    let count = 1;
    let interval = setInterval(() => {
      setQuestion(ctx.questions[count]);
      count += 1;
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className={`${classes.question__container} ${
        ctx.appTheme ? classes.question__container__dark : null
      }`}
    >
      <Timer value={question}></Timer>
      <QuestionDetails question={question}></QuestionDetails>
    </div>
  );
};

export default Question;
