import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";

export default function Navbar() {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  return (
    <div className="navbar">
      <h1>My Redux Todo App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos:{todos.length}</li>
      </ul>
    </div>
  );
}
// const mapStateToProp = (state) => ({
//   todos: state.todoReducer.todos,
// });
Navbar.propTypes = {
  todos: PropTypes.array,
};

// export default connect(mapStateToProp, {})(Navbar);
