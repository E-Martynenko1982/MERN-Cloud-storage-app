import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, checkAuthRequest } from "./userApi";

export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const data = await registerUser(userData);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const user = await loginUser(userData);
      return user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, thunkAPI) => {
    try {
      const user = await checkAuthRequest();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Auth check failed");
    }
  }
);