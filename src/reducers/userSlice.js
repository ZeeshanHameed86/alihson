import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/updateUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUsers: (state, action) => {
      state.filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterUsers: (state, action) => {
      const { key, value } = action.payload;
      if (value === "") {
        state.filteredUsers = state.users;
      } else {
        state.filteredUsers = state.users.filter((user) =>
          user[key].toLowerCase().includes(value.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        state.users[index] = action.payload;
        state.filteredUsers = state.users;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.filteredUsers = state.users;
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { searchUsers, filterUsers } = usersSlice.actions;

export default usersSlice.reducer;
