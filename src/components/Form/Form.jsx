import React from 'react'
import Button from '../Button/Button'
import '../Form/Form.css'

const Form = ({todoText, setTodoText, todoList, setTodoList}) => {
    const submitHandler = (e) => {
        e.preventDefault()

        setTodoList(todoList && todoList.length !== 0 ? [...todoList, {
            id: todoList.at(-1).id + 1,
            time: generateTime(),
            todoText: todoText,
            isActive: true,
            isEditing: false,
            isSetting: false
        }] : [{
            id: 0,
            time: generateTime(),
            todoText: todoText,
            isActive: true,
            isEditing: false,
            isSetting: false
        }])
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
                <input className='input' type="text" placeholder='Введите задачу' required value={todoText} onChange={inputHandler}/>
                <Button type='submit'>Добавить</Button>
            </form>
  )
}

export default Form