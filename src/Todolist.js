// src/ToDo.js
import React, { useEffect, useState } from "react";
import "./index.css";

function Todolist() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // useEffect((e)=>{
  //   setInputValue(e.target.value);

  // })
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {  
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="bg-info mt-5 ms-5 me-5 border-danger m-auto ">
    <div className="todo-container ">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task :"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Todolist;
