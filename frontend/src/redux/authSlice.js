import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api";

// Async Thunks
export const registerUser = createAsyncThunk("auth/register", async (formData, thunkAPI) => {
  try {
    const res = await axios.post("/auth/register", formData);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const loginUser = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
  try {
    const res = await axios.post("/auth/login", formData, {
      withCredentials: true,
    });
    localStorage.setItem("token", res.data.token); // Optional for now
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || { message: "Login failed" });
  }
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
