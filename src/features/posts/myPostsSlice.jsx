import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsByUser } from "../../api/PostsRequests";

// Define an async action to fetch the current user
export const getMyPosts = createAsyncThunk("getMyPosts", async (id) => {
  // console.log("userId", id);
  const { data } = await fetchPostsByUser(id);
  // console.log(data);
  return data;
});

// Define a slice of the store for the current user
const getMyPostsSlice = createSlice({
  name: "getMyPosts",
  initialState: {
    getMyPosts: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getMyPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default getMyPostsSlice.reducer;
