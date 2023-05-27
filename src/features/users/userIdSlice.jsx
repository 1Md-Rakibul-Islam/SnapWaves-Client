import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../api/UsersRequests";

export const getIdUser = createAsyncThunk("getIdUser", async () => {
    const { data } = await fetchUser();
    console.log(data);
    return data;
})


const getIdUserSlice = createSlice({
    name: "getIdUser",
    initialState: {
        getIdUser: {},
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getIdUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(getIdUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userId = action.payload;
          })
          .addCase(getIdUser.rejected, (state) => {
            state.loading = false;
          });
    }
})

export default getIdUserSlice.reducer;
