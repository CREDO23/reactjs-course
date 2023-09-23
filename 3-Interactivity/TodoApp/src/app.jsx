import React, { useState } from "react";
import ItemsList from "./components/itemsList";
import "./index.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTask = () => {
    if (inputText.trim() !== "") {
      setTasks([...tasks, { text: inputText, id: Date.now(), isDone: false }]);
      setInputText("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const setTaskDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;

        return task;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };
  return (
    <div>
      <h1>Simple To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <h5>Todos</h5>
          <ItemsList
            deleteTask={deleteTask}
            setTaskDone={setTaskDone}
            items={tasks.filter((item) => item.isDone == false)}
          />
        </div>
        <div>
          <h5>Done</h5>
          <ItemsList
            deleteTask={deleteTask}
            setTaskDone={setTaskDone}
            items={tasks.filter((item) => item.isDone == true)}
          />
        </div>
      </div>
    </div>
  );
}


export default TodoApp