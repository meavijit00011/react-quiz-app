import { useContext, useEffect, useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import BestScore from "./components/BestScore";
import Header from "./components/Header";
import Question from "./components/Question";
import ScoreModal from "./components/ScoreModal";
import { AppContext } from "./store/AppContext";
function App() {
  const ctx = useContext(AppContext);
  let classList = "";
  if (ctx.appTheme) {
    classList = "App dark";
  }
  return (
    <div className={classList}>
      <Header></Header>
      <Actions></Actions>
      {ctx.quizstart && <Question></Question>}
      {ctx.showModal && <ScoreModal score={ctx.currentScore}></ScoreModal>}
      {ctx.showBestScore && <BestScore></BestScore>}
    </div>
  );
}

export default App;
