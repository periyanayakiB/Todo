// BottomNavbar.js
import React from 'react';

function BottomNavbar({ mode, setTodos, todos, allTodos }) {
    const filterTodos = (filter) => {
        switch (filter) {
          case 'All':
            setTodos([...allTodos]); 
            break;
          case 'Completed':
            setTodos(todos.filter(todo => todo.completed));
            break;
          case 'In Progress':
            const anyCompleted = todos.some(todo => todo.completed);
            if (anyCompleted) {
              setTodos(todos.filter(todo => !todo.completed));
            } else {
              setTodos([...todos]);
            }
            break;
          case 'Clear Completed':
            const remainingTodos = todos.filter(todo => !todo.completed);
            setTodos(remainingTodos);
            // handleClearCompleted();
            break;
          default:
            break;
        }
      };
      
  return (
    <nav className="bottom-navbar" style={{ backgroundColor: mode === 'dark' ? '#283049' : '#f8f9fa' }}>
      <ul className="categories">
        <li onClick={() => filterTodos('All')} style={{ color: mode === 'dark' ? '#f8f9fa' : '#283049' }}>All</li>
        <li onClick={() => filterTodos('Completed')} style={{ color: mode === 'dark' ? '#f8f9fa' : '#283049' }}>Completed</li>
        <li onClick={() => filterTodos('In Progress')} style={{ color: mode === 'dark' ? '#f8f9fa' : '#283049' }}>In Progress</li>
        <li onClick={() => filterTodos('Clear Completed')} style={{ color: mode === 'dark' ? '#f8f9fa' : '#283049' }}>Clear Completed</li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;

