const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      console.log("GET todo");
      return {
        ...state,
        todos: action.payload,
      };
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case "ADD_TODO":
      console.log("Add todo");
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      console.log("DELETE");
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      break;

    default:
      return state;
      break;
  }
};
export default todoReducer;
