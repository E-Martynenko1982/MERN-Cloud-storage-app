import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  }
});

//export actions
export const { } = userSlice.actions;
//export reducer
export default userSlice.reducer;