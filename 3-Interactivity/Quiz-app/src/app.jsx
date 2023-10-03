import { useState } from "react";
import Home from "./components/home";
import Question from "./components/question";
import Result from "./components/result";
import { questions } from "./questions";

export default function QuizApp() {
  //Since it wont change, we can just use a local variable
  const quizzes = questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  return (
    <section id="app">
      <Question
        {...quizzes[currentQuestion]}
        questionIndex={currentQuestion + 1}
        setCurrentAnswer={setCurrentAnswer}
        nextQuestion={() =>
          // we start from zero
          setCurrentQuestion((prevQ) => {
            if(prevQ < 14){
              return prevQ + 1
            }
          })
        }
      />
    </section>
  );
}
