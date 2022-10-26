import React from 'react';
import { useState } from 'react'
import './TaskList.css'
import { LIST_TYPES, LIST_COPY } from '../constData/constData.js'
import FormToDoTask from '../FormTodoTask/FormTodoTask';
import FormSelectTask from '../FormSelectTask/FormSelectTask';
import { Link } from 'react-router-dom';


function TaskList(props) {
  const { type, todo, setToDo, title, addToDo, moveToDo, prevTaskList} = props
  const [formOpen, setFormOpen] = useState(false)
  const disabled = prevTaskList.length === 0 ? true : false
  const initialValue = {
    title: "",
    description: ""
  }
  const [value, setValue] = useState(initialValue)

  const handleAddNewClick = () => {
    setFormOpen(!formOpen)
  }

  const formSubmit = (title) => {
    addToDo(title)
    setFormOpen(false)
    setValue(initialValue)
  }
  const selectChange = (id, type) => {
    moveToDo(id, type)
    setFormOpen(false)
  }
  return (
    <div className='taskList'>
        <h2 className='taskList-title'>{title}</h2>
        <nav className='taskTable'>
            {todo.map(task => (
                <Link to={`/tasks/${task.id}`} key={task.id} className='tasktable-link'><li className ="taskTable-li" key={task.id}>
                    {task.title}</li></Link>
            ))
            }
        </nav>
        {type === LIST_TYPES.BACKLOG && formOpen && (
            <FormToDoTask 
                formSubmit={formSubmit} 
                setFormOpen={setFormOpen}
                value={value}
                setValue={setValue}/>
        )}
        {type !== LIST_TYPES.BACKLOG && formOpen && (
            <FormSelectTask 
                prevTaskList={prevTaskList}
                setFormOpen={setFormOpen}
                value={value}
                setValue={setValue}
                setToDo={setToDo}
                type={type}
                todo={todo}
                selectChange={selectChange}
            />
        )}
        {type === LIST_TYPES.BACKLOG && <button 
           className={`taskList-addbtn ${formOpen? "inactive" : "active"}`} 
           onClick={handleAddNewClick}>
           <span className="span">+ Add card</span></button>
        }
        {type !== LIST_TYPES.BACKLOG && <button 
            className={`taskList-addbtn ${formOpen? "inactive" : "active"}`} 
            disabled = {disabled}
            onClick={handleAddNewClick}>
            <span className="span">+ Add card</span></button>
        }
    </div>
  )
}

export default TaskList;