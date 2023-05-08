import React from 'react'
import Button from '../Button/Button'
import '../Form/Form.css'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const Form = ({todoText, setTodoText, todoList, setTodoList}) => {
    const submitHandler = (e) => {
        e.preventDefault()

        addDoc(collection(db, 'todos'), {
            time: generateTime(),
            todoText: todoText,
            isActive: true,
            isEditing: false
        })
        setTodoText('')

    }

    const inputHandler = (e) => {
        setTodoText(e.target.value)
    }

    const generateTime = () => {
        const time = new Date()
        const hours = time.getHours()
        const minute = time.getMinutes()
        const date = time.getDate()
        const month = time.toLocaleDateString('ru', {month: 'long'})
        return `${hours}:${minute < 10 ? `0${minute}` : minute} / ${date} ${month}`
    }
    
  return (
            <form onSubmit={submitHandler}>
                <input 
                className='input' 
                type="text" 
                placeholder='Введите задачу' 
                required 
                value={todoText} 
                onChange={inputHandler}/>
                <Button type='submit'>Добавить</Button>
            </form>
  )
}

export default Form