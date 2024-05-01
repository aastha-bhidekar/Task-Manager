// AddTask.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTask.css';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!title || !assignee || !priority || !status) {
      alert('Please fill in all required fields.');
      return;
    }
    // Set start date to current date
    const startDate = new Date().toLocaleDateString();
    // Call addTask function from parent component
    addTask({ title, description, assignee, priority, status, startDate });
    // Reset form fields
    setTitle('');
    setDescription('');
    setAssignee('');
    setPriority('');
    setStatus('');
    // Navigate back to Task Tracker page
    navigate('/');
  };

  return (
    <div className="add-task-container">
      <h2 className="add-task-title">Add Task</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <label htmlFor="title" className="add-task-label">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="add-task-input" required />
        
        <label htmlFor="description" className="add-task-label">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="add-task-textarea"></textarea>
        
        <label htmlFor="assignee" className="add-task-label">Assignee:</label>
        <input type="text" id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="add-task-input" required />
        
        <label htmlFor="priority" className="add-task-label">Priority:</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="add-task-input" required>
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        <label htmlFor="status" className="add-task-label">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="add-task-input" required>
          <option value="">Select Status</option>
          <option value="Assign">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deployed">Deployed</option>
          <option value="Deferred">Deferred</option>
        </select>
        
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
