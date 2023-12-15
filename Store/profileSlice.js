import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get github user repositories
export const getRepos = createAsyncThunk(
  "repositories",
  async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const response = await axios.get(
        `https://api.github.com/users/${data}/repos`
      );
      if (response.status === 200) {
        return [...response.data];
      } else {
        return rejectWithValue("This user has no repository");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// slice user
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    profileUser: {},
    error: null,
    repos: [],
  },
  extraReducers: {
    // repos
    [getRepos.pending]: (state, action) => {
      state.loading = true;
    },
    [getRepos.fulfilled]: (state, action) => {
      state.loading = false;
      state.repos = action.payload;
      state.profileUser = action.payload[0]?.owner;
    },
    [getRepos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
