import React, { useState } from 'react'
import "../styles/todoListItem.css";
import { useTodoContext } from '../context/TodoContext';


const TodoListItem = ({todo}) => {

  const {dispatch} = useTodoContext()

  const [isDeleting, setIsDeleting] = useState(false);

  const toggleTodo = () => {
    dispatch({type:'toggleTodo', payload: todo.id})
  }

  const deleteTodo = () => {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch({type: 'deleteTodo', payload: todo.id})
    }, 500);
  }
  return (
    <div className={`todo-container ${todo.isDone? 'todo-completed' : ''} ${isDeleting ? "deleting" : ""}`}>
      <button className='toggle-toDo' onClick={toggleTodo}>{todo.isDone ? '✅' : '✔️'}</button>
      <p>{todo.text.text}</p>
      <button className='deleteTodo' onClick={deleteTodo}>❌</button>
    </div>
  )
}

export default TodoListItem