import React from 'react';
import './Card.css';

function Card({ title }) {
  return (
    <div className="task">{title}</div>
  );
}

export default Card;

