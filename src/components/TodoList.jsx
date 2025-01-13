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
        <button className={status === 'all' ? 'active' : ''} onClick={() => setStatus('all')}>All</button>
        <button className={status === 'pending' ? 'active' : ''}  onClick={() => setStatus('pending')}>Pending!</button>
        <button className={status === 'completed' ? 'active' : ''}  onClick={() => setStatus('completed')}>Completed</button>
      </div>
      <div>
        {filteredTodos.length ? (filteredTodos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))) : <p className='empty'>Empty!</p>}
    </div>
    </>
   
  )
}

export default TodoList

