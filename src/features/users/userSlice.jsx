import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuthUser } from "../../api/UsersRequests";


// Define an async action to fetch the current user
export const getCurrentUser = createAsyncThunk('getCurrentUser', async (email) => {
  const { data } = await fetchAuthUser(email);
  // console.log(data?.result);
  return data?.result;
});

// Define a slice of the store for the current user
const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    currentUser: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
