import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodos, markTodo } from "../store/reducers/todoSlice";
import TodoForm from "./TodoForm";
const Todos = () => {
  const todos = useSelector((state) => state.todosReducer.allTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Hi");
    dispatch(getTodos());
  }, [dispatch]);
  const toggleTodoCompleted = (id) => {
    console.log("mark");
    dispatch(markTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompleted(todo.id)}
            />
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
