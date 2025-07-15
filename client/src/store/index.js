import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user/userSlice";
import fileReducer from "./file/fileSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer
  },
});