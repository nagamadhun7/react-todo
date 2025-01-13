# React Todo App

This is a simple React-based Todo application built using **React Context** and **useReducer**. I created this app to demonstrate my ability to manage global state effectively in React using these hooks, which are powerful tools for state management in complex applications.

## Features

- **Global State Management:** The app uses React's `useContext` and `useReducer` hooks to manage the todo list's state across the application.
- **Todo Filtering:** Filter tasks by their status (All, Pending, Completed).
- **Simple UI:** A clean and intuitive interface to add and manage tasks.

> Note: The app is not yet fully responsive, but I plan to enhance its layout for mobile devices soon.

## How I Built This App

1. **useContext**: I used the `useContext` hook to provide global state access across multiple components without having to pass props down manually.
2. **useReducer**: The `useReducer` hook helps manage state in a more predictable way, especially when the state logic becomes more complex (e.g., adding/removing todos and updating their status).
3. **CSS Styling**: The app’s UI is styled using standard CSS for now. I plan to implement a more responsive design using CSS frameworks like Tailwind in the future.

## Running the Project Locally

1. Clone the repo: 
    ```bash
    git clone https://github.com/nagamadhun7/react-todo
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the app locally:
    ```bash
    npm start
    ```

## Future Improvements

- **Responsiveness:** Currently, the app is not fully responsive, and I plan to improve it for mobile devices soon.
- **Enhanced UI:** I'll be focusing on improving the UI with a responsive design.
