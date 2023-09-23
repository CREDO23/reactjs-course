import ReactDOM from "react-dom/client";
import TodoApp from "./app";


function App() {
  return (
    <>
        <TodoApp/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
