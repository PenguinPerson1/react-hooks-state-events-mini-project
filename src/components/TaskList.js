import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks,onDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task,i) => {
        return <Task category={task.category} key={i} text ={task.text} onDelete={()=>onDelete(task)} />
      })}
    </div>
  );
}

export default TaskList;
