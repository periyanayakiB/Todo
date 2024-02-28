// TodoItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, index, setTodos, mode, todos }) {
  const { text, completed } = todo;

  const toggleCompleted = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="list" >
      <button className="status-button" onClick={toggleCompleted} style={{ backgroundColor: completed ? '#7353e7' : 'transparent' }}>
        {completed && <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />}
      </button>
      <p style={{ textDecoration: completed ? 'line-through' : 'none', flex: 1, color: mode === 'dark' ? '#f8f9fa' : '#283049' }}>{text}</p>
    </div>
  );
}

export default TodoItem;
