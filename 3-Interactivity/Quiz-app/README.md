## **Building an Interactive Quiz App**

 **Objective:** *Create a dynamic quiz application in React that demonstrates the use of state management, prop passing, event handling, and higher-order components*.

### **Instructions:**

1. Set Up the Project:
    - Create a new React application using `create vite` or your preferred method.
    - Create multiple components: `QuizApp`, `Home`, `UserDetail`, `Question`, and `Result`.

2. `QuizApp` Component:
    - Create a standalone `QuizApp` component that manages the quiz and the user state:
        - quizState:
            - currentIndex: the current question
            - questions: an array of Questions (15)
            - userAnswer: the user's answer
            - correctAnswer: the correct answer
            - result: the result of the user
        - userInfo:
            - fullName: the full name of the user
            - email: the email of the user
    - Define an array of 15 quiz questions, each containing a question, multiple choices, and the correct answer.
    - Use state to keep track of the current question and the user's score.

3. `Home` Component:
    - Create a `Home` component that displays the intro message and a form to collect user details.
    - Use event handlers to track input's values and set them to the userInfo state

4. `UserDetails` Component:
    - Create a `UserDetails` component that displays the user's information (username & email).

5. `Question` Component:
    - Create a `Question` component that receives a question object (including choices and the correct answer) as a prop from `QuizApp`.
    - Allow the user to set its answer by clicking on a choice and set it to the quiz state.
    - Implement an event handler to check if the selected answer is correct. If so, increment the user's score.
    - Update the score in `QuizApp` and move to the next question when answered.

6. `Result` Component:
    - Create a `Result` component to display the user's details, final score and a message based on their performance (e.g., "Great job!" or "You can do better!").
    - This component should receive the final score as a prop from `QuizApp`.

7. Higher-Order Component (HOC):
    - Create a higher-order component called `withTimer` that wraps the `Question` component.
    - `withTimer` should add a timer feature to each question, allowing the user a limited amount of time to answer.
    - If the timer runs out, the question should be considered incorrect, and the next question should be displayed.
    - Include a timer display so users can see the time remaining.
8. Styling:
    - Add CSS styles to make your Quiz App visually appealing.

### **Bonus Challenges:**

1. Add a countdown timer for the entire quiz, not just individual questions.
2. Implement a review feature that allows users to revisit and change their answers before submitting the quiz.
3. Add animations and transitions for a more engaging user experience.
