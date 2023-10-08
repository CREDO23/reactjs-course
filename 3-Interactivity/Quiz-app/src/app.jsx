import { useState } from 'react';
import Home from './components/home';
import Question from './components/question';
import Result from './components/result';
import { questions } from './questions';

export default function QuizApp() {
  const [viewState, setViewState] = useState('collectUserInfo'); // collectUserInfo | quiz | result

  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
  });

  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    questions,
    correctAnswer: questions[0].correctAnswer,
    userAnswer: null,
    result: 0,
  });

  /**
   * Set the current user's answerr to the quiz state
   */
  const handleUserAnswer = choice => {
    setQuizState({
      ...quizState,
      userAnswer: choice,
    });
  };

  /**
   * Increment the user score if the its answer is correct
   */
  const handleUserResult = () => {
    setQuizState(prevQ => {
      const { correctAnswer, userAnswer } = prevQ;
      let { result } = prevQ;

      if (userAnswer == correctAnswer) {
        result += 1;
      }

      return {
        ...prevQ,
        result,
        userAnswer: null,
      };
    });
  };

  /**
   * After choosing an option, handle the result
   *  and move on the next question
   */
  const handleNextQuestion = () => {
    handleUserResult();

    if (quizState.currentIndex < 14) {
      setQuizState(prevQ => {
        let { currentIndex, correctAnswer } = prevQ;

        correctAnswer = prevQ.questions[currentIndex + 1].correctAnswer;

        return {
          ...prevQ,
          currentIndex: prevQ.currentIndex + 1,
          correctAnswer,
        };
      });
    }
  };

  /**
   * When the user clicks on the LEAVE button, we need to 
   * handler its results, leave the quiz section and 
   * dispaly its current score over 15
   */
  const handleLeaveQuiz = () => {
    handleFinishQuiz()
  }

  /**
   * At the 15th questin we need to finish showing question
   *  and go to the result screen.
   */
  const handleFinishQuiz = () => {
    handleUserResult();
    handleViewState('result');
  };

  /**
   * Reset the all states when the user go back home.
   */
  const resetStates = () => {
    setQuizState({
      currentIndex: 0,
      questions,
      correctAnswer: questions[0].correctAnswer,
      userAnswer: null,
      result: 0,
    });

    setUserInfo({
      email : '',
      fullName : '',
    })
  };


  /**
   * Handle the navigation between screens
   */
  const handleViewState = state => {
    setViewState(state);
  };

  /**
   * Handle the user information inputs form
   */
  const handleUserInfoForm = (e, field) => {
    setUserInfo({
      ...userInfo,
      [field]: e.target.value,
    });
  };

  return (
    <section id="app">
      {viewState == 'collectUserInfo' && (
        <Home
          userInfo={userInfo}
          handleUserForm={handleUserInfoForm}
          setView={handleViewState}
        />
      )}

      {viewState == 'quiz' && (
        <Question
          {...quizState.questions[quizState.currentIndex]}
          questionIndex={quizState.currentIndex + 1}
          onNext={handleNextQuestion}
          onFinish={handleFinishQuiz}
          onLeave={handleLeaveQuiz}
          setUserChoice={handleUserAnswer}
        />
      )}

      {viewState == 'result' && (
        <Result
          userInfo={userInfo}
          message={quizState.result > 7 ? 'Great Job!' : 'You can do better!'}
          score={quizState.result}
          setView={handleViewState}
          resetStates={resetStates}
        />
      )}
    </section>
  );
}
