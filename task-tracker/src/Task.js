// Task.js

import React from 'react';

function Task({ task, onDelete }) {
  const { id, title, description, assignee, priority, status } = task;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="task-header">
        <h3>{title}</h3>
        <div className="priority-box">{priority}</div>
      </div>
      <hr />
      <p>{description}</p>
      <br></br>
      <p>@{assignee}</p>
      <p className="status-box">{status}</p>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
