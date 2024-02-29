// App.js
import React, { useState } from 'react';
import './App.css';
import darkbg from './assets/darkbg.jpg';
import lightbg from './assets/lightbg.jpg';
import TodoList from './components/TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [mode, setMode] = useState('light');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const allTodos = [...todos]; 

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="app" style={{ backgroundColor: mode === 'dark' ? '#15131b' : ' #e0e2e4' }} >
      <nav className="navbar" style={{ backgroundColor: mode === 'dark' ? '#15131b' : '#e0e2e4' }} >
        <img src={mode === 'dark' ? darkbg : lightbg} alt="Navbar" />
      </nav>
      <div className="todo-container">
        <div className="title">
          <div className="heading">
            <h1>TODO</h1>
          </div>
          <div className="icon">
            {mode === 'light' ? (
              <FontAwesomeIcon icon={faMoon} onClick={toggleMode} className='toggle' />
            ) : (
              <FontAwesomeIcon icon={faSun} onClick={toggleMode} className='toggle' />
            )}
          </div>
        </div>
        <div className="input-container" >
          <input
            className="typebox"
            type="text"
            placeholder="Create a new todo..."
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            style={{ backgroundColor: mode === 'dark' ? '#283049' : '#f8f9fa', color: mode === 'dark' ? '#f8f9fa' : '#283049' }}
          />
        </div>
        <TodoList todos={todos} setTodos={setTodos} mode={mode}  allTodos={allTodos} />
        
      </div>
    </div>
  );
}

export default App;
