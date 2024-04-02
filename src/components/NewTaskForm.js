import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [select,setSelect] = useState("Code")
  const [details,setDetails] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({text:details,category:select})
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={event => setDetails(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={select} onChange={event => setSelect(event.target.value)}>
          {categories.filter(cat => cat !== "All").map((cat,i) => {
            return <option key={i} value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
