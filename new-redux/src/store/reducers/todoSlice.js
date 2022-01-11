import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

//Call API with ActionCreator
//Redux thunk
export const getTodos = createAsyncThunk("todos/todoFetch", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return res.data;
});
export const addTodo = createAsyncThunk("todo/todoAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };
  await axios.post(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    newTodo
  );
  return newTodo;
});
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});
// du lieu truyen vao  truoc dau '/' cua createAsyncThunk phai giong vs name cua createSlice
//////////////////////////////////
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.allTodos.unshift({
    //     id: nanoid(),
    //     title: action.payload,
    //     completed: false,
    //   });
    // },
    markTodo: (state, action) => {
      const todoId = action.payload;
      console.log(todoId);
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    // deleteTodo: (state, action) => {
    //   state.allTodos = state.allTodos.filter(
    //     (todo) => todo.id !== action.payload
    //   );
    // },
    /* Vi goi API la bat dong bo. Neu lam nhu vay se khong duoc
    ===============
    getTodos: async (state, action) => {
      try {
        console.log("Get todo ");
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        state.allTodos = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    =================
    Do do t can tao 1 ActionCreator
     */

    //- todosFetch: (state, action) => {
    //   state.allTodos = action.payload;
    // },
  },

  // Ham de goi ham getTodes dung createAsyncThunk
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      console.log("Pending...");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Fail!!!");
    },
    //Add todo with API

    [addTodo.pending]: (state, action) => {
      console.log("Pending...");
    },
    [addTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = [action.payload, ...state.allTodos];
    },
    [addTodo.rejected]: (state, action) => {
      console.log("Fail!!!");
    },

    //Delte
    [deleteTodo.pending]: (state, action) => {
      console.log("Pending...");
    },
    [deleteTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    [deleteTodo.rejected]: (state, action) => {
      console.log("Fail!!!");
    },
  },
});

/////////////////////////
// export const getTodos = () => {
//   const getTodoAsync = async (dispatch) => {
//     try {
//       console.log("Get todo ");
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos?_limit=5"
//       );
//       dispatch(todosFetch(res.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return getTodoAsync;
// };
//////////////////////

//export Action
export const { markTodo, todosFetch } = todoSlice.actions;
//Reducer
const todosReducer = todoSlice.reducer;
export default todosReducer;
