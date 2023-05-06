import { configureStore } from "@reduxjs/toolkit";
import  getCurrentUserReducer from "./users/userSlice";

export const store = configureStore({
    reducer: {
        currentUser: getCurrentUserReducer
    }
})