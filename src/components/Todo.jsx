import React, { useState } from "react";
import TodoList from "./TodoList";

import "../styles/todo.css";
import { useTodoContext } from "../context/TodoContext";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const {state, dispatch} = useTodoContext()

  const handleAddTodo = () => {
    if (!todo.trim()) {
      alert("Please enter a valid todo!");
      return;
    }
    const newTodo = {
      text: todo,
    }

    dispatch({type:'addTodo', payload: newTodo})
    setTodo('')
  }

  return (
    <>
      <div className="container">
        <h2>Todo</h2>
      </div>
      <div className="input-container">
      <div className="input-textContainer">
        <input type="text" className="text-input" placeholder='Wanna do something?' value={todo} onChange={e => setTodo(e.target.value)} />
        <div className="input-line"></div>
      </div>
      <button className="addButton" onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList />
    </>
  );
};

export default Todo;
