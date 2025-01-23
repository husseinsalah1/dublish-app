import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../slices/course.slice";
import authReducer from "../slices/auth.slice";
const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
  },
  devTools: true,
});

export default store;
