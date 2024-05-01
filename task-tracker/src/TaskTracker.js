// TaskTracker.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';
import './App.css';

function TaskTracker({ tasks, deleteTask }) {
  const [filters, setFilters] = useState({
    assignee: '',
    priority: '',
    startDate: '',
    endDate: ''
  });
  const [sortBy, setSortBy] = useState('');
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filters.assignee === '' || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase())) &&
      (filters.priority === '' || task.priority === filters.priority) &&
      (filters.startDate === '' || task.startDate >= filters.startDate) &&
      (filters.endDate === '' || task.endDate <= filters.endDate)
    );
  });

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority.localeCompare(b.priority);
    } else {
      return 0; // No sorting
    }
  });

  const tasksByStatus = sortedTasks.reduce((acc, task) => {
    acc[task.status] = [...(acc[task.status] || []), task];
    return acc;
  }, {});

  return (
    <div className="task-tracker">
      <h2>Task Tracker</h2>
      
      <div className="filters">
        <label>Filter By: </label>
        
        <input type="text" name="assignee" placeholder='Assignee Name' value={filters.assignee} onChange={handleFilterChange} />

        <select name="priority" value={filters.priority} onChange={handleFilterChange}>
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        
      </div>

      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      
      <Link to="/add-task" className='add-task-link'>Add Task</Link>
      
      <div className="task-columns">
        {Object.entries(tasksByStatus).map(([status, tasks]) => (
          <div key={status} className="column">
            <h3>{status}</h3>
            {tasks.map(task => (
              <Task key={task.id} task={task} onDelete={deleteTask} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskTracker;
