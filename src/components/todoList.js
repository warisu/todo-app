import React from 'react';
// Import components
import Todo from './Todo'

const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className ="todo-list">
               {todos.map((todo) => (
                  < Todo />
               ))}
            </ul>
        </div>
    ); 
};

export default TodoList;