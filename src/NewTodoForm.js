import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const captureInput = evt => {
    evt.preventDefault();
    addTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div className="container bg-dark text-white">
    <div className="row justify-content-center">
    <div className="col-md-6">
        <br></br>
        <form onSubmit={captureInput}>
            <label htmlFor="task">Task:</label>
            <input
            id="task"
            name="task"
            type="text"
            onChange={handleChange}
            value={task}
            />
            <button id="addTaskButton" className="btn btn-primary">Add Task</button>
        </form>
    </div>
    </div>
    </div>
  );
}

export default NewTodoForm;




