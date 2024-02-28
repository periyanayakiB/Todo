//TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import BottomNavbar from './BottomNavbar';

function TodoList({ todos, setTodos, mode}) {
  
  return (
    <div className="todolist">
      <ul className="list-container" style={{ backgroundColor: mode === 'dark' ? '#283049' : '#f8f9fa' }}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} setTodos={setTodos} mode={mode} todos={todos}/>
        ))}
      </ul>
      <BottomNavbar setTodos={setTodos}  todos={todos} mode={mode} />
    </div>
  );
}
export default TodoList;
