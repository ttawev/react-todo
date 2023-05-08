import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import './App.css';
import {db} from '../../firebase'
import { collection, onSnapshot, query } from 'firebase/firestore';

const App = () => {

    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState(null)
    
    useEffect(() => {
      const q = query(collection(db, 'todos'))
      const unsubscribe = onSnapshot(q, (quetySnapshot) => {
        const todoArr = []
        quetySnapshot.forEach((doc) => {
          todoArr.push({...doc.data(), id: doc.id, settingActive : false})
        })
        setTodoList(todoArr)
        console.log(todoArr);
      })
        
      return () => unsubscribe()
    }, [])


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