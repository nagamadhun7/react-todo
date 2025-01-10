import React, { createContext, useContext, useReducer } from 'react'


import { initialState, reducer } from './todoReducer';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value = {{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}


export const useTodoContext = () => {
  return useContext(TodoContext)
}
