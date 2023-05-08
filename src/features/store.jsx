import { configureStore } from "@reduxjs/toolkit";
import  getCurrentUserReducer from "./users/userSlice";
import  getMyPostsReducer from "./posts/myPostsSlice";
import  getUsersReducer from "./users/usersSlice";

export const store = configureStore({
    reducer: {
        currentUser: getCurrentUserReducer,
        getMyPosts: getMyPostsReducer,
        getUsers: getUsersReducer
    }
})