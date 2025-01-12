import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine, RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, updateTodo}){

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id){
        return<TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? "todo-row complete": "todo-row"} 
            key={index}
        >
            {todo.isComplete ? (
                <RiCheckboxLine class="checkbox-icon" key={todo.id} onClick={() => completeTodo(todo.id)}/>
            ) : (
                <RiCheckboxBlankLine class="checkbox-icon" key={todo.id} onClick={() => completeTodo(todo.id)}/>
            )}
            
            <div className="todo-text">
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className="edit-icon"
                />
            </div>

        </div>
    ))
}

export default Todo;