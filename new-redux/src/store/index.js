import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";
//Store

const store = configureStore({
  //Nhap property la Reducer
  reducer: {
    todosReducer,
  },
});
//Export
export default store;
