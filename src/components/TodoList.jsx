import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'
import "../styles/todoList.css";
import TodoListItem from './TodoListItem'


const TodoList = () => {
  const {state} = useTodoContext()

  const [status, setStatus] = useState('all')

  const filteredTodos = state.todos.filter(todo => {
    if (status === 'pending') return !todo.isDone; 
    if (status === 'completed') return todo.isDone; 
    return true;
  })

  return (
    <>
     <div className="status-buttons">
        <button onClick={() => setStatus('all')}>All</button>
        <button onClick={() => setStatus('pending')}>Pending!</button>
        <button onClick={() => setStatus('completed')}>Completed</button>
      </div>
      <div>{filteredTodos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}</div>
    </>
   
  )
}

export default TodoList

