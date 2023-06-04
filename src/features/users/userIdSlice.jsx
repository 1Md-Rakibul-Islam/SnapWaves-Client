import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../api/UsersRequests";

export const getIdUser = createAsyncThunk("getIdUser", async (id) => {
  const { data } = await fetchUser(id);
  // console.log(data?.result);
  return data?.result;
});

const getIdUserSlice = createSlice({
  name: "userById",
  initialState: {
    userById: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIdUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getIdUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default getIdUserSlice.reducer;
