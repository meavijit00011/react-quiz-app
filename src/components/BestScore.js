import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./BestScore.module.css";
const BestScore = () => {
  const ctx = useContext(AppContext);
  let bestScoreArray = [...ctx.bestScore];
  bestScoreArray.sort((a, b) => a - b);
  let highest = bestScoreArray[bestScoreArray.length - 1];
  return (
    <div className={classes.best__score__container}>
      <table className={ctx.appTheme ? classes.table__dark__mode : null}>
        <thead>
          <tr>
            <th>Times</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {ctx.bestScore.map((score, ind) => {
            return (
              <tr
                key={ind}
                className={highest == score ? classes.highest : null}
              >
                <td>{ind < 9 ? `0${ind + 1}` : ind + 1}</td>
                <td>{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BestScore;
