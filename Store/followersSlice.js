import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get github user listFollowing
export const getFollowers = createAsyncThunk(
  "listFollowers",
  async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const response = await axios.get(
        `https://api.github.com/users/elgallouchi/followers`
      );
      console.log(response);
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
    error: null,
    followers: [],
  },
  extraReducers: {
    // following
    [getFollowers.pending]: (state, action) => {
      state.loading = true;
    },
    [getFollowers.fulfilled]: (state, action) => {
      state.loading = false;
      state.followers = action.payload;
    },
    [getFollowers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
