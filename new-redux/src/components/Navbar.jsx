import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const todos = useSelector((state) => state.todosReducer.allTodos);
  return (
    <div className="navbar">
      <h1>Todo app with REDUX</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {todos.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
