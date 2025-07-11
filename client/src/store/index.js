import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../components/user/userSlice";
import fileReducer from "../components/file/fileSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer
  },
});