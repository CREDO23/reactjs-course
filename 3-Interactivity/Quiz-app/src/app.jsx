import Home from "./components/home";
import Question from "./components/question";
import Result from "./components/result";

export default function App() {
  return (
    <section id="app">
      <Home/>
      <Question/>
      <Result score={2} userInfo={{fullName :"Thierry bakera", email : "bakerathierry@gmail.com"}}/>
    </section>
  );
}
