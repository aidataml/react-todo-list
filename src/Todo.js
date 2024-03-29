import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  let jsx = (
    <div className="container">
        <div className="todo-item">
            <li>{task}</li>
            <button id="editButton" className="btn btn-primary" onClick={toggleEdit}>Edit</button>
            <button id="deleteButton" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );

  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button id="updateTaskButton" className="btn btn-primary">Update</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
