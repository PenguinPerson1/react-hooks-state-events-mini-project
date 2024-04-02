import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS)
  const [filter,setFilter] = useState("All")
  function changeFilter(name) {
    setFilter(name)
  } 
  function onDelete(deletedTask) {
    setTasks(tasks.filter(task => task !== deletedTask))
  }
  function onAdd(newTask) {
    setTasks([...tasks,newTask]);
  }
  console.log(tasks);
  const displayTasks = tasks.filter(task => filter === "All" || filter == task.category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={changeFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit = {onAdd}/>
      <TaskList  tasks = {displayTasks} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
