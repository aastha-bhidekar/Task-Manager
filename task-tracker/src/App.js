
// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskTracker from './TaskTracker';
import AddTask from './AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      assignee: 'John Doe',
      priority: 'P1',
      status: 'Pending'
    },{
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      assignee: 'John Doe',
      priority: 'P2',
      status: 'Deffered'
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      assignee: 'John Doe',
      priority: 'P1',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description for Task 4',
      assignee: 'Smith Williams',
      priority: 'P2',
      status: 'Deployed'
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Description for Task 5',
      assignee: 'Jerry',
      priority: 'P0',
      status: 'Completed'
    }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TaskTracker tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route
            path="/add-task" 
            element={<AddTask addTask={addTask} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;