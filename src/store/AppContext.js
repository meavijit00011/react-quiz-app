import { createContext, useState } from "react";

export const AppContext = createContext({
  questions: [],
  quizstart: false,
  quizstartHandler: () => {},
  currentScore: 0,
  setScore: () => {},
  showModal: false,
  setShowModal: () => {},
  bestScore: [],
  showBestScore: false,
  setShowBestScore: () => {},
  appTheme: false,
  setAppTheme: () => {},
});

const AppContextProvider = (props) => {
  const [quizStart, setQuizStart] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [modal, setModal] = useState(false);
  const [scoreArray, setScoreArray] = useState([]);
  const [showBest, setShowBest] = useState(false);
  const [theme, setTheme] = useState(false);
  const setScore = (score) => {
    setCurrentScore(score);
    setScoreArray([...scoreArray, score]);
    setQuizStart(false);
    setModal(!modal);
  };
  const quizStartHandler = () => {
    setQuizStart(!quizStart);
    setShowBest(false);
  };
  const modalControl = () => {
    setModal(!modal);
  };
  const showScore = () => {
    setQuizStart(false);
    setShowBest(!showBest);
  };
  const changeAppTheme = () => {
    setTheme(!theme);
  };
  const questionsArray = [
    {
      id: 1,
      question: "What is the Capital Of India ?",
      ans: ["Chennai", "New Delhi", "Londan", "Paris"],
      rightAns: "New Delhi",
    },
    {
      id: 2,
      question: "What is the Capital Of United Kingdom ?",
      ans: ["Baku", "Moscow", "Londan", "Paris"],
      rightAns: "Londan",
    },
    {
      id: 3,
      question: "What is the Capital Of France ?",
      ans: ["Boston", "New Delhi", "Londan", "Paris"],
      rightAns: "Paris",
    },
    {
      id: 4,
      question: "What is the Capital Of Myanmar ?",
      ans: ["Yangon", "New Delhi", "Gangtok", "New York"],
      rightAns: "Yangon",
    },
    {
      id: 5,
      question: "What is the Capital Of Turkey ?",
      ans: ["Chennai", "Moscow", "Ankara", "Kolkata"],
      rightAns: "Ankara",
    },
  ];
  return (
    <AppContext.Provider
      value={{
        questions: questionsArray,
        quizstartHandler: quizStartHandler,
        quizstart: quizStart,
        currentScore: currentScore,
        setScore: setScore,
        setShowModal: modalControl,
        showModal: modal,
        bestScore: scoreArray,
        setShowBestScore: showScore,
        showBestScore: showBest,
        setAppTheme: changeAppTheme,
        appTheme: theme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
