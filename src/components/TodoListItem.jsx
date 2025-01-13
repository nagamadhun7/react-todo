import React from 'react'
import "../styles/todoListItem.css";
import { useTodoContext } from '../context/TodoContext';


const TodoListItem = ({todo}) => {

  const {dispatch} = useTodoContext()

  const toggleTodo = () => {
    dispatch({type:'toggleTodo', payload: todo.id})
  }
  return (
    <div className={`todo-container ${todo.isDone? 'todo-completed' : ''}`}>
      <button className='toggle-toDo' onClick={toggleTodo}>{todo.isDone ? '✅' : '✔️'}</button>
      <p>{todo.text.text}</p>
      <button className='deleteTodo'>❌</button>
    </div>
  )
}

export default TodoListItem