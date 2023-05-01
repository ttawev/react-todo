import React, { useState } from 'react'
import Button from '../Button/Button'
import './Todo.css'
import completeImg from '../../img/complete.png'
import noComplete from '../../img/no-compl.png'
import editImg from '../../img/edit.png'
import deleteImg from '../../img/deleteImg.png'

const Todo = ({todo, setTodoList}) => {
    const handleCheck = () => {
        setTodoList((prev) => {
            return prev.map(el => {
                return el.id === todo.id ? {...el, isActive: !el.isActive} : el
            })
        })
    }
    const handleEdit = () => {
        setTodoList((prev) => {
            return prev.map(el => {
                return el.id === todo.id ? {...el, isEditing: !el.isEditing} : {...el, isEditing: false}
            })
        })
    }
    const handleDelete = () => {
        setTodoList((prev) => {
            return prev.filter(el => {
                return todo.id !== el.id
            })
        })
    }


    const handleChange = (e) => {
        setTodoList((prev) => {
            return prev.map(el => {
                return todo.id === el.id ? {...el, todoText: e.target.value} : el
            })
        })
    }

    const handleSetting = () => {
        setTodoList((prev) => {
            return prev.map(el => {
                return todo.id === el.id ? {...el, isSetting: !el.isSetting} : {...el, isSetting: false}
            })
        })
    }

    


  return (
    <li className='todo'>

        <div className="time">{todo.time}</div>
                            
        <div className='flex'>
            <input type="text" value={todo.todoText} onChange={handleChange} readOnly={todo.isEditing ? false : true} className={`todo-text ${todo.isActive ? '': 'done'} ${todo.isEditing ? 'editingInput' : ''}`}/>
            
            <div className='btns' >
                <span className='span' onClick={handleSetting}>
                    <span className={`span-line ${todo.isSetting ? 'active' : ''}`}></span>
                    <span className={`span-line ${todo.isSetting ? 'active' : ''}`}></span>
                    <span className={`span-line ${todo.isSetting ? 'active' : ''}`}></span>
                </span>
                <Button onClick={handleCheck} className={`${todo.isSetting ? 'setting' : 'nosetting'}`}><img src={todo.isActive ? completeImg : noComplete} alt="Complete"/></Button>
                <Button onClick={handleEdit} className={`${todo.isSetting ? 'setting' : 'nosetting'}`}>{todo.isEditing? <img src={completeImg}/> : <img src={editImg} />}</Button>
                <Button onClick={handleDelete} className={`${todo.isSetting ? 'setting' : 'nosetting'}`}><img src={deleteImg} alt="delete" /></Button>
            </div>
        </div>
    </li>
  )
}

export default Todo