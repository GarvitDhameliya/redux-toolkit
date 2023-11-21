import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/reducer/reducer";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
