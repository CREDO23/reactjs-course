import styles from '../../styles/components/question/index.module.css';
import Button from '../shared/button';
import Choice from './choice';
import { useEffect, useState } from 'react';
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


  /**
   * Here, useEffect allows us to check the time once
   * the Question component is rendered and not when rendering. 
   * 
   * The time variable passed as dependacies to allows to 
   * re-run it only if `time` has been changed.
   * 
   * We will learn more in the next post #4
   */
  useEffect(() => {
    if (time == 15) {
      handleNext();
      clearTime();
    }
  },[time]);

  return (
    <div className={styles['question']}>
      <div className={styles['timer']}>
        <span>{15 - time}</span>
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
