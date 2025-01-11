import React from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoList = () => {
  const {state} = useTodoContext()
  return (
    <div>{state.todos.map(todo => (
      <li key={todo.id}>{todo.text.text}</li>
    ))}</div>
  )
}

export default TodoList

