import React, { useState } from "react";
import TodoList from "./TodoList";

import "../styles/todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");

  return (
    <>
      <div className="container">
        <h2>Todo</h2>
      </div>
      <div className="input-container">
      <div class="input-textContainer">
        <input type="text" class="text-input" placeholder='Wanna do something?' value={todo} onChange={e => setTodo(e.target.value)} />
        <div class="input-line"></div>
      </div>
      <button className="addButton">Add</button>
      </div>
     

      <div className="status-buttons">
        <button>All</button>
        <button>Pending!</button>
        <button>Completed</button>
      </div>
      <TodoList />
    </>
  );
};

export default Todo;
