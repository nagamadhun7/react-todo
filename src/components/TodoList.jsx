import React from 'react'
import { useTodoContext } from '../context/TodoContext'
import "../styles/todoList.css";


const TodoList = () => {
  const {state} = useTodoContext()
  return (
    <>
     <div className="status-buttons">
        <button>All</button>
        <button>Pending!</button>
        <button>Completed</button>
      </div>
      <div>{state.todos.map(todo => (
      <li key={todo.id}>{todo.text.text}</li>
    ))}</div>
    </>
   
  )
}

export default TodoList

