import React from 'react'
import { useTodoContext } from '../context/TodoContext'
import "../styles/todoList.css";
import TodoListItem from './TodoListItem'


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
      <TodoListItem key={todo.id} todo={todo} />
    ))}</div>
    </>
   
  )
}

export default TodoList

