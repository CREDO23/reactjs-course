import styles from "../../styles/components/question/index.module.css";
import Button from "../shared/button";
import Choice from "./choice";
import { useState } from "react";

export default function Question({
  question,
  options,
  setCurrentAnswer,
  nextQuestion,
  questionIndex,
}) {
  const [answer, setAnswer] = useState();

  const handleNextQuestion = () => {
    // Reset state ==> We will learn more in the next article
    setAnswer(null);
    setCurrentAnswer(answer);
    if (questionIndex < 15) nextQuestion();
  };

  return (
    <div className={styles["question"]}>
      <p>
        <span>
          <b>{questionIndex}</b>
        </span>
        <br />
        {question}
      </p>

      <div className={styles["choices"]}>
        {options.map((option, index) => {
          return (
            <Choice
              key={index}
              value={option}
              checked={answer == index}
              onCheck={() => setAnswer(index)}
            />
          );
        })}
      </div>

      <div className={styles["action_buttons"]}>
        <Button type="secondary">Leave</Button>
        <Button onClick={handleNextQuestion} disabled={answer == null}>
          Next
        </Button>
      </div>
    </div>
  );
}
