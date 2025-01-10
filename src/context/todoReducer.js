const initialState = {
    todos: []
}

let idCounter = 1

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTodo':
            return {...state, todos: [...state.todos, {
                id: idCounter++,
                text: action.payload,
                isDone: false,
            }]};
            break;
        case 'deleteTodo':
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
            break;
        case 'toggleTodo':
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)}
    
        default:
            break;
    }
}

export {initialState, reducer}