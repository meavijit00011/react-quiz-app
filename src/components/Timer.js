import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";
const Timer = (props) => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      setCount(10);
      clearInterval(interval);
    };
  }, [setCount, props.value]);
  let classList = `${classes.timer__container}`;
  if (count <= 3) {
    classList = `${classes.timer__animation} ${classes.timer__container}`;
  }
  return <div className={classList}>{count}</div>;
};

export default Timer;
