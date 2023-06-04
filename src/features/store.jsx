import { configureStore } from "@reduxjs/toolkit";
import  getCurrentUserReducer from "./users/userSlice";
import  getMyPostsReducer from "./posts/myPostsSlice";
import  getUsersReducer from "./users/usersSlice";
import  getIdUserReducer  from "./users/userIdSlice";
import  getPostsReducer from "./posts/postSlice";

export const store = configureStore({
    reducer: {
        currentUser: getCurrentUserReducer,
        getMyPosts: getMyPostsReducer,
        getUsers: getUsersReducer,
        userById: getIdUserReducer,
        posts: getPostsReducer
    }
})