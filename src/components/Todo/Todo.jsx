import React from 'react'
import Button from '../Button/Button'
import './Todo.css'
import completeImg from '../../img/complete.png'
import noComplete from '../../img/no-compl.png'
import editImg from '../../img/edit.png'
import deleteImg from '../../img/deleteImg.png'
import { db } from '../../firebase'
import { updateDoc, doc, deleteDoc } from 'firebase/firestore'

const Todo = React.memo(({todo, setTodoList}) => {
    const handleCheck = async () => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            isActive: !todo.isActive
        })
    }
    const handleEdit = async () => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            isEditing: !todo.isEditing
        })
    }
    const handleDelete = async () => {
        await deleteDoc(doc(db, 'todos', todo.id));
    }


    const handleChange = async (e) => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            todoText: e.target.value
        })
    }

    const handleSetting = (e) => {
        console.log(e.target);
        setTodoList((prev) => {
            return prev.map(el => {
                return todo.id === el.id ? {...el, settingActive: !el.settingActive} : {...el, settingActive: false}
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
                    <span className={`span-line ${todo.settingActive ? 'active' : ''}`}></span>
                    <span className={`span-line ${todo.settingActive ? 'active' : ''}`}></span>
                    <span className={`span-line ${todo.settingActive ? 'active' : ''}`}></span>
                </span>
                <Button onClick={handleCheck} className={`${todo.settingActive ? 'setting' : 'nosetting'}`}><img src={todo.isActive ? completeImg : noComplete} alt="Complete"/></Button>
                <Button onClick={handleEdit} className={`${todo.settingActive ? 'setting' : 'nosetting'}`}>{todo.isEditing? <img src={completeImg} alt='complete'/> : <img src={editImg} alt='editing'/>}</Button>
                <Button onClick={handleDelete} className={`${todo.settingActive ? 'setting' : 'nosetting'}`}><img src={deleteImg} alt="delete" /></Button>
            </div>
        </div>
    </li>
  )
})

export default Todo