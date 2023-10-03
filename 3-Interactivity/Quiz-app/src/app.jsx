import { useState } from "react";
import Home from "./components/home";
import Question from "./components/question";
import Result from "./components/result";
import { questions } from "./questions";

export default function QuizApp() {

  //Since it wont change, we can just use a local variable
  const quizzes = questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer,setCurrentAnswer] = useState(null);


  return (
    <section id="app">
      <Question {...quizzes[currentQuestion]} setCurrentAnswer={setCurrentAnswer} />
    </section>
  );
}


      {/* <Result
        score={2}
        userInfo={{
          fullName: "Thierry bakera",
          email: "bakerathierry@gmail.com",
        }}
      /> */}