import React from 'react'
import "../styles/todoListItem.css";


const TodoListItem = ({todo}) => {
  return (
    <div className='todo-container'>
      <button className='toggle-toDo'>✔️</button>
      <p>{todo.text.text}</p>
      <button className='deleteTodo'>❌</button>
    </div>
  )
}

export default TodoListItem