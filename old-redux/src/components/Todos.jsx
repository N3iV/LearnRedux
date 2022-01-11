import React from "react";
import TodoFrom from "./TodoFrom";
import {
  markComplete,
  deleteTodo,
  getTodos,
} from "../store/actions/todoActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
function Todos({ todos, markComplete, deleteTodo, getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todo-list">
      <TodoFrom />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input type="checkbox" onChange={() => markComplete(todo.id)} />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProp = (state) => ({
  todos: state.todoReducer.todos,
});
Todos.propTypes = {
  todos: PropTypes.array,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, { markComplete, deleteTodo, getTodos })(
  Todos
);
