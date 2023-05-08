import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/UsersRequests";

export const getUsers = createAsyncThunk("getUsers", async () => {
    const { data } = await fetchUsers();
    // console.log(data);
    return data;
})


const getUsersSlice = createSlice({
    name: "getUsers",
    initialState: {
        getUsers: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.loading = true;
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getUsers.rejected, (state) => {
            state.loading = false;
          });
    }
})

export default getUsersSlice.reducer;
