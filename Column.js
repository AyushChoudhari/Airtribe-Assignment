import React from 'react';
import Card from './Card';
import './Column.css';

function Column({ title, tasks }) {
  return (
    <div className="column">
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          {tasks.map((task, index) => (
            <Card key={index} title={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Column;
