import React, { useState } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App = () => {

    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState(null)
    


  return (
    <div className="app-bg">
        <div className="app-container">
            <Form 
            todoText={todoText}
            setTodoText={setTodoText}
            todoList={todoList}
            setTodoList={setTodoList}
            />
            
            <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            />
        </div>
    </div>
  )
}

export default App