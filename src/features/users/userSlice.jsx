import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define an async action to fetch the current user
export const getCurrentUser = createAsyncThunk('getCurrentUser', async (email) => {
    // console.log('emailD', email);
  const response = await fetch(`http://localhost:5000/users?email=${email}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
    },
  });
  const data = await response.json();
  // console.log(data);
  return data.result;
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
