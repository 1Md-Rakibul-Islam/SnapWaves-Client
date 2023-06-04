import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTimelinePosts } from "../../api/PostsRequests";


export const getPosts = createAsyncThunk("getPosts", async () => {
    const { data } = await fetchTimelinePosts();
    console.log("Posts", data);
    return data?.result;
})


const getPostsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
            state.loading = true;
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
          })
          .addCase(getPosts.rejected, (state) => {
            state.loading = false;
          });
    }
})

export default getPostsSlice.reducer;
