import { useState, useEffect } from 'react';

export default function WithTimer(QuestionComponent) {
  return function QuestionWithTimer(props) {
    const [time, setTime] = useState(0);
    let timerId;

    /**
     * Here, useEffect allows to only start the timer interval for the
     * first time this component is rendered and not for each render.
     * 
     * We will learn more in the next post
     */
    useEffect(() => {
      timerId = setInterval(() => {
        setTime((prevT) => prevT + 1);
      }, 500);

    }, []);

    const clearTime = () => {
        clearInterval(timerId)
        setTime(0)
    }

    return (
      <QuestionComponent {...props} clearTime={clearTime} time={time} />
    );
  };
}
