import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
