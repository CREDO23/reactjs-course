import styles from '../../styles/components/question/index.module.css';
import Button from '../shared/button';
import Choice from './choice';
import { useState } from 'react';
import WithTimer from '../../utils/withTimer';

function Question({
  question,
  options,
  questionIndex,
  next,
  setUserChoice,
  finsish,
  time,
  clearTime,
}) {
  const [choice, setchoice] = useState(null);

  const handleNext = () => {
    setUserChoice(choice);
    setchoice(null); // reset the choice, we will learn more in the next post #4
    clearTime();
    next();
    if (questionIndex == 15) {
      finsish();
    }
  };


  if (time == 15) {
    handleNext();
    clearTime();
  }

  return (
    <div className={styles['question']}>
      <div className={styles["timer"]}>
          <span>{ 15 - time}</span>
      </div>
      <p>
        <span>
          <b>{questionIndex}/15</b>
        </span>
        <br />
        {question}
      </p>

      <div className={styles['choices']}>
        {options.map((option, index) => {
          return (
            <Choice
              key={index}
              value={option}
              checked={choice == index}
              onCheck={() => {
                setchoice(index);
              }}
            />
          );
        })}
      </div>

      <div className={styles['action_buttons']}>
        <Button type="secondary">Leave</Button>
        <Button onClick={handleNext} disabled={choice == null}>
          {questionIndex < 15 ? 'Next' : 'Finish'}
        </Button>
      </div>
    </div>
  );
}

export default WithTimer(Question);
