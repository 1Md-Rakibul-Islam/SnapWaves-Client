import { configureStore } from "@reduxjs/toolkit";
import  getCurrentUserReducer from "./users/userSlice";
import  getMyPostsReducer from "./posts/myPostsSlice";
import  getUsersReducer from "./users/usersSlice";
import  getIdUserReducer  from "./users/userIdSlice";

export const store = configureStore({
    reducer: {
        currentUser: getCurrentUserReducer,
        getMyPosts: getMyPostsReducer,
        getUsers: getUsersReducer,
        getIdUser: getIdUserReducer
    }
})