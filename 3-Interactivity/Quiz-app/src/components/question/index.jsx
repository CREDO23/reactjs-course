import styles from "../../styles/components/question/index.module.css";
import Button from "../shared/button";
import Choice from "./choice";
import { useState } from "react";

export default function Question({ question, options, setCurrentAnswer }) {
  const [answer, setAnswer] = useState(null);

  const handleCurrentAnswer = () => {
    setCurrentAnswer(answer);
  };

  return (
    <div className={styles["question"]}>
      <p>{question}</p>

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
        <Button onClick={handleCurrentAnswer} disabled={answer == null}>
          Next
        </Button>
      </div>
    </div>
  );
}
