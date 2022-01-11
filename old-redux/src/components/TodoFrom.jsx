import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { addTodo } from "../store/actions/todoActions";

function TodoFrom({ addTodo }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle(" ");
    }
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
const mapStateToProp = () => ({});
TodoFrom.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, { addTodo })(TodoFrom);
