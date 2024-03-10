// TaskList.js
import React from 'react';

const TaskList = ({ title, tasks }) => {
  return (
    <div className="column">
      <h2 className="column-header">{title}</h2>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task">
            <p className="task-title">{task.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
