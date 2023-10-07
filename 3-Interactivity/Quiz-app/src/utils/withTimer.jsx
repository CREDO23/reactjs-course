import { useState, useEffect } from 'react';

export default function WithTimer(QuestionComponent) {
  return function QuestionWithTimer(props) {
    const [time, setTime] = useState(0);
    let interval;

    useEffect(() => {
      interval = setInterval(() => {
        setTime((prevT) => prevT + 1);
      }, 500);

      return () => {
        clearInterval(interval)
        setTime(0)
      } ;
    }, []);

    const clearTime = () => {
        clearInterval(interval)
        setTime(0)
    }

    return (
      <QuestionComponent {...props} clearTime={clearTime} time={time} />
    );
  };
}
