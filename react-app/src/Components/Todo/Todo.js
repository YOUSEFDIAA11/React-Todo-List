import React, { useState, useRef, useEffect } from "react";
import "./Todo.css";
const Todo = () => {
  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
    { text: "Task 3", completed: false },
  ]);
  const inputRef = useRef();

  const handleAddTasks = () => {
    const Tasktext = inputRef.current.value;

    if (Tasktext === "") {
      return alert("Please enter a task!");
    }

    const newItem = {
      completed: false,
      text: Tasktext,
    };

    setTasks([...tasks, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTasks = [...tasks];

    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
  };

  const handleDeleteItem = (index) => {
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  const tasksCount = tasks.length;

  useEffect(() => {
    document.title = `You have ${tasksCount} tasks`;
  }, [tasksCount]);
  
  return (
    <div className="App">
      <div className="todo-container">
        <p className="task-count">Total Tasks: {tasksCount}</p>
        <h1>To Do List</h1>

        <div className="todo-item">
          <input ref={inputRef} placeholder="Enter item..." />

          <button onClick={handleAddTasks} className="add-btn">
            Add
          </button>
        </div>

        {tasks.map(({ text, completed }, index) => (
          <div className="item" key={index}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleItemDone(index)}
            />
            {text}

            <button
              onClick={() => handleDeleteItem(index)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
