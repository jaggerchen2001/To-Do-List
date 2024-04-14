import { useState } from "react";
import { ChangeEvent } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <h1 className="text-white text-center custom-margin-top custom-font-size mb-5">
        To-Do-List
      </h1>
      <div
        className="text-center fs-4 rounded mb-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          className="text-center rounded"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn btn-success text-center" onClick={addTask}>
          Add
        </button>
      </div>

      <ol
        className="list-group fs-3"
        style={{ width: "600px", margin: "auto" }}
      >
        {tasks.map((task, index) => (
          <li
            className="list-group-item mt-3 text-center fw-bold border border-dark-subtle rounded d-flex justify-content-center align-items-center"
            key={index}
          >
            <input type="checkbox"></input>
            <span className="text">{task}</span>
            <button
              className="btn btn-danger "
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary "
              onClick={() => moveTaskUp(index)}
            >
              ☝️
            </button>
            <button
              className="btn btn-primary"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
