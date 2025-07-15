import { createSlice } from "@reduxjs/toolkit";
import { register, login, checkAuth } from "./userThunks"

const initialState = {
  currentUser: {},
  isAuth: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.currentUser = {};
      state.isAuth = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.currentUser = {};
        state.error = action.payload;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

//export actions
export const { logout } = userSlice.actions;
//export reducer
export default userSlice.reducer;