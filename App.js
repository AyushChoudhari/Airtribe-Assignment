
import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css'; 


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', status: 'To Do' },
    { id: 3, title: 'Task 3', status: 'In Progress' },
    { id: 4, title: 'Task 4', status: 'In Progress' },
    { id: 5, title: 'Task 5', status: 'Done' },
    { id: 6, title: 'Task 6', status: 'Done' },
  ]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      status: 'To Do',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1 className="title">Project Board</h1>
      <div className="row">
        <TaskList title="To Do" tasks={tasks.filter(task => task.status === 'To Do')} />
        <TaskList title="In Progress" tasks={tasks.filter(task => task.status === 'In Progress')} />
        <TaskList title="Done" tasks={tasks.filter(task => task.status === 'Done')} />
      </div>
      <button className="add-button" onClick={handleAddTask}>New Task</button>
    </div>
  );
}

export default App;
