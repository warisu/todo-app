import React, { useState } from 'react';
import './App.css';
// importing components
import  Form from "./components/form";
import TodoList from './components/todoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Odi's Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText = { setInputText }
      />
      <TodoList todos={todos}/>
    </div>
  );  
}

export default App;
