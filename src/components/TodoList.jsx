import React from 'react'
import { useTodoContext } from '../context/TodoContext'
import "../styles/todoList.css";
import TodoListItem from './TodoListItem'


const TodoList = () => {
  const {state} = useTodoContext()

  const filterStatus = (status) => {
    switch (status) {
      case 'all':
         console.log(state.todos)
        break;
      case 'pending':
        console.log(state.todos.filter(todo => todo.isDone === false))
      case 'completed':
        console.log(state.todos.filter(todo => todo.isDone === true))
      default:
        break;
    }
  }
  return (
    <>
     <div className="status-buttons">
        <button onClick={() => filterStatus('all')}>All</button>
        <button onClick={() => filterStatus('pending')}>Pending!</button>
        <button onClick={() => filterStatus('completed')}>Completed</button>
      </div>
      <div>{state.todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}</div>
    </>
   
  )
}

export default TodoList

